import React from 'react'


//the display component will receive the props messages which contain as value the array messages from state. this array will be iterated over with map and will add for each iteration the css attributes such as boder and padding for each element and render them into the page separately.

const Display = ({messages}) => {
  return (
      <div>
        {messages.map(message => (
          <div className='notes' style={{
            border: '1px solid blue',
            padding: '10px',
            marginBottom: '5px'
          }}>{message}</div>
        ))}
      </div>
    );
}

export default Display;