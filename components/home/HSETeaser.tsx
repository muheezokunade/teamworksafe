import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ShieldCheck, FileText, Award } from 'lucide-react';

export default function HSETeaser() {
  return (
    <section className="py-16 md:py-24 bg-primary text-surface">
      <div className="max-w-container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 leading-heading">
              Health, Safety & Environment
            </h2>
            <p className="text-surface/90 text-lg leading-body mb-8">
              Safety is not just a priority—it's our core value. We maintain rigorous HSE standards 
              across all operations, ensuring zero-harm workplaces and environmental stewardship. Our 
              comprehensive HSE programs, regular training, and strict compliance protocols protect our 
              people, clients, and communities.
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
              <Link href="/hse">Learn About Our HSE Commitment</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-surface/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <ShieldCheck className="w-12 h-12 mx-auto mb-4 text-accent" />
              <div className="font-heading font-bold text-2xl mb-2">ISO 45001</div>
              <div className="text-sm text-surface/80">Safety Management</div>
            </div>
            <div className="bg-surface/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <FileText className="w-12 h-12 mx-auto mb-4 text-accent" />
              <div className="font-heading font-bold text-2xl mb-2">ISO 14001</div>
              <div className="text-sm text-surface/80">Environmental</div>
            </div>
            <div className="bg-surface/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Award className="w-12 h-12 mx-auto mb-4 text-accent" />
              <div className="font-heading font-bold text-2xl mb-2">NEBOSH</div>
              <div className="text-sm text-surface/80">Certified Team</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



