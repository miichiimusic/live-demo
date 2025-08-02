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
          <h3 className={styles.smallHeading}>Hannah Keelin MacDonald</h3>
            <h4 className={styles.smallSubheading}>Founder | éclat by HKM</h4>
          <Image
            src="/bio_photo.jpeg"       /* put /about1.jpg into /public/ */
            alt="Our Origin"
            quality={100}
            width={600}
            height={400}
            className={styles.aboutImage}
            placeholder="empty"
          />
          <div className={styles.aboutText}>
            <p>
              My name is Hannah Keelin MacDonald and I created Éclat by HKM to share my passion for the art of fashion through curated, customizable jewelry pieces designed to fit any moment.
            </p>
            <p>
              As a professional model, I have always felt the right piece of jewelry was the most important part of any outfit. Each piece of jewelry I own and wear has a story, memory or sacred moment attached to it that I am reminded of every time I put it on that makes it more than just an accessory.
            </p>
            <p>
              With Éclat by HKM, it is my desire help people find the perfect piece of jewelry that is more than just a beautiful ring, necklace or bracelet, but also serves as a reminder of a significant and special memory.
            </p>

            {/* ===== Additional Content ===== */}
            <h3 className={styles.smallHeading}>Precious Moments Jewelers, Inc</h3>
            <h4 className={styles.smallSubheading}>Our manufacturing team</h4>
            <Image
              src="/pmj.jpg"
              alt="Descriptive Extra"
              quality={100}
              width={600}
              height={400}
              className={styles.aboutImage}
            />
            <p>
              Hannah Keelin MacDonald taps into Precious Moments Jewelers as her behind-the-scenes manufacturing team. Handling everything from custom CAD design and casting to stone setting, polishing, and final delivery. Each design is produced in close collaboration with the experienced jewelers at PMJ, ensuring a high standard of quality and craftsmanship throughout the process.
            </p>
            <p>
              Precious Moments Jewelers is a family-owned business based in Margate, Florida, known for over three decades of trusted service and expertise in fine jewelry and watchmaking. Founded in 1988, the store continues to support both individual customers and emerging jewelry brands with professional, in-house production.
            </p>
            <h5 className={styles.smallHeading}>Precious Moments Jewelers Reviews</h5>
            <div className={styles.imageGrid}>
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Image
                  key={i}
                  src={`/extra_image_${i}.png`}
                  alt={`Extra image ${i}`}
                  quality={100}
                  width={200}
                  height={200}
                  unoptimized 
                  className={styles.gridImage}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ===== Contact + Newsletter Section ===== */}
      <ContactSection />
    </main>
  );
}