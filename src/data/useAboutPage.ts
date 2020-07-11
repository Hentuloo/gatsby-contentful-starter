import { useStaticQuery, graphql } from 'gatsby';
import { AboutPageQuery } from 'src/types/gatsby-graphql';

export const useAboutPage = () => {
  const data = useStaticQuery<AboutPageQuery>(graphql`
    query aboutPage {
      allContentfulAboutPage {
        edges {
          node {
            aboutMeTitle
            aboutMeQuote
            aboutMe
          }
        }
      }
    }
  `);
  return data.allContentfulAboutPage.edges[0].node;
};
