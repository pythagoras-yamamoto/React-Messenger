import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "./firebase";
import { Chat } from "./components/Chat";
import { SignIn } from "./components/auth/SignIn";
import "./App.css";

function App() {
  const [user] = useAuthState(auth);

  return <>{user ? <Chat /> : <SignIn />}</>;
}

export default App;
