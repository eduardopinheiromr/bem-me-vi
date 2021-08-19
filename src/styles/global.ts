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
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 25.5%), linear-gradient(180deg, rgba(0, 0, 0, 0.2) 2.87%, rgba(0, 0, 0, 0) 17.82%), #0A3256;;
  }
  .text-primary-bmc{
    color: #fff;
  }
  .bg-secondary-bmv{
    background: #5CBD6F;
  }
  .text-secondary-bmc{
    color: #F5D400;
  }
  main {
    background: #0A3256;
  }
  
  p{
    font-family: 'Poppins', sans-serif;
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .bmv-primary-btn {
    font-family: 'Livvic', sans-serif;
    font-size: 22px;
    background: #FFFBFA;
    box-shadow: inset 0px -4px 10px rgba(0, 0, 0, 0.25), inset 0px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    padding: 15px 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-weight: bold;
    text-align: center;
  }
  .bmv-primary-btn span {
    color: #F5D400;
    text-shadow: rgb(10, 50, 86) 2px 0px 0px, rgb(10, 50, 86) 1.75517px 0.958851px 0px, rgb(10, 50, 86) 1.0806px 1.68294px 0px, rgb(10, 50, 86) 0.141474px 1.99499px 0px, rgb(10, 50, 86) -0.832294px 1.81859px 0px, rgb(10, 50, 86) -1.60229px 1.19694px 0px, rgb(10, 50, 86) -1.97998px 0.28224px 0px, rgb(10, 50, 86) -1.87291px -0.701566px 0px, rgb(10, 50, 86) -1.30729px -1.5136px 0px, rgb(10, 50, 86) -0.421592px -1.95506px 0px, rgb(10, 50, 86) 0.567324px -1.91785px 0px, rgb(10, 50, 86) 1.41734px -1.41108px 0px, rgb(10, 50, 86) 1.92034px -0.558831px 0px;
    
  }
  .bmv-primary-btn:hover{
    color: #fff;
  }

  .bmv-secondary-btn{
    font-family: 'Livvic', sans-serif;
    font-size: 22px;
    background: linear-gradient(90deg, #FCD604 0%, #9E8A17 50%, #FCD604 100%);
    border: 5px solid #fff;
    border-radius: 9px;
    padding: 15px 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    text-align: center;
  }
  .bmv-secondary-btn:hover{
    color: #fff;
  }
  .hover-scale-up{
    transition: .3s;
  }
  .hover-scale-up:hover{
    transform: scale(1.1)
  }
`;
