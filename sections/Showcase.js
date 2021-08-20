import { useState, useRef, useEffect } from "react";

import styles from "styles/Showcase.module.css";
function Showcase() {
  const [message, setMessage] = useState("");
  const [listMessages, setListMessages] = useState([]);
  const test = async () => {
    clearInput();
    const data = await fetch(
      `${window.location.protocol}//${window.location.host}/api/test?testprop=${message}`
    );
  };
  const updateList = async () => {
    const response = await fetch(
      `${window.location.protocol}//${window.location.host}/api/hello`
    );
    const data = await response.json();
    setListMessages(data);
  };

  const textInput = useRef();

  const clearInput = () => (textInput.current.value = "");

  // get list on load
  useEffect(() => {
    updateList();
  }, []);

  const removeItem = async (id) => {
    const response = await fetch(
      `${window.location.protocol}//${window.location.host}/api/removebyid?id=${id}`
    );
  }
  return (
    <div
      className={`
        showcase ${styles.showcase}
        p-4
      `}
    >
      <input
        id="input"
        type="text"
        ref={textInput}
        className="p-2 border-2 rounded-sm"
        placeholder="enter message"
        onChange={(e) => {
          setMessage(e.currentTarget.value);
        }}
      />
      <button
        onClick={test}
        className="p-2 border-2 rounded-sm ml-1 bg-green-600 text-white"
      >
        add
      </button>
      <button
        onClick={clearInput}
        className="p-2 border-2 rounded-sm ml-1 bg-red-600 text-white"
      >
        clear
      </button>

      <button
        className="w-full border-2 rounded-sm p-2 mt-4 bg-blue-400"
        onClick={updateList}
      >
        update messages list
      </button>

      <div className="list mt-6">
        <h1 className="font-bold text-xl mb-1">These are all the messages:</h1>
        {listMessages.map((listMessageObject) => {
          return (
            <div
              key={listMessageObject._id}
              className="p-2 border-t-2 border-b-2 mb-1 flex justify-between border-1 items-center"
            >
              <p>{listMessageObject.testprop}</p>
              <button
                className="py-1 px-2 border-red-400 border-2 rounded-sm"
                onClick={() => {
                  removeItem(listMessageObject._id);
                }}
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Showcase;
