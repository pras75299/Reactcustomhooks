import React from 'react';
import './App.css';
// import useLocalStorage from './useLocalStorage';
import useUpdateLogger from './useUpdateLogger';
import useInput from './useInput';

function App() {
  // const [name, setName] = useLocalStorage('name', '');
  const [firstName, bindFirstName, resetFirstName] = useInput('');
  const [lastName, bindLastName, resetLastName] = useInput('');
  useUpdateLogger(firstName, lastName);
  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  }
  return (
    <div className="App"> 
    
      <h1>React Custom Hooks</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label>First Name</label>
          <input value={firstName} {...bindFirstName} type="text"/>
        </div>
        <div>
          <label>Last Name</label>
          <input value={lastName} {...bindLastName} type="text"/>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
