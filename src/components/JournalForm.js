import React from "react";
import { useState } from "react";

export default function JournalForm() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div>
      <form>
        <input
          label="Motto"
          type="text"
          value={inputValue}
          onChange={handleChange}
        />
        <br></br>
        <input type="textarea" value={inputValue} onChange={handleChange} />
      </form>
    </div>
  );
}
