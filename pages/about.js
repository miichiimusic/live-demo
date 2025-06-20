// pages/about.js

import Image from 'next/image';
import ContactSection from '../components/ContactSection';
import styles from '../styles/About.module.css';

export default function AboutPage() {
  return (
    <main className={styles.main}>
      {/* ===== Page Title (“About”) ===== */}
      <div className={styles.titleWrapper}>
        <span className={styles.line}></span>
        <h2 className={styles.aboutPageTitle}>ABOUT</h2>
        <span className={styles.line}></span>
      </div>

      {/* ===== Single About Item ===== */}
      <div className={styles.aboutContainer}>
        <div className={styles.aboutItem}>
          <Image
            src="/bio_photo.jpg"       /* put /about1.jpg into /public/ */
            alt="Our Origin"
            quality={100}
            width={600}
            height={400}
            className={styles.aboutImage}
            placeholder="empty"
          />
          <div className={styles.aboutText}>
            <p>
              Jewelry has always felt different to me — more personal, more permanent, more symbolic than anything else I wear. As someone who expresses so much through fashion, I’ve always seen jewelry as the quiet detail that says the most.Over time, sharing my style online turned into something much deeper. I started getting messages not just about what I was wearing, but how people could create something like it for themselves — something unique, something meaningful. That’s when the idea really started to take shape. I didn’t want to just recommend jewelry — I wanted to help people design it.
            </p>
            <p>
              To make this possible, I partnered with Gemsite, a jewelry manufacturer known for its excellence in craftsmanship and its unique structure: a set of specialized divisions, each focused on one part of the process — 3D design, machine casting, expert stone setting and global sourcing for high-quality diamonds and gemstones.I work closely with their team on every design, and together we’re able to offer something truly personal — jewelry that reflects your style, your story, or a moment you want to hold onto.
            </p>
          </div>
        </div>
      </div>

      {/* ===== Contact + Newsletter Section ===== */}
      <ContactSection />
    </main>
  );
}