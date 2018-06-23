import * as React from 'react';
import '../prism-styles';

export default function Layout({ children }) {
  return <>{children()}</>;
}
