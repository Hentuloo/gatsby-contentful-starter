import React, { FC } from 'react';
import styled from 'styled-components';
import { useAboutPage } from 'src/data/useAboutPage';

const Wrapper = styled.div``;

export interface AboutMeProps {}

export const AboutMe: FC<AboutMeProps> = ({ ...props }) => {
  const { aboutMeTitle, aboutMeQuote, aboutMe } = useAboutPage();

  return (
    <Wrapper {...props}>
      <div>{aboutMeTitle}</div>
      <div>{aboutMeQuote}</div>
      <div>{aboutMe}</div>
    </Wrapper>
  );
};
