import React from 'react';

const userData = { name: 'jaya prakash', age: 21 };

export default function Border(WrappedComponent) {
  return (props) => {
    return (
      <>
        <div style={{ border: '1px solid black' }}>
          <WrappedComponent {...props} user={userData} />
        </div>
      </>
    );
  };
}

//remember to use ***spread operator*** in higher order components while passing propss
