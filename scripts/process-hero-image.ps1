Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\win10\.gemini\antigravity\brain\c96f3d08-6272-48ac-8f5a-1c6985ea289c\hero_globe_compact_headroom_1794380029463.jpg"
$destPng = "c:\Users\win10\Desktop\Manu\CORALSWIFT\public\images\hero-globe-pure-white.png"
$destJpg = "c:\Users\win10\Desktop\Manu\CORALSWIFT\public\images\hero-globe-refined.jpg"
$destJpg2 = "c:\Users\win10\Desktop\Manu\CORALSWIFT\public\images\hero-globe-elevated.jpg"

$src = [System.Drawing.Bitmap]::FromFile($srcPath)
$w = $src.Width
$h = $src.Height
$shiftY = -135

$dest = New-Object System.Drawing.Bitmap($w, $h, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($dest)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.Clear([System.Drawing.Color]::White)
$g.DrawImage($src, 0, $shiftY, $w, $h)
$g.Dispose()
$src.Dispose()

# LockBits and do ALL feathering and white-point leveling directly on pixels
$rect = New-Object System.Drawing.Rectangle(0, 0, $w, $h)
$data = $dest.LockBits($rect, [System.Drawing.Imaging.ImageLockMode]::ReadWrite, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$stride = $data.Stride
$bytes = New-Object byte[] ($stride * $h)
[System.Runtime.InteropServices.Marshal]::Copy($data.Scan0, $bytes, 0, $bytes.Length)

$whiteThreshold = 236
$lut = New-Object byte[] 256
for ($i = 0; $i -lt 256; $i++) {
    if ($i -ge $whiteThreshold) {
        $lut[$i] = 255
    } else {
        $v = [int][Math]::Round($i * 255.0 / $whiteThreshold)
        if ($v -gt 255) { $v = 255 }
        $lut[$i] = [byte]$v
    }
}

# Bottom fade range: smoothly from 510 to 630
$fadeStart = 510
$fadeEnd = $h + $shiftY # 633
$fadeSpan = [double]($fadeEnd - $fadeStart)

for ($y = 0; $y -lt $h; $y++) {
    $rowOffset = $y * $stride
    $bottomFade = 0.0
    if ($y -ge $fadeStart) {
        if ($y -ge $fadeEnd) {
            $bottomFade = 1.0
        } else {
            $t = ($y - $fadeStart) / $fadeSpan
            $bottomFade = $t * $t * (3.0 - 2.0 * $t)
        }
    }

    for ($x = 0; $x -lt $w; $x++) {
        $px = $rowOffset + ($x * 4)

        if ($bottomFade -ge 1.0) {
            $bytes[$px] = 255
            $bytes[$px + 1] = 255
            $bytes[$px + 2] = 255
            $bytes[$px + 3] = 255
            continue
        }

        $b = $lut[$bytes[$px]]
        $gCol = $lut[$bytes[$px + 1]]
        $r = $lut[$bytes[$px + 2]]

        # If in bottom fade zone, blend smoothly towards pure white
        if ($bottomFade -gt 0.0) {
            $r = [int]($r + (255 - $r) * $bottomFade)
            $gCol = [int]($gCol + (255 - $gCol) * $bottomFade)
            $b = [int]($b + (255 - $b) * $bottomFade)
        }

        # Smooth button clearance on left (x < 500, y < 420)
        if ($x -lt 500 -and $y -lt 420) {
            $tx = [Math]::Max(0.0, [Math]::Min(1.0, ($x - 380) / 120.0))
            $ty = [Math]::Max(0.0, [Math]::Min(1.0, ($y - 350) / 70.0))
            $sx = $tx * $tx * (3.0 - 2.0 * $tx)
            $sy = $ty * $ty * (3.0 - 2.0 * $ty)
            $keepWeight = $sx * $sy
            $fadeToWhite = 1.0 - $keepWeight

            $r = [int]($r + (255 - $r) * $fadeToWhite)
            $gCol = [int]($gCol + (255 - $gCol) * $fadeToWhite)
            $b = [int]($b + (255 - $b) * $fadeToWhite)
        }

        $bytes[$px] = [byte]$b
        $bytes[$px + 1] = [byte]$gCol
        $bytes[$px + 2] = [byte]$r
        $bytes[$px + 3] = 255
    }
}

[System.Runtime.InteropServices.Marshal]::Copy($bytes, 0, $data.Scan0, $bytes.Length)
$dest.UnlockBits($data)

$dest.Save($destPng, [System.Drawing.Imaging.ImageFormat]::Png)

$codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]98)
$dest.Save($destJpg, $codec, $encoderParams)
$dest.Save($destJpg2, $codec, $encoderParams)

$dest.Dispose()
Write-Output "Done!"
