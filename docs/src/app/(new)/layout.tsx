import * as React from 'react';
import 'docs/src/styles.css';
import './layout.css';

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="RootLayout">
      <span className="RootLayoutGridlineTop" />
      <span className="RootLayoutGridlineBottom" />
      <div className="RootLayoutContainer">
        <span className="RootLayoutGridlineLeft" />
        <span className="RootLayoutGridlineRight" />
        <div className="RootLayoutContent">{children}</div>
      </div>
    </div>
  );
}
