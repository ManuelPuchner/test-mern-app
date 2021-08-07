import CustomImage from "components/CustomImage";

import styles from "./Showcase.module.css";
function Showcase() {
  return (
    <div className="showcase">
      <CustomImage
        src="/hero.jpg"
        alt="hero image"
        className={`h-96 ${styles.heroimg}`}
      />
    </div>
  );
}

export default Showcase;
