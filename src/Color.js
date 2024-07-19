import React from 'react';

export default function Color(WrappedComponent) {
  return () => {
    return (
      <>
        <div style={{ color: 'red' }}>
          <WrappedComponent />
        </div>
      </>
    );
  };
}
