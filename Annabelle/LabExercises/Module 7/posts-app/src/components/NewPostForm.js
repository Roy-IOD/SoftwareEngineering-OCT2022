import React, { useState } from 'react';
  
function NewPostForm(props) {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  
  const changeName = (event) => {
    setName(event.target.value);
  };
  
  const changeCity = (event) => {
    setCity(event.target.value);
  };
  
  const transferValue = (event) => {
    event.preventDefault();
    const val = {
      name,
      city,
    };
    props.func(val);
    clearState();
  };
  
  const clearState = () => {
    setName('');
    setCity('');
  };
  
  return (
    <div>
      <label>Name</label>
      <input type="text" value={name} onChange={changeName} />
      <label>Fun Fact</label>
      <input type="text" value={city} onChange={changeCity} />
      <button onClick={transferValue}> Click Me</button>
    </div>
  );
}
  
export default NewPostForm