import React, { useState, useEffect, createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, ShieldCheck, Activity, Settings, LogOut, 
  Layers, Thermometer, BookOpen, Library, Globe, FlaskConical,
  HelpCircle, X, ArrowRight, ArrowLeft, Sparkles, ChevronRight,
  Stethoscope, CreditCard, Monitor, Cpu, Wrench, History,
  Link2, Share2
} from 'lucide-react';

import Dashboard from './components/Dashboard';
import SubmissionIntake from './components/SubmissionIntake';
import UnderwritingCoPilot from './components/UnderwritingCoPilot';
import OpsMonitor from './components/OpsMonitor';
import RegressionIntelligence from './components/RegressionIntelligence';
import DocumentationVault from './components/DocumentationVault';
import Glossary from './components/Glossary';
import ComplianceControl from './components/ComplianceControl';
import ClaimsHub from './components/ClaimsHub';
import BillingHub from './components/BillingHub';
import AgentPortal from './components/AgentPortal';
import NisekoLab from './components/NisekoLab';
import EnterpriseWorkbench from './components/EnterpriseWorkbench';
import ConnectorsHub from './components/ConnectorsHub';
import DataLineage from './components/DataLineage';

// ─── CONTEXT ─────────────────────────────────────────────────────────────────
export const RegionContext = createContext();
export const KillSwitchContext = createContext();

// ─── ONBOARDING TOUR ─────────────────────────────────────────────────────────
const tourSteps = [
  {
    title: '🚀 Phase 7: Enterprise Integration v6.0',
    description: 'Aurelius is now a complete enterprise simulation. This is the "Demo by Prakush Shende"—the ultimate professional-grade portfolio piece for April 2026.',
    path: '/',
  },
  {
    title: '🏢 The Connectors Hub',
    description: 'We now simulate real integrations with SAP, SharePoint, SFTP, and MS Microsoft Graph. This is where legacy meets modern cloud.',
    path: '/connectors',
  },
  {
    title: '🔗 Visual Data Lineage',
    description: 'Every byte is tracked. See the complete map of data ingestion to downstream ledger entry. Total audit transparency.',
    path: '/lineage',
  },
  {
    title: '📜 Advanced Learning Bridge',
    description: 'Our new Glossary features a [Newbie] / [Expert] toggle. We communicate effectively with both C-suite and Engineers.',
    path: '/glossary',
  },
  {
    title: '🛡️ Global GRC Framework',
    description: 'Changing the region now broadcasts a compliance signal across the entire app. The "AI Kill Switch" is global.',
    path: '/compliance',
  },
  {
    title: '✅ Final Handover',
    description: 'The simulation is dynamic—all claims and billing data regenerate on click. You are ready to present this to the most demanding Guidewire Executive.',
    path: '/',
  },
];

const OnboardingTour = ({ onClose }) => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const current = tourSteps[step];
  const isLast = step === tourSteps.length - 1;

  const handleNext = () => {
    if (isLast) { onClose(); return; }
    const next = step + 1;
    setStep(next);
    if (tourSteps[next].path) navigate(tourSteps[next].path);
  };

  const handlePrev = () => {
    if (step === 0) return;
    const prev = step - 1;
    setStep(prev);
    if (tourSteps[prev].path) navigate(tourSteps[prev].path);
  };

  useEffect(() => {
    if (current.path) navigate(current.path);
  }, []);

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 1000,
      background: 'rgba(2, 6, 23, 0.85)',
      backdropFilter: 'blur(4px)',
      display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
      padding: '2rem',
    }}>
      <div className="glass" style={{
        width: '100%', maxWidth: '600px',
        padding: '2rem',
        border: '1px solid rgba(99, 102, 241, 0.3)',
        boxShadow: '0 0 60px rgba(99, 102, 241, 0.15)',
        animation: 'fadeIn 0.3s ease forwards',
        position: 'relative'
      }}>
        <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '1.5rem' }}>
          {tourSteps.map((_, i) => (
            <div key={i} style={{
              height: '3px', flex: 1, borderRadius: '3px',
              background: i <= step ? 'var(--primary)' : 'rgba(255,255,255,0.08)',
              transition: 'background 0.3s ease'
            }} />
          ))}
        </div>

        <button onClick={onClose} style={{ 
          position: 'absolute', top: '1.5rem', right: '1.5rem',
          background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', padding: '0.25rem'
        }}>
          <X size={18} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <Sparkles size={20} color="var(--primary)" />
          <span style={{ fontSize: '0.7rem', color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05rem' }}>
            Enterprise Phase {step + 1} of {tourSteps.length}
          </span>
        </div>

        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', lineHeight: '1.4' }}>{current.title}</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.7', marginBottom: '2rem' }}>{current.description}</p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'space-between', alignItems: 'center' }}>
          <button
            onClick={onClose}
            style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '0.8rem', fontFamily: 'Inter, sans-serif', padding: '0.5rem 0' }}
          >
            Skip tour
          </button>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            {step > 0 && (
              <button onClick={handlePrev} className="btn btn-outline" style={{ padding: '0.625rem 1.25rem', fontSize: '0.875rem', gap: '0.4rem' }}>
                <ArrowLeft size={16} /> Back
              </button>
            )}
            <button onClick={handleNext} className="btn btn-primary" style={{ padding: '0.625rem 1.5rem', fontSize: '0.875rem', gap: '0.4rem' }}>
              {isLast ? 'Finish Tour' : 'Next'} {!isLast && <ArrowRight size={16} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── SIDEBAR ─────────────────────────────────────────────────────────────────
const Sidebar = ({ onStartTour }) => {
  const location = useLocation();

  const navItems = [
    { name: 'Transformation Hub', path: '/', icon: <LayoutDashboard size={20} />, section: null },
    
    { name: 'AI Submission', path: '/submission', icon: <FlaskConical size={20} />, section: 'Suite Operations' },
    { name: 'Underwriting Co-Pilot', path: '/underwriting', icon: <ShieldCheck size={20} />, section: null },
    { name: 'Claims AI Triage', path: '/claims', icon: <Stethoscope size={20} />, section: null },
    { name: 'Billing Exceptions', path: '/billing', icon: <CreditCard size={20} />, section: null },

    { name: 'Connectors & Ingestion', path: '/connectors', icon: <Link2 size={20} />, section: 'Enterprise System Hub' },
    { name: 'Visual Data Lineage', path: '/lineage', icon: <Share2 size={20} />, section: null },
    { name: 'Agent Portal (Jutro)', path: '/agent-portal', icon: <Monitor size={20} />, section: null },
    
    { name: 'Architecture Lab', path: '/architecture', icon: <Cpu size={20} />, section: 'Digital & Architecture' },
    { name: 'Ops & Int Health', path: '/ops', icon: <Activity size={20} />, section: null },
    { name: 'Regression Hub', path: '/regression', icon: <Thermometer size={20} />, section: null },
    
    { name: 'Enterprise Workbench', path: '/workbench', icon: <Wrench size={20} />, section: 'Expert Tools' },
    { name: 'Documentation Vault', path: '/docs', icon: <Library size={20} />, section: null },
    { name: 'Industry Glossary', path: '/glossary', icon: <BookOpen size={20} />, section: null },
    { name: 'Compliance Tower', path: '/compliance', icon: <Globe size={20} />, section: null },
  ];

  const renderNavItem = (item) => (
    <Link
      key={item.path}
      to={item.path}
      style={{
        display: 'flex', alignItems: 'center', gap: '1rem',
        padding: '0.65rem 1.15rem', borderRadius: '10px', textDecoration: 'none',
        color: location.pathname === item.path ? 'var(--text)' : 'var(--text-muted)',
        background: location.pathname === item.path ? 'rgba(99, 102, 241, 0.08)' : 'transparent',
        transition: 'all 0.2s ease',
        border: location.pathname === item.path ? '1px solid rgba(99, 102, 241, 0.15)' : '1px solid transparent',
        fontSize: '0.85rem'
      }}
    >
      <span style={{ color: location.pathname === item.path ? 'var(--primary)' : 'inherit', flexShrink: 0 }}>
        {item.icon}
      </span>
      <span style={{ fontWeight: 500 }}>{item.name}</span>
      {location.pathname === item.path && <ChevronRight size={14} style={{ marginLeft: 'auto', color: 'var(--primary)', opacity: 0.6 }} />}
    </Link>
  );

  let lastSection = null;
  const navWithSections = navItems.map((item, i) => {
    const showSection = item.section && item.section !== lastSection;
    if (item.section) lastSection = item.section;
    return { ...item, showSection };
  });

  return (
    <aside className="glass" style={{ 
      width: '280px', height: '100vh', padding: '1.25rem 1rem', 
      position: 'fixed', left: 0, top: 0, zIndex: 100,
      display: 'flex', flexDirection: 'column'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1.5rem', padding: '0 0.25rem' }}>
        <div style={{ 
          background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
          width: '34px', height: '34px', borderRadius: '10px', 
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
        }}>
          <Layers style={{ color: 'white' }} size={20} />
        </div>
        <div>
          <h1 style={{ fontSize: '1rem', color: 'var(--text)', marginBottom: '-3px', letterSpacing: '0.04rem' }}>AURELIUS V6</h1>
          <span style={{ fontSize: '0.5rem', color: 'var(--text-muted)', letterSpacing: '0.04rem', textTransform: 'uppercase', display: 'block' }}>Strategy: Prakush Shende</span>
        </div>
      </div>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.1rem', flex: 1, overflowY: 'auto' }}>
        {navWithSections.map((item) => (
          <React.Fragment key={item.path}>
            {item.showSection && (
              <p style={{ fontSize: '0.55rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08rem', padding: '1.25rem 1.15rem 0.5rem 1.15rem', fontWeight: 700 }}>{item.section}</p>
            )}
            {renderNavItem(item)}
          </React.Fragment>
        ))}
      </nav>

      <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem', marginTop: '0.5rem' }}>
        <button 
          onClick={onStartTour}
          style={{ 
            width: '100%', display: 'flex', alignItems: 'center', gap: '0.75rem',
            padding: '0.5rem 1rem', borderRadius: '8px', cursor: 'pointer',
            background: 'rgba(99,102,241,0.05)', border: '1px solid rgba(99,102,241,0.15)',
            color: 'var(--primary)', fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', fontWeight: 600,
            marginBottom: '0.75rem'
          }}
        >
          <History size={14} /> Enterprise Walkthrough
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(135deg, #6366f1, #ec4899)', border: '2px solid rgba(255, 255, 255, 0.1)', flexShrink: 0 }} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text)' }}>Prakush Shende</p>
            <p style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>Senior AI Product Management</p>
          </div>
          <LogOut size={14} color="var(--text-muted)" style={{ cursor: 'pointer' }} />
        </div>
      </div>
    </aside>
  );
};

const Header = ({ region, setRegion }) => {
  const killSwitch = useContext(KillSwitchContext);
  return (
    <header style={{ 
      height: '60px', padding: '0 2rem 0 280px', 
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      borderBottom: '1px solid var(--border)', position: 'sticky', top: 0,
      background: killSwitch?.active ? 'rgba(239, 68, 68, 0.1)' : 'rgba(2, 6, 23, 0.85)', 
      backdropFilter: 'blur(10px)', zIndex: 1001,
      transition: 'all 0.3s ease'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingLeft: '1rem' }}>
           <h2 style={{ fontSize: '0.85rem', color: 'var(--text)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04rem' }}>Demo by Prakush Shende</h2>
           <span className={killSwitch?.active ? "badge-quarantine" : "tag-modern"}>
              {killSwitch?.active ? "AI KILL SWITCH ACTIVE" : "OLOS v10.2 (APR 2026)"}
           </span>
        </div>
        <div className="glass" style={{ padding: '0.25rem 0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderRadius: '8px', background: 'var(--surface)' }}>
          <Globe size={12} color="var(--primary)" />
          <select 
            value={region} 
            onChange={(e) => setRegion(e.target.value)}
            style={{ 
              background: 'transparent', 
              border: 'none', 
              color: 'var(--text)', 
              fontSize: '0.65rem', 
              outline: 'none', 
              cursor: 'pointer', 
              fontFamily: 'Inter',
              fontWeight: 600
            }}
          >
            <option value="US-NAIC" style={{ background: 'var(--surface)', color: 'var(--text)' }}>USA: NAIC Standard</option>
            <option value="UK-FCA" style={{ background: 'var(--surface)', color: 'var(--text)' }}>UK: FCA Compliant</option>
            <option value="EU-AI-ACT" style={{ background: 'var(--surface)', color: 'var(--text)' }}>EU: AI Act (April 2026)</option>
            <option value="AU-APRA" style={{ background: 'var(--surface)', color: 'var(--text)' }}>AUS: APRA Certified</option>
          </select>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: killSwitch?.active ? 'rgba(239, 68, 68, 0.1)' : 'rgba(16, 185, 129, 0.1)', color: killSwitch?.active ? '#ef4444' : '#10b981', padding: '0.3rem 0.65rem', borderRadius: '6px', fontSize: '0.7rem', fontWeight: 600 }}>
          <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: killSwitch?.active ? '#ef4444' : '#10b981' }} className={killSwitch?.active ? "" : "pulse"} />
          {killSwitch?.active ? "SAP LEDGER SYNC: SUSPENDED" : "SAP LEDGER SYNC: OK"}
        </div>
        <Settings size={16} color="var(--text-muted)" style={{ cursor: 'pointer' }} />
      </div>
    </header>
  );
};

const FooterBranding = () => (
  <div className="footer-branding">
    Guidewire AI-Ops Hub v6.0 | Professional Portfolio <strong>Demo by&nbsp;Prakush Shende&nbsp;</strong> | Olos Cloud Service Architecture | Senior AI PM Strategy | April 2026
  </div>
);

function AppInner() {
  const [region, setRegion] = useState('US-NAIC');
  const [showTour, setShowTour] = useState(false);
  const [killSwitchActive, setKillSwitchActive] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem('aurelius_tour_v7_seen');
    if (!seen) {
      setShowTour(true);
      sessionStorage.setItem('aurelius_tour_v7_seen', '1');
    }
  }, []);

  return (
    <RegionContext.Provider value={region}>
      <KillSwitchContext.Provider value={{ active: killSwitchActive, toggle: () => setKillSwitchActive(!killSwitchActive) }}>
        <div style={{ minHeight: '100vh', background: 'var(--background)' }}>
          <Sidebar onStartTour={() => setShowTour(true)} />
          <div style={{ marginLeft: '280px' }}>
            <Header region={region} setRegion={setRegion} />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Dashboard region={region} />} />
                <Route path="/submission" element={<SubmissionIntake />} />
                <Route path="/underwriting" element={<UnderwritingCoPilot />} />
                <Route path="/claims" element={<ClaimsHub />} />
                <Route path="/billing" element={<BillingHub />} />
                <Route path="/connectors" element={<ConnectorsHub />} />
                <Route path="/lineage" element={<DataLineage />} />
                <Route path="/agent-portal" element={<AgentPortal />} />
                <Route path="/architecture" element={<NisekoLab />} />
                <Route path="/ops" element={<OpsMonitor />} />
                <Route path="/regression" element={<RegressionIntelligence />} />
                <Route path="/workbench" element={<EnterpriseWorkbench />} />
                <Route path="/docs" element={<DocumentationVault />} />
                <Route path="/glossary" element={<Glossary />} />
                <Route path="/compliance" element={<ComplianceControl region={region} />} />
              </Routes>
            </main>
          </div>
          <FooterBranding />
          {showTour && <OnboardingTour onClose={() => setShowTour(false)} />}
        </div>
      </KillSwitchContext.Provider>
    </RegionContext.Provider>
  );
}

function App() {
  return (
    <Router>
      <AppInner />
    </Router>
  );
}

export default App;
