import React, { useState, Children } from "react";
import { motion, AnimatePresence } from "motion/react";
import "./Stepper.css";

export default function Stepper({
  children,
  initialStep = 1,
  onNext,
}) {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const steps = Children.toArray(children);
  const totalSteps = steps.length;
  const isLastStep = currentStep === totalSteps;

  const handleNext = () => {
  if (onNext) {
    const canProceed = onNext(currentStep);
    if (canProceed === false) return; // ⛔ stop here
  }

  if (currentStep < totalSteps) {
    setCurrentStep(prev => prev + 1);
  }
};


const handleBack = () => {
  if (currentStep > 1) {
    setCurrentStep(prev => prev - 1);
  }
};

  return (
    <div className="outer-container">
      <div className="step-circle-container">
        {/* 🔒 FIXED HEIGHT ANIMATION CONTAINER */}
        <div className="step-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ x: 80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -80, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="step-inner"
            >
              {steps[currentStep - 1]}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 🔘 FOOTER */}
        <div className="footer">
  {currentStep > 1 && (
    <button onClick={handleBack}>Back</button>
  )}

  <button onClick={handleNext}>
    {isLastStep ? "Finish" : "Next"}
  </button>
        </div>
      </div>
    </div>
  );
}

export function Step({ children }) {
  return <div className="step">{children}</div>;
}