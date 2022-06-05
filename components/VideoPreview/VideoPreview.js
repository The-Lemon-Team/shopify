import React from "react";
import Image from "next/image";

import styles from "./VideoPreview.module.scss";
import previewSrc from "./preview.jpg";

export const VideoPreview = () => {
  return (
    <div>
      <div className={styles.imageWrapper}>
        <Image src={previewSrc} alt="Preview image" />
      </div>
    </div>
  );
};
