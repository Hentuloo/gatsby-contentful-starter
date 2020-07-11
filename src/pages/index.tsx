import * as React from 'react';
import SEO from 'src/components/seo';
import { AboutMe } from 'src/components/AboutView/AboutMe';
import { OffertView } from 'src/components/OffertView/OffertView';

const IndexPage: React.FC = () => (
  <div>
    <SEO title="Home" />
    <AboutMe />
    <OffertView />
  </div>
);

export default IndexPage;
