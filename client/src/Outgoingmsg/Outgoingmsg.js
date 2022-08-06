import React from 'react'
import "./Outgoingmsg.css"

function SendMessage(props) {
  return (
    <div className="container-send-message">
      <h6 className='send-message-username'>{props.from}</h6>
      <div className='send-message-body'>
        {props.text}
      </div>
    </div>
  )
}

export default SendMessage;