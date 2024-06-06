import { useEffect } from 'react';
import { useState } from 'react';

const url = 'https://api.github.com/users';

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <section>
      <h2>Github Users</h2>
      <ul className="users">
        {users.map((user) => {
          const { id, avatar_url, html_url, login } = user;
          // console.log(user);
          return (
            <li key={id}>
              <img
                src={avatar_url}
                alt={login}
                style={{ width: '50px', height: '50px' }}
              />
              <div>
                <h3>{login}</h3>
                <a href={html_url}>view profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default FetchData;
