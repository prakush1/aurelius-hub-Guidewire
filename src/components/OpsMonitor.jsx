import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  Terminal, 
  Activity, 
  Server, 
  Database, 
  Cloud,
  ChevronRight,
  Wifi,
  WifiOff,
  History,
  RotateCcw,
  CheckCircle2
} from 'lucide-react';

const APIStatus = ({ name, endpoint, status, latency }) => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '10px', border: '1px solid var(--border)', marginBottom: '0.75rem' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <div style={{ padding: '0.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px' }}>
         {status === 'Operational' ? <Wifi size={18} color="#10b981" /> : (status === 'Degraded' ? <Activity size={18} color="#f59e0b" /> : <WifiOff size={18} color="#ef4444" />)}
      </div>
      <div>
         <p style={{ fontSize: '0.85rem', fontWeight: 600 }}>{name}</p>
         <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{endpoint}</p>
      </div>
    </div>
    <div style={{ textAlign: 'right' }}>
       <div style={{ fontSize: '0.85rem', color: status === 'Operational' ? '#10b981' : (status === 'Degraded' ? '#f59e0b' : '#ef4444') }}>{status}</div>
       <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{latency}ms</p>
    </div>
  </div>
);

const OpsMonitor = () => {
  const [logs, setLogs] = useState([
    { id: 1, text: "[SYSTEM] Initializing Guidewire Cloud Integration Hub...", type: "system" },
    { id: 2, text: "[AUTH] CarrierToken validated for PolicyCenter cluster.", type: "auth" },
    { id: 3, text: "[API] GET /risk-profiles/49201 returned 200 OK (142ms)", type: "api" },
  ]);

  const [simulating, setSimulating] = useState(false);

  const simulateFailure = () => {
    setSimulating(true);
    setLogs(prev => [...prev, { id: Date.now(), text: "[ERROR] MVR Service timeout! Retrying with cached strategy (1.5s delay)...", type: "error" }]);
    setTimeout(() => {
      setLogs(prev => [...prev, { id: Date.now(), text: "[RECOVERY] Partial success: Strategy CACHE-05 executed. Risk score updated.", type: "system" }]);
      setSimulating(false);
    }, 2000);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <div className="glass animate-fade" style={{ padding: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Guidewire Integration & Ops Monitor</h2>
        <p style={{ color: 'var(--text-muted)' }}>
          Real-time visibility into the InsuranceSuite integration ecosystem. 
          Demonstrating "Partial Success" state management—a key BA requirement for high-availability cloud platforms.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        {/* API Health Column */}
        <div className="card glass">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
             <h3 style={{ fontSize: '1.1rem' }}>External API Gateway</h3>
             <div className="badge badge-success">Hub Health: 100%</div>
          </div>
          
          <APIStatus name="Experian Credit Hub" endpoint="https://api.experian.com/v2/scores" status="Operational" latency={124} />
          <APIStatus name="LexisNexis C.L.U.E" endpoint="https://ln.insurance.com/claims/history" status="Operational" latency={238} />
          <APIStatus name="MVR State Service" endpoint="https://dmv-gateway.gov/mvr" status="Degraded" latency={1450} />
          <APIStatus name="FEMA Hazards API" endpoint="https://hazards.fema.gov/gis/nfhl" status="Operational" latency={82} />
          
          <div style={{ marginTop: '2rem', padding: '1rem', background: 'var(--background)', borderRadius: '12px', border: '1px solid var(--border)' }}>
             <h4 style={{ fontSize: '0.85rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Cloud size={16} color="var(--primary)" />
                Guidewire Cloud Standards Compliance
             </h4>
             <ul style={{ fontSize: '0.75rem', color: 'var(--text-muted)', listStyle: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={12} color="#10b981" /> API-First Architecture</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={12} color="#10b981" /> Asynchronous Message-Based Handling</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={12} color="#10b981" /> Data Masking on PII/PHI Fields</li>
             </ul>
          </div>
        </div>

        {/* Integration Console (Terminal) */}
        <div className="card glass" style={{ background: '#020617', border: '1px solid #1e293b' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
             <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Terminal size={18} color="var(--primary)" />
                <h3 style={{ fontSize: '1.05rem', color: 'var(--text)', fontWeight: 600 }}>Integration Console</h3>
             </div>
             <div style={{ display: 'flex', gap: '0.5rem' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444' }}></div>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f59e0b' }}></div>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }}></div>
             </div>
          </div>
          
          <div style={{ height: '300px', overflowY: 'auto', marginBottom: '1.5rem', fontFamily: '"Fira Code", monospace', fontSize: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
             {logs.map((log) => (
                <div key={log.id} style={{ 
                  color: log.type === 'error' ? '#ef4444' : (log.type === 'auth' ? '#ec4899' : (log.type === 'api' ? '#10b981' : '#94a3b8')) 
                }}>
                   {log.text}
                </div>
             ))}
             {simulating && (
                <div style={{ color: 'var(--primary)', animation: 'pulse 1s infinite' }}>
                   SYSTEM: Executing recovery protocol...
                </div>
             )}
          </div>
          
          <div style={{ display: 'flex', gap: '0.75rem' }}>
             <button 
                className="btn btn-primary" 
                style={{ flex: 1, fontSize: '0.8rem', background: '#ef4444', border: 'none' }}
                onClick={simulateFailure}
                disabled={simulating}
              >
                Simulate API Timeout
             </button>
             <button 
                className="btn btn-outline" 
                style={{ width: '50px', justifyContent: 'center' }}
                onClick={() => setLogs([{ id: Date.now(), text: "[SYSTEM] Console Cleared.", type: "system" }])}
             >
                <RotateCcw size={16} />
             </button>
          </div>
          
          <div style={{ marginTop: '1rem', fontSize: '0.65rem', color: '#475569', textAlign: 'center' }}>
             PROMPT: type `help` for command list | SESSION: PC-CLOUD-892
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpsMonitor;
