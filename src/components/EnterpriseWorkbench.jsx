import React, { useState, useEffect } from 'react';
import { 
  Wrench, 
  Map, 
  RefreshCcw, 
  Zap, 
  Activity, 
  CheckCircle2, 
  AlertTriangle, 
  Lock, 
  Database,
  ArrowRight,
  TrendingUp,
  Server,
  Cloud
} from 'lucide-react';

const EnterpriseWorkbench = () => {
  const [activeTool, setActiveTool] = useState('Migration');
  const [loadLevel, setLoadLevel] = useState(45);
  const [isSimulating, setIsSimulating] = useState(false);

  const mappings = [
    { legacy: 'ACCT_ID_PRM', target: 'Account.AccountNumber', transform: 'Direct / PII Tokenized', quality: 0.99 },
    { legacy: 'POL_EFF_DT', target: 'PolicyPeriod.PeriodStart', transform: 'ISO-8601 Casting', quality: 0.94 },
    { legacy: 'CLM_PAY_STAT', target: 'Payment.Status', transform: 'Enum Mapping (1->Open, 2->Closed)', quality: 0.88 },
    { legacy: 'INS_EMAIL', target: 'Contact.EmailAddress', transform: 'Validation & Masking', quality: 0.72 }
  ];

  const driftItems = [
    { config: 'BatchProcess: RenewalCheck', dev: 'Enabled', uat: 'Enabled', prod: 'DISABLED', status: 'CRITICAL DRIFT' },
    { config: 'RuleEngine: MaxAuthority', dev: '$50k', uat: '$50k', prod: '$25k', status: 'WARNING' },
    { config: 'Plugin: IDocumentManagement', dev: 'S3-Mock', uat: 'SharePoint', prod: 'SharePoint', status: 'SYNC' }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Workbench Header */}
      <div className="glass animate-fade" style={{ padding: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(59, 130, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Wrench color="#3b82f6" size={24} />
            </div>
            <div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '0.2rem' }}>Enterprise AI-PM Workbench</h2>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Migration Frameworks, Load Simulations & QA Lifecycle</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
             <span className="badge-clear">MIGRATION V2.4</span>
             <span className="badge badge-danger pulse">STORM SIM ACTIVE</span>
          </div>
        </div>
      </div>

      {/* Tools Switcher */}
      <div style={{ display: 'flex', gap: '1rem' }}>
        {['Migration', 'Drift Detector', 'Load Simulator'].map(tool => (
          <button 
            key={tool} 
            onClick={() => setActiveTool(tool)}
            style={{ 
              padding: '0.65rem 1.25rem', borderRadius: '8px', 
              background: activeTool === tool ? '#3b82f6' : 'rgba(255,255,255,0.05)',
              color: activeTool === tool ? 'white' : 'var(--text-muted)',
              border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '0.85rem'
            }}
          >
            {tool}
          </button>
        ))}
      </div>

      {activeTool === 'Migration' && (
        <div className="animate-fade">
           <div className="card glass" style={{ padding: '0' }}>
              <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Map size={18} color="#3b82f6" />
                    <h3 style={{ fontSize: '1rem' }}>Legacy $\rightarrow$ Guidewire Entity Mapper</h3>
                 </div>
                 <div style={{ display: 'flex', gap: '1rem' }}>
                    <span style={{ fontSize: '0.75rem' }}>4,201 total mappings</span>
                    <button className="btn btn-outline" style={{ fontSize: '0.65rem' }}>EXPORT SPEC</button>
                 </div>
              </div>
              <div>
                 {mappings.map((m, i) => (
                   <div key={i} className="mapping-row" style={{ padding: '1.25rem 2rem' }}>
                      <div style={{ flex: 1.2 }}>
                         <p style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Legacy System</p>
                         <h5 style={{ fontSize: '0.9rem' }}>{m.legacy}</h5>
                      </div>
                      <div style={{ textAlign: 'center' }}>
                         <ArrowRight size={14} color="var(--text-muted)" />
                      </div>
                      <div style={{ flex: 1.5 }}>
                         <p style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Guidewire Target (OOTB/ETX)</p>
                         <h5 style={{ fontSize: '0.9rem', color: '#3b82f6' }}>{m.target}</h5>
                      </div>
                      <div style={{ flex: 1.2 }}>
                         <p style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Transformation</p>
                         <p style={{ fontSize: '0.8rem' }}>{m.transform}</p>
                      </div>
                      <div style={{ width: '100px', textAlign: 'right' }}>
                         <p style={{ fontSize: '0.7rem', fontWeight: 700, color: m.quality > 0.9 ? '#10b981' : '#f59e0b' }}>{Math.round(m.quality * 100)}% Match</p>
                         <div style={{ height: '3px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', marginTop: '0.2rem' }}>
                            <div style={{ width: `${m.quality * 100}%`, height: '100%', background: m.quality > 0.9 ? '#10b981' : '#f59e0b' }} />
                         </div>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
           <div className="jutro-alert" style={{ marginTop: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                <Lock size={14} />
                <strong>Data Masking Protocol</strong>
              </div>
              <p style={{ fontSize: '0.8rem' }}>
                 Automatic PII/PHI redaction is enabled for `Contact.EmailAddress` and `Account.TaxID`. Rejection rules active for non-ISO-compliant date strings.
              </p>
           </div>
        </div>
      )}

      {activeTool === 'Drift Detector' && (
        <div className="animate-fade">
           <div className="card glass">
              <h3 style={{ fontSize: '1rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                 <RefreshCcw size={18} color="#3b82f6" /> Environment Configuration Drift
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                 <span>Configuration</span>
                 <span>Dev</span>
                 <span>UAT</span>
                 <span>Prod</span>
                 <span style={{ textAlign: 'right' }}>Status</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                 {driftItems.map((item, i) => (
                    <div key={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', padding: '1rem', borderBottom: '1px solid var(--border)', fontSize: '0.8rem' }}>
                       <span style={{ fontWeight: 600 }}>{item.config}</span>
                       <span style={{ color: 'var(--text-muted)' }}>{item.dev}</span>
                       <span style={{ color: 'var(--text-muted)' }}>{item.uat}</span>
                       <span style={{ color: item.status.includes('DRIFT') ? '#ef4444' : 'var(--text)' }}>{item.prod}</span>
                       <div style={{ textAlign: 'right' }}>
                          <span className={`badge ${item.status === 'SYNC' ? 'badge-success' : 'badge-danger'}`} style={{ fontSize: '0.6rem' }}>{item.status}</span>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
           <div className="card glass animate-fade" style={{ background: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.2)', marginTop: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#ef4444' }}>
                 <AlertTriangle size={20} />
                 <div>
                    <h4 style={{ fontSize: '0.9rem' }}>Critical Mismatch Detected</h4>
                    <p style={{ fontSize: '0.75rem', opacity: 0.8 }}>`BatchProcess: RenewalCheck` is disabled in Production. Potential billing leakage in 48 hours if not reconciled.</p>
                 </div>
              </div>
           </div>
        </div>
      )}

      {activeTool === 'Load Simulator' && (
        <div className="animate-fade" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
           <div className="card glass">
              <h3 style={{ fontSize: '1rem', marginBottom: '2rem' }}>Stress Test Simulation</h3>
              <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Submission Requests (per/sec)</label>
              <input 
                type="range" 
                min="0" max="100" 
                value={loadLevel} 
                onChange={(e) => setLoadLevel(e.target.value)}
                style={{ width: '100%', margin: '1rem 0 2.5rem', cursor: 'pointer' }} 
              />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                 <div className="glass" style={{ padding: '1.5rem', textAlign: 'center' }}>
                    <p style={{ fontSize: '0.6rem', color: 'var(--text-muted)' }}>SYSTEM LATENCY</p>
                    <p style={{ fontSize: '1.25rem', fontWeight: 800, color: loadLevel > 80 ? '#ef4444' : '#10b981' }}>{loadLevel * 2}ms</p>
                 </div>
                 <div className="glass" style={{ padding: '1.5rem', textAlign: 'center' }}>
                    <p style={{ fontSize: '0.6rem', color: 'var(--text-muted)' }}>THROUGHPUT</p>
                    <p style={{ fontSize: '1.25rem', fontWeight: 800 }}>{Math.round(loadLevel * 12)} Req/m</p>
                 </div>
              </div>
              <button 
                className="btn btn-primary" 
                style={{ marginTop: '2rem', width: '100%', background: isSimulating ? '#ef4444' : '#3b82f6' }}
                onClick={() => setIsSimulating(!isSimulating)}
              >
                {isSimulating ? 'HALT STRESS TEST' : 'START STORM SIMULATION'}
              </button>
           </div>
           <div className="card glass" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                 <TrendingUp size={24} color="#3b82f6" />
                 <h4 style={{ fontSize: '1rem' }}>System Performance Forecast</h4>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                 <div style={{ padding: '0.75rem 1rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '8px', borderLeft: '3px solid #3b82f6' }}>
                    <span style={{ fontSize: '0.65rem', fontWeight: 800 }}>GW-Functions (SFA)</span>
                    <p style={{ fontSize: '0.9rem', fontWeight: 700 }}>SCALING: AUTO</p>
                 </div>
                 <div style={{ padding: '0.75rem 1rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '8px', borderLeft: '3px solid #3b82f6' }}>
                    <span style={{ fontSize: '0.65rem', fontWeight: 800 }}>PostgreSQL RDS</span>
                    <p style={{ fontSize: '0.9rem', fontWeight: 700 }}>IOPS: HEALTY</p>
                 </div>
              </div>
              <p style={{ marginTop: '2rem', fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                 Simulation confirms that the <strong>Built-Apart architecture</strong> successfully offloads 85% of AI compute from the core InsuranceSuite database during peak hurricane renewal events.
              </p>
           </div>
        </div>
      )}
    </div>
  );
};

export default EnterpriseWorkbench;
