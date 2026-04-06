import React, { useState } from 'react';
import { 
  Thermometer, 
  RefreshCcw, 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  ShieldCheck, 
  Zap, 
  Info,
  Server,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const RegressionIntelligence = () => {
  const [testData, setTestData] = useState([
    {
      id: 'REG-5021',
      name: 'OOTB Entity Integrity',
      status: 'Passed',
      coverage: '98%',
      duration: '4m 12s',
      driftRisk: 'Low',
      lastRun: '12 mins ago',
      details: 'Verified 42 core entities (PolicyPeriod, Account, Contact) across all Niseko extensions.',
      impact: 'Minimal risk of schema mismatch.'
    },
    {
      id: 'REG-5018',
      name: 'Edge API Response Delta',
      status: 'Warning',
      coverage: '82%',
      duration: '8m 45s',
      driftRisk: 'High',
      lastRun: '1 hour ago',
      details: 'Detected 450ms latency spike in /claims/fnol endpoint compared to UAT baseline.',
      impact: 'Potential timeout risks for Agent Portal upstream.'
    },
    {
      id: 'REG-4992',
      name: 'Gosu Rule Parity check',
      status: 'Critical',
      coverage: '100%',
      duration: '1m 05s',
      driftRisk: 'Critical',
      lastRun: '2 mins ago',
      details: 'Detected environment drift: RenewalCheck batch process is disabled in PROD but enabled in UAT/DEV.',
      impact: 'CRITICAL: Billing leakage risk detected. Immediate reconciliation required.'
    }
  ]);

  const [activeTest, setActiveTest] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const current = testData[activeTest];

  const handleRerun = () => {
    setIsRunning(true);
    // Simulate regression suite execution
    setTimeout(() => {
      const updatedData = [...testData];
      updatedData[activeTest] = { ...updatedData[activeTest], lastRun: 'Just now' };
      setTestData(updatedData);
      setIsRunning(false);
    }, 3000);
  };

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      // Actually trigger a file download
      const content = `AURELIUS REGRESSION AUDIT LOG\nArtifact ID: ${current.id}\nTest Name: ${current.name}\nStatus: ${current.status}\nTimestamp: ${new Date().toISOString()}\n\n-- TECHNICAL DETAILS --\n${current.details}\n\n-- IMPACT ANALYSIS --\n${current.impact}\n\nRECONCILIATION SIGNATURE: SHA-256: 8x92...j72-Prakush-Demo`;
      const blob = new Blob([content], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `Audit_Log_${current.id}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      setDownloading(false);
    }, 1500);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Regression Header */}
      <div className="glass animate-fade" style={{ padding: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(236, 72, 153, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Thermometer color="#ec4899" size={24} />
            </div>
            <div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '0.2rem' }}>Regression Hub & Drift Monitor</h2>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>AI-Assisted CI/CD & Configuration Lifecycle Quality</p>
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
             <span style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ec4899' }}>94%</span>
             <p style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Regression Coverage</p>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 2fr', gap: '2rem' }}>
        {/* Test Suite List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
           <h3 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05rem' }}>Active Test Suites</h3>
           {testData.map((test, i) => (
             <div 
               key={test.id} 
               className={`card glass ${activeTest === i ? 'active' : ''}`} 
               onClick={() => !isRunning && setActiveTest(i)}
               style={{ padding: '1.25rem', cursor: isRunning ? 'not-allowed' : 'pointer', borderLeft: activeTest === i ? '4px solid #ec4899' : '4px solid transparent', opacity: isRunning ? 0.6 : 1 }}
             >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                   <span style={{ fontSize: '0.75rem', fontWeight: 700 }}>{test.id}</span>
                   <span className={`badge ${test.status === 'Passed' ? 'badge-success' : test.status === 'Warning' ? 'badge-warning' : 'badge-danger'}`} style={{ fontSize: '0.6rem' }}>{test.status}</span>
                </div>
                <h5 style={{ fontSize: '0.85rem', marginBottom: '0.25rem' }}>{test.name}</h5>
                <p style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>Last Run: {test.lastRun}</p>
             </div>
           ))}
           <div className="card glass" style={{ marginTop: 'auto', border: '1px dashed var(--border)', textAlign: 'center', padding: '1.5rem' }}>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>Need deeper configuration audit?</p>
              <Link to="/workbench" className="btn btn-outline" style={{ fontSize: '0.7rem', width: '100%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                 GO TO WORKBENCH <ArrowRight size={14} />
              </Link>
           </div>
        </div>

        {/* Test Intelligence Detail */}
        <div className="card glass animate-fade" style={{ padding: '2.5rem' }}>
           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2.5rem' }}>
              <div>
                 <h3 style={{ fontSize: '1.5rem' }}>{current.name}</h3>
                 <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Integration Test Suite | Artifact: {current.id}</p>
              </div>
              <div style={{ textAlign: 'center', padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', minWidth: '120px' }}>
                 <p style={{ fontSize: '0.6rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>DRIFT RISK</p>
                 <p style={{ fontSize: '1rem', fontWeight: 800, color: current.driftRisk === 'Critical' ? '#ef4444' : current.driftRisk === 'High' ? '#f59e0b' : '#10b981' }}>{current.driftRisk.toUpperCase()}</p>
              </div>
           </div>

           <div style={{ gridTemplateColumns: 'repeat(3, 1fr)', display: 'grid', gap: '1.5rem', marginBottom: '2.5rem' }}>
              <div className="glass" style={{ padding: '1rem', textAlign: 'center' }}>
                 <ShieldCheck size={16} color="var(--primary)" style={{ marginBottom: '0.5rem' }} />
                 <p style={{ fontSize: '0.6rem', color: 'var(--text-muted)' }}>TEST COVERAGE</p>
                 <p style={{ fontSize: '1rem', fontWeight: 700 }}>{current.coverage}</p>
              </div>
              <div className="glass" style={{ padding: '1rem', textAlign: 'center' }}>
                 <Clock size={16} color="var(--primary)" style={{ marginBottom: '0.5rem' }} />
                 <p style={{ fontSize: '0.6rem', color: 'var(--text-muted)' }}>EXEC. DURATION</p>
                 <p style={{ fontSize: '1rem', fontWeight: 700 }}>{current.duration}</p>
              </div>
              <div className="glass" style={{ padding: '1rem', textAlign: 'center' }}>
                 <Zap size={16} color="var(--primary)" style={{ marginBottom: '0.5rem' }} />
                 <p style={{ fontSize: '0.6rem', color: 'var(--text-muted)' }}>AI OPTIMIZED</p>
                 <p style={{ fontSize: '1rem', fontWeight: 700 }}>98%</p>
              </div>
           </div>

           <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ fontSize: '0.9rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                 <Info size={16} color="#ec4899" /> AI Observability Insights
              </h4>
              <div style={{ padding: '1.25rem', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', borderLeft: '3px solid #ec4899' }}>
                 <p style={{ fontSize: '0.85rem', lineHeight: '1.6', marginBottom: '1rem' }}>{current.details}</p>
                 <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}><strong>Root Cause Analysis:</strong> {current.impact}</p>
              </div>
           </div>

           <div style={{ display: 'flex', gap: '1rem' }}>
              <button 
                onClick={handleRerun}
                disabled={isRunning}
                className="btn btn-primary" 
                style={{ background: '#ec4899', borderColor: '#ec4899', flex: 1, gap: '0.5rem' }}
              >
                {isRunning ? <RefreshCcw size={16} className="pulse" /> : null}
                {isRunning ? 'RUNNING SUITE...' : 'RERUN SUITE'}
              </button>
              <button 
                onClick={handleDownload}
                disabled={downloading}
                className="btn btn-outline" 
                style={{ flex: 1, gap: '0.5rem' }}
              >
                {downloading ? 'GENERATING LOG...' : 'DOWNLOAD AUDIT LOG'}
              </button>
           </div>
        </div>
      </div>

      {/* Integration Pulse */}
      <div className="card glass" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
         <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Server size={18} color="#ec4899" />
            <div>
               <h5 style={{ fontSize: '0.85rem' }}>Regression Cluster Status</h5>
               <p style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>Provisioned on AWS Fargate | 12 instances active</p>
            </div>
         </div>
         <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
               <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }} className="pulse" />
               <span style={{ fontSize: '0.75rem' }}>UAT Sync</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
               <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f59e0b' }} className="pulse" />
               <span style={{ fontSize: '0.75rem' }}>PROD Lag (Drift)</span>
            </div>
         </div>
      </div>
    </div>
  );
};

export default RegressionIntelligence;
