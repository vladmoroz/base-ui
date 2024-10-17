import * as React from 'react';
import 'docs-base/src/new/styles.css';

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className="relative z-0 px-14">
      {/* Horizontal gridlines */}
      <span className="pointer-events-none">
        <span className="bg-color-gridline absolute left-0 right-0 top-14 -mt-px h-px" />
        <span className="bg-color-gridline absolute bottom-14 left-0 right-0 -mb-px h-px" />
      </span>

      <div className="relative mx-auto flex min-h-dvh max-w-[1330px] flex-col py-14">
        {/* Vertical gridlines */}
        <span className="pointer-events-none">
          {/* TODO position fixed */}
          <span className="bg-color-gridline absolute -left-px bottom-0 top-0 w-px" />
          <span className="bg-color-gridline absolute -right-px bottom-0 top-0 w-px" />
        </span>

        <div className="bg-color-content flex grow flex-col">{children}</div>
      </div>
    </div>
  );
}
