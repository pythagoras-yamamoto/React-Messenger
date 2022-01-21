import "./App.css";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import { Chat } from "./components/Chat";
import { SignIn } from "./components/SignIn";

function App() {
  const [user] = useAuthState(auth);

  return <>{user ? <Chat /> : <SignIn />};</>;
}

export default App;
