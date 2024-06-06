import { useState } from 'react';

const ToggleChallenge = () => {
  const [alert, setAlert] = useState(false);

  return (
    <div>
      <button type="button" className="btn" onClick={() => setAlert(!alert)}>
        Toggle
      </button>
      <h2>{alert && 'Hello there'}</h2>
    </div>
  );
};

export default ToggleChallenge;
