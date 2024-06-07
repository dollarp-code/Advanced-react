import { useEffect, useState } from 'react';

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button className="btn" type="button" onClick={() => setToggle(!toggle)}>
        toggle component
      </button>
      {toggle && <AnyComponent />}
    </div>
  );
};

const AnyComponent = () => {
  useEffect(() => {
    const someFunc = () => {
      // some logic
    };
    window.addEventListener('scroll', someFunc);
    return () => window.removeEventListener('scroll', someFunc);
  }, []);
  return <h2>Hello there</h2>;
};

export default CleanupFunction;
