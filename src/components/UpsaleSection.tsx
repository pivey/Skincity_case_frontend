import * as React from 'react';
import s from 'styled-components';
import { offers, professionals, skinTest, treatments } from '../assets/images';

const UpSaleHolder = s.div`
  width: 100%;
  height: 100%;
  display: grid;
  padding: 2rem 0;
  grid-template-columns: repeat(auto-fill, minmax(1fr));
  grid-template-rows: repeat(auto-fill, minmax(1fr));
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  `;

const UpSaleBox = s.div.attrs(({ imgSrc }: any) => ({
  imgSrc,
}))`
    transition: all 250ms;
    width: 100%;
    min-height: 12rem;
    font-size: 20px;
    border-radius: 2rem;
    text-align: center;
    background-color: #048A81;
    background-image: url(${({ imgSrc }) => imgSrc});
    background-repeat: no-repeat;
    background-position: center;
    object-fit: cover;
    filter: brightness(0.95);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #E9E3E6;
    &:hover {
      cursor: pointer;
      transform: scale(1.02);
      filter: contrast(120%);

      a.left:before {
        visibility: visible;
        width: 100%;
      }
    }

    a.left {
      position: relative;
      color: inherit;
      text-decoration: none;
    }

    a.left:before {
      content: "";
      position: absolute;
      width: 0;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: #FFF;
      visibility: hidden;
      transition: all 0.3s ease-in-out;
    }
  `;

const upSaleBoxContent = [
  {
    text: 'Speak to our skincare professionals',
    imgSrc: professionals,
  },
  {
    text: 'Treatments',
    imgSrc: treatments,
  },
  {
    text: 'Offers',
    imgSrc: offers,
  },
  {
    text: 'Skin test',
    imgSrc: skinTest,
  },
];

const UpsaleSection = () => {
  return (
  <UpSaleHolder>
    {upSaleBoxContent.map(({ text, imgSrc }: any) => (
        <UpSaleBox imgSrc={imgSrc}>
          <a href="" className="left">
            {text}
          </a>
        </UpSaleBox>
    ))}
  </UpSaleHolder>
)};


export default UpsaleSection;
