import { useReducer, type ReactNode, useMemo, useCallback, useState } from 'react';

import type { Nullable } from '../../utils';

import { YoniContext, defaultYoniState } from './yoni.context';
import yoniReducer from './yoni.reducer';
import type { YONISTATE } from './yoni.types';

export default function YoniProvider({ children }: { children: ReactNode }) {
  const [attributes, dispatch] = useReducer(yoniReducer, defaultYoniState.attributes);
  const [state, setState] = useState<Nullable<YONISTATE>>(null);

  const value = useMemo(
    () => ({
      state,
      setState,
      dispatch,
      attributeTypes: defaultYoniState.attributeTypes,
      attributes,
    }),
    [attributes, state]
  );

  return <YoniContext.Provider value={value}>{children}</YoniContext.Provider>;
}
