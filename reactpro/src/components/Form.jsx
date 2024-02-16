import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState({ firstname: "", lastname: "" });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name);
  }

  return (
    <div>
      {name.firstname} {name.lastname}
      <form>
        <input
          onChange={(e) => setName({ ...name, firstname: e.target.value })}
          type="text"
          value={name.firstname}
        />

        <input
          onChange={(e) => setName({ ...name, lastname: e.target.value })}
          type="text"
          values={name.lastname}
        />

        <button onClick={(e) => handleSubmit(e)}>Submit</button>
      </form>
    </div>
  );
};

export default Form;
