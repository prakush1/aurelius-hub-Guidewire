import React, { useState, useContext } from 'react';
import { 
  FileSearch, 
  MapPin, 
  User, 
  Shield, 
  AlertCircle, 
  CheckCircle2, 
  ArrowRight,
  Database,
  Search,
  Clock,
  FileCheck,
  Paperclip,
  Share2,
  RefreshCw,
  Zap,
  ShieldAlert,
  Info
} from 'lucide-react';
import { KillSwitchContext } from '../App';
import ComponentWalkthrough from './ComponentWalkthrough';

const mockEmails = [
  {
    subject: "NEW SUBMISSION - Apex Logistics (Commercial Underwriting)",
    body: `From: broker@insurelink.com\nTo: submissions@aurelius.pc.com\n\nHi team, please find attached the details for Apex Logistics. They are looking for Commercial Auto coverage for their 12 delivery trucks. Located at 4500 Industrial Pkwy, Denver, CO 80216. FEIN: 45-983210. Requested effective date: June 1, 2026. Previous carrier: Zenith Casualty. No claims in 3 years.`
  },
  {
    subject: "URGENT - Quote Request: Titan Manufacturing Ltd.",
    body: `From: sarah@globalrisk.co.uk\nTo: submissions@aurelius.pc.com\n\nAttaching specs for Titan Mfg. We need a GL and Property quote by EOD. They have 3 plants in Manchester and Leeds. Current FEIN/TaxID: GB-990123. Total Insured Value: £45M. Note: One minor fire incident in 2023, fully remediated.`
  },
  {
    subject: "New Policy Inquiry: Sunshine Daycare",
    body: `From: mike@localinsurance.com\nTo: submissions@aurelius.pc.com\n\nRequesting Workers Comp quote for Sunshine Daycare. 15 employees. 1200 Sunny Ln, Orlando, FL 32801. Tax ID: 59-1234567. No losses reported. We need this bound by Monday.`
  }
];

const SubmissionIntake = () => {
  const killSwitch = useContext(KillSwitchContext);
  const [isMapping, setIsMapping] = useState(false);
  const [complete, setComplete] = useState(false);
  const [emailIndex, setEmailIndex] = useState(0);
  const [attachments, setAttachments] = useState([]);
  const [fraudScore, setFraudScore] = useState(0);

  const handleStartMapping = () => {
    if (killSwitch?.active) return;
    setIsMapping(true);
    // Simulate AI Fraud Check
    const score = Math.floor(Math.random() * 30) + 5; // 5-35 range
    setFraudScore(score);
    
    setTimeout(() => {
      setIsMapping(false);
      setComplete(true);
    }, 2500);
  };

  const addRandomAttachment = (source) => {
    const files = ['RiskAssessment.pdf', 'LossRun_2024.xlsx', 'PropertyPhotos.zip', 'FinancialStmt.pdf'];
    const newFile = {
      name: files[Math.floor(Math.random() * files.length)],
      source: source,
      id: Date.now()
    };
    setAttachments([...attachments, newFile]);
  };

  const refreshData = () => {
    setEmailIndex((emailIndex + 1) % mockEmails.length);
    setComplete(false);
    setAttachments([]);
    setFraudScore(0);
  };

  const walkthroughSteps = [
    { title: "Step 1: Unstructured Data", description: "This module simulates an incoming Broker email. The AI scans for key entities like FEIN, address, and insurance history." },
    { title: "Step 2: AI Entity Recognition", description: "Click 'AI Map' to see the transformation of raw text into a Guidewire-ready schema. It handles both OOTB and custom .etx fields." },
    { title: "Step 3: Fraud Early-Warning", description: "Simultaneously, the AI scans external data (LexisNexis/SAP) to provide a fraud probability score before the underwriter even looks at it." }
  ];

  const FieldRow = ({ label, value, icon, isValid, type }) => (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.875rem', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid var(--border)', marginBottom: '0.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <div style={{ color: 'var(--text-muted)' }}>{icon}</div>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>{label}</p>
            {type && <span style={{ fontSize: '0.6rem', padding: '0.1rem 0.4rem', borderRadius: '4px', background: type === 'OOTB' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(99, 102, 241, 0.1)', color: type === 'OOTB' ? '#10b981' : 'var(--primary)', border: '1px solid currentColor' }}>{type}</span>}
          </div>
          <p style={{ fontSize: '0.9rem', fontWeight: 500 }}>{value}</p>
        </div>
      </div>
      {isValid ? <CheckCircle2 size={16} color="#10b981" /> : <AlertCircle size={16} color="#f59e0b" />}
    </div>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
      <ComponentWalkthrough steps={walkthroughSteps} componentName="AI Submission Intake" />
      
      <div className="glass animate-fade" style={{ padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Intelligent AI Submission Intake</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            Bridging unstructured sources (Email, SharePoint, SFTP) to <strong>Guidewire PolicyCenter</strong>.
          </p>
        </div>
        <button onClick={refreshData} className="btn btn-outline" style={{ gap: '0.5rem' }}>
          <RefreshCw size={18} />
          New Simulation Data
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '2rem', opacity: killSwitch?.active ? 0.4 : 1, transition: 'all 0.4s ease' }}>
        {/* Source Data Side */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="card glass">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--secondary)' }}>
                <FileSearch size={20} />
                <h3 style={{ fontSize: '1.05rem', fontWeight: 600 }}>Unstructured Source</h3>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                 <button onClick={() => addRandomAttachment('SharePoint')} title="Sync from SharePoint" className="btn btn-outline" style={{ padding: '0.4rem' }}><Share2 size={14} /></button>
                 <button onClick={() => addRandomAttachment('SFTP')} title="Manual SFTP Upload" className="btn btn-outline" style={{ padding: '0.4rem' }}><Database size={14} /></button>
              </div>
            </div>
            
            <div style={{ fontSize: '0.8rem', color: 'var(--primary)', marginBottom: '0.5rem', fontWeight: 600 }}>
              SUBJECT: {mockEmails[emailIndex].subject}
            </div>

            <pre style={{ 
              background: 'var(--background)', 
              padding: '1.25rem', 
              borderRadius: '8px', 
              fontSize: '0.8rem', 
              color: 'var(--text-muted)', 
              whiteSpace: 'pre-wrap', 
              border: '1px solid var(--border)',
              lineHeight: '1.6',
              height: '180px',
              overflowY: 'auto'
            }}>
              {mockEmails[emailIndex].body}
            </pre>

            {attachments.length > 0 && (
              <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                 <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Attachments ({attachments.length})</p>
                 {attachments.map(file => (
                   <div key={file.id} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', color: 'var(--text)', background: 'rgba(255,255,255,0.03)', padding: '0.4rem 0.75rem', borderRadius: '4px' }}>
                     <Paperclip size={12} color="var(--secondary)" />
                     <span>{file.name}</span>
                     <span style={{ fontSize: '0.6rem', color: 'var(--text-muted)', marginLeft: 'auto' }}>via {file.source}</span>
                   </div>
                 ))}
              </div>
            )}

            <button 
              className="btn btn-primary" 
              style={{ width: '100%', marginTop: '1.5rem', gap: '0.5rem' }}
              onClick={handleStartMapping}
              disabled={isMapping || complete || killSwitch?.active}
            >
              {killSwitch?.active ? 'AI Engine Disabled (Kill Switch)' : (isMapping ? 'Scanning Entities & Fraud...' : (complete ? 'Mapping Verified' : 'AI Map to OOTB Fields'))}
              {!isMapping && !complete && !killSwitch?.active && <ArrowRight size={18} />}
            </button>
          </div>

          {/* GRC / Fraud Insight */}
          {complete && (
            <div className="card glass animate-fade" style={{ borderLeft: `4px solid ${fraudScore > 25 ? '#ef4444' : '#10b981'}` }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                 <ShieldAlert size={20} color={fraudScore > 25 ? '#ef4444' : 'var(--primary)'} />
                 <h4 style={{ fontSize: '0.9rem' }}>AI Fraud Detection Insights</h4>
               </div>
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Anomalous Pattern Score</span>
                  <span style={{ fontSize: '1rem', fontWeight: 700, color: fraudScore > 25 ? '#ef4444' : '#10b981' }}>{fraudScore}%</span>
               </div>
               <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px' }}>
                  <div style={{ width: `${fraudScore}%`, height: '100%', background: fraudScore > 25 ? '#ef4444' : '#10b981', borderRadius: '2px' }}></div>
               </div>
               <div style={{ marginTop: '1rem', padding: '0.75rem', background: 'rgba(255,255,255,0.02)', borderRadius: '6px' }}>
                  <p style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Info size={12} /> Forensic Explainability</p>
                  <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>
                     {fraudScore > 25 
                       ? 'High-risk detected due to pattern match in the "Manchester Industrial Hub" fraud database (2025). Address verification failed on Hyland archive check.' 
                       : 'Trust factor high: FEIN verified against LexisNexis CUE registry and SAP vendor whitelist.'}
                  </p>
               </div>
            </div>
          )}
        </div>

        {/* Target Data Side */}
        <div className="card glass" style={{ minHeight: '500px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)' }}>
              <Database size={20} />
              <h3 style={{ fontSize: '1.05rem', fontWeight: 600 }}>PolicyCenter Schema</h3>
            </div>
            {complete && <div className="badge badge-success">Audit Compliant</div>}
          </div>

          {!isMapping && !complete && (
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', textAlign: 'center' }}>
              <Zap size={32} style={{ marginBottom: '1rem', opacity: 0.2 }} />
              <p style={{ fontSize: '0.875rem' }}>Ready to parse input data.</p>
            </div>
          )}

          {isMapping && (
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[1,2,3,4,5,6].map((i) => (
                <div key={i} style={{ height: '50px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', overflow: 'hidden', position: 'relative' }}>
                  <div style={{ 
                    position: 'absolute', 
                    top: 0, 
                    left: 0, 
                    width: '30%', 
                    height: '100%', 
                    background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.05), transparent)',
                    animation: 'shimmer 1.5s infinite linear'
                  }}></div>
                </div>
              ))}
            </div>
          )}

          {complete && (
            <div className="animate-fade" style={{ flex: 1 }}>
              <FieldRow label="Account Name" value={emailIndex === 0 ? "Apex Logistics" : (emailIndex === 1 ? "Titan Manufacturing" : "Sunshine Daycare")} icon={<User size={16} />} isValid={true} type="OOTB" />
              <FieldRow label="Primary Address" value={emailIndex === 0 ? "Denver, CO" : (emailIndex === 1 ? "Manchester, UK" : "Orlando, FL")} icon={<MapPin size={16} />} isValid={true} type="OOTB" />
              <FieldRow label="Tax ID / FEIN" value={emailIndex === 0 ? "45-983210" : (emailIndex === 1 ? "GB-990123" : "59-1234567")} icon={<Shield size={16} />} isValid={true} type="OOTB" />
              <FieldRow label="Broker_External_ID_c" value="EXT-9832-X" icon={<Database size={16} />} isValid={true} type=".ETX" />
              <FieldRow label="Target Release" value="Olos (Apr 2026)" icon={<Zap size={16} />} isValid={true} type="SYSTEM" />
              
              <div style={{ marginTop: '1.5rem', background: 'rgba(245, 158, 11, 0.03)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(245, 158, 11, 0.15)' }}>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <AlertCircle size={18} color="#f59e0b" style={{ flexShrink: 0 }} />
                  <div>
                    <h5 style={{ fontSize: '0.85rem', color: '#f59e0b', fontWeight: 600, marginBottom: '0.25rem' }}>Human-in-the-Loop Required</h5>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      {emailIndex === 0 ? 'Secondary loss history needed from SFTP.' : 'Foreign data validation needed for UK/EU jurisdiction.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubmissionIntake;
