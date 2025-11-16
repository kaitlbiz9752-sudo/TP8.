import { useState, useEffect } from 'react';
import axios from 'axios';

function AxiosData() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadUsers = () => {
    setLoading(true);
    setError(null);

    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => setUsers(response.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div>
      <h2>Utilisateurs chargés avec axios</h2>

      <button onClick={loadUsers} disabled={loading}>
        {loading ? 'Rechargement...' : 'Recharger les données'}
      </button>

      {loading && <p>Chargement en cours...</p>}
      {error && <p>Erreur : {error}</p>}

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} – {user.email} – {user.address?.city}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AxiosData;
