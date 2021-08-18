import { useState } from "react";

import styles from "styles/Showcase.module.css";
function Showcase() {

  const [message, setMessage ] = useState("");
  const [listMessages, setListMessages ] = useState([]);
  const test = async () => {
    const data = await fetch(
      `${window.location.protocol}//${window.location.host}/api/test?testprop=${message}`
    );
  };
  const test2 = async () => {
    const data = await fetch(`${window.location.protocol}//${window.location.host}/api/clear`);
  };
  const updateList = async () => {
    const response = await fetch(`${window.location.protocol}//${window.location.host}/api/hello`);
    const data = await response.json();
    setListMessages(data)
    console.log(data)
  }
  return (
    <div
      className={`
        showcase ${styles.showcase}
        p-4
      `}
    >
      <input id="input" type="text" className="p-2 border-2 rounded-sm" placeholder="enter message" onChange={(e) => {setMessage(e.currentTarget.value)}}/>
      <button onClick={test} className="p-2 border-2 rounded-sm ml-1 bg-green-600 text-white">add</button>
      <button onClick={test2} className="p-2 border-2 rounded-sm ml-1 bg-red-600 text-white">clear</button>

      <button className="w-full border-2 rounded-sm p-2 mt-4 bg-blue-400" onClick={updateList}>
        see all messages/update messages list
      </button>

      <div className="list mt-6">
        <h1 className="font-bold text-xl mb-1">These are all the messages:</h1>
        {
          listMessages.map(
            listMessageObject => {
              return (
                <div className="p-2 border-t-2 border-b-2">
                  <p>{listMessageObject.testprop}</p>
                </div>
              )
            }
          )
        }
      </div>
    </div>
  );
}

export default Showcase;
