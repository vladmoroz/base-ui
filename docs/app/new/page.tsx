import { Logo } from 'docs-base/src/new/components/Logo';
import * as React from 'react';

export default function Page() {
  return (
    <div className="m-auto px-12 pb-[min(5rem,max(3.5rem,10vh))] pt-12">
      <div className="max-w-[460px]">
        <Logo className="mb-8 ml-px" />
        <h1 className="mb-2 text-2xl font-medium">
          Unstyled React components for building accessible web apps and design systems.
        </h1>
        <p className="text-color-text-gray mb-6">
          From the creators of Radix, Floating UI, and MUI.
        </p>

        <a className="text-color-link" href="/">
          Documentation →
        </a>
      </div>
    </div>
  );
}
