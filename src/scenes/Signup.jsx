import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDnWrL5zG0eweq2E_52fHwVhHwgeBcrXfU",
  authDomain: "fb-auth-tj.firebaseapp.com",
  projectId: "fb-auth-tj",
  storageBucket: "fb-auth-tj.appspot.com",
  messagingSenderId: "842395049547",
  appId: "1:842395049547:web:58309b5a8515a6895c37ce"
};

export default function Signup({ setUser }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleSignup = async(e) => {
    e.preventDefault()
    const app = initializeApp(firebaseConfig) //connects to Firebase
    const auth = getAuth(app) //connects to Firebase Auth
    const response = await createUserWithEmailAndPassword(auth, email, password)
      .catch(alert);
    setUser(response.user)
  }
  return (
    <>
      <h1>Signup</h1>
      <form onSubmit={handleSignup}>
        <label htmlFor="email">Email:{" "}
          <input type="email" name="email"
            value={email} onChange= {e => setEmail(e.target.value)}
            placeholder="youremail@email.com" />
        </label> <br />
        <label htmlFor="password">Password:{" "}
          <input type="password" name="password"
            value={password} onChange= {e => setPassword(e.target.value)}
            placeholder="••••••" />
        </label> <br />
        <button type="submit">Signup</button>
      </form>
    </>
  )
}