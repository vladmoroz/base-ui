'use client';

import * as React from 'react';
import * as Menu from '@base_ui/react/Menu';

export default function Page() {
  const anchor = React.useRef<HTMLDivElement>(null);

  return (
    <div>
      <h1>Ref passed to anchor</h1>
      <Menu.Root animated={false}>
        <Menu.Trigger>Trigger</Menu.Trigger>
        <Menu.Positioner side="bottom" alignment="start" arrowPadding={0} anchor={anchor}>
          <Menu.Popup>
            <Menu.Item style={{ background: 'lightgray', padding: '5px' }}>One</Menu.Item>
            <Menu.Item style={{ background: 'lightgray', padding: '5px' }}>Two</Menu.Item>
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Root>
      <div
        data-testid="anchor"
        style={{ margin: '100px', background: 'yellowgreen', height: '50px', width: '200px' }}
        ref={anchor}
      >
        Anchor
      </div>
    </div>
  );
}