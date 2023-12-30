import React from 'react';
import PropTypes from 'prop-types';
import './Bio.css'; // Import your CSS file

const Bio = ({ avatar,name,username, totalRepositories, dateJoined, contributionsThisYear }) => {
  return (
    <div className="bio-card">
      <img src={avatar} alt="User Avatar" className="avatar" />
      <div>
      <div className="name">{name}</div>
      <div className="username">{username}</div>
      </div>
      <div className="info">
        <p>Total Repositories: {totalRepositories}</p>
        <p>Date Joined: {dateJoined}</p>
        <p>Contributions This Year: {contributionsThisYear}</p>
      </div>
    </div>
  );
};

Bio.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  totalRepositories: PropTypes.number.isRequired,
  dateJoined: PropTypes.string.isRequired,
  contributionsThisYear: PropTypes.number.isRequired,
};

export default Bio;
