import type { ImageLoader } from "next/image";
import Image from "next/image";
import React from "react";
import { unsplashLoader } from "../utils";

export default function CustomLoader(props: {
    src: string;
    width: number;
    height: number;
    alt: string;
  }) {
    return (
      <div>
        <Image
          loader={unsplashLoader}
          src={props.src}
          width={props.width}
          height={props.height}
          alt={props.alt}
        />
      </div>
    );
  }
  