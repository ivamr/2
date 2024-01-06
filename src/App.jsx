import "./App.css";
import Presenter from "./componenets/Presenter/presenter";
import { useState } from "react";
import Users from "./componenets/users/users";
import Registration from "./componenets/Registration/Registration";

function App() {
  const [firstNum, setFirstNum] = useState(0);
  const [secondNum, setSecondNum] = useState(11);

  return (
    <div>
      <Presenter num1={firstNum} num2={secondNum} />
      <button onClick={() => setFirstNum((n) => n + 1)}>Inc first</button>
      <button onClick={() => setSecondNum((n) => n + 1)}>Inc second</button>
      <Users></Users>
      <Registration></Registration>
    </div>
  );
}

export default App;
