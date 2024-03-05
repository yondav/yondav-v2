import { useReducer, type ReactNode } from 'react';

import { Context, defaultState } from './portrait.context';
import { reducer } from './portrait.reducer';

export function Provider({ children }: { children: ReactNode }) {
  const [portrait, dispatch] = useReducer(reducer, defaultState.portrait);

  return <Context.Provider value={{ portrait, dispatch }}>{children}</Context.Provider>;
}
