import React from 'react';
import './Incomingmsg.css';

function ReceivedMessage(props) {
  return (
    <div className="container-received-message">
    <h6 className='received-message-username'>{props.from}</h6>
    <div className='received-message-body'>
    {props.text}
    </div>
  </div>
  )
}

export default ReceivedMessage;