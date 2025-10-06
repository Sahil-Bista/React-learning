import { useState } from 'react';

function UseStateHooke() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    console.log(count);
  };
  return (
    <>
      <button onClick={handleClick}> Button 1 </button>
      <button> Button 2 </button>
      <button> Button 3 </button>
    </>
  );
}

export default UseStateHooke;
