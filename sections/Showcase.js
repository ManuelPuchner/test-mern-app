import styles from "styles/Showcase.module.css";
function Showcase() {
  const test = async () => {
    const data = await fetch(
      `http://localhost:3000/api/test?testprop=${"dies ist ein test"}&test=moin`
    );
  };
  const test2 = async () => {
    const data = await fetch("http://localhost:3000/api/clear");
  };
  return (
    <div
      className={`
        showcase ${styles.showcase}
      `}
    >
      <button onClick={test}>add</button>
      <button onClick={test2}>clear</button>
    </div>
  );
}

export default Showcase;
