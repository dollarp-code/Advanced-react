import { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPoeople] = useState(data);

  const removeItem = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPoeople(newPeople);
  };
  const clearItem = () => {
    setPoeople([]);
  };

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h2>{name}</h2>
            <button type="btn" onClick={() => removeItem(id)}>
              remove
            </button>
          </div>
        );
      })}
      <button
        type="button"
        className="btn"
        style={{ marginTop: '1.5rem' }}
        onClick={clearItem}
      >
        Clear All
      </button>
    </div>
  );
};

export default UseStateArray;
