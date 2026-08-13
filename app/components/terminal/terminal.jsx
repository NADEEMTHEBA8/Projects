import { useState, useRef, useEffect } from 'react';
import { BookModal } from '~/components/book-modal/book-modal';
import styles from './terminal.module.css';

const COMMANDS = {
  help: `Available CLI Commands:
  help      - Display list of interactive commands & usage
  stack     - Inspect core PySpark, Databricks, AWS, dbt & DuckDB tech stack
  metrics   - Query quantitative operational benchmarks across all 4 projects
  projects  - List featured case studies and repository links
  resume    - View resume summary & download PDF link
  book-call - Open interactive intro call scheduler modal
  contact   - Display email, LinkedIn, and GitHub links
  clear     - Clear terminal screen`,

  stack: `Core Data Engineering Tech Stack:
  --------------------------------------------------
  • Streaming & CDC : PySpark Structured Streaming, Apache Kafka (KRaft), Debezium CDC, AWS Kinesis
  • Lakehouse Engine : Databricks (Auto Loader), AWS S3, Delta Lake 3.x, DuckDB 1.1 (Out-of-Core)
  • Quality & dbt   : dbt Core 1.8, Shift-Left Pandera Contracts, SHA-256 PII Hashing
  • Cache & Serving : Redis 7.0 (Sub-10ms SLA), FastAPI Microservices, XGBoost (Asymmetric F-beta)
  • Orchestration   : Apache Airflow 2.8, Terraform (705 lines IaC), Docker, Databricks DABs`,

  metrics: `Quantitative Engineering Benchmarks:
  --------------------------------------------------
  [1] Coverdrive Lakehouse    : 1,264,534 Ball Records | 35/35 Tests | -74% Skew
  [2] Fraud Feature Store     : Sub-10ms Redis SLA    | 11/11 Tests | 100% PII Masked
  [3] Credit Risk Pipeline    : 57M Rows / <4GB RAM   | 28/28 Tests | F-beta (b=2.5)
  [4] Supply Chain Telemetry  : 50,000 Events/Sec     |  5/5 Tests  | Databricks DABs`,

  projects: `Featured Case Studies:
  --------------------------------------------------
  1. Coverdrive — Cricket Analytics Lakehouse
     Path: /projects/coverdrive | 1.26M Ball Delivery Rows
  2. Real-Time Fraud Feature Store
     Path: /projects/realtime-fraud-feature-store | Sub-10ms Latency
  3. Credit Risk Analytics Pipeline
     Path: /projects/credit-risk-analysis | 57M Rows / <4GB RAM
  4. Predictive Supply Chain Telemetry
     Path: /projects/supply-chain-telemetry-pipeline | 50,000 Events/Sec`,

  resume: `Resume & Technical Profile:
  --------------------------------------------------
  Name: Nadeem Theba
  Role: Senior Data Engineer · 3+ Years Experience
  PDF Resume Link: /nadeem-theba-resume.pdf
  Education: MSc Data Science & Analytics (University of Hertfordshire, UK)`,

  contact: `Direct Contact Channels:
  --------------------------------------------------
  • Email   : nadeemtheba8@gmail.com
  • Phone   : +91 97149 65149
  • LinkedIn: https://linkedin.com/in/nadeem-theba
  • GitHub  : https://github.com/NADEEMTHEBA8`,
};

const QUICK_COMMANDS = ['help', 'stack', 'metrics', 'projects', 'resume', 'book-call', 'contact', 'clear'];

export function Terminal() {
  const [input, setInput] = useState('');
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [history, setHistory] = useState([
    { type: 'output', text: 'Welcome to Nadeem Theba CLI Terminal v2.5\nType "help" or click command chips below to explore:' },
  ]);
  const terminalBodyRef = useRef(null);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  const executeCommand = cmdRaw => {
    const cmd = cmdRaw.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    if (cmd === 'book-call') {
      setIsBookModalOpen(true);
      setHistory(prev => [
        ...prev,
        { type: 'input', text: `$ ${cmd}` },
        { type: 'output', text: 'Opening "Book an Intro Call" modal window...' },
      ]);
      setInput('');
      return;
    }

    const newHistory = [...history, { type: 'input', text: `$ ${cmd}` }];
    if (COMMANDS[cmd]) {
      newHistory.push({ type: 'output', text: COMMANDS[cmd] });
    } else {
      newHistory.push({
        type: 'output',
        text: `Command not found: "${cmd}". Type "help" or click command chips for a list of valid commands.`,
      });
    }

    setHistory(newHistory);
    setInput('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    executeCommand(input);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.sectionHeader}>
        <div className={styles.badge}>💻 HANDS-ON DEVELOPER CLI</div>
        <h2 className={styles.heading}>Interactive Data Engineering Terminal</h2>
        <p className={styles.description}>
          Type Unix CLI commands or click quick-action pills below to query live architecture benchmarks, tech stack details, and contact options:
        </p>
        
        {/* Quick Command Chips */}
        <div className={styles.chipList}>
          {QUICK_COMMANDS.map(cmd => (
            <button
              key={cmd}
              type="button"
              className={styles.chip}
              onClick={() => executeCommand(cmd)}
            >
              $ {cmd}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.terminalContainer}>
        <div className={styles.terminalHeader}>
          <div className={styles.dots}>
            <span className={styles.redDot} />
            <span className={styles.yellowDot} />
            <span className={styles.greenDot} />
          </div>
          <div className={styles.title}>nadeem@data-eng-macbook:~</div>
        </div>

        <div className={styles.terminalBody} ref={terminalBodyRef}>
          {history.map((item, idx) => (
            <div key={idx} className={item.type === 'input' ? styles.inputLine : styles.outputLine}>
              <pre className={styles.pre}>{item.text}</pre>
            </div>
          ))}
          <form onSubmit={handleSubmit} className={styles.form}>
            <span className={styles.prompt}>$</span>
            <input
              type="text"
              className={styles.input}
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Type command ('help', 'stack', 'metrics', 'book-call')..."
            />
          </form>
        </div>
      </div>

      <BookModal isOpen={isBookModalOpen} onClose={() => setIsBookModalOpen(false)} />
    </div>
  );
}
