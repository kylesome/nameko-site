import * as React from 'react';
import { Helmet } from 'react-helmet';

import { HeroBanner } from '../components/HomePage/HeroBanner';
import { Badges } from '../components/HomePage/Badges';
import { ValueProps } from '../components/HomePage/ValueProps';
import { Installation } from '../components/HomePage/Installation';
import { Companies } from '../components/HomePage/Companies';
import { Examples } from '../components/HomePage/Examples';
import { Extentions } from '../components/HomePage/Extentions';
import { Authors } from '../components/HomePage/Authors';
import { Testimonials } from '../components/HomePage/Testimonials';
import { GroupedSection } from '../components/HomePage/GroupedSection';
import { Footer } from '../components/HomePage/Footer';
import { colors } from '../utils/css';

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
      <Badges />
      <ValueProps
        data={data.homeYaml.valueProps}
        images={data.valuePropsImages}
      />
      <div>
        <GroupedSection>
          <Examples data={data.codeExamples} />
        </GroupedSection>
        <GroupedSection>
          <Installation data={data.codeInstallation} />
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
    homeYaml(id: { regex: "/home/home.yaml/" }) {
      ...HomePageHeroBanner
      ...HomePageValueProps
      ...HomePageCompanies
      ...HomePageExtentions
      ...HomePageTestimonials
      ...HomePageAuthors
    }
  }
`;

/*
---------------------------------------------------------------------------------
-------- FULL HOMEPAGE QUERY (use for debugging content api in graphiql) --------
---------------------------------------------------------------------------------

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
  homeYaml(id: {regex: "/home/home.yaml/"}) {
    ...HomePageHeroBanner
    ...HomePageValueProps
    ...HomePageCompanies
    ...HomePageExtentions
    ...HomePageTestimonials
    ...HomePageAuthors
  }
}

fragment HomePageValueProps on HomeYaml {
  valueProps {
    title
    description
    icon
  }
}

fragment ValuePropsImages on RootQueryType {
  valuePropsImages: allImageSharp(filter: {id: {regex: "/images/value_props/"}}) {
    edges {
      node {
        resolutions(width: 120) {
          originalName
        }
      }
    }
  }
}

fragment HomePageCompanies on HomeYaml {
  companies {
    title
  }
}

fragment CompaniesImages on RootQueryType {
  companiesImages: allImageSharp(filter: {id: {regex: "/images/companies/"}}) {
    edges {
      node {
        resolutions(width: 140) {
          originalName
        }
      }
    }
  }
}

fragment CodeExamples on RootQueryType {
  codeExamples: allMarkdownRemark(filter: {id: {regex: "/home/examples/"}}, sort: {fields: [frontmatter___order], order: ASC}) {
    edges {
      node {
        html
      }
    }
  }
}

fragment CodeInstallation on RootQueryType {
  codeInstallation: markdownRemark(id: {regex: "/home/installation/"}) {
    html
  }
}

fragment HomePageAuthors on HomeYaml {
  authors {
    title
    authors {
      name
      githubHandle
      twitterHandle
      image
    }
  }
}

fragment AuthorsImages on RootQueryType {
  authorsImages: allImageSharp(filter: {id: {regex: "/images/authors/"}}) {
    edges {
      node {
        resolutions(width: 150) {
          originalName
        }
      }
    }
  }
}

fragment HomePageHeroBanner on HomeYaml {
  heroBanner {
    title
    howToSay
    tagLine
    cta
  }
}

fragment HomePageExtentions on HomeYaml {
  extentions {
    title
    extentions {
      title
      description
      link
    }
  }
}

fragment HomePageTestimonials on HomeYaml {
  testimonials {
    title
    testimonials {
      quote
      author
      twitterHandle
    }
  }
}
*/
