import React, { FC } from 'react';
import styled from 'styled-components';
import { useOfferPage } from 'src/data/useOfferPage';
import Img from 'gatsby-image';

const Wrapper = styled.div`
  min-height: 100vh;
  img {
    min-height: 300px;
  }
`;

export interface OffertViewProps {}

export const OffertView: FC<OffertViewProps> = ({ ...props }) => {
  const offert = useOfferPage();
  console.log(offert);

  return (
    <Wrapper {...props}>
      {offert.map(({ title, description, photo }) => (
        <div key={title}>
          <span>{title}</span>
          <Img fluid={photo.fluid} />
        </div>
      ))}
    </Wrapper>
  );
};
