import * as React from 'react';
import type { MDXComponents } from 'mdx/types';
import { DemoLoader } from './components/demo/NewDemoLoader';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    pre: (props) => <pre className="bg-color-content px-3 py-4 text-xs leading-5" {...props} />,
    Demo: DemoLoader,
    ...components,
  };
}
