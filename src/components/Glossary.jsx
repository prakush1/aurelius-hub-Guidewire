import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  Filter, 
  Terminal, 
  ExternalLink,
  BookMarked,
  Info,
  Clock,
  Zap,
  Layers,
  Globe,
  Database,
  History,
  GraduationCap
} from 'lucide-react';

const Glossary = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [level, setLevel] = useState('Senior'); // Newbie or Senior

  const categories = ['All', 'Guidewire Core', 'AI-Ops', 'Legacy / Retired', 'Olos Standard', 'Enterprise Integration'];

  const terms = [
    {
      term: 'Olos Release (v10.2)',
      definition: 'The current April 2026 Guidewire Cloud standard. Focuses on full-suite RESTability and the Integrated Edge v2 framework.',
      simple: 'The current 2026 version of the software.',
      category: 'Olos Standard',
      isModern: true,
      citation: 'https://www.guidewire.com/products/cloud-platform'
    },
    {
      term: 'NAIC AI Model Bulletin',
      definition: 'Regulatory guidance from the USA National Association of Insurance Commissioners on AI governance.',
      simple: 'The governments rulebook for how insurance AI must behave.',
      category: 'AI-Ops',
      isModern: true,
      citation: 'https://content.naic.org/cmte_ex_innovation_ai_ms.htm'
    },
    {
      term: 'EU AI Act (Title III)',
      definition: 'Strict European legislation classifying insurance underwriting as a high-risk AI application.',
      simple: 'Europe\'s law that treats insurance AI like a high-stakes clinical tool.',
      category: 'AI-Ops',
      isModern: true,
      citation: 'https://artificialintelligenceact.eu/'
    },
    {
      term: 'OData Protocol (SAP)',
      definition: 'The standard for real-time ledger synchronization between Guidewire and SAP S/4HANA.',
      simple: 'The language our system uses to talk to the company bank account.',
      category: 'Enterprise Integration',
      isModern: true
    },
    {
      term: 'ACORD Standards',
      definition: 'The industry-standard XML/JSON schema for sharing insurance data across various platforms.',
      simple: 'The universal language for insurance forms.',
      category: 'Guidewire Core',
      citation: 'https://www.acord.org/'
    },
    {
      term: 'Subrogation',
      definition: 'The process where an insurer pursues a third party that caused a loss to recover costs.',
      simple: 'Asking the person who caused the accident to pay the insurance company back.',
      category: 'Guidewire Core'
    },
    {
      term: 'Premium Leakage',
      definition: 'Revenue lost due to poor data extraction, incorrect classifications, or billing errors.',
      simple: 'The money a company loses when it makes silly mistakes or misses details.',
      category: 'Guidewire Core'
    },
    {
      term: 'Predictive Triage',
      definition: 'Using AI to route claims to the most effective adjuster based on complexity and history.',
      simple: 'A smart sorting machine for incoming insurance cases.',
      category: 'AI-Ops',
      isModern: true
    },
    {
      term: 'Direct Bills',
      definition: 'A billing method where the insurance company bills the policyholder directly, bypassing the agent.',
      simple: 'Sending the bill straight to the customer.',
      category: 'Guidewire Core'
    },
    {
      term: 'Microsoft Graph',
      definition: 'The API gateway for Aurelius to ingest data from Outlook, OneDrive, and Teams.',
      simple: 'The bridge that lets our AI read your work emails and files.',
      category: 'Enterprise Integration',
      isModern: true
    },
    {
      term: 'First Notice of Loss (FNOL)',
      definition: 'The initial report made to an insurance company following a loss or accident.',
      simple: 'The very first "Help, I had an accident!" phone call or message.',
      category: 'Guidewire Core'
    },
    {
      term: 'Explainable AI (XAI)',
      definition: 'AI models designed to provide a human-readable justification for their output scores.',
      simple: 'A robot that explains WHY it made a certain choice.',
      category: 'AI-Ops',
      isModern: true
    },
    {
      term: 'Reserve Parity',
      definition: 'Ensuring the funds set aside for claims match the actual forecasted liability in real-time.',
      simple: 'Making sure the "emergency fund" has exactly enough money in it.',
      category: 'Guidewire Core'
    },
    {
      term: 'REST API',
      definition: 'Representational State Transfer; the backbone of modern Guidewire Cloud integrations.',
      simple: 'The modern way different computer programs talk to each other.',
      category: 'Olos Standard'
    },
    {
      term: 'Gosu',
      definition: 'The JVM-based programming language used for legacy Guidewire configuration.',
      simple: 'The old coding language that Guidewire used to use.',
      category: 'Legacy / Retired'
    },
    {
      term: 'Park City Release',
      definition: 'The future 2026/2027 Guidewire roadmap focusing on full service-tier autonomy.',
      simple: 'The next big update coming after Olos.',
      category: 'Olos Standard'
    },
    {
      term: 'Data Lineage',
      definition: 'The end-to-end map of data movement from ingestion to its final destination.',
      simple: 'A map showing where every piece of data came from and where it went.',
      category: 'AI-Ops',
      isModern: true
    },
    {
      term: 'Binding',
      definition: 'The act of making an insurance policy effective and active.',
      simple: 'Hitting the "Start" button on a new insurance policy.',
      category: 'Guidewire Core'
    },
    {
      term: 'Ledger Hash',
      definition: 'An encrypted string verifying that a financial entry hasn\'t been tampered with.',
      simple: 'A digital seal that proves nobody messed with the money records.',
      category: 'Enterprise Integration',
      isModern: true
    },
    {
      term: 'Reinsurance',
      definition: 'Insurance for insurance companies; shifting risk to a larger global carrier.',
      simple: 'Insurance for the insurance company itself.',
      category: 'Guidewire Core'
    }
  ];

  const filteredTerms = terms.filter(t => {
    const matchesSearch = t.term.toLowerCase().includes(search.toLowerCase()) || 
                         t.definition.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === 'All' || t.category === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Glossary Header */}
      <div className="glass animate-fade" style={{ padding: '2.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <BookMarked color="#10b981" size={24} />
            </div>
            <div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '0.2rem' }}>Enterprise AI-Ops Glossary</h2>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Learning Bridge: Legacy 2024 $\rightarrow$ Microsoft/SAP Ecosystem 2026</p>
            </div>
          </div>
          
          {/* Level Toggle */}
          <div style={{ display: 'flex', background: 'rgba(255,255,255,0.05)', padding: '0.3rem', borderRadius: '8px', border: '1px solid var(--border)' }}>
             <button 
               onClick={() => setLevel('Newbie')}
               style={{ 
                 padding: '0.4rem 1rem', borderRadius: '6px', fontSize: '0.7rem', fontWeight: 700, cursor: 'pointer',
                 background: level === 'Newbie' ? 'rgba(16, 185, 129, 0.2)' : 'transparent',
                 color: level === 'Newbie' ? '#10b981' : 'var(--text-muted)',
                 border: 'none', transition: 'all 0.2s'
               }}
             >
                <GraduationCap size={14} style={{ marginRight: '0.4rem', verticalAlign: 'middle' }} /> NEWBIE
             </button>
             <button 
               onClick={() => setLevel('Senior')}
               style={{ 
                 padding: '0.4rem 1rem', borderRadius: '6px', fontSize: '0.7rem', fontWeight: 700, cursor: 'pointer',
                 background: level === 'Senior' ? 'rgba(99, 102, 241, 0.2)' : 'transparent',
                 color: level === 'Senior' ? 'var(--primary)' : 'var(--text-muted)',
                 border: 'none', transition: 'all 0.2s'
               }}
             >
                <Terminal size={14} style={{ marginRight: '0.4rem', verticalAlign: 'middle' }} /> SENIOR BA
             </button>
          </div>
        </div>

        {/* Search & Filter */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '300px', position: 'relative' }}>
            <Search style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} size={16} />
            <input 
              type="text" 
              placeholder="Search concepts, vendors, or protocols..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="glass"
              style={{ width: '100%', padding: '0.875rem 1rem 0.875rem 3rem', border: '1px solid var(--border)', borderRadius: '12px', background: 'rgba(255,255,255,0.02)', color: 'white', fontSize: '1rem', outline: 'none' }}
            />
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {categories.map(cat => (
              <button 
                key={cat} 
                onClick={() => setFilter(cat)}
                style={{ 
                  padding: '0.5rem 1rem', borderRadius: '8px', border: '1px solid var(--border)', cursor: 'pointer', fontSize: '0.75rem', fontWeight: 600,
                  background: filter === cat ? 'var(--primary)' : 'rgba(255,255,255,0.03)',
                  color: filter === cat ? 'white' : 'var(--text-muted)',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Glossary Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '1.5rem' }}>
        {filteredTerms.map((t, i) => (
          <div key={i} className="card glass animate-fade" style={{ padding: '1.75rem', position: 'relative', borderTop: t.isLegacy ? '2px solid #f59e0b' : t.isModern ? '2px solid var(--primary)' : '1px solid var(--border)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
               <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.6rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase' }}>{t.category}</span>
                  {level === 'Newbie' && <span className="newbie-pill">SIMPLE VIEW</span>}
                  {level === 'Senior' && <span className="expert-pill">TECHNICAL</span>}
               </div>
              {t.isModern && <span className="tag-modern" style={{ fontSize: '0.5rem' }}>⚡ OLOS v10</span>}
            </div>
            
            <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: t.isModern ? 'var(--primary)' : 'var(--text)' }}>{t.term}</h4>
            
            {level === 'Newbie' ? (
              <p style={{ fontSize: '0.9rem', color: '#10b981', lineHeight: '1.6', marginBottom: '1.5rem', fontWeight: 500 }}>
                 <Info size={14} style={{ marginRight: '0.4rem' }} /> {t.simple || t.definition}
              </p>
            ) : (
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.5rem' }}>{t.definition}</p>
            )}

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.7rem', color: 'var(--primary)', cursor: 'pointer', fontWeight: 600 }}>
               View Deep Strategy <ExternalLink size={12} />
            </div>
          </div>
        ))}
      </div>

      <div className="card glass" style={{ padding: '2rem', display: 'flex', gap: '2rem', alignItems: 'center' }}>
         <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <GraduationCap color="#10b981" size={24} />
         </div>
         <div>
            <h5 style={{ fontSize: '0.95rem', marginBottom: '0.25rem' }}>April 2026 Strategy Handover</h5>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
               This glossary is maintained by <strong>Prakush Shende</strong> as an "Education Engine." It bridges the gap for non-technical stakeholders (Newbie) while providing architectural grounding for Guidewire Engineers (Senior BA).
            </p>
         </div>
         <button className="btn btn-outline" style={{ marginLeft: 'auto', whiteSpace: 'nowrap' }}>SOP: Learning Path</button>
      </div>
    </div>
  );
};

export default Glossary;
