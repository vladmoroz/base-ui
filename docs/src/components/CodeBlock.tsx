import clsx from 'clsx';
import * as React from 'react';

export function CodeBlock({ className, ...props }: React.ComponentProps<'pre'>) {
  return <pre className={clsx('CodeBlock', className)} {...props} />;
}
