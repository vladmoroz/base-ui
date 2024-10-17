import * as React from 'react';
import '../../src/styles/style.css';
import classes from './experiments.module.css';

export default function Layout({ children }: React.PropsWithChildren) {
  return <main className={classes.main}>{children}</main>;
}
