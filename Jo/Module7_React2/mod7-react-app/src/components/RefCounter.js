import { useState, useRef } from 'react';

//https://beta.reactjs.org/learn/referencing-values-with-refs

export default function RefCounter() {

  let ref = useRef(0); //one counter stored in a ref
  let count = 0; //one counter stored in a normal variable

  const [name, setName] = useState('')

  console.log('rendering RefCounter')

  function handleClick() {
    ref.current = ref.current + 1; //update ref when clicking button
    count = count + 1; //update count variable when clicking button
    alert('You clicked ' + ref.current + ' ('+count+') times!'); //both should be the same value
  }

  return (
    <div className="componentBox">
      <button onClick={handleClick}>
        REFCOUNTER: Click me! 
      </button>

      {/* what happens if we cause the component to re-render by updating its state? a: the count variable is reset and doesn't maintain its value */}
      name: <input value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
}