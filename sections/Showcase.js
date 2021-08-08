import CustomImage from "components/CustomImage";

import styles from "./Showcase.module.css";
function Showcase() {
  return (
    <div
      className={`
        showcase ${styles.showcase}
      `}
    >
      <div
        className="
          text text-white mx-4 px-0.5 h-full 
          pb-16 flex items-center justify-center flex-col
        "
        style={{ flexDirection: "column" }}
      >
        <h1 className="text-center text-3xl font-bold tracking-wide mb-3">
          Tired of lame parties?
        </h1>
        <div className="description text-center">
          <p>PartyLocate is an app for people like you.</p>
          <p>Share your party location to friends</p>
          <p>or others to create an awesome party</p>

          <div className="cta flex text-center mt-2">
            <button
              className="
                cta-button w-1/2 px-4 py-3 mr-3
                from-red-500 via-pink-500 to-blue-800
                border-6
                rounded-md
              "
              /**
               * @todo border radius not working
               */
              style={{
                borderImage:
                  "linear-gradient(135deg, var(--tw-gradient-stops))",
                borderImageSlice: "1",
              }}
            >
              View the map
            </button>
            <button
              className="
              cta-button w-1/2 px-4 py-3 ml-3
              bg-gradient-to-br from-red-500 via-pink-500 to-blue-800
              rounded-md
            "
            >
              Get started
            </button>
          </div>
        </div>
      </div>
      <CustomImage
        src="/hero.jpg"
        alt="hero image"
        className={`${styles.heroimg} hidden md:block h-56`}
      />
    </div>
  );
}

export default Showcase;
