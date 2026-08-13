import { useState, useRef, useEffect } from 'react';
import styles from './terminal.module.css';

const COMMANDS = {
  help: `Available commands:
  help      - Display available CLI commands
  stack     - Show core data engineering tech stack
  metrics   - Display operational metrics across 4 projects
  contact   - Display email, LinkedIn, and booking info
  clear     - Clear terminal screen`,
  stack: `Tech Stack:
  - Streaming: PySpark Structured Streaming, Apache Kafka (KRaft), Debezium CDC, AWS Kinesis
  - Lakehouse: Databricks (Auto Loader), AWS S3, Delta Lake 3.x, DuckDB 1.1 (Out-of-Core)
  - Analytics & Data Quality: dbt Core 1.8, Pandera Contracts, SHA-256 PII Hashing
  - Machine Learning & Serving: Redis 7.0 (Sub-10ms), FastAPI, XGBoost (Asymmetric F-beta)
  - Orchestration & IaC: Apache Airflow 2.8, Terraform (705 lines), Docker, Databricks DABs`,
  metrics: `Project Metrics Overview:
  [1] Coverdrive Lakehouse    : 1,264,534 Ball Records | 35/35 Passed | -74% Skew
  [2] Fraud Feature Store     : Sub-10ms Redis SLA    | 11/11 Passed | 100% PII Masked
  [3] Credit Risk Pipeline    : 57M Rows / <4GB RAM   | 28/28 Passed | F-beta (b=2.5)
  [4] Supply Chain Telemetry  : 50,000 Events/Sec     |  5/5 Passed  | Databricks DABs`,
  contact: `Contact Details:
  - Email   : nadeemtheba8@gmail.com
  - LinkedIn: https://linkedin.com/in/nadeem-theba
  - GitHub  : https://github.com/NADEEMTHEBA8`,
};

export function Terminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'output', text: 'Welcome to Nadeem Theba CLI Terminal v2.4 (Type "help" for commands)' },
  ]);
  const terminalBodyRef = useRef(null);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  const handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    const newHistory = [...history, { type: 'input', text: `$ ${input}` }];
    if (COMMANDS[cmd]) {
      newHistory.push({ type: 'output', text: COMMANDS[cmd] });
    } else {
      newHistory.push({
        type: 'output',
        text: `Command not found: "${cmd}". Type "help" for a list of valid commands.`,
      });
    }

    setHistory(newHistory);
    setInput('');
  };

  return (
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
            placeholder="Type command ('help', 'stack', 'metrics')..."
          />
        </form>
      </div>
    </div>
  );
}
