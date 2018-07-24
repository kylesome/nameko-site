import * as React from 'react';
import { css } from 'emotion';

import { colors, media, desktopOnly, mobileOnly } from '../../utils/css';
import { Cta } from '../Buttons/Cta';
import { LogoSvg } from '../Svgs/LogoSvg';

const heroStyles = css`
  position: relative;
  height: 468px;
  background: linear-gradient(47deg, #3023ae, #c96dd8);
  text-align: center;
  padding-top: 113px;
  color: ${colors.white};

  ${media.desktop`
    height: 590px;
    padding-top: 130px;
  `};
`;

const leadStyles = css`
  margin-bottom: 50px;
  display: inline-block;

  ${media.desktop`
    margin-bottom: 72px;
  `};
`;

const logoStyles = css`
  vertical-align: middle;
  margin-right: 24px;
  color: rgba(255, 255, 255, 0.87);
  width: 47px;
  height: 47px;

  ${media.desktop`
    width: 80px;
    height: 80px;
  `};
`;

const titleStyles = css`
  letter-spacing: 1.5px;
  font-size: 34px;
  color: rgba(255, 255, 255, 0.87);
  font-weight: 300;
  vertical-align: middle;
  display: inline-block;
  font-family: 'Comfortaa', cursive;
  margin-bottom: 0;

  ${media.desktop`
    font-size: 60px;
    padding-top: 10px;
  `};
`;

const howToSayStyles = css`
  float: right;
  font-style: italic;
  letter-spacing: 1.5px;
  text-align: center;
  text-shadow: 0 1px 6px rgba(255, 255, 255, 0.5);

  ${media.mobile`
    font-size: 10px;
    letter-spacing: 1.2px;
  `};
`;

const tagLineStyles = css`
  font-size: 15px;
  font-weight: 300;
  line-height: 28px;
  letter-spacing: 1.4px;
  text-shadow: 0 1px 6px rgba(255, 255, 255, 0.5);
  margin-bottom: 48px;

  ${media.desktop`
    font-size: 22px;
    line-height: normal;
    letter-spacing: 2px;
    margin-bottom: 97px;
  `};
`;

const navStyles = css`
  ${media.desktop`
    position: absolute;
    top: 0;
    right: 0;
    padding-left: 20px;
    padding-right: 20px;
  `} li {
    display: inline-block;
    padding: 24px;
    position: absolute;
    top: 0;

    ${media.desktop`
      position: static;
      padding: 32px 20px;
    `} a {
      text-decoration: none;
      color: rgba(255, 255, 255, 0.87);
    }
  }
`;

const forumLinkStyles = css`
  left: 0;
`;

const docsLinkStyles = css`
  left: 0;
`;

const githubLinkStyles = css`
  right: 0;
`;

function Navigation() {
  return (
    <ul className={navStyles}>
      <li className={forumLinkStyles}>
        <a href="https://discourse.nameko.io/">Forum</a>
      </li>
      <li className={docsLinkStyles}>
        <a href="https://docs.nameko.io/">
          <span className={mobileOnly}>Docs</span>
          <span className={desktopOnly}>Documentation</span>
        </a>
      </li>
      <li className={githubLinkStyles}>
        <a href="https://github.com/nameko/nameko">Github</a>
      </li>
    </ul>
  );
}

export function HeroBanner({ data }) {
  return (
    <section className={heroStyles}>
      <Navigation />
      <div className={leadStyles}>
        <div>
          <LogoSvg className={logoStyles} />
          <h1 className={titleStyles}>{data.title}</h1>
        </div>
        <span className={howToSayStyles}>{data.howToSay}</span>
      </div>
      <p className={tagLineStyles}>{data.tagLine}</p>
      <a href="https://docs.nameko.io/">
        <Cta>{data.cta}</Cta>
      </a>
    </section>
  );
}

export const query = graphql`
  fragment HomePageHeroBanner on HomeYaml {
    heroBanner {
      title
      howToSay
      tagLine
      cta
    }
  }
`;
