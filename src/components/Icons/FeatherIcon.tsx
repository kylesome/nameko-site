import * as React from 'react';
import { css } from 'emotion';
import { icons } from 'feather-icons';

export function FeatherIcon(props) {
  const {
    name,
    width,
    height,
    onClick,
    className = '',
    iconClassName = '',
  } = props;

  let iconStyles = css`
    display: block;
  `;
  if (iconClassName) {
    iconStyles = css`
      ${iconStyles} ${iconClassName};
    `;
  }
  const featherString = icons[name].toSvg({
    width,
    height,
    class: iconStyles,
  });
  let spanStyles = css`
    display: inline-block;
  `;
  if (className) {
    spanStyles = css`
      ${spanStyles} ${className};
    `;
  }

  return (
    <>
      <span
        onClick={onClick}
        className={spanStyles}
        dangerouslySetInnerHTML={{ __html: featherString }}
      />
    </>
  );
}
