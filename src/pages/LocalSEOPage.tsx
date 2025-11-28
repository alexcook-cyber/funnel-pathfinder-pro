import React, { useEffect, useRef, Children } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { ProgressBar } from '../components/ProgressBar';
interface LocalSEOPageProps {
  data: any;
  onContinue: () => void;
  onBack: () => void;
}
export function LocalSEOPage({
  data,
  onContinue,
  onBack
}: LocalSEOPageProps) {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const overviewRef = useRef(null);
  const benefitsRef = useRef(null);
  const processRef = useRef(null);
  const resultsRef = useRef(null);
  const overviewInView = useInView(overviewRef, {
    once: true,
    amount: 0.4
  });
  const benefitsInView = useInView(benefitsRef, {
    once: true,
    amount: 0.5
  });
  const processInView = useInView(processRef, {
    once: true,
    amount: 0.2
  });
  const resultsInView = useInView(resultsRef, {
    once: true,
    amount: 0.5
  });
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  return <div className="min-h-screen bg-cream py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Back Button and Progress Bar */}
        <div className="flex items-center justify-between mb-8">
          <button onClick={onBack} className="text-deep-blue opacity-70 hover:opacity-100 transition-opacity flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M12 4L6 10L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
            Back
          </button>

          <div className="flex-1 flex justify-center">
            <ProgressBar currentStep={6} totalSteps={10} />
          </div>

          <div className="w-20"></div>
        </div>

        {/* Header */}
        <motion.div initial={{
        opacity: 0,
        y: -30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="text-center mb-20">
          <h1 className="text-5xl font-bold text-deep-blue mb-8">Local SEO</h1>
          <p className="text-xl text-deep-blue opacity-70 max-w-3xl mx-auto">
            Dominate local search results and connect with customers actively
            searching for your services in your area
          </p>
        </motion.div>

        {/* Section 1: Overview */}
        <section ref={overviewRef} className="mb-16">
          <motion.div initial={{
          opacity: 0,
          scale: 0.95
        }} animate={overviewInView ? {
          opacity: 1,
          scale: 1
        } : {}} transition={{
          duration: 0.8
        }}>
            <Card className="p-8 bg-gradient-to-br from-accent-blue/5 to-accent-coral/5">
              <h2 className="text-3xl font-bold text-deep-blue mb-6 text-center">
                What is Local SEO?
              </h2>
              <p className="text-lg text-deep-blue opacity-80 leading-relaxed text-center mb-6">
                Local SEO is the practice of optimizing your online presence to
                attract more business from relevant local searches on Google and
                other search engines. When someone in your area searches for
                services you offer, Local SEO ensures you appear prominently in
                their results.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                {[{
                number: '46%',
                label: 'of all Google searches are local'
              }, {
                number: '76%',
                label: 'of local searches result in a phone call'
              }, {
                number: '28%',
                label: 'of local searches lead to a purchase'
              }].map((stat, index) => <motion.div key={stat.label} initial={{
                opacity: 0,
                y: 20
              }} animate={overviewInView ? {
                opacity: 1,
                y: 0
              } : {}} transition={{
                duration: 0.6,
                delay: 0.2 + index * 0.1
              }} className="text-center p-4 bg-white rounded-lg">
                    <div className="text-3xl font-bold text-accent-blue mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-deep-blue opacity-70">
                      {stat.label}
                    </div>
                  </motion.div>)}
              </div>
            </Card>
          </motion.div>
        </section>

        {/* Scroll Indicator */}
        <motion.div initial={{
        opacity: 1,
        y: 0
      }} animate={benefitsInView ? {
        opacity: 0,
        y: -20
      } // fade away and move up a bit
      : {
        opacity: 1,
        y: [0, 10, 0]
      } // bounce animation
      } transition={benefitsInView ? {
        duration: 0.5
      } : {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 1
      }} className="flex justify-center mt-16">
          <div className="w-6 h-6 border-b-2 border-r-2 border-deep-blue rotate-45" />
        </motion.div>

        {/* Section 2: Key Benefits */}
        <section ref={benefitsRef} className="mb-16">
          <motion.h2 initial={{
          opacity: 0,
          x: -30
        }} animate={benefitsInView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.6
        }} className="text-3xl font-bold text-deep-blue mb-8 text-center">
            Why Local SEO Matters for Your Business
          </motion.h2>

          <motion.div variants={containerVariants} initial="hidden" animate={benefitsInView ? 'visible' : 'hidden'} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[{
            icon: '🎯',
            title: 'Targeted Local Traffic',
            desc: 'Reach customers in your service area who are actively searching for what you offer, right when they need it.',
            color: '#0a24e3'
          }, {
            icon: '📍',
            title: 'Google Map Pack Visibility',
            desc: 'Appear in the coveted "3-pack" of local businesses shown at the top of Google search results with maps.',
            color: '#e3664f'
          }, {
            icon: '📱',
            title: 'Mobile-First Advantage',
            desc: 'Capture the 78% of mobile local searches that lead to offline purchases within 24 hours.',
            color: '#ffcd63'
          }, {
            icon: '⭐',
            title: 'Build Trust & Credibility',
            desc: 'Positive reviews and consistent local presence establish your business as the trusted local expert.',
            color: '#0a24e3'
          }].map((benefit, index) => <motion.div key={benefit.title} variants={itemVariants}>
                <Card className="p-6 h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0" style={{
                  backgroundColor: benefit.color,
                  opacity: 0.15
                }}>
                      <span className="relative z-10">{benefit.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-deep-blue mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-deep-blue opacity-80 leading-relaxed">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>)}
          </motion.div>
        </section>

        {/* Section 3: Our Process */}
        <section ref={processRef} className="mb-16">
          <motion.h2 initial={{
          opacity: 0,
          x: -30
        }} animate={processInView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.6
        }} className="text-3xl font-bold text-deep-blue mb-8 text-center">
            Our Local SEO Approach
          </motion.h2>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-accent-blue opacity-20 -translate-x-1/2" />

            <div className="space-y-8">
              {[{
              step: '01',
              title: 'Google Business Profile Optimization',
              desc: 'Complete setup and optimization of your GBP with accurate information, compelling descriptions, high-quality photos, and strategic category selection.',
              color: '#0a24e3'
            }, {
              step: '02',
              title: 'Local Citation Building',
              desc: 'Ensure consistent NAP (Name, Address, Phone) across 50+ high-authority directories and local platforms to strengthen your local presence.',
              color: '#e3664f'
            }, {
              step: '03',
              title: 'On-Page Local Optimization',
              desc: 'Optimize your website content, meta tags, and schema markup to signal relevance for local searches in your target area.',
              color: '#ffcd63'
            }, {
              step: '04',
              title: 'Review Generation & Management',
              desc: 'Implement systems to generate authentic reviews, respond professionally, and showcase social proof that builds trust.',
              color: '#0a24e3'
            }, {
              step: '05',
              title: 'Local Content Strategy',
              desc: 'Create location-specific content that answers local search queries and establishes your expertise in the community.',
              color: '#e3664f'
            }, {
              step: '06',
              title: 'Performance Tracking & Refinement',
              desc: 'Monitor rankings, traffic, calls, and conversions with monthly reporting and continuous optimization based on data.',
              color: '#ffcd63'
            }].map((item, index) => <motion.div key={item.step} initial={{
              opacity: 0,
              x: index % 2 === 0 ? -30 : 30
            }} animate={processInView ? {
              opacity: 1,
              x: 0
            } : {}} transition={{
              duration: 0.6,
              delay: index * 0.1
            }} className={`flex items-center gap-6 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <Card className="p-6">
                      <div className="flex items-center gap-3 mb-3" style={{
                    justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start'
                  }}>
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white text-sm" style={{
                      backgroundColor: item.color
                    }}>
                          {item.step}
                        </div>
                        <h3 className="text-lg font-bold text-deep-blue">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-sm text-deep-blue opacity-80 leading-relaxed">
                        {item.desc}
                      </p>
                    </Card>
                  </div>
                  <div className="hidden md:block w-6 h-6 rounded-full bg-accent-blue relative z-10" />
                  <div className="flex-1" />
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* Section 4: Expected Results */}
        <section ref={resultsRef} className="mb-12">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={resultsInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.8
        }}>
            <Card className="p-8 bg-gradient-to-br from-accent-blue to-accent-blue/80 text-white">
              <h2 className="text-3xl font-bold mb-6 text-center">
                What You Can Expect
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[{
                title: 'Months 1-3',
                items: ['GBP fully optimized', 'Citations built across key directories', 'Initial ranking improvements', 'Review generation system active']
              }, {
                title: 'Months 4-6',
                items: ['Consistent Map Pack appearances', 'Increased website traffic from local searches', 'Growing review count and ratings', 'Measurable increase in phone calls']
              }, {
                title: 'Months 7-12',
                items: ['Dominant local market position', 'Sustained top 3 rankings', 'Predictable lead generation', 'Strong ROI and business growth']
              }].map((phase, index) => <motion.div key={phase.title} initial={{
                opacity: 0,
                y: 20
              }} animate={resultsInView ? {
                opacity: 1,
                y: 0
              } : {}} transition={{
                duration: 0.6,
                delay: 0.2 + index * 0.1
              }} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4">{phase.title}</h3>
                    <ul className="space-y-2">
                      {phase.items.map((item, i) => <li key={i} className="flex items-start gap-2 text-sm opacity-90">
                          <span className="text-accent-yellow mt-0.5">✓</span>
                          <span>{item}</span>
                        </li>)}
                    </ul>
                  </motion.div>)}
              </div>
            </Card>
          </motion.div>
        </section>

        {/* Continue Button */}
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