import React, { useState } from 'react';
import styles from "../styles/SearchSongs.module.css"

const SearchSongs = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [hasSearched, setHasSearched] = useState(false); 

    const handleSearch = async (e) => {
        e.preventDefault();
        if (searchTerm.trim() === '') return;

        setLoading(true);
        setHasSearched(true); 

        try {
            const response = await fetch(`https://itunes.apple.com/search?term=${searchTerm}&entity=song`);
            const data = await response.json();
            setResults(data.results);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.color}>
            <h1 className={styles.title}>Explora Todo</h1>
            <form onSubmit={handleSearch} className={styles.form}>
                <input
                    className={styles.Itext}
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Escriba una cancion"
                />
                <button className={styles.Ibtn} type="submit">Buscar</button>
            </form>

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
                <div className={styles.center}>
                    {results.length > 0 ? (
                        <section className={styles.resultados}>
                            {results.map((song) => (
                                <section className={styles.card} key={song.trackId}>
                                    <img className={styles.img} src={song.artworkUrl100} alt={song.trackName} />
                                    <p>{song.trackName}</p>
                                    <p>{song.artistName}</p>
                                    <audio className={styles.audio} controls src={song.previewUrl}>
                                        No soportado
                                    </audio>
                                </section>
                            ))}
                        </section>
                    ) : (
                        
                        hasSearched && <p>No se pudo encontrar los resultados</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default SearchSongs;
