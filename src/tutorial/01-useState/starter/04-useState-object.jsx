import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Bob',
    age: 29,
    hobby: 'Reading',
  });

  const newPerson = () => {
    setPerson({ ...person, name: 'shade' });
  };
  const { name, age, hobby } = person;
  return (
    <>
      <h2>My name is {name}</h2>
      <h3>{age} years</h3>
      <h2>Enjoys: {hobby}</h2>
      <button className="btn" type="button" onClick={newPerson}>
        show john
      </button>
    </>
  );
};

export default UseStateObject;
