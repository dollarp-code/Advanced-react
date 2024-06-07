import { useState } from 'react';

const UserChallenge = () => {
  const [user, setUser] = useState(null);
  const login = () => {
    setUser({ name: 'shade' });
  };

  const logOut = () => {
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <div>
          <h4>hello there {user.name}</h4>{' '}
          <button type="button" onClick={logOut}>
            logout
          </button>{' '}
        </div>
      ) : (
        <div>
          {' '}
          <h4>please login</h4>{' '}
          <button type="button" onClick={login}>
            login
          </button>{' '}
        </div>
      )}
    </div>
  );
};

export default UserChallenge;
