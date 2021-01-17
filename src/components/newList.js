import React from "react";

const newList = ({ addNew }) => {
  let textEnter = "";
  const submitHandler = (event) => {
    event.preventDefault();

    const setNew = {
      id: Math.random().toString(),
      text: textEnter,
    };

    if (textEnter) {
      console.log(setNew);
      addNew(setNew);
    }
  };

  const textChangeHandler = (event) => {
    textEnter = event.target.value;
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" onChange={textChangeHandler} />
        <button type="submit">Add List</button>
      </form>
    </div>
  );
};

export default newList;
