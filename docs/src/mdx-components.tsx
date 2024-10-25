import * as React from 'react';
import type { MDXComponents } from 'mdx/types';
import { DemoLoader } from './components/demo/NewDemoLoader';
import { CodeBlock } from './components/CodeBlock';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    pre: (props) => <CodeBlock {...props} className="my-5" />,
    Demo: DemoLoader,
    ...components,
  };
}
