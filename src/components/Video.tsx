import Image from "next/image";
import React, { useState } from "react";

type Props = {
  src: string;
  placeholder: StaticImageData;
};

export default function Video({ src, placeholder }: Props) {
  const [play, setPlay] = useState(false);
  return (
    <div className="w-100" style={{ height: "360px" }}>
      {play ? (
        <iframe
          width={"100%"}
          height={"100%"}
          src={src + "?autoplay=1"}
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div onClick={() => setPlay(true)} className="cursor-pointer">
          <Image
            placeholder="blur"
            className="mx-auto"
            src={placeholder}
            alt="Foto dos colaboradores do Projeto Bem Me Vi"
          />
        </div>
      )}
    </div>
  );
}
