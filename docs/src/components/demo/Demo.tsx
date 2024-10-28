'use client';
import * as React from 'react';
import { Collapsible } from '@base_ui/react/Collapsible';
import * as BaseDemo from 'docs/src/blocks/Demo';
import { CopyIcon } from 'docs/src/icons/Copy';
import clsx from 'clsx';
import { CheckIcon } from 'docs/src/icons/Check';
import { DemoVariantSelector } from './DemoVariantSelector';
import { DemoFileSelector } from './DemoFileSelector';
import { CodeSandboxLink } from './CodeSandboxLink';

export interface DemoProps extends React.ComponentProps<typeof BaseDemo.Root> {
  variants: BaseDemo.DemoVariant[];
  defaultCodeOpen?: boolean;
}

export function Demo({ className, defaultCodeOpen = true, title, ...props }: DemoProps) {
  const [codeOpen, setCodeOpen] = React.useState(defaultCodeOpen);
  const [copyTimeout, setCopyTimeout] = React.useState<number>(0);

  return (
    <BaseDemo.Root className={clsx('DemoRoot', className)} {...props}>
      <BaseDemo.Playground className="DemoPlayground" />

      <Collapsible.Root open={codeOpen} onOpenChange={setCodeOpen}>
        <div className="DemoToolbar">
          <DemoFileSelector />

          <div className="ml-auto flex items-center gap-4">
            <DemoVariantSelector className="contents" />
            <CodeSandboxLink
              className="DemoButton cursor-pointer"
              title="Base UI example"
              description="Base UI example"
            />
            <BaseDemo.SourceCopy
              className="DemoButton"
              onCopied={() => {
                window.clearTimeout(copyTimeout);
                const newTimeout = window.setTimeout(() => {
                  window.clearTimeout(newTimeout);
                  setCopyTimeout(0);
                }, 2000);
                setCopyTimeout(newTimeout);
              }}
            >
              Copy
              <span className="flex size-[14px] items-center justify-center">
                {copyTimeout ? <CheckIcon /> : <CopyIcon />}
              </span>
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
