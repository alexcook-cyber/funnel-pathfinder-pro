import React from 'react';
interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}
export function ProgressBar({
  currentStep,
  totalSteps
}: ProgressBarProps) {
  return <div className="flex items-center justify-center gap-3">
      {Array.from({
      length: totalSteps
    }).map((_, index) => <div key={index} className={`w-3 h-3 rounded-full transition-all duration-300 ${index + 1 === currentStep ? 'bg-accent-blue w-8' : index + 1 < currentStep ? 'bg-accent-blue opacity-50' : 'bg-deep-blue opacity-20'}`} />)}
    </div>;
}