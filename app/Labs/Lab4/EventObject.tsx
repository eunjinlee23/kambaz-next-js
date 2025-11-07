/*
import { useState } from "react";

export default function EventObject() {
    const [event, setEvent] = useState(null);
    const handleClick = (e) => {
      const eventData = {
        type: e.type,
        target: e.target.outerHTML,
        timeStamp: e.timeStamp,
      };
      setEvent(eventData);
    };
  return (
    <div>
        <h2>Event Object</h2>
        <button onClick={handleClick}
            className="btn btn-primary"
            id="wd-display-event-obj-click">
                Display Event Object
        </button>
        <pre>{JSON.stringify(event, null, 2)}</pre>
        <hr/>
    </div>
  )
}
  */
