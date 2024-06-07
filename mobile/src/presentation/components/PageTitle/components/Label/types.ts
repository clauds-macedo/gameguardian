import type { ReactNode } from 'react';

export interface ILabel {
  children: ReactNode;
  title?: boolean;
  error?: boolean;
}
