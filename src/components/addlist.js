import React from "react";
import CloseIcon from "@mui/icons-material/Close";

function Addlist({ item, Delete }) {
  return (
    <div className="App" id="div-box">
      <input type="checkbox" id="packers" value={item.inputcheck} />

      <label for="packers" className="strikethrough">
        {item.input}
      </label>
      <button onClick={() => Delete(item.id)} className="butoncancel">
        <CloseIcon className="icon" />
      </button>
    </div>
  );
}
export default Addlist;
