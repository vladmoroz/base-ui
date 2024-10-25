import * as React from 'react';
import type { MDXComponents } from 'mdx/types';
import { DemoLoader } from './components/demo/NewDemoLoader';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    pre: (props) => <pre className="foo" {...props} />,
    Demo: DemoLoader,
    ...components,
  };
}
