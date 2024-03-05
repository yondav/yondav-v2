import {
  Yoni,
  type AttributeActionType,
  type EYEBROWTYPE,
  type EYETYPE,
  type FACIALHAIRTYPE,
  type GLASSESTYPE,
  type HAIRTYPE,
  type HATTYPE,
  type MOUTHTYPE,
  type SHIRTTYPE,
} from '../../contexts';
import { Select } from '../Form';

type OptionsEnum =
  | typeof EYEBROWTYPE
  | typeof EYETYPE
  | typeof FACIALHAIRTYPE
  | typeof GLASSESTYPE
  | typeof HAIRTYPE
  | typeof HATTYPE
  | typeof MOUTHTYPE
  | typeof SHIRTTYPE;

export default function AttributeSelect({
  type,
  optionsEnum,
  isOpen,
}: {
  type: AttributeActionType;
  optionsEnum: OptionsEnum;
  isOpen?: boolean;
}) {
  const { dispatch, attributeTypes, attributes } = Yoni.useContext();
  return (
    <Select
      defaultValue={attributes[type]?.type ?? null}
      label={type}
      isOpen={isOpen}
      values={[
        { value: null, copy: 'none' },
        ...attributeTypes[type].keys.map(k => ({
          value: optionsEnum[k],
          copy: optionsEnum[k],
        })),
      ]}
      onChange={(value: typeof optionsEnum) => {
        dispatch({
          type,
          payload: {
            [type]: {
              type: value as typeof optionsEnum,
              fill: attributes[type]?.fill,
            },
          },
        });
      }}
    />
  );
}
