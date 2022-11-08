import { useState } from "react";
import Signup from "./scenes/Signup";
import Login from "./scenes/Login";
import Protected from "./scenes/Protected";

function App() {
  const [user, setUser] = useState()
  return (
    <>
      {!user
        ? <><Login setUser={setUser} /><Signup setUser={setUser} /></>
        : <Protected />
      }
    </>
  );
}

export default App;
