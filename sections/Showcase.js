import styles from "styles/Showcase.module.css";
function Showcase() {
  const test = async () => {
    const data = await fetch(
      `${window.location.protocol}//${window.location.host}/api/test?testprop=${"dies ist ein test"}&test=moin`
    );
  };
  const test2 = async () => {
    const data = await fetch(`${window.location.protocol}//${window.location.host}/api/clear`);
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
