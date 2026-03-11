import styles from "./card.module.css";

export default function Card() {
  return (
    <article className={styles.card}>
      <img
        className={styles.image}
        src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80"
        alt="The Bloom Pavilion venue"
      />
      <div className={styles.content}>
        <h2>The Bloom Pavilion</h2>
        <p>A stunning venue where lovely moments become unforgettable memories.</p>
      </div>
    </article>
  );
}
