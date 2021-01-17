import React, { useState } from "react";
import "./App.css";
import LIst from "./components/LIst";
import NewList from "./components/newList";

function App() {
  const [listView, setListView] = useState([
    { id: "1", text: "this is first list view" },
    { id: "2", text: "this is second list view so far" },
    { id: "3", text: "this is three list view so far soo." },
  ]);

  const addNewList = (newList) => {
    setListView(listView.concat(newList));
  };
  return (
    <div className="App">
      <NewList addNew={addNewList} />
      <LIst list={listView} />
    </div>
  );
}

export default App;
