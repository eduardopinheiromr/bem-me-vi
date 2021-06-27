import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  ::-webkit-scrollbar-track {
    background-color: #000;
  }
  ::-webkit-scrollbar {
    width: 6px; 
  }
  ::-webkit-scrollbar-thumb {
    background: yellow;
  }
  .bg-primary-bmv{
    background: #000;
  }
  .text-primary-bmc{
    color: #000;
  }
  .bg-secondary-bmv{
    background: #5CBD6F;
  }
  .text-secondary-bmc{
    color: #5CBD6F;
  }
  
  p{
    font-family: 'Poppins', sans-serif;
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .bmv-primary-btn {
    font-family: 'Livvic', sans-serif;
    font-size: 30px;
    background: linear-gradient(90deg, #000 0%, #2f2f2f 50%, #000 100%);
    border: 5px solid #fff;
    border-radius: 9px;
    padding: 25px 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    text-align: center;
  }
  .bmv-primary-btn:hover{
    color: #fff;
  }
  .hover-scale-up{
    transition: .3s;
  }
  .hover-scale-up:hover{
    transform: scale(1.1)
  }
`;
