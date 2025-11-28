import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathfinderState } from './hooks/usePathfinderState';
import { WelcomePage } from './pages/WelcomePage';
import { FactFinderPage } from './pages/FactFinderPage';
import { FactFinder2Page } from './pages/FactFinder2Page';
import { FunnelDiagnosticPage } from './pages/FunnelDiagnosticPage';
import { FunnelHealthPage } from './pages/FunnelHealthPage';
import { LocalSEOPage } from './pages/LocalSEOPage';
import { BusinessCyclePage } from './pages/BusinessCyclePage';
import { ValuePropositionPage } from './pages/ValuePropositionPage';
import { PreClosePage } from './pages/PreClosePage';
import { PricingPage } from './pages/PricingPage';
import { OnboardingFormPage } from './pages/OnboardingFormPage';
export function App() {
  const {
    currentPage,
    data,
    updateData,
    nextPage,
    prevPage
  } = usePathfinderState();
  const handleRestart = () => {
    window.location.reload();
  };
  const handleSubmit = () => {
    // Handle form submission - could send to API, show success message, etc.
    console.log('Form submitted:', data);
    alert('Campaign setup complete! We will be in touch shortly.');
  };
  const pageVariants = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  return <div className="min-h-screen bg-cream overflow-hidden">
      <AnimatePresence mode="wait">
        {currentPage === 1 && <motion.div key="welcome" variants={pageVariants} initial="initial" animate="animate" exit="exit">
            <WelcomePage name={data.name} url={data.url} onNameChange={value => updateData({
          name: value
        })} onUrlChange={value => updateData({
          url: value
        })} onContinue={nextPage} />
          </motion.div>}

        {currentPage === 2 && <motion.div key="factfinder" variants={pageVariants} initial="initial" animate="animate" exit="exit">
            <FactFinderPage data={data} onUpdate={updateData} onContinue={nextPage} onBack={prevPage} />
          </motion.div>}

        {currentPage === 3 && <motion.div key="factfinder2" variants={pageVariants} initial="initial" animate="animate" exit="exit">
            <FactFinder2Page data={data} onUpdate={updateData} onContinue={nextPage} onBack={prevPage} />
          </motion.div>}

        {currentPage === 4 && <motion.div key="diagnostic" variants={pageVariants} initial="initial" animate="animate" exit="exit">
            <FunnelDiagnosticPage data={data} onUpdate={updateData} onContinue={nextPage} onBack={prevPage} />
          </motion.div>}

        {currentPage === 5 && <motion.div key="health" variants={pageVariants} initial="initial" animate="animate" exit="exit">
            <FunnelHealthPage data={data} onContinue={nextPage} onBack={prevPage} />
          </motion.div>}

        {currentPage === 6 && <motion.div key="local-seo" variants={pageVariants} initial="initial" animate="animate" exit="exit">
            <LocalSEOPage data={data} onContinue={nextPage} onBack={prevPage} />
          </motion.div>}

        {currentPage === 7 && <motion.div key="business-cycle" variants={pageVariants} initial="initial" animate="animate" exit="exit">
            <BusinessCyclePage data={data} onContinue={nextPage} onBack={prevPage} />
          </motion.div>}

        {currentPage === 8 && <motion.div key="value-prop" variants={pageVariants} initial="initial" animate="animate" exit="exit">
            <ValuePropositionPage data={data} onContinue={nextPage} onBack={prevPage} />
          </motion.div>}

        {currentPage === 9 && <motion.div key="pre-close" variants={pageVariants} initial="initial" animate="animate" exit="exit">
            <PreClosePage data={data} onContinue={nextPage} onBack={prevPage} />
          </motion.div>}

        {currentPage === 10 && <motion.div key="pricing" variants={pageVariants} initial="initial" animate="animate" exit="exit">
            <PricingPage data={data} onContinue={nextPage} onBack={prevPage} />
          </motion.div>}

        {currentPage === 11 && <motion.div key="onboarding-form" variants={pageVariants} initial="initial" animate="animate" exit="exit">
            <OnboardingFormPage data={data} onUpdate={updateData} onSubmit={handleSubmit} onBack={prevPage} />
          </motion.div>}
      </AnimatePresence>
    </div>;
}