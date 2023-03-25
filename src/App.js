import "./App.css";
import { createElement, useState } from "react";
import { props } from "react";
import Addlist from "./components/addlist";

let nextId = 0;
function App() {
  const [input, setinput] = useState("");

  const [updated, setUpdated] = useState([]);

  const handleChange = (event) => {
    setinput(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setUpdated([...updated, { id: nextId++, input: input }]);
      setinput("");
    }
  };

  const Delete = (id) => {
    let filterlist = updated.filter((updated) => id !== updated.id);
    setUpdated(filterlist);
  };

  return (
    <div className="App">
      <div>
        <h2> To Do App</h2>
        <input
          className="input1"
          value={input}
          type="string"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      {updated.map((value, index) => (
        <div key={index}>
          <Addlist item={value} Delete={Delete} />
        </div>
      ))}
    </div>
  );
}

export default App;
