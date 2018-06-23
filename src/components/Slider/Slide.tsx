import * as React from 'react';
import { css } from 'emotion';

const slideStyles = css`
  padding: 20px;
  outline: 0;
`;

const slideInnerStyles = css`
  border-radius: 6px;
  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
    0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
`;

export function Slide({ children, className = '', containerClassName = '' }) {
  return (
    <div
      className={css`
        ${slideStyles} ${containerClassName};
      `}
    >
      <div
        className={css`
          ${slideInnerStyles} ${className};
        `}
      >
        {children}
      </div>
    </div>
  );
}
