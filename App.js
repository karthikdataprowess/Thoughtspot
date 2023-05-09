import "./styles.css";
import { init, AuthType } from "@thoughtspot/visual-embed-sdk";

init({
  thoughtSpotHost: "https://my1.thoughtspot.cloud",
  authType: AuthType.None
});

export default function App() {
  return (
    <div className="App">
      <h1>Hello ThoughtSpot Everywhere </h1>
      <p>This is a simple demo embedding ThoughSpot in a React App.</p>
     
    </div>
  );
}
