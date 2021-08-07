import Image from "next/image";
import { useEffect } from "react";

import styles from "./CustomImage.module.css";

function CustomImage({ src, alt, className }) {
  return (
    <div
      className={`
        custom-image relative w-full rounded-2xl overflow-hidden
        ${className && className} ${styles.customImage} 
      `}
    >
      <Image src={src} alt={alt} layout="fill" objectFit="contain"></Image>
    </div>
  );
}

export default CustomImage;
