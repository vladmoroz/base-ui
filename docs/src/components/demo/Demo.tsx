'use client';
import * as React from 'react';
import { Collapsible } from '@base_ui/react/Collapsible';
import * as BaseDemo from 'docs/src/blocks/Demo';
import { CopyIcon } from 'docs/src/icons/Copy';
import { DemoVariantSelector } from './DemoVariantSelector';
import { DemoFileSelector } from './DemoFileSelector';
import { CodeSandboxLink } from './CodeSandboxLink';

export interface DemoProps {
  variants: BaseDemo.DemoVariant[];
  defaultCodeOpen?: boolean;
}

export function Demo(props: DemoProps) {
  const { variants: demoVariants, defaultCodeOpen = true } = props;

  const [codeOpen, setCodeOpen] = React.useState(defaultCodeOpen);

  return (
    <BaseDemo.Root variants={demoVariants} className="DemoRoot">
      {/* <ErrorBoundary FallbackComponent={DemoErrorFallback}> */}
      <BaseDemo.Playground className="DemoPlayground" />
      {/* </ErrorBoundary> */}

      <Collapsible.Root open={codeOpen} onOpenChange={setCodeOpen}>
        <div className="DemoToolbar">
          <DemoFileSelector />

          <div className="ml-auto flex items-center gap-4">
            <DemoVariantSelector />

            <CodeSandboxLink title="Base UI example" description="Base UI example" />

            <BaseDemo.SourceCopy className="flex items-center gap-1.5">
              Copy
              <CopyIcon />
            </BaseDemo.SourceCopy>
          </div>
        </div>

        <Collapsible.Content>
          <BaseDemo.SourceBrowser className="DemoCodeBlock" />
        </Collapsible.Content>

        {/*
        <Collapsible.Trigger render={<Button />}>
          {codeOpen ? 'Hide' : 'Show'} code
        </Collapsible.Trigger> */}
      </Collapsible.Root>
    </BaseDemo.Root>
  );
}
