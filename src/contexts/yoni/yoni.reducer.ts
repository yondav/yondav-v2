import { defaultYoniState } from './yoni.context';
import { ACTIONKIND, type YoniAttributes, type YoniContextAction } from './yoni.types';

export default function yoniReducer(
  state: YoniAttributes,
  { type, payload }: YoniContextAction
): YoniAttributes {
  switch (type) {
    case ACTIONKIND.DEFAULT:
      return defaultYoniState.attributes;

    // case ACTIONKIND.EMPTY:
    //   const emptyColors = {
    //     primary: '#FAFAFA',
    //     secondary: '#FAFAFA',
    //     tertiary: '#FAFAFA',
    //   };

    //   return {
    //     skin: { ...state.skin, fill: emptyColors },
    //     shirt: { ...state.shirt, fill: emptyColors },
    //     mouth: { ...state.mouth, fill: emptyColors },
    //     eyes: { ...state.eyes, fill: emptyColors },
    //     eyebrows: { ...state.eyebrows, fill: emptyColors },
    //     hair: { ...state.hair, fill: emptyColors },
    //     facialHair: { ...state.facialHair, fill: emptyColors },
    //     glasses: { ...state.glasses, fill: emptyColors },
    //     hat: { ...state.hat, fill: emptyColors }
    //   }

    case ACTIONKIND.SKIN:
      return { ...state, ...payload };

    case ACTIONKIND.SHIRT:
      return { ...state, ...payload };

    case ACTIONKIND.MOUTH:
      return { ...state, ...payload };

    case ACTIONKIND.EYERBROWS:
      return { ...state, ...payload };

    case ACTIONKIND.EYES:
      return { ...state, ...payload };

    case ACTIONKIND.HAIR:
      return { ...state, ...payload };

    case ACTIONKIND.FACIALHAIR:
      return { ...state, ...payload };

    case ACTIONKIND.GLASSES:
      return { ...state, ...payload };

    case ACTIONKIND.HAT:
      return { ...state, ...payload };

    default:
      return state;
  }
}
