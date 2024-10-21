import * as React from 'react';
import 'docs/src/styles.css';

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className="relative z-0 px-14">
      {/* Horizontal gridlines */}
      <span className="bg-color-gridline absolute left-0 right-0 top-14 -mt-px h-px" />
      <span className="bg-color-gridline absolute bottom-14 left-0 right-0 -mb-px h-px" />

      <div className="relative mx-auto flex min-h-dvh max-w-[1330px] flex-col py-14">
        {/* Vertical gridlines (overshoot 200px so that page overscroll looks nice) */}
        <span className="bg-color-gridline fixed bottom-[-200px] left-[calc(50%-min(1330px,calc(100vw-7rem))/2)] top-[-200px] w-px" />
        <span className="bg-color-gridline fixed bottom-[-200px] right-[calc(50%-min(1330px,calc(100vw-7rem))/2)] top-[-200px] w-px" />

        <div className="bg-color-content flex grow flex-col">{children}</div>
      </div>
    </div>
  );
}
