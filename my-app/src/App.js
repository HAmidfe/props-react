import React from "react";
import Profile from "./profile/Profile";
import image from './HELLO.jpg';

function App() {
  const handleName = (name) => {
    alert(`My name is ${name}`);
  };

  return (
    <div className="App">
      <Profile
        fullName="John Smith"
        bio="I am a software engineer"
        profession="React Developer"
        handleName={handleName}
      >
        <img src={image} alt="profile" />
      </Profile>
    </div>
  );
}

export default App;
