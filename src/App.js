import "./App.css";
import FullName from "./Profile/FullName";
import ProfilePhoto from "./Profile/ProfilePhoto";
import Address from "./Profile/Address";
import Phone from "./Profile/Phone";

function App() {
  return (
    <div className="container">
      <ProfilePhoto />
      <FullName />
      <Address />
      <Phone />
    </div>
  );
}

export default App;
