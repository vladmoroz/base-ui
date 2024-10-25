'use client';
import * as React from 'react';
import { Collapsible } from '@base_ui/react/Collapsible';
import * as BaseDemo from 'docs/src/blocks/Demo';
import { CopyIcon } from 'docs/src/icons/Copy';
import { IconButton } from 'docs/src/design-system/IconButton';
import { Button } from 'docs/src/design-system/Button';
import { DemoVariantSelector } from './DemoVariantSelector';
import { DemoFileSelector } from './DemoFileSelector';
import { CodeSandboxLink } from './CodeSandboxLink';
import { GitHubLink } from './GitHubLink';

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
      <BaseDemo.Playground className="bg-color-content flex min-h-[200px] items-center justify-center" />
      {/* </ErrorBoundary> */}

      <Collapsible.Root open={codeOpen} onOpenChange={setCodeOpen}>
        <div className="text-color-gray border-color-border flex h-9 items-center border-y px-4 font-mono text-xs">
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
          <BaseDemo.SourceBrowser className="CodeBlock" />
        </Collapsible.Content>

        {/*
        <Collapsible.Trigger render={<Button />}>
          {codeOpen ? 'Hide' : 'Show'} code
        </Collapsible.Trigger> */}
      </Collapsible.Root>
    </BaseDemo.Root>
  );
}
