import "./App.css";
import Hero from "../src/components/hero";
import Insert from "../src/components/insert";
import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  function addUser(newUser) {
    setUsers([...users, newUser]);
  }

  function reset() {
    setUsers([...users]);
  }

  return (
    <div className="container">
      <h1>Expense Splitter </h1>
      <Insert className="right-side" addUser={addUser} />
      <Hero className="left-side" users={users} reset={reset} />
    </div>
  );
}

export default App;
