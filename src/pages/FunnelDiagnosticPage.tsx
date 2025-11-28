import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { ProgressBar } from '../components/ProgressBar';
interface Question {
  id: string;
  section: string;
  question: string;
  options: string[];
  imageUrl?: string;
}
interface FunnelDiagnosticPageProps {
  data: any;
  onUpdate: (updates: any) => void;
  onContinue: () => void;
  onBack: () => void;
}
const questions: Question[] = [{
  id: 'avgCTR',
  section: 'Traffic',
  question: 'Average CTR (30 days):',
  options: ['≥5%', '3–5%', '<2%', 'Unsure'],
  imageUrl: "/Average_CTR.png"
}, {
  id: 'trackingConversions',
  section: 'Traffic',
  question: 'Are you tracking key conversions?',
  options: ['Both', 'Form fills', 'Calls', 'None']
}, {
  id: 'avgCPC',
  section: 'Traffic',
  question: 'Average CPC (last 30 days):',
  options: ['<£0.50', '£0.50–£3.00', '≥£3.00', 'Unsure']
}, {
  id: 'costPerAcquisition',
  section: 'Conversion',
  question: 'Average cost-per-acquisition:',
  options: ['<£10', '£10–£50', '≥£50', 'Unsure']
}, {
  id: 'conversionRate',
  section: 'Conversion',
  question: 'Average website conversion rate:',
  options: ['≥5%', '2–5%', '1–2%', '<1%']
}, {
  id: 'ctaVisibility',
  section: 'Conversion',
  question: 'Primary call-to-action visibility:',
  options: ['Yes — both mobile & desktop', 'Yes — desktop only', 'Yes — mobile only', 'No']
}, {
  id: 'servicePages',
  section: 'Conversion',
  question: 'Dedicated service pages?',
  options: ['Yes — all services', 'Yes — some', 'No']
}, {
  id: 'leadManagementSystem',
  section: 'Lead Management',
  question: 'Lead management system:',
  options: ['Dedicated admin/assistant', 'Answer every call', 'Organised chaos']
}, {
  id: 'responseTime',
  section: 'Lead Management',
  question: 'Average response time:',
  options: ['Same hour', 'Same day', 'Same week', 'When I get a chance']
}];
export function FunnelDiagnosticPage({
  data,
  onUpdate,
  onContinue,
  onBack
}: FunnelDiagnosticPageProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Reset to first unanswered question on mount
  useEffect(() => {
    const firstUnanswered = questions.findIndex(q => !data[q.id]);
    if (firstUnanswered !== -1) {
      setCurrentQuestionIndex(firstUnanswered);
    } else {
      setCurrentQuestionIndex(0);
    }
  }, []);
  const currentQuestion = questions[currentQuestionIndex];
  const handleAnswer = (answer: string) => {
    onUpdate({
      [currentQuestion.id]: answer
    });
    if (currentQuestionIndex < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(prev => prev + 1);
      }, 400);
    }
  };
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const allAnswered = questions.every(q => data[q.id]);

  // Safety check: if currentQuestion is undefined, don't render
  if (!currentQuestion) {
    return null;
  }
  return <div className="min-h-screen p-6 py-12 flex flex-col">
      <div className="w-full max-w-7xl mx-auto">
        {/* Back Button and Progress Bar on same line */}
        <div className="flex items-center justify-between mb-8">
          <button onClick={onBack} className="text-deep-blue opacity-70 hover:opacity-100 transition-opacity flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M12 4L6 10L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
            Back
          </button>

          <div className="flex-1 flex justify-center">
            <ProgressBar currentStep={4} totalSteps={11} />
          </div>

          <div className="w-20"></div>
        </div>

        <motion.h2 initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="text-4xl font-bold text-deep-blue mb-8 text-center">
          Funnel Diagnostic
        </motion.h2>
      </div>

      {/* Centered content container */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="w-full max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <div className="h-[500px] flex items-stretch">
              <AnimatePresence mode="wait">
                <motion.div key={currentQuestionIndex} initial={{
                opacity: 0,
                x: -20
              }} animate={{
                opacity: 1,
                x: 0
              }} exit={{
                opacity: 0,
                x: 20
              }} transition={{
                duration: 0.5
              }} className="w-full">
                  <Card className="h-full flex flex-col">
                    <div className="mb-4">
                      <span className="text-sm font-bold text-accent-blue uppercase tracking-wide">
                        {currentQuestion.section}
                      </span>
                      <div className="text-xs text-deep-blue opacity-50 mt-1">
                        Question {currentQuestionIndex + 1} of {questions.length}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-deep-blue mb-6">
                      {currentQuestion.question}
                    </h3>

                    <div className="space-y-3 flex-1 flex flex-col justify-center">
                      {currentQuestion.options.map(option => <button key={option} onClick={() => handleAnswer(option)} className={`w-full text-left px-6 py-4 rounded-lg border-2 transition-all duration-300 ${data[currentQuestion.id] === option ? 'border-accent-blue bg-accent-blue bg-opacity-10 text-deep-blue font-semibold' : 'border-deep-blue border-opacity-20 hover:border-accent-blue hover:bg-accent-blue hover:bg-opacity-5 text-deep-blue'}`}>
                          {option}
                        </button>)}
                    </div>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="hidden lg:flex items-center justify-center h-[500px]">
              <AnimatePresence mode="wait">
                <motion.div key={currentQuestionIndex} initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} exit={{
                opacity: 0
              }} transition={{
                duration: 0.6,
                ease: 'easeInOut'
              }} className="w-full h-full flex items-center justify-center">
                  {currentQuestion.imageUrl ? <img src={currentQuestion.imageUrl} alt={currentQuestion.question} className="max-h-full max-w-full object-contain rounded-xl shadow-lg" /> : <div className="relative w-full max-w-md h-full flex items-center justify-center bg-white rounded-2xl shadow-2xl">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div animate={{
                      rotate: 360
                    }} transition={{
                      duration: 25,
                      repeat: Infinity,
                      ease: 'linear'
                    }} className="w-64 h-64 border-4 border-accent-blue border-opacity-20 rounded-full" />
                        <motion.div animate={{
                      rotate: -360
                    }} transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: 'linear'
                    }} className="absolute w-48 h-48 border-4 border-accent-coral border-opacity-20" />
                        <div className="absolute w-32 h-32 bg-accent-blue opacity-10 rounded-full" />
                      </div>
                      <span className="relative z-10 text-2xl font-semibold text-deep-blue opacity-30">
                        Image here
                      </span>
                    </div>}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {isLastQuestion && allAnswered && <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="flex justify-center mt-8">
              <Button onClick={onContinue}>View Results</Button>
            </motion.div>}
        </div>
      </div>
    </div>;
}