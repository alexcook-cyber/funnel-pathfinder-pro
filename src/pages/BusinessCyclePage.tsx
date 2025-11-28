import React, { useEffect, useRef, Children } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { ProgressBar } from '../components/ProgressBar';
interface BusinessCyclePageProps {
  data: any;
  onContinue: () => void;
  onBack: () => void;
}
export function BusinessCyclePage({
  data,
  onContinue,
  onBack
}: BusinessCyclePageProps) {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const cycleRef = useRef(null);
  const pillarsRef = useRef(null);
  const relevanceRef = useRef(null);
  const prominenceRef = useRef(null);
  const featuresRef = useRef(null);
  const cycleInView = useInView(cycleRef, {
    once: true,
    amount: 0.5
  });
  const pillarsInView = useInView(pillarsRef, {
    once: true,
    amount: 0.5
  });
  const relevanceInView = useInView(relevanceRef, {
    once: true,
    amount: 0.5
  });
  const prominenceInView = useInView(prominenceRef, {
    once: true,
    amount: 0.5
  });
  const featuresInView = useInView(featuresRef, {
    once: true,
    amount: 0.4
  });
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30
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
  const cardFlipVariants = {
    hidden: {
      opacity: 0,
      rotateY: -90,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      rotateY: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  return <div className="min-h-screen bg-cream py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Back Button and Progress Bar on same line */}
        <div className="flex items-center justify-between mb-8">
          <button onClick={onBack} className="text-deep-blue opacity-70 hover:opacity-100 transition-opacity flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M12 4L6 10L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
            Back
          </button>

          <div className="flex-1 flex justify-center">
            <ProgressBar currentStep={7} totalSteps={10} />
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
      }} className="text-center mb-16">
          <h1 className="text-5xl font-bold text-deep-blue mb-4">
            Local SEO Business Cycle
          </h1>
          <p className="text-xl text-deep-blue opacity-70">
            Understanding the complete visibility journey
          </p>
        </motion.div>

        {/* Section 1: Cycle Overview */}
        <section ref={cycleRef} className="mb-20">
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={cycleInView ? {
          opacity: 1,
          scale: 1
        } : {}} transition={{
          duration: 0.8
        }} className="mb-12">
            <svg viewBox="0 0 700 500" className="w-full max-w-lg mx-auto" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="cycleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0a24e3" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#e3664f" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#ffcd63" stopOpacity="0.8" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Main circle */}
              <motion.circle cx="350" cy="250" r="150" fill="none" stroke="url(#cycleGradient)" strokeWidth="12" strokeLinecap="round" initial={{
              pathLength: 0,
              rotate: -90
            }} animate={cycleInView ? {
              pathLength: 1,
              rotate: 0
            } : {}} transition={{
              duration: 2,
              ease: 'easeInOut'
            }} style={{
              originX: '350px',
              originY: '250px'
            }} filter="url(#glow)" />

              {/* Animated dots */}
              <motion.circle cx="350" cy="100" r="20" fill="#0a24e3" initial={{
              scale: 0
            }} animate={cycleInView ? {
              scale: [0, 1.2, 1]
            } : {}} transition={{
              duration: 0.6,
              delay: 1.5
            }} />
              <motion.circle cx="500" cy="250" r="20" fill="#e3664f" initial={{
              scale: 0
            }} animate={cycleInView ? {
              scale: [0, 1.2, 1]
            } : {}} transition={{
              duration: 0.6,
              delay: 1.7
            }} />
              <motion.circle cx="350" cy="400" r="20" fill="#ffcd63" initial={{
              scale: 0
            }} animate={cycleInView ? {
              scale: [0, 1.2, 1]
            } : {}} transition={{
              duration: 0.6,
              delay: 1.9
            }} />
              <motion.circle cx="200" cy="250" r="20" fill="#0a24e3" initial={{
              scale: 0
            }} animate={cycleInView ? {
              scale: [0, 1.2, 1]
            } : {}} transition={{
              duration: 0.6,
              delay: 2.1
            }} />

              {/* Labels with more padding */}
              <text x="350" y="70" textAnchor="middle" fill="#173340" fontSize="18" fontWeight="700">
                Visibility
              </text>
              <text x="560" y="255" textAnchor="start" fill="#173340" fontSize="18" fontWeight="700">
                Engagement
              </text>
              <text x="350" y="450" textAnchor="middle" fill="#173340" fontSize="18" fontWeight="700">
                Conversion
              </text>
              <text x="140" y="255" textAnchor="end" fill="#173340" fontSize="18" fontWeight="700">
                Refinement
              </text>
            </svg>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" animate={cycleInView ? 'visible' : 'hidden'} className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[{
            title: 'Visibility',
            desc: 'How easily customers find you'
          }, {
            title: 'Engagement',
            desc: 'How users interact'
          }, {
            title: 'Conversion',
            desc: 'Visits into leads'
          }, {
            title: 'Refinement',
            desc: 'Data-driven improvement'
          }].map((item, index) => <motion.div key={item.title} variants={itemVariants}>
                <Card className="p-4 text-center h-full">
                  <h3 className="text-lg font-bold text-deep-blue mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-deep-blue opacity-70">
                    {item.desc}
                  </p>
                </Card>
              </motion.div>)}
          </motion.div>
        </section>

        {/* Section 2: Visibility Pillars */}
        <section ref={pillarsRef} className="mb-20">
          <motion.h2 initial={{
          opacity: 0,
          x: -30
        }} animate={pillarsInView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.6
        }} className="text-4xl font-bold text-deep-blue mb-8 text-center">
            The Three Pillars of Visibility
          </motion.h2>

          <motion.div variants={containerVariants} initial="hidden" animate={pillarsInView ? 'visible' : 'hidden'} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{
            title: 'Relevance',
            desc: 'Content quality & optimization',
            iconColor: '#0a24e3'
          }, {
            title: 'Proximity',
            desc: 'Geographic location advantage',
            iconColor: '#e3664f'
          }, {
            title: 'Prominence',
            desc: 'Authority & trust signals',
            iconColor: '#ffcd63'
          }].map((pillar, index) => <motion.div key={pillar.title} variants={cardFlipVariants} custom={index} style={{
            perspective: 1000
          }}>
                <Card className="text-center p-6">
                  <motion.div initial={{
                scale: 0,
                rotate: -180
              }} animate={pillarsInView ? {
                scale: 1,
                rotate: 0
              } : {}} transition={{
                duration: 0.8,
                delay: 0.2 + index * 0.15,
                type: 'spring'
              }} className="mb-4 flex justify-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{
                  backgroundColor: pillar.iconColor,
                  opacity: 0.2
                }}>
                      <div className="w-8 h-8 rounded-full" style={{
                    backgroundColor: pillar.iconColor
                  }} />
                    </div>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-deep-blue mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-deep-blue opacity-70">
                    {pillar.desc}
                  </p>
                </Card>
              </motion.div>)}
          </motion.div>
        </section>

        {/* Section 3: Relevance Details */}
        <section ref={relevanceRef} className="mb-20">
          <motion.h2 initial={{
          opacity: 0,
          x: -30
        }} animate={relevanceInView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.6
        }} className="text-4xl font-bold text-deep-blue mb-8 text-center">
            Understanding Relevance
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div initial={{
            opacity: 0,
            x: -50
          }} animate={relevanceInView ? {
            opacity: 1,
            x: 0
          } : {}} transition={{
            duration: 0.8,
            delay: 0.2
          }}>
              <Card className="p-6 h-full">
                <h3 className="text-xl font-bold text-deep-blue mb-4">
                  Relevance Includes:
                </h3>
                <motion.ul variants={containerVariants} initial="hidden" animate={relevanceInView ? 'visible' : 'hidden'} className="space-y-2">
                  {['Content quality', 'Keyword optimisation', 'UX clarity', 'Internal linking structure', 'External authority links', 'Schema markup'].map((item, index) => <motion.li key={item} variants={itemVariants} className="text-deep-blue opacity-80 flex items-center">
                      <span className="text-accent-blue mr-2 font-bold">•</span>
                      {item}
                    </motion.li>)}
                </motion.ul>
              </Card>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            x: 50
          }} animate={relevanceInView ? {
            opacity: 1,
            x: 0
          } : {}} transition={{
            duration: 0.8,
            delay: 0.4
          }}>
              <Card className="p-6 h-full">
                <h3 className="text-xl font-bold text-deep-blue mb-4">
                  Distance Matters
                </h3>
                <p className="text-deep-blue opacity-80 leading-relaxed">
                  Distance refers to how far the business is from the person
                  searching. Closer locations have higher ranking potential in
                  local search.
                </p>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Section 4: Prominence */}
        <section ref={prominenceRef} className="mb-20">
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} animate={prominenceInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.8
        }}>
            <Card className="p-8 relative overflow-hidden">
              <motion.div initial={{
              scale: 0,
              rotate: 0
            }} animate={prominenceInView ? {
              scale: [0, 1.2, 1],
              rotate: 360
            } : {}} transition={{
              duration: 1.2,
              delay: 0.3
            }} className="absolute top-4 right-4 w-16 h-16 rounded-full bg-accent-yellow opacity-10" />
              <h2 className="text-4xl font-bold text-deep-blue mb-6">
                Prominence
              </h2>
              <p className="text-lg text-deep-blue opacity-90 leading-relaxed">
                Prominence reflects how well-known, trusted, and established
                your business appears online. Businesses with more authority
                signals (reviews, mentions, citations) rank more strongly.
              </p>
            </Card>
          </motion.div>
        </section>

        {/* Section 5: Features - 2 main + 3 sub */}
        <section ref={featuresRef} className="mb-12">
          <motion.h2 initial={{
          opacity: 0,
          y: -30
        }} animate={featuresInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.6
        }} className="text-4xl font-bold text-deep-blue mb-8 text-center">
            What's Included
          </motion.h2>

          {/* 2 Main Features */}
          <motion.div variants={containerVariants} initial="hidden" animate={featuresInView ? 'visible' : 'hidden'} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {[{
            title: 'Dedicated Account Manager',
            desc: 'Single strategic point of contact handling goals, campaigns, communication & performance oversight.',
            color: '#0a24e3'
          }, {
            title: 'Monthly Performance Reporting',
            desc: 'Clear insights into what channels deliver the strongest ROI.',
            color: '#e3664f'
          }].map((feature, index) => <motion.div key={feature.title} variants={itemVariants} custom={index} whileHover={{
            scale: 1.02,
            transition: {
              duration: 0.2
            }
          }}>
                <Card className="p-6 h-full">
                  <div className="flex items-start gap-4">
                    <motion.div initial={{
                  scale: 0,
                  rotate: -180
                }} animate={featuresInView ? {
                  scale: 1,
                  rotate: 0
                } : {}} transition={{
                  duration: 0.6,
                  delay: 0.2 + index * 0.1,
                  type: 'spring'
                }} className="w-12 h-12 rounded-lg flex-shrink-0 flex items-center justify-center" style={{
                  backgroundColor: feature.color,
                  opacity: 0.15
                }}>
                      <div className="w-6 h-6 rounded" style={{
                    backgroundColor: feature.color
                  }} />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-bold text-deep-blue mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-deep-blue opacity-80 leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>)}
          </motion.div>

          {/* 3 Sub Features */}
          <motion.div variants={containerVariants} initial="hidden" animate={featuresInView ? 'visible' : 'hidden'} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{
            title: 'Advanced Call Tracking',
            desc: 'AI-powered call categorisation to enhance conversion accuracy.',
            color: '#ffcd63'
          }, {
            title: 'In-Depth Onboarding',
            desc: 'Deep business research and fully verified tracking setup.',
            color: '#0a24e3'
          }, {
            title: 'Full SEO Service',
            desc: 'Monthly optimisation, content pages, and GBP updates.',
            color: '#e3664f'
          }].map((feature, index) => <motion.div key={feature.title} variants={itemVariants} custom={index} whileHover={{
            scale: 1.02,
            transition: {
              duration: 0.2
            }
          }}>
                <Card className="p-6 h-full">
                  <div className="flex flex-col items-center text-center">
                    <motion.div initial={{
                  scale: 0,
                  rotate: -180
                }} animate={featuresInView ? {
                  scale: 1,
                  rotate: 0
                } : {}} transition={{
                  duration: 0.6,
                  delay: 0.4 + index * 0.1,
                  type: 'spring'
                }} className="w-12 h-12 rounded-lg flex-shrink-0 flex items-center justify-center mb-3" style={{
                  backgroundColor: feature.color,
                  opacity: 0.15
                }}>
                      <div className="w-6 h-6 rounded" style={{
                    backgroundColor: feature.color
                  }} />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-bold text-deep-blue mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-deep-blue opacity-80 leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>)}
          </motion.div>
        </section>

        {/* Continue Button */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 1,
        duration: 0.6
      }} className="flex justify-center">
          <Button onClick={onContinue}>Continue</Button>
        </motion.div>
      </div>
    </div>;
}