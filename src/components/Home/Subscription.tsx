import React from "react";
import Headline from "../Headline";

const Subscription = () => {
  return (
    <div className="my-5 pb-5">
      <Headline
        title="INSCRIÇÃO"
        description="Gostaria de fazer parte da nossa família? Ou ser ajudado por nós?"
      />
      <a
        href="#"
        className="bmv-primary-btn w-md-50 w-25 mx-auto hover-scale-up"
      >
        QUERO AJUDAR!
      </a>{" "}
      <a
        href="#"
        className="bmv-secondary-btn w-md-50 w-25 mx-auto hover-scale-up"
      >
        QUERO SER AJUDADO
      </a>
    </div>
  );
};

export default Subscription;
