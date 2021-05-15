import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
  LinkS,
} from "./InfoSectionE.js";

function InfoSection({
  lightBg,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  margin,
  hover,
  img,
  id,
}) {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <LinkS
                    target='_blank'
                    hover={hover}
                    href='https://yashs-amazon-clone.netlify.app/'
                  >
                    Projects
                  </LinkS>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
}

export default InfoSection;
// @media screen and (max-width:768px){
//     grid-template-areas: imgStart? 'col1' 'col2' : 'col1 col1' 'col2 col2';
// }
