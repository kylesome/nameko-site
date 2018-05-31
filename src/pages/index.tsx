import * as React from 'react';
import { Helmet } from 'react-helmet';
import Link from 'gatsby-link';
import styled from 'react-emotion';

import { HeroBanner } from '../components/HomePage/HeroBanner';
import { ValueProp } from '../components/HomePage/ValueProp';
import { Installation } from '../components/HomePage/Installation';
import { Companies } from '../components/HomePage/Companies';
import { Examples } from '../components/HomePage/Examples';
import { Extentions } from '../components/HomePage/Extentions';
import { Authors } from '../components/HomePage/Authors';
import { Testimonials } from '../components/HomePage/Testimonials';
import { GroupedSection } from '../components/HomePage/GroupedSection';
import { Footer } from '../components/HomePage/Footer';
import { colors, media } from '../utils/css';

export default function HomePage({ data }) {
  const siteTitle = data.site.siteMetadata.title;
  return (
    <>
      <Helmet>
        <title>{siteTitle}</title>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      </Helmet>

      <HeroBanner data={data.homeYaml.heroBanner} />
      {
        data.homeYaml.valueProps.map(valueProp => (
          <ValueProp
            key={valueProp.title}
            data={valueProp}
            images={data.valuePropsImages}
          />
        ))
      }
      <div>
        <GroupedSection>
          <Examples data={data.homePageExamples} />
        </GroupedSection>
        <GroupedSection>
          <Installation data={data.homeYaml.installation} />
        </GroupedSection>
        <GroupedSection>
          <Companies
            data={data.homeYaml.companies}
            images={data.companiesImages}
          />
        </GroupedSection>
      </div>
      <Extentions data={data.homeYaml.extentions} />
      <div>
        <GroupedSection>
          <Testimonials data={data.homeYaml.testimonials} />
        </GroupedSection>
        <GroupedSection>
          <Authors
            data={data.homeYaml.authors}
            images={data.authorsImages}
          />
        </GroupedSection>
      </div>
      <Footer/>
    </>
  );
}

export const query = graphql`
  query HomePage {
    site {
      siteMetadata {
        title
      }
    }
    ...ValuePropsImages
    ...CompaniesImages
    ...HomePageExamples
    ...AuthorsImages
    homeYaml(id: {regex: "/home\/home.yaml/"}) {
      ...HomePageHeroBannerFragment
      ...HomePageValuePropsFragment
      ...HomePageInstallationFragment
      ...HomePageCompaniesFragment
      ...HomePageExtentionsFragment
      ...HomePageTestimonialsFragment
      ...HomePageAuthorsFragment
    }
  }
`;
