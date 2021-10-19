import Headline from "@components/Headline";
import Image from "next/image";
import facebookImage from "@icons/facebook.png";
import instagramImage from "@icons/instagram.png";
import youtubeImage from "@icons/youtube.png";
import emailImage from "@icons/email.png";
import whatsappImage from "@icons/whatsapp.png";
import styled from "styled-components";

const Root = styled.div`
  .w-600 {
    width: 100%;
    max-width: 600px;
  }
`;

export default function Contacts() {
  const channels = [
    {
      name: "Facebook",
      image: facebookImage,
      href: "https://www.facebook.com/projetobemmevi",
    },
    {
      name: "Instagram",
      image: instagramImage,
      href: "https://www.instagram.com/projetobemmevi",
    },
    {
      name: "Youtube",
      image: youtubeImage,
      href: "https://www.youtube.com/channel/UCxzIzrXOW2qeAqog0Ry3HMQ?view_as=subscriber",
    },
  ];

  return (
    <Root id="contato" className="container">
      <div className="row">
        {channels.map((channel, key) => (
          <div
            key={key}
            className="hover-scale-up col-12 col-md-4 d-flex justify-content-center align-items-center"
          >
            <a
              href={channel.href}
              target="_blank"
              rel="noreferrer"
              className="text-white h5 text-center"
            >
              <Image
                placeholder="blur"
                src={channel.image}
                alt={channel.name}
                title={channel.name}
              />
              <p>{channel.name}</p>
            </a>
          </div>
        ))}
      </div>
      <Headline title="ENTRE EM CONTATO!" />
      <div className="row mb-4 w-600 mx-auto">
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
          <Image
            placeholder="blur"
            src={emailImage}
            alt="email"
            width={100}
            objectFit="contain"
          />
        </div>
        <div className="col-12 col-md-6 text-white fw-bold d-flex justify-content-center align-items-center">
          <p>projetobemmevi@gmail.com</p>
        </div>
      </div>
      <div className="row mb-4 w-600 mx-auto">
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
          <Image
            placeholder="blur"
            src={whatsappImage}
            alt="whatsapp"
            width={100}
            objectFit="contain"
          />
        </div>
        <div className="col-12 col-md-6 text-white fw-bold d-flex justify-content-center align-items-center">
          <p>(11) 97504-0278</p>
        </div>
      </div>
    </Root>
  );
}
