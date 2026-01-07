import { useState, useEffect } from "react";

type playlistType = {
  id: string;
  title: string;
  danceability: number;
  energy: number;
  key: number;
  loudness: number;
  mode: number;
  acousticness: number;
  instrumentalness: number;
  liveness: number;
  valence: number;
  tempo: number;
  duration_ms: number;
  time_signature: number;
  num_bars: number;
  num_sections: number;
  num_segments: number;
  class: number;
};

function PlaylistTable() {
  const [playlists, setPlayLists] = useState([]);

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await fetch("http://localhost:8000/playlists");
        if (!response.ok) {
          throw new Error("Failed to fetch playlists");
        }
        const data = await response.json();
        const parsed = JSON.parse(data.json);
        setPlayLists(parsed);
      } finally {
        //
      }
    };

    fetchPlaylists();
  }, []);

  //if (loading) return <p>Loading...</p>

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Danceability</th>
            <th>Energy</th>
            <th>Key</th>
            <th>Loudness</th>
            <th>Mode</th>
            <th>Acousticness</th>
            <th>Instrumentalness</th>
            <th>Liveness</th>
            <th>Valence</th>
            <th>Tempo</th>
            <th>Duration(ms)</th>
            <th>Time Signature</th>
            <th>Number Bars</th>
            <th>Number Sections</th>
            <th>Number Segments</th>
            <th>Class</th>
          </tr>
        </thead>
        <tbody>
          {playlists.map((playlist: playlistType) => (
            <tr key={playlist.id} style={{ textAlign: "left" }}>
              <td>{playlist.id}</td>
              <td>{playlist.title}</td>
              <td>{playlist.danceability}</td>
              <td>{playlist.energy}</td>
              <td>{playlist.key}</td>
              <td>{playlist.loudness}</td>
              <td>{playlist.mode}</td>
              <td>{playlist.acousticness}</td>
              <td>{playlist.instrumentalness}</td>
              <td>{playlist.liveness}</td>
              <td>{playlist.valence}</td>
              <td>{playlist.tempo}</td>
              <td>{playlist.duration_ms}</td>
              <td>{playlist.time_signature}</td>
              <td>{playlist.num_bars}</td>
              <td>{playlist.num_sections}</td>
              <td>{playlist.num_segments}</td>
              <td>{playlist.class}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default PlaylistTable;
