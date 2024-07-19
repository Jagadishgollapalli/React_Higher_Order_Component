import React from 'react';
import Border from './Border';
import './style.css';

export default Border(function App(props) {
  return (
    <div>
      <h1>
        Hello {props.name}! You're {props.user.age}
      </h1>
    </div>
  );
});
