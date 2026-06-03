import React from 'react'
import UserCard from './UserCard'
import axios from 'axios'
import { useEffect, useState } from 'react'


function UserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const fetchUsers = () => {
        setLoading(true);
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                setUsers(response.data);
                setError(null);
            })
            .catch(() => {
                setError('Error fetching users');
            })
            .finally(() => {
                setLoading(false);
            });
    };
    useEffect(() => {
        fetchUsers();
    }, []);

    if (loading) {
        return <h1>Loading...</h1>;
    }
    if (error) {
        return <h1>{error}</h1>;
    }

  return (
    <div>
        
        <button onClick={fetchUsers}>Reload Users</button>

        <div className='grid'>
            {users.map((user) => (
                <UserCard key={user.id} user={user}></UserCard>
            ))}
        </div>

    </div>
    
  )
}

export default UserList