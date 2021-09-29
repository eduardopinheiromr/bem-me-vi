import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";
import { useMediaPredicate } from "react-media-hook";

const StyledCarousel = styled.div`
  max-width: 1300px;
  margin: 0 auto;

  .react-multiple-carousel__arrow {
    height: 60px;
    width: 60px;
    justify-content: center;
    align-items: center;
    display: flex;
  }
  .react-multiple-carousel__arrow--right::before {
    content: "▲";
    font-size: 25px;
    transform: rotate(90deg);
    padding-bottom: 7px;
  }
  .react-multiple-carousel__arrow--left::before {
    content: "▲";
    font-size: 25px;
    transform: rotate(270deg);
    padding-bottom: 7px;
  }
`;

type Props = {
  children: JSX.Element | JSX.Element[];
};

export default function CustomCarousel({ children }: Props) {
  const responsive = {
    desktop: {
      breakpoint: {
        max: 30000,
        min: 768,
      },
      items: 1,
      partialVisibilityGutter: 40,
    },
  };

  const isDesktop = useMediaPredicate("(min-width: 768px)");

  return (
    <StyledCarousel>
      <Carousel
        infinite
        draggable={false}
        pauseOnHover={false}
        responsive={responsive}
        arrows={isDesktop}
      >
        {children}
      </Carousel>
    </StyledCarousel>
  );
}
