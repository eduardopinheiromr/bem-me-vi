import { Navigation, Pagination, A11y } from "swiper";

import { Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styled from "styled-components";

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
  .react-multiple-carousel__arrow--right {
    right: 0;
    &::before {
      content: "▲";
      font-size: 25px;
      transform: rotate(90deg);
      padding-bottom: 7px;
    }
  }
  .react-multiple-carousel__arrow--left {
    left: 0;
    &::before {
      content: "▲";
      font-size: 25px;
      transform: rotate(270deg);
      padding-bottom: 7px;
    }
  }
`;

type Props = {
  children: JSX.Element | JSX.Element[];
  arrows?: boolean;
  draggable?: boolean;
};

export default function CustomCarousel({ children }: Props) {
  return (
    <StyledCarousel>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={1}
        draggable
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {children}
      </Swiper>
    </StyledCarousel>
  );
}
