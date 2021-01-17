import React from "react";

const LIst = ({ list }) => {
  return (
    <div>
      <ul>
        {list.map((l) => {
          return <li ke={l.id}>{l.text}</li>;
        })}
      </ul>
    </div>
  );
};

export default LIst;
