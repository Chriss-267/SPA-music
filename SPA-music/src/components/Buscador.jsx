import { useEffect, useState } from "react";

export default function Buscador() {
    const [query, setQuery] = useState(""); 
    const [canciones, setCanciones] = useState([]); 

    const buscarCanciones = async () => {
        if (!query) return; 

        try {
            const response = await fetch(`https://api.deezer.com/search?q=track:${encodeURIComponent(query)}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setCanciones(data.data); 
        } catch (error) {
            console.log("Error:", error); 
        }
    };

    return (
        <section>
            <h1>Busca</h1>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)} 
            />
            <button onClick={buscarCanciones}>Buscar</button> 

            <section>
                <ul>
                    {canciones.map((cancion) => (
                        <li key={cancion.id}>
                            {cancion.title} - {cancion.artist.name} 
                        </li>
                    ))}
                </ul>
            </section>
        </section>
    );
}
