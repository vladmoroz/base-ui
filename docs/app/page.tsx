import * as React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { BaseUIIcon } from 'docs-base/src/icons/BaseUI';
import '../src/styles/style.css';

export default function Home() {
  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translateX(-50%) translateY(-50%)',
        width: '100%',
        paddingLeft: '24px',
        paddingRight: '24px',
        boxSizing: 'border-box',
        maxWidth: 500,
      }}
    >
      <div className="mb-8">
        <BaseUIIcon />
      </div>
      <h1 className="Text b-size-7 mb-2">
        Unstyled UI components for building accessible web apps and design systems.
      </h1>
      <p className="Text b-size-5 color-gray weight-1 mb-8">
        From the creators of Radix, Floating UI, and MUI.
      </p>
      <Link className="Link Text b-size-4" href="/getting-started/overview">
        Documentation
      </Link>
    </div>
  );
}

const description = 'Unstyled UI components for building accessible web apps and design systems.';

export const metadata: Metadata = {
  description,
  twitter: {
    description,
  },
  openGraph: {
    description,
  },
};
