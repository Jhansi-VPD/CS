import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Lock, Clock, Calendar } from 'lucide-react';
import { Button } from '../common/Button';
import { ScrollReveal } from '../common/ScrollReveal';
import { MeetingRequestModal } from '../forms/MeetingRequestModal';

export const CtaBannerSection: React.FC = () => {
  const [isMeetingOpen, setIsMeetingOpen] = useState(false);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="scale">
          <div className="relative rounded-3xl bg-[#080B2E] border border-slate-800 p-8 sm:p-12 lg:p-16 text-center overflow-hidden shadow-2xl text-white">
            {/* Background Ambient Glows */}
            <div className="absolute top-0 right-1/4 w-80 h-80 bg-coral-bright/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-coral-purple/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-3xl mx-auto space-y-6 relative z-10">
              {/* Minimal Eyebrow Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-[11px] font-mono font-semibold uppercase tracking-wider text-coral-orange">
                <span className="w-1.5 h-1.5 rounded-full bg-coral-bright animate-pulse" />
                <span>Next Steps</span>
              </div>

              {/* Bold Executive Headline */}
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Ready to Connect Your Requirements with{' '}
                <span className="swift-gradient-text">Delivery Excellence?</span>
              </h2>

              {/* Concise Supporting Copy */}
              <p className="text-base text-slate-300 leading-relaxed max-w-xl mx-auto font-normal">
                Schedule a direct introductory discussion with our leadership team or explore our vetted IT and operations delivery capabilities.
              </p>

              {/* Clear Primary & Secondary CTAs */}
              <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => setIsMeetingOpen(true)}
                  icon={<Calendar className="w-4 h-4" />}
                  className="font-bold shadow-xs hover:shadow-md cursor-pointer"
                >
                  Schedule Introductory Discussion
                </Button>
                <Button
                  to="/services"
                  variant="outline"
                  size="md"
                  className="font-semibold text-white border-slate-700 hover:bg-white/10"
                >
                  Explore Solutions
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <Lock className="w-3.5 h-3.5 text-coral-orange" />
                  <span>Bilateral NDA Protection</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-coral-bright" />
                  <span>100% Client IP Rights</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  <span>1 Business Day Response</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Meeting Request Modal */}
      <MeetingRequestModal
        isOpen={isMeetingOpen}
        onClose={() => setIsMeetingOpen(false)}
      />
    </section>
  );
};

export default CtaBannerSection;
