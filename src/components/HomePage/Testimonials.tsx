import * as React from 'react';
import { css } from 'emotion';
import styled from 'react-emotion';
import { Flex, Box } from 'grid-emotion';
import Img from 'gatsby-image';

import { Container } from '../layout';
import { Slider } from '../Slider';
import { Slide } from '../Slider/Slide';
import { media, colors } from '../../utils/css';
import { FeatherIcon } from '../Icons/FeatherIcon';

const containerStyles = css`
  margin: 88px auto;
  padding: 0 60px;
`;

const headingStyles = css`
  padding: 0 20px;
`;

const sliderSettings = {
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const slideInnerStyles = css`
  padding: 30px 30px 88px 30px;
  min-height: 205px;
  position: relative;
  background-color: ${colors.white};
`;

const quoteStyles = css`
  font-style: italic;
`;

const authorInfoStyles = css`
  text-align: right;
  position: absolute;
  bottom: 30px;
  right: 30px;
`;

const authorStyles = css`
  display: block;
`;

const twitterHandleStyles = css`
  color: ${colors.governorBay};
`;

export function Testimonials({ data }) {
  return (
    <Container className={containerStyles}>
      <h2 className={headingStyles}>{data.title}</h2>
      <Slider {...sliderSettings}>
        {
          data.testimonials.map((testimonial, i) => (
            <Slide key={i} className={slideInnerStyles}>
              <p className={quoteStyles}>
                {testimonial.quote}
              </p>
              <div className={authorInfoStyles}>
                <span className={authorStyles}>
                  -- {testimonial.author}
                </span>
                <a
                  className={css`text-decoration: none;`}
                  href={`https://twitter.com/${testimonial.twitterHandle}`}
                >
                  <span className={twitterHandleStyles}>
                    {testimonial.twitterHandle}
                  </span>
                </a>
              </div>
            </Slide>
          ))
        }
      </Slider>
    </Container>
  );
};

export const query = graphql`
  fragment HomePageTestimonialsFragment on HomeYaml {
    testimonials {
      title
      testimonials {
        quote
        author
        twitterHandle
      }
    }
  }
`;
