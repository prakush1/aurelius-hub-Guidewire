import React, { useState, useContext } from 'react';
import { 
  ShieldCheck, 
  AlertTriangle, 
  Lock, 
  Eye, 
  FileCheck, 
  Globe, 
  Scale, 
  Zap, 
  Activity,
  History,
  CheckCircle2,
  AlertCircle,
  Flag,
  Unplug,
  Info
} from 'lucide-react';
import { RegionContext, KillSwitchContext } from '../App';
import ComponentWalkthrough from './ComponentWalkthrough';

const ComplianceControl = () => {
  const region = useContext(RegionContext);
  const killSwitch = useContext(KillSwitchContext);
  const [euAiActEnforced, setEuAiActEnforced] = useState(true);

  const getRegionSpecs = () => {
    switch (region) {
      case 'US-NAIC':
        return { 
          title: 'NAIC Model Bulletin v2.0', 
          standard: 'Multistate AI Pilot (2026)', 
          body: 'USA National Association of Insurance Commissioners' 
        };
      case 'UK-FCA':
        return { 
          title: 'FCA Consumer Duty (AI)', 
          standard: 'PS26/1 Framework', 
          body: 'UK Financial Conduct Authority' 
        };
      case 'EU-AI-ACT':
        return { 
          title: 'EU AI Act High-Risk Spec', 
          standard: 'Title III Compliance (Apr 2026)', 
          body: 'European Commission AI Board' 
        };
      default:
        return { title: 'Global GRC Standard', standard: 'Aurelius v6 Baseline', body: 'International Insurance Board' };
    }
  };

  const currentSpec = getRegionSpecs();

  const controls = [
    { label: 'Bias Monitoring (Olos v10)', status: 'Active', color: '#10b981', detail: 'Real-time disparate impact check' },
    { label: 'Explainability Export', status: 'Ready', color: '#6366f1', detail: 'Full reasoning trace logic' },
    { label: 'Data Sovereignty (Apr 26)', status: 'Verified', color: '#10b981', detail: 'Storage localized to cloud region' },
  ];

  const walkthroughSteps = [
    { title: "Step 1: Regional GRC Signaling", description: "Switching the region in the header broadcasts a compliance signal. The tower updates Title III (EU) vs NAIC standards instantly." },
    { title: "Step 2: The AI Kill Switch", description: "In case of anomalous data drift (fraud or bias), the PM can flip the switch. This SIGTERM's all AI nodes globally for safety." },
    { title: "Step 3: Forensic Prototyping", description: "Aurelius uses SHA-256 hash chaining. We ensure that the data ingested via SharePoint matches the final SAP ledger entry exactly." }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', position: 'relative' }}>
      <ComponentWalkthrough steps={walkthroughSteps} componentName="Compliance & GRC Tower" />

      {/* Compliance Header */}
      <div className="glass animate-fade" style={{ padding: '2.5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ShieldCheck color="#10b981" size={24} />
            </div>
            <div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '0.2rem' }}>Compliance & GRC Control Tower</h2>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Regulated Activity: {currentSpec.body} | Strategy: Prakush Shende</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
             <span className="tag-modern">OLOS COMPLIANCE-READY</span>
             <span className="badge-clear">AUDIT 2026-Q1 COMPLETED</span>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 2fr', gap: '2rem' }}>
        {/* Left Column: Live Controls */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="card glass animate-fade" style={{ background: killSwitch?.active ? 'rgba(239, 68, 68, 0.08)' : 'rgba(16, 185, 129, 0.02)', border: killSwitch?.active ? '1px solid #ef4444' : '1px solid var(--border)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                 <Unplug size={18} color={killSwitch?.active ? '#ef4444' : '#10b981'} /> Global AI Kill Switch
              </h3>
              <div 
                onClick={() => killSwitch?.toggle()}
                style={{ width: '48px', height: '24px', background: killSwitch?.active ? '#ef4444' : '#1e293b', borderRadius: '12px', padding: '2px', cursor: 'pointer', transition: 'all 0.3s ease' }}
              >
                <div style={{ width: '20px', height: '20px', background: 'white', borderRadius: '50%', transform: killSwitch?.active ? 'translateX(24px)' : 'translateX(0)', transition: 'all 0.3s ease' }} />
              </div>
            </div>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              <strong>Emergency Mode:</strong> This toggle immediately halts all AI-Ops inference engines across the entire Aurelius Suite and reverts to "Safe Legacy" Guidewire OOTB behavior.
            </p>
            {killSwitch?.active && (
              <div className="badge-quarantine" style={{ padding: '0.75rem', textAlign: 'center', fontWeight: 800, fontSize: '0.7rem' }}>
                ⚠️ AI INFERENCE HALTED | STANDALONE OOTB MODE
              </div>
            )}
          </div>

          <div className="card glass">
             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <h3 style={{ fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)' }}>
                   <Flag size={16} color="var(--primary)" /> {region} Active Enforcement
                </h3>
             </div>
             <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                Current Standard: <strong>{currentSpec.title}</strong>
             </p>
             <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[
                  { step: 'Audit Trace Parity', status: 'OK' },
                  { step: 'PII Masking (Olos)', status: 'OK' },
                  { step: 'Decision Explainability', status: 'OK' }
                ].map(item => (
                  <div key={item.step} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.65rem' }}>
                     <span>{item.step}</span>
                     <span style={{ color: '#10b981', fontWeight: 800 }}>{item.status}</span>
                  </div>
                ))}
             </div>
          </div>

          <div className="card glass" style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
            <h4 style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '1rem' }}>Active Guardrails</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {controls.map((c, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                  <div>
                    <p style={{ fontSize: '0.8rem', fontWeight: 600 }}>{c.label}</p>
                    <p style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>{c.detail}</p>
                  </div>
                  <span style={{ fontSize: '0.65rem', color: c.color, fontWeight: 800 }}>{c.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Regulatory Analysis */}
        <div className="card glass animate-fade" style={{ padding: '2.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
             <h3 style={{ fontSize: '1.25rem' }}>Regulatory Trace: {region}</h3>
             <span className="tag-modern" style={{ fontSize: '0.7rem' }}>APRIL 2026 UPDATED</span>
          </div>

          <div className="card" style={{ background: 'rgba(255,255,255,0.02)', borderLeft: '4px solid var(--primary)', marginBottom: '2.5rem' }}>
             <h4 style={{ fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>
                <Activity size={18} /> {currentSpec.standard}
             </h4>
             <p style={{ fontSize: '0.85rem', lineHeight: '1.6', color: 'var(--text-muted)' }}>
                Aurelius v6 implements the <strong>Traceability Architecture</strong> required for modern {region} market conduct reviews. 
                Unlike legacy systems, we provide a mathematical proof of fairness for every claims decision.
             </p>
             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', marginTop: '1.5rem' }}>
                <div className="glass" style={{ padding: '1rem' }}>
                   <p style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>BIAS DELTA</p>
                   <p style={{ fontSize: '1rem', fontWeight: 700, color: '#10b981' }}>0.02% (Pass)</p>
                </div>
                <div className="glass" style={{ padding: '1rem' }}>
                   <p style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>AUDIT PARITY</p>
                   <p style={{ fontSize: '1rem', fontWeight: 700, color: '#10b981' }}>Verified via SHA-256</p>
                </div>
             </div>
          </div>

          <section>
             <h4 style={{ fontSize: '0.9rem', marginBottom: '1.25rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Industrial Trust Note: Prakush Shende Strategy</h4>
             <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                Audit compliance is not just about check-boxes. It's about data integrity. 
                By using <strong>SHA-256 hash chaining</strong> from ingestion (SharePoint) 
                to registry (SAP), we ensure that the AI never makes a decision on unverified data.
                This is the standard for April 2026 "Trustworthy AI" certifications.
             </p>
             <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                <button className="btn btn-primary" style={{ flex: 1 }}>GENERATE AUDIT PACK</button>
                <button 
                  onClick={() => killSwitch?.toggle()}
                  className="btn btn-outline" 
                  style={{ flex: 1, color: '#ef4444', borderColor: '#ef4444' }}
                >
                  {killSwitch?.active ? 'ENABLE AI SERVICES' : 'ACTIVATE KILL SWITCH'}
                </button>
             </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ComplianceControl;
