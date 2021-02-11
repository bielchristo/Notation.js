import React from 'react'

const Display = ({messages}) => {
  return (
      <div>
        {messages.map(message => (
          <div style={{
            border: '1px solid blue',
            padding: '10px',
            marginBottom: '5px'
          }}>{message}</div>
        ))}
      </div>
    );
}

export default Display;