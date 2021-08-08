function Footer() {
  return (
    <div
      className="
        w-full
        bg-gradient-to-r from-red-500 via-pink-500 to-blue-800
        rounded-t-lg
        p-3
        hidden
      "
    >
      Photos provided by{" "}
      <a
        href="https://unsplash.com"
        target="_blank"
        rel="noreferrer"
        className="underline"
      >
        unsplash.com
      </a>
    </div>
  );
}

export default Footer;
