import { useState, useEffect } from 'react';

function FetchData() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadPosts = () => {
    setLoading(true);
    setError(null);

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erreur réseau');
        }
        return response.json();
      })
      .then((data) => setPosts(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div>
      <h2>Articles chargés avec fetch()</h2>

      <button onClick={loadPosts} disabled={loading}>
        {loading ? 'Rechargement...' : 'Recharger les données'}
      </button>

      {loading && <p>Chargement en cours...</p>}
      {error && <p>Erreur : {error}</p>}

      <ul>
        {posts.slice(0, 10).map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default FetchData;
