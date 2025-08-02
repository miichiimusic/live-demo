// components/Footer.js

import Link from 'next/link';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Left: site navigation */}
        <nav className={styles.nav}>
          <Link href="/" className={styles.link}>
            Home
          </Link>
          <Link href="/about" className={styles.link}>
            About
          </Link>
          <Link href="/process" className={styles.link}>
            Process
          </Link>
          <Link href="/contact" className={styles.link}>
            Contact
          </Link>
        </nav>

        {/* Right: simple copyright */}
        <div className={styles.copy}>
          © {new Date().getFullYear()} éclat by HKM. All rights reserved.
        </div>
      </div>
    </footer>
  );
}