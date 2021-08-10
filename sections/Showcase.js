import CustomImage from "components/CustomImage";

import styles from "styles/Showcase.module.css";
function Showcase() {
  return (
    <div
      className={`
        showcase ${styles.showcase}
        bg-black
      `}
    >
      <div
        className="
          text text-white mx-4 px-0.5 h-full 
          pb-16 flex items-center justify-center flex-col
        "
        style={{ flexDirection: "column" }}
      >
        <h1
          className="
            text-center text-3xl font-bold tracking-wide mb-3
            md:text-4xl
            lg:text-5xl
          "
        >
          Tired of lame parties?
        </h1>
        <div
          className="
            description text-center

            md:text-lg
            lg:text-xl
          "
        >
          <p> PartyLocate is an app for people like you. </p>
          <p> Share your party location to friends </p>
          <p> or others to create an awesome party </p>

          <div
            className="
              cta flex text-center mt-3
              lg:text-lg
            "
          >
            <a href=""
              className={`
                ${styles.ctaButton}

                w-1/2  mr-3
                py-3
                bg-black
                bg-opacity-60
                rounded-md

                hover:bg-blue-800
                transition
                delay-0

              `}
            >
              View the map
            </a>

            <a href=""
              className={`
                ${styles.ctaButton}

                w-1/2 py-3 ml-3
                bg-pink-500
                rounded-md

                hover:bg-blue-800
              `}
            >
              Get started
            </a>
          </div>
        </div>
      </div>
      {/* <CustomImage
        src="/hero.jpg"
        alt="hero image"
        className={`${styles.heroimg} hidden md:block h-56`}
      /> */}
    </div>
  );
}

export default Showcase;
