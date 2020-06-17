import React from 'react';

const User = (props) => (
  <div>
    <h2>{props.name}</h2>
    <p>{props.age}</p>
    <style jsx>{`
      div {
        border: 1px solid #eee;
        box-shadow: 0 2p 3px #ccc;
        padding: 30px;
        text-align: center;
      }
    `}</style>
  </div>
)

export default User;
