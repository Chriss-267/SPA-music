// src/components/TopSongs.jsx
import React, { useState, useEffect } from 'react';
import styles from "../styles/SearchSongs.module.css"
import estilos from "../styles/TopSongs.module.css"

const TopSongs = () => {
  const [topSongs, setTopSongs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopSongs = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://itunes.apple.com/us/rss/topsongs/limit=10/json');
        const data = await response.json();
        setTopSongs(data.feed.entry);
      } catch (error) {
        console.error('Error fetching top songs:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchTopSongs();
  }, []);

  return (
    <div>
      <h1 className={styles.title}>Top 10 Canciones mas escuchadas</h1>
      {loading ? (
        <div className={styles.skCircle}>
        <div className={`${styles.skCircle1} ${styles.skChild}`}></div>
        <div className={`${styles.skCircle2} ${styles.skChild}`}></div>
        <div className={`${styles.skCircle3} ${styles.skChild}`}></div>
        <div className={`${styles.skCircle4} ${styles.skChild}`}></div>
        <div className={`${styles.skCircle5} ${styles.skChild}`}></div>
        <div className={`${styles.skCircle6} ${styles.skChild}`}></div>
        <div className={`${styles.skCircle7} ${styles.skChild}`}></div>
        <div className={`${styles.skCircle8} ${styles.skChild}`}></div>
        <div className={`${styles.skCircle9} ${styles.skChild}`}></div>
        <div className={`${styles.skCircle10} ${styles.skChild}`}></div>
        <div className={`${styles.skCircle11} ${styles.skChild}`}></div>
        <div className={`${styles.skCircle12} ${styles.skChild}`}></div>
      </div>
      ) : (
        <section className={`${styles.center} ${estilos.wrap}`}>
          {topSongs.map((song, index) => (
            <section className={styles.card} key={index}>
              <img className={styles.img} src={song['im:image'][2].label} alt={song['im:name'].label} />
              <p>
                {index + 1}. {song['im:name'].label} by {song['im:artist'].label}
              </p>
              <audio className={styles.audio} controls src={song.link[1].attributes.href}>
                No soportado por el navegador
              </audio>
            </section>
          ))}
        </section>
      )}
    </div>
  );
};

export default TopSongs;
