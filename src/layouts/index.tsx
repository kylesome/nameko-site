import * as React from 'react';
import 'whatwg-fetch';
import '../prism-styles';

export default function Layout({ children }) {
  return <>{children()}</>;
}
