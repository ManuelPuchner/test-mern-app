import { useState } from "react";

import styles from "styles/Showcase.module.css";
function Showcase() {

  const [message, setMessage ] = useState("");
  const test = async () => {
    const data = await fetch(
      `${window.location.protocol}//${window.location.host}/api/test?testprop=${message}`
    );
  };
  const test2 = async () => {
    const data = await fetch(`${window.location.protocol}//${window.location.host}/api/clear`);
  };
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
    </div>
  );
}

export default Showcase;
