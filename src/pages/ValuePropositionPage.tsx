import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { ProgressBar } from '../components/ProgressBar';
interface ValuePropositionPageProps {
  data: any;
  onContinue: () => void;
  onBack: () => void;
}
export function ValuePropositionPage({
  data,
  onContinue,
  onBack
}: ValuePropositionPageProps) {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const journeyRef = useRef(null);
  const teamsRef = useRef(null);
  const contentRef = useRef(null);
  const journeyInView = useInView(journeyRef, {
    once: true,
    amount: 0.3
  });
  const teamsInView = useInView(teamsRef, {
    once: true,
    amount: 0.3
  });
  const contentInView = useInView(contentRef, {
    once: true,
    amount: 0.3
  });
  return <div className="min-h-screen bg-cream py-12 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Back Button and Progress Bar on same line */}
        <div className="flex items-center justify-between mb-8">
          <button onClick={onBack} className="text-deep-blue opacity-70 hover:opacity-100 transition-opacity flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M12 4L6 10L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
            Back
          </button>

          <div className="flex-1 flex justify-center">
            <ProgressBar currentStep={8} totalSteps={10} />
          </div>

          <div className="w-20"></div>
        </div>

        <motion.h1 initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} className="text-4xl font-bold text-deep-blue mb-12 text-center">
          Your Journey with Us
        </motion.h1>

        {/* Section 1: Your Journey with Us */}
        <section ref={journeyRef} className="mb-20">
          <motion.div initial={{
          opacity: 0,
          scale: 0.95
        }} animate={journeyInView ? {
          opacity: 1,
          scale: 1
        } : {}} transition={{
          duration: 0.8
        }}>
            <Card className="p-8">
              <motion.h2 initial={{
              opacity: 0,
              y: -20
            }} animate={journeyInView ? {
              opacity: 1,
              y: 0
            } : {}} transition={{
              duration: 0.6
            }} className="text-3xl font-bold text-deep-blue mb-8 text-center">
                
              </motion.h2>

              <div className="space-y-8 relative">
                {/* Connecting line */}
                <div className="absolute left-6 top-12 bottom-12 w-0.5 bg-accent-blue opacity-20" />

                {[{
                title: 'Welcome Call',
                items: ['Introduction & expectations', 'Understanding business goals', 'Confirming tracking access', 'Setting timelines'],
                color: '#0a24e3',
                delay: 0.2
              }, {
                title: 'Launch Call',
                items: ['Final review of setup', 'Tracking and goals confirmed', 'Campaign/SEO structure approved', 'Launch procedures explained'],
                color: '#e3664f',
                delay: 0.3
              }, {
                title: 'Review Cycle',
                items: ['Monthly reviews', 'ROI discussion', 'Optimisation roadmap', 'Upcoming focus areas'],
                color: '#ffcd63',
                delay: 0.4
              }].map((step, index) => <motion.div key={step.title} initial={{
                opacity: 0,
                x: -20
              }} animate={journeyInView ? {
                opacity: 1,
                x: 0
              } : {}} transition={{
                duration: 0.6,
                delay: step.delay
              }} className="relative">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 relative z-10" style={{
                    backgroundColor: step.color
                  }}>
                        <span className="text-white font-bold text-lg">
                          {index + 1}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-deep-blue mb-3">
                          {step.title}
                        </h3>
                        <ul className="space-y-2">
                          {step.items.map((item, i) => <li key={i} className="text-sm text-deep-blue opacity-80 flex items-start">
                              <span className="mr-2">•</span>
                              <span>{item}</span>
                            </li>)}
                        </ul>
                      </div>
                    </div>
                  </motion.div>)}
              </div>
            </Card>
          </motion.div>
        </section>

        {/* Section 2: Choose Your Team */}
        <section ref={teamsRef} className="mb-20">
          <motion.h2 initial={{
          opacity: 0,
          y: -20
        }} animate={teamsInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.6
        }} className="text-3xl font-bold text-deep-blue mb-8 text-center">
            Choose the Team That Matches Your Growth Ambition
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} animate={teamsInView ? {
            opacity: 1,
            x: 0
          } : {}} transition={{
            duration: 0.6,
            delay: 0.2
          }}>
              <Card className="border-2 border-accent-blue p-6 h-full">
                <h3 className="text-xl font-bold text-accent-blue mb-4">
                  SEO Team
                </h3>
                <ul className="space-y-2 text-sm text-deep-blue opacity-80">
                  <li>• Focus on ranking growth</li>
                  <li>• Local SEO optimisation</li>
                  <li>• On-page improvements</li>
                  <li>• Monthly content optimisation</li>
                  <li>• Performance tracking included</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            x: 30
          }} animate={teamsInView ? {
            opacity: 1,
            x: 0
          } : {}} transition={{
            duration: 0.6,
            delay: 0.3
          }}>
              <Card className="border-2 border-accent-coral p-6 h-full bg-accent-coral bg-opacity-5">
                <h3 className="text-xl font-bold text-accent-coral mb-4">
                  SEO+ Team
                </h3>
                <ul className="space-y-2 text-sm text-deep-blue opacity-80">
                  <li>• Everything in SEO +</li>
                  <li>• Additional strategic analyst</li>
                  <li>• Enhanced reporting</li>
                  <li>• Additional content support</li>
                  <li>• Tailored strategy development</li>
                  <li>• More frequent reviews & updates</li>
                </ul>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Section 3: What You Get */}
        <section ref={contentRef} className="mb-12">
          <motion.h2 initial={{
          opacity: 0,
          y: -20
        }} animate={contentInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.6
        }} className="text-3xl font-bold text-deep-blue mb-8 text-center">
            What You Get
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={contentInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.6,
            delay: 0.2
          }}>
              <Card className="p-6 h-full">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent-blue bg-opacity-15 flex items-center justify-center flex-shrink-0">
                    <div className="w-5 h-5 rounded bg-accent-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-deep-blue mb-3">
                      Content Plans
                    </h3>
                    <ul className="space-y-2 text-sm text-deep-blue opacity-80">
                      <li>• Monthly SEO-focused content</li>
                      <li>• Two new optimised pages/articles per month</li>
                      <li>• Keyword and competitor research included</li>
                      <li>• Aligned to your business goals & search intent</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={contentInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.6,
            delay: 0.3
          }}>
              <Card className="p-6 h-full">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent-coral bg-opacity-15 flex items-center justify-center flex-shrink-0">
                    <div className="w-5 h-5 rounded bg-accent-coral" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-deep-blue mb-3">
                      Tracking Suite
                    </h3>
                    <ul className="space-y-2 text-sm text-deep-blue opacity-80">
                      <li>• Full real-time tracking setup</li>
                      <li>• Advanced call-tracking with AI categorisation</li>
                      <li>• Conversion attribution across all channels</li>
                      <li>• Monthly reporting dashboard</li>
                      <li>• Transparent ROI visibility</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 1
      }} className="flex justify-center">
          <Button onClick={onContinue}>Continue</Button>
        </motion.div>
      </div>
    </div>;
}