import * as React from 'react';
import { Helmet } from 'react-helmet';

import { HeroBanner } from '../components/HomePage/HeroBanner';
import { ValueProp } from '../components/HomePage/ValueProp';
import { Installation } from '../components/HomePage/Installation';
import { Community } from '../components/HomePage/Community';
import { Companies } from '../components/HomePage/Companies';
import { Examples } from '../components/HomePage/Examples';
import { Extensions } from '../components/HomePage/Extensions';
import { Authors } from '../components/HomePage/Authors';
import { Testimonials } from '../components/HomePage/Testimonials';
import { GroupedSection } from '../components/HomePage/GroupedSection';
import { Footer } from '../components/HomePage/Footer';
import { colors, media } from '../utils/css';

export default function HomePage({ data }) {
  const siteMetadata = data.site.siteMetadata;

  return (
    <>
      <Helmet>
        <title>{siteMetadata.title}</title>
        <meta property="og:url" content={siteMetadata.url} />
        <meta property="og:title" content={siteMetadata.title} />
        <meta
          property="og:description"
          content={data.homeYaml.heroBanner.tagLine}
        />
        <meta name="theme-color" content={colors.amethyst} />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
      </Helmet>

      <HeroBanner data={data.homeYaml.heroBanner} />
      {data.homeYaml.valueProps.map(valueProp => (
        <ValueProp
          key={valueProp.title}
          data={valueProp}
          images={data.valuePropsImages}
        />
      ))}
      <div>
        <GroupedSection>
          <Examples data={data.codeExamples} />
        </GroupedSection>
        <GroupedSection>
          <Installation data={data.codeInstallation} />
        </GroupedSection>
        <GroupedSection>
          <Community data={data.homeYaml.community} images={data.communityImages} />
        </GroupedSection>
      </div>
      <Extensions data={data.homeYaml.extensions} />
      <div>
        <GroupedSection>
          <Testimonials data={data.homeYaml.testimonials} />
        </GroupedSection>
        <GroupedSection>
          <Companies
            data={data.homeYaml.companies}
            images={data.companiesImages}
          />
        </GroupedSection>
        <GroupedSection>
          <Authors data={data.homeYaml.authors} images={data.authorsImages} />
        </GroupedSection>
      </div>
      <Footer />
    </>
  );
}

export const query = graphql`
  query HomePage {
    site {
      siteMetadata {
        title
        url
      }
    }
    ...ValuePropsImages
    ...CompaniesImages
    ...CodeExamples
    ...CodeInstallation
    ...AuthorsImages
    ...CommunityImages
    homeYaml(id: { regex: "/home/home.yaml/" }) {
      ...HomePageHeroBanner
      ...HomePageValueProps
      ...HomePageCompanies
      ...HomePageExtensions
      ...HomePageCommunity
      ...HomePageTestimonials
      ...HomePageAuthors
    }
  }
`;
