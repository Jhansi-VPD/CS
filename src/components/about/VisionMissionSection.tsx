"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, Compass } from "lucide-react";
import { ScrollReveal } from "../common/ScrollReveal";

interface CardItem {
  id: string;
  category: string;
  title: React.ReactNode;
  src: string;
  alt?: string;
  href?: string;
}

const cards: CardItem[] = [
  {
    id: "1",
    category: "Our Vision",
    title: (
      <>
        A trusted global ecosystem,
        <br /> built for scalable delivery.
      </>
    ),
    src: "https://cdn.21st.dev/assets/localized/0ac23730453fa82560c6dc05f844229755b3a58250902ada80291abc44fabed4.webp",
    alt: "Coral Swift global vision and delivery network",
    href: "/about",
  },
  {
    id: "2",
    category: "Our Mission",
    title: (
      <>
        Disciplined project execution
        <br /> across IT and Non-IT domains.
      </>
    ),
    src: "https://cdn.21st.dev/assets/localized/fc2ea5740d2d320ddaf5f8a31715ba6e8b9ac6952d623a2236d382bdc54d9510.webp",
    alt: "Coral Swift structured mission and operations",
    href: "/how-it-works",
  },
  {
    id: "3",
    category: "Technology",
    title: <>Powerful enterprise solutions, beautifully engineered.</>,
    src: "https://cdn.21st.dev/assets/localized/1d7b11d323cee946156033115e6a6b8e19653128a20c950add3bd0be32256df4.webp",
    alt: "Scalable technology architecture",
    href: "/services/it-solutions",
  },
  {
    id: "4",
    category: "Delivery Governance",
    title: (
      <>
        Structured coordination,
        <br /> outcome-based results.
      </>
    ),
    src: "https://cdn.21st.dev/assets/localized/d537dca16bfaedaa5a6c72f762c0a7a2b6430cf43e972cb80e84cab0688aa27d.webp",
    alt: "Operational governance and project milestone delivery",
    href: "/how-it-works",
  },
  {
    id: "5",
    category: "Partner Screening",
    title: <>Rigorous assessment of track record and workforce strength.</>,
    src: "https://cdn.21st.dev/assets/localized/0ac23730453fa82560c6dc05f844229755b3a58250902ada80291abc44fabed4.webp",
    alt: "Partner verification and vetting",
    href: "/partnerships",
  },
  {
    id: "6",
    category: "Quality",
    title: <>Attention to detail, from qualification to delivery.</>,
    src: "https://cdn.21st.dev/assets/localized/fc2ea5740d2d320ddaf5f8a31715ba6e8b9ac6952d623a2236d382bdc54d9510.webp",
    alt: "Quality assurance and operational excellence",
    href: "/services",
  },
  {
    id: "7",
    category: "Design Excellence",
    title: <>Elegant experiences, thoughtfully created.</>,
    src: "https://cdn.21st.dev/assets/localized/1d7b11d323cee946156033115e6a6b8e19653128a20c950add3bd0be32256df4.webp",
    alt: "Design excellence in software and workflows",
    href: "/services",
  },
  {
    id: "8",
    category: "Scalable Growth",
    title: (
      <>
        Built to scale,
        <br /> ready to lead.
      </>
    ),
    src: "https://cdn.21st.dev/assets/localized/d537dca16bfaedaa5a6c72f762c0a7a2b6430cf43e972cb80e84cab0688aa27d.webp",
    alt: "Global scalability and delivery leadership",
    href: "/project-opportunities",
  },
];

// Duplicate cards for seamless continuous infinite loop
const loopedPanels = [...cards, ...cards];

export const VisionMissionSection: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = React.useState(false);
  const isInteractingRef = React.useRef(false);
  const startXRef = React.useRef(0);
  const scrollLeftRef = React.useRef(0);

  // Auto-scroll loop using requestAnimationFrame
  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let animationFrameId: number;
    const speed = 0.85; // smooth, steady horizontal scroll speed

    const step = () => {
      if (!isPaused && !isInteractingRef.current && el) {
        el.scrollLeft += speed;
        // Seamless wrap when reaching half the duplicated width
        const halfWidth = el.scrollWidth / 2;
        if (el.scrollLeft >= halfWidth) {
          el.scrollLeft -= halfWidth;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  // Drag-to-scroll handlers (mouse and touch)
  const handleMouseDown = (e: React.MouseEvent) => {
    const el = containerRef.current;
    if (!el) return;
    isInteractingRef.current = true;
    startXRef.current = e.pageX - el.offsetLeft;
    scrollLeftRef.current = el.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isInteractingRef.current) return;
    const el = containerRef.current;
    if (!el) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    el.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    isInteractingRef.current = false;
  };

  return (
    <section className="relative overflow-hidden bg-white border-b border-slate-200/80 pt-12 sm:pt-16 lg:pt-20 pb-0">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        <ScrollReveal direction="up">
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-coral-bright" aria-hidden="true" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-coral-bright flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5" />
              Our Purpose
            </span>
          </div>
          <div className="mt-4 max-w-3xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-navy-midnight">
              Vision &amp; Mission
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
              The foundational commitments, standards, and operational principles guiding Coral Swift&apos;s international business and delivery partnerships.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Full-Bleed Attached Panoramic Banner (Zero Curved Corners, Fixed Edge-to-Edge) */}
      <div
        className="w-full relative overflow-hidden bg-navy-midnight border-t border-slate-200/80"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => {
          setIsPaused(false);
          handleMouseUpOrLeave();
        }}
      >
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          className="flex items-stretch overflow-x-auto scrollbar-none select-none cursor-grab active:cursor-grabbing w-full"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {loopedPanels.map((panel, idx) => (
            <Link
              key={`${panel.id}-${idx}`}
              href={panel.href || "/about"}
              className="group relative block w-[300px] sm:w-[360px] lg:w-[420px] h-[480px] sm:h-[540px] lg:h-[600px] shrink-0 border-r border-white/15 last:border-r-0 overflow-hidden flex flex-col justify-between p-7 sm:p-9 lg:p-10 cursor-pointer select-none bg-navy-midnight"
            >
              {/* Full-Bleed Background Image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={panel.src}
                alt={
                  panel.alt ||
                  (typeof panel.title === "string"
                    ? panel.title
                    : panel.category)
                }
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* High contrast gradient overlay */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-navy-midnight/95 via-navy-midnight/55 to-navy-midnight/40 transition-opacity duration-300 group-hover:opacity-85"
              />

              {/* Panel Top Content */}
              <div className="relative z-10 flex flex-col gap-3 text-white">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-0.5 bg-coral-bright" aria-hidden="true" />
                  <span className="text-[11px] font-mono font-bold uppercase tracking-[0.22em] text-coral-orange">
                    {panel.category}
                  </span>
                </div>
                <p className="text-2xl sm:text-3xl lg:text-[28px] font-heading font-extrabold tracking-tight leading-snug drop-shadow-sm text-white">
                  {panel.title}
                </p>
              </div>

              {/* Panel Bottom Action */}
              <div className="relative z-10 flex items-center justify-between pt-6 border-t border-white/20">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 group-hover:text-white transition-colors">
                  Learn More
                </span>
                <div className="flex items-center gap-1.5 text-coral-bright group-hover:text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors">
                  <span>Explore</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export const AppleCardCarousel = VisionMissionSection;
export default VisionMissionSection;
