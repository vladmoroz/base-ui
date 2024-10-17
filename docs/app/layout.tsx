import { Metadata } from 'next';
import * as React from 'react';
import { GoogleAnalytics } from 'docs-base/src/components/GoogleAnalytics';
import { DocsProviders } from './DocsProviders';
import { Favicons } from './Favicons';

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Favicons />
      </head>
      <body>
        <DocsProviders>
          {children}
          <GoogleAnalytics />
        </DocsProviders>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    template: '%s · Base UI',
    default: 'Base UI',
  },
  twitter: {
    site: '@Base_UI',
    card: 'summary_large_image',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: {
      template: '%s · Base UI',
      default: 'Base UI',
    },
    ttl: 604800,
  },
};
