import styles from "./banner.module.css";

export default function Banner() {
  return (
    <section className={styles.banner}>
      <img
        className={styles.image}
        src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=80"
        alt="Concert crowd at an event venue"
      />
      <div className={styles.overlay}>
        <h1>where every event finds its venue</h1>
        <p>Find the perfect place for weddings, meetings, and private parties.</p>
      </div>
    </section>
  );
}
