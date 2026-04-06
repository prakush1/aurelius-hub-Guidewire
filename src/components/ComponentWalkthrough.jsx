import React, { useState } from 'react';
import { HelpCircle, X, ArrowRight, ArrowLeft, Info } from 'lucide-react';

const ComponentWalkthrough = ({ steps, componentName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="btn btn-outline"
        style={{ 
          position: 'absolute', top: '1rem', right: '1rem', 
          zIndex: 50, fontSize: '0.7rem', gap: '0.4rem',
          padding: '0.4rem 0.75rem', borderRadius: '20px',
          background: 'rgba(99, 102, 241, 0.1)', border: '1px solid var(--primary)'
        }}
      >
        <HelpCircle size={14} /> Guide: {componentName}
      </button>
    );
  }

  const step = steps[currentStep];

  return (
    <div style={{
      position: 'absolute', top: '1rem', right: '1rem', 
      width: '320px', zIndex: 1000,
      animation: 'slideInRight 0.3s ease forwards'
    }}>
      <div className="glass" style={{ padding: '1.25rem', border: '1px solid var(--primary)', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
             <Info size={14} color="var(--primary)" />
             <span style={{ fontSize: '0.65rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase' }}>Step {currentStep + 1} of {steps.length}</span>
          </div>
          <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}>
            <X size={16} />
          </button>
        </div>

        <h4 style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>{step.title}</h4>
        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: '1.5', marginBottom: '1.25rem' }}>{step.description}</p>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
             {currentStep > 0 && (
               <button onClick={() => setCurrentStep(prev => prev - 1)} className="btn btn-outline" style={{ padding: '0.3rem', borderRadius: '4px' }}>
                  <ArrowLeft size={14} />
               </button>
             )}
             {currentStep < steps.length - 1 ? (
               <button onClick={() => setCurrentStep(prev => prev + 1)} className="btn btn-primary" style={{ padding: '0.3rem 0.75rem', fontSize: '0.7rem', borderRadius: '4px' }}>
                  Next <ArrowRight size={14} />
               </button>
             ) : (
               <button onClick={() => setIsOpen(false)} className="btn btn-primary" style={{ padding: '0.3rem 0.75rem', fontSize: '0.7rem', borderRadius: '4px' }}>
                  Finish
               </button>
             )}
          </div>
          <span style={{ fontSize: '0.6rem', color: 'var(--text-muted)' }}>Strategy Guide</span>
        </div>
      </div>
    </div>
  );
};

export default ComponentWalkthrough;
