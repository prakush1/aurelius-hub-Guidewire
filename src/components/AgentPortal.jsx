import React, { useState } from 'react';
import { 
  Monitor, 
  FileUp, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  AlertCircle,
  Search,
  Building2,
  User,
  MapPin
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AgentPortal = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);
  const navigate = useNavigate();

  const simulateAnalysis = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setAnalysisResult({
        status: 'Green',
        score: 0.92,
        recommendation: 'Pre-Approved for Standard Commercial Auto',
        missingDocs: ['Terrorism Disclosure (TRIA)']
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const handleFinalSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      navigate('/submission'); // Navigate to the core intake view
    }, 1500);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '1100px', margin: '0 auto' }}>
      {/* Jutro Header Simulation */}
      <div className="glass animate-fade" style={{ padding: '2rem', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Monitor size={24} color="#3b82f6" />
            <div>
              <h2 style={{ fontSize: '1.25rem' }}>Producer Digital Portal</h2>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Powered by Guidewire Jutro Framework v3.4</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
              {[1, 2, 3].map(i => (
                <div key={i} style={{ 
                  width: '30px', height: '6px', borderRadius: '3px',
                  background: i <= step ? '#3b82f6' : 'rgba(255,255,255,0.1)'
                }} />
              ))}
          </div>
        </div>

        {step === 1 && (
          <div className="animate-fade">
            <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Building2 size={18} color="#3b82f6" /> New Business Submission
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Broker Agency</label>
                  <div className="glass" style={{ padding: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                     <Search size={14} />
                     <input type="text" defaultValue="Apex Insurance Partners (NYC)" style={{ background: 'transparent', border: 'none', color: 'white', flex: 1, outline: 'none' }} />
                  </div>
                  <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Applicant Name</label>
                  <input type="text" placeholder="e.g. Acme Logistics Corp" className="glass" style={{ padding: '0.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: '8px', color: 'white' }} />
               </div>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Tax ID / FEIN</label>
                  <input type="text" placeholder="XX-XXXXXXX" className="glass" style={{ padding: '0.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: '8px', color: 'white' }} />
                  <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Submission Class</label>
                  <select className="glass" style={{ padding: '0.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: '8px', color: 'white' }}>
                    <option>Commercial Auto - Heavy Trucking</option>
                    <option>Workers Compensation</option>
                    <option>General Liability</option>
                  </select>
               </div>
            </div>
            <button 
              className="btn btn-primary" 
              style={{ marginTop: '2rem', width: '100%', background: '#3b82f6', borderColor: '#3b82f6' }}
              onClick={() => setStep(2)}
            >
              Continue to Data Enrichment <ArrowRight size={16} />
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="animate-fade">
             <div style={{ textAlign: 'center', padding: '2rem' }}>
                <FileUp size={48} color="#3b82f6" style={{ margin: '0 auto 1.5rem', opacity: 0.6 }} />
                <h3>Policy & Risk Document Upload</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
                    Upload ACORD forms, Loss Runs, or Excel Schedules. Our AI will pre-populate Guidewire fields.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                   <div className="glass" style={{ padding: '1rem', border: '1px dashed #3b82f6', borderRadius: '12px', width: '200px' }}>
                      <p style={{ fontSize: '0.7rem' }}>ACORD_125.pdf</p>
                      <span className="badge-clear" style={{ fontSize: '0.6rem' }}>READY</span>
                   </div>
                   {!analysisResult && (
                    <button 
                      className="btn btn-primary" 
                      style={{ background: '#3b82f6' }}
                      onClick={simulateAnalysis}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Analyzing Documents...' : 'Start AI Pre-Clearance'}
                    </button>
                   )}
                </div>
             </div>

             {analysisResult && (
               <div className="animate-fade" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '12px', padding: '1.5rem', marginTop: '2rem', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <Zap size={20} color="#10b981" />
                      <h4 style={{ color: '#10b981' }}>AI Pre-Clearance Results</h4>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                       <span className="tag-legacy" style={{ fontSize: '0.55rem' }}>LEGACY: 45min</span>
                       <span className="tag-modern" style={{ fontSize: '0.55rem' }}>OLOS: 3s</span>
                    </div>
                    <span className="badge-clear">92% CONFIDENCE</span>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                     <div>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Extracted Drivers</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                           <span className="glass" style={{ padding: '0.2rem 0.5rem', fontSize: '0.7rem' }}>John Doe (CDL)</span>
                           <span className="glass" style={{ padding: '0.2rem 0.5rem', fontSize: '0.7rem' }}>Jane Smith (CDL)</span>
                        </div>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '1rem', marginBottom: '0.5rem' }}>NAICS Class Code</p>
                        <p style={{ fontSize: '0.9rem', fontWeight: 600 }}>484121 — General Freight Trucking</p>
                     </div>
                     <div className="jutro-alert">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                          <AlertCircle size={14} />
                          <strong style={{ fontSize: '0.8rem' }}>Broker Action Required</strong>
                        </div>
                        <p style={{ fontSize: '0.75rem', lineHeight: '1.4' }}>
                           Missing 3 years of confirmed Loss Runs. Please upload to bypass manual Underwriter inquiry.
                        </p>
                     </div>
                  </div>
                  <button 
                      className="btn btn-primary" 
                      style={{ marginTop: '2rem', width: '100%', background: '#10b981', borderColor: '#10b981' }}
                      onClick={() => setStep(3)}
                    >
                      Finalize Submission <ArrowRight size={16} />
                  </button>
               </div>
             )}
          </div>
        )}

        {step === 3 && (
          <div className="animate-fade" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
             <ShieldCheck size={64} color="#10b981" style={{ margin: '0 auto 2rem' }} />
             <h2 style={{ marginBottom: '1rem' }}>Submission Ready for Core Intake</h2>
             <p style={{ color: 'var(--text-muted)', maxWidth: '500px', margin: '0 auto 2rem' }}>
                The submission has been pre-validated against Guidewire OOTB entities. 
                Ready to push to PolicyCenter for formal Underwriting.
             </p>
             <button 
                className="btn btn-primary btn-lg pulse" 
                style={{ padding: '1rem 3rem', background: 'linear-gradient(90deg, #3b82f6, #6366f1)', border: 'none' }}
                onClick={handleFinalSubmit}
                disabled={isSubmitting}
             >
                {isSubmitting ? 'Syncing with PolicyCenter...' : 'Push to PolicyCenter'}
             </button>
          </div>
        )}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem' }}>
         <div className="card glass">
            <h5 style={{ fontSize: '0.85rem', marginBottom: '0.5rem' }}>Integration Status</h5>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
               <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }} />
               <span style={{ fontSize: '0.75rem' }}>PolicyCenter Edge API: Connected</span>
            </div>
         </div>
         <div className="card glass">
            <h5 style={{ fontSize: '0.85rem', marginBottom: '0.5rem' }}>Digital Framework</h5>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
               <Zap size={14} color="#3b82f6" />
               <span style={{ fontSize: '0.75rem' }}>Jutro React Components v3.4.1</span>
            </div>
         </div>
         <div className="card glass">
            <h5 style={{ fontSize: '0.85rem', marginBottom: '0.5rem' }}>AI Triage Layer</h5>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
               <CheckCircle2 size={14} color="#10b981" />
               <span style={{ fontSize: '0.75rem' }}>OCR Extraction: Enabled</span>
            </div>
         </div>
      </div>
    </div>
  );
};

export default AgentPortal;
