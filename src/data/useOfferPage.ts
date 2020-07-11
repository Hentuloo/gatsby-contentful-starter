import { useStaticQuery, graphql } from 'gatsby';
import { OffertPageQuery } from 'src/types/gatsby-graphql';

export const useOfferPage = () => {
  const data = useStaticQuery<OffertPageQuery>(graphql`
    query offertPage {
      allContentfulOffertPage {
        nodes {
          title
          description
          photo {
            fluid {
              base64
              tracedSVG
              srcWebp
              srcSetWebp
              src
              sizes
              srcSet
              aspectRatio
            }
          }
        }
      }
    }
  `);
  return data.allContentfulOffertPage.nodes;
};
