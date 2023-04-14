import React from 'react';
import { Link } from 'react-router-dom';
import BrokeStuff from '../../../assets/images/NotFound.JPG';
import './NotFound.css'

const NotFound = () => {
  return (
    <div className="not-found">
      <img className="not-found-image" src={BrokeStuff} alt="Page not found" />
      <br />
      <Link to="/">Go back to home page</Link>
    </div>
  );
}

export default NotFound;