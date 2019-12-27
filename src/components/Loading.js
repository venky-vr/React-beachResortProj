import React from 'react';
import Spinner from '../images/loading-arrow.gif'

export default function Loading() {
  return (
    <div className="center">
        <h6>Rooms Data Loading</h6>
        <img src={Spinner} alt="Spinner not availabel"/>
    </div>
  );
}
