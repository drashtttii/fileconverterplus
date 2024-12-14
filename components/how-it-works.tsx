'use client';

import {
  FileDown,
  FileUp,
  Cog,
  CheckCheckIcon,
  CheckCircleIcon,
} from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: CheckCircleIcon,
      title: 'Select Files',
      description: 'Select or drag & drop your files into the dropzone area',
    },
    {
      icon: Cog,
      title: 'Convert',
      description: 'Our system will process your files instantly',
    },
    {
      icon: FileDown,
      title: 'Download',
      description: 'Download your converted files individually or as a ZIP',
    },
  ];

  return (
    <section className="py-12">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-center mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <step.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}