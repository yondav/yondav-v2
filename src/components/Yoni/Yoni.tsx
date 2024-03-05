import React, { useEffect, useState } from 'react';
import { SketchPicker } from 'react-color';
import { MdOutlineSettingsBackupRestore } from 'react-icons/md';
import { RiPaintLine, RiSave2Line, RiTShirt2Line } from 'react-icons/ri';
import tw, { styled, theme } from 'twin.macro';

import {
  ACTIONKIND,
  EYEBROWTYPE,
  EYETYPE,
  FACIALHAIRTYPE,
  GLASSESTYPE,
  HAIRTYPE,
  HATTYPE,
  MOUTHTYPE,
  SHIRTTYPE,
  Yoni,
  YONISTATE,
} from '../../contexts';
import { useMediaQuery } from '../../hooks';
import type { Nullable } from '../../utils';

import ActionButton from './ActionButton';
import Attribute from './Attribute';
import AttributeSelect from './AttributeSelect';
import Canvas from './Canvas';

const PlaygroundContainer = styled.div<{ state: Nullable<YONISTATE> }>(({ state }) => [
  tw`flex p-8 pb-0 w-full justify-between relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[calc(100vh - 5rem)]`,
  !state && tw`justify-center`,
]);

export default function YoniSVG() {
  const { dispatch, state, setState } = Yoni.useContext();
  const notMobile = useMediaQuery(`(min-width: ${theme`screens.md`})`);
  const [selectedColor, setSelectedColor] = useState<string>('#343434');
  useEffect(() => {
    console.log({ state });
  }, [state]);

  return (
    <>
      <PlaygroundContainer state={state}>
        {state && (
          <div css={{ ...tw`hidden md:(flex flex-col gap-4 pt-40 z-50)` }}>
            {state === YONISTATE.CUSTOM ? (
              <>
                <AttributeSelect type={ACTIONKIND.HAIR} optionsEnum={HAIRTYPE} />
                <AttributeSelect type={ACTIONKIND.EYES} optionsEnum={EYETYPE} />
                <AttributeSelect
                  type={ACTIONKIND.FACIALHAIR}
                  optionsEnum={FACIALHAIRTYPE}
                />
                <AttributeSelect type={ACTIONKIND.GLASSES} optionsEnum={GLASSESTYPE} />
              </>
            ) : (
              <SketchPicker
                color={selectedColor}
                onChangeComplete={color => setSelectedColor(color.hex)}
                // width='50%'
              />
            )}
          </div>
        )}
        <div
          css={{
            ...tw`absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-xs sm:max-w-md md:max-w-xl lg:max-w-screen-md`,
          }}
        >
          <Canvas>
            <Attribute attribute={ACTIONKIND.SKIN} />
            <Attribute attribute={ACTIONKIND.SHIRT} />
            <Attribute attribute={ACTIONKIND.MOUTH} />
            <Attribute attribute={ACTIONKIND.EYES} />
            <Attribute attribute={ACTIONKIND.EYERBROWS} />
            <Attribute attribute={ACTIONKIND.HAIR} />
            <Attribute attribute={ACTIONKIND.FACIALHAIR} />
            <Attribute attribute={ACTIONKIND.GLASSES} />
            <Attribute attribute={ACTIONKIND.HAT} />
          </Canvas>
        </div>
        <div css={{ ...tw`hidden md:(flex flex-col gap-4 pt-40 z-50)` }}>
          {state === YONISTATE.CUSTOM && (
            <>
              <AttributeSelect type={ACTIONKIND.EYERBROWS} optionsEnum={EYEBROWTYPE} />
              <AttributeSelect type={ACTIONKIND.MOUTH} optionsEnum={MOUTHTYPE} />
              <AttributeSelect type={ACTIONKIND.SHIRT} optionsEnum={SHIRTTYPE} />
              <AttributeSelect type={ACTIONKIND.HAT} optionsEnum={HATTYPE} />
            </>
          )}
        </div>
      </PlaygroundContainer>
      <div
        css={{
          ...tw`w-full p-4 flex flex-col gap-4 justify-center items-center bg-neutral-100`,
        }}
      >
        <div css={{ ...tw`flex` }}>
          <ActionButton
            copy='restore'
            onClick={() => dispatch({ type: ACTIONKIND.DEFAULT, payload: {} })}
          >
            <MdOutlineSettingsBackupRestore size='1.5rem' />
          </ActionButton>
          <ActionButton copy='custom' onClick={() => setState(YONISTATE.CUSTOM)}>
            <RiTShirt2Line size='1.5rem' />
          </ActionButton>
          <ActionButton copy='color' onClick={() => setState(YONISTATE.COLOR)}>
            <RiPaintLine size='1.5rem' />
          </ActionButton>
          <ActionButton copy='save' onClick={() => setState(null)}>
            <RiSave2Line size='1.5rem' />
          </ActionButton>
        </div>
        {state === YONISTATE.CUSTOM && (
          <div
            css={{ ...tw`flex flex-wrap gap-4 justify-center items-center md:hidden` }}
          >
            <AttributeSelect type={ACTIONKIND.HAIR} optionsEnum={HAIRTYPE} />
            <AttributeSelect type={ACTIONKIND.EYERBROWS} optionsEnum={EYEBROWTYPE} />
            <AttributeSelect type={ACTIONKIND.EYES} optionsEnum={EYETYPE} />
            <AttributeSelect type={ACTIONKIND.MOUTH} optionsEnum={MOUTHTYPE} />
            <AttributeSelect type={ACTIONKIND.FACIALHAIR} optionsEnum={FACIALHAIRTYPE} />
            <AttributeSelect type={ACTIONKIND.SHIRT} optionsEnum={SHIRTTYPE} />
            <AttributeSelect type={ACTIONKIND.GLASSES} optionsEnum={GLASSESTYPE} />
            <AttributeSelect type={ACTIONKIND.HAT} optionsEnum={HATTYPE} />
          </div>
        )}
      </div>
    </>
  );
}
