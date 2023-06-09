import React from "react";
import PropTypes from "prop-types";

const Profile = ({ fullName, bio, profession, handleName, children }) => {
  return (
    <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
      <h1 style={{ color: "red" }}>My Name is {fullName}</h1>
      {children}
      <h2 style={{ color: "blue" }}>My profession is {profession}</h2>
      <p>{bio}</p>
      <button onClick={() => handleName(fullName)}>Click me</button>
    </div>
  );
};

Profile.defaultProps = {
  fullName: "John Doe",
  bio: "No bio available",
  profession: "Unknown",
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string,
  profession: PropTypes.string,
  handleName: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default Profile;
