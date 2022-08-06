// import React from 'react'
// import message from '../../../whatsapp-twilio/models/message';
import Incomingmsg from '../Incomingmsg/Incomingmsg'
import Outgoingmsg from '../Outgoingmsg/Outgoingmsg'
import React, { useEffect, useState } from "react";
import './Home.css'
import axios from "axios";
// import SendMessage from '../Outgoingmsg/Outgoingmsg';

function Home() {
  const [messages, setMessage] = useState([]);

  const [to, setTo] = useState("");

  const [text, setText] = useState("");

  const [trigger , setTrigger] = useState(true);



  useEffect(() => {
    async function getMessages() {
      //TODO fetch message from the API and set to message useState variable 
      const allmessage = await axios.get("/allmessage");
      setMessage(allmessage.data);
    }
    getMessages();

  },[trigger])

  async function sendMessage (){
     console.log(to);
     console.log(text);

    await axios.post('/send',{
      to:to,
      text:text
    })
    setTrigger(!trigger);
  }


  return (
    <div className="container">
      <div className='app_card'>

        {

messages && messages.map((message, i) => {
            if (message.direction === "incoming") {
              return (
                //TODO retrun incoming message component with props
                <Incomingmsg key={i} text={message.text} />
              )
            }
            else {
              return (
                //TODO retrun outgoing message component with props
                <Outgoingmsg key={i} text={message.text} />
              )
            }

          })
        }

        <form>
          <input type="phone" className="form-control mt-3" placeholder="Enter Mobile Number..." value={to}
            onChange={(e) => { setTo(e.target.value) }} />

          <input type="text" className="form_input mt-3" placeholder="Enter Message..." value={text}
            onChange={(e) => { setText(e.target.value) }} />

          <button type="button" className="btn btn-primary  button mt-1 mb-2" onClick={sendMessage}>Send</button>

        </form>
      </div>
    </div>
  )
}

export default Home