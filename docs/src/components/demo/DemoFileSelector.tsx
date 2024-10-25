'use client';
import * as React from 'react';
import { DemoContext } from 'docs/src/blocks/Demo';
import { Tabs } from '@base_ui/react/Tabs';

export function DemoFileSelector() {
  const demoContext = React.useContext(DemoContext);
  if (!demoContext) {
    throw new Error('Missing DemoContext');
  }

  const {
    selectedVariant: { files },
    setSelectedFile,
    selectedFile,
  } = demoContext;

  if (files.length < 2) {
    return null;
  }

  return (
    <Tabs.Root value={selectedFile} onValueChange={setSelectedFile}>
      <Tabs.List className="flex gap-4" aria-label="File selector">
        {files.map((file) => (
          <Tabs.Tab
            className="data-[selected]:text-color-foreground -mx-2 px-2 data-[selected]:font-bold"
            value={file}
            key={file.path}
          >
            {file.name}
          </Tabs.Tab>
        ))}
      </Tabs.List>
    </Tabs.Root>
  );
}
