import { useMemo } from 'react';
import tw, { styled } from 'twin.macro';

import { Portrait, UiTheme } from '../../contexts';
import type { Nullable } from '../../utils';
import ColorPicker from '../ColorPicker';

import backgrounds from './Backgrounds';
import Attribute from './Portrait.Attribute';
import AttributeSelect from './Portrait.AttributeSelect';
import Canvas from './Portrait.Canvas';
import PortraitDataView from './Portrait.DataView';
import PortraitMenu from './Portrait.Menu';

const PlaygroundContainer = styled.div<{ state: Nullable<Portrait.STATE> }>(
  ({ state }) => [
    tw`overflow-hidden flex p-0 pb-0 w-full justify-between relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[calc(100vh - 5rem)]`,
    (!state || state === Portrait.STATE.DEFAULT) && tw`justify-center`,
  ]
);

const BackgroundContainer = styled.div(
  tw`absolute bottom-0 left-1/2 -translate-x-1/2 min-w-[30rem] sm:min-w-[34rem] md:(min-w-[50rem]) lg:(bottom-1/2 translate-y-1/2) w-full`
);

const PortraitContainer = styled(BackgroundContainer)(
  tw`bottom-0 translate-y-0 max-w-xs z-20 min-w-0 sm:max-w-md md:(max-w-xl min-w-0) lg:max-w-screen-md`
);

const PlaygroundMenuContainer = styled.div(
  tw`w-full flex flex-col gap-4 justify-center items-center bg-neutral-100`
);

const PlaygroundOptions = styled.div<{ variant: 'desktop' | 'mobile' }>(({ variant }) => [
  variant === 'mobile' &&
    tw`w-full flex flex-wrap gap-4 justify-center items-center md:hidden`,

  variant === 'desktop' && tw`hidden md:(relative pt-40 px-8 flex flex-col gap-4 z-50)`,
]);

export default function PortraitComponent() {
  const {
    dispatch,
    portrait: { state, selectedColor },
  } = Portrait.usePortraitContext();

  const { color } = UiTheme.useThemeContext();

  const Background = useMemo(() => backgrounds[color], [color]);

  return (
    <div css={{ ...tw`h-[calc(100vh - 5rem)]` }}>
      <PlaygroundContainer state={state}>
        {state !== Portrait.STATE.DEFAULT && (
          <>
            <div
              css={{
                ...tw`absolute top-0 left-0 w-full h-full bg-neutral-500 opacity-60 z-10`,
              }}
            />
            <PlaygroundOptions variant='desktop'>
              {state === Portrait.STATE.CUSTOM ? (
                <>
                  <AttributeSelect type='hair' />
                  <AttributeSelect type='eyes' />
                  <AttributeSelect type='facialHair' />
                  <AttributeSelect type='glasses' />
                </>
              ) : state === Portrait.STATE.COLOR ? (
                <ColorPicker
                  color={selectedColor}
                  onChange={color => {
                    dispatch({ type: Portrait.ACTIONTYPE.COLOR, payload: color.hex });
                  }}
                />
              ) : (
                <PortraitDataView />
              )}
            </PlaygroundOptions>
          </>
        )}
        {Background && (
          <BackgroundContainer>
            <Canvas>
              <Background />
            </Canvas>
          </BackgroundContainer>
        )}
        <PortraitContainer>
          <Canvas>
            <Attribute attribute='skin' />
            <Attribute attribute='shirt' />
            <Attribute attribute='mouth' />
            <Attribute attribute='eyes' />
            <Attribute attribute='eyebrows' />
            <Attribute attribute='hair' />
            <Attribute attribute='facialHair' />
            <Attribute attribute='glasses' />
            <Attribute attribute='hat' />
          </Canvas>
        </PortraitContainer>
        {state !== Portrait.STATE.DEFAULT && (
          <PlaygroundOptions variant='desktop'>
            {state === Portrait.STATE.CUSTOM && (
              <>
                <AttributeSelect type='eyebrows' />
                <AttributeSelect type='mouth' />
                <AttributeSelect type='shirt' />
                <AttributeSelect type='hat' />
              </>
            )}
          </PlaygroundOptions>
        )}
        <PortraitMenu />
      </PlaygroundContainer>
      <PlaygroundMenuContainer>
        {state !== Portrait.STATE.DEFAULT && (
          <PlaygroundOptions variant='mobile'>
            {state === Portrait.STATE.CUSTOM ? (
              <>
                <AttributeSelect type='hair' />
                <AttributeSelect type='eyebrows' />
                <AttributeSelect type='eyes' />
                <AttributeSelect type='mouth' />
                <AttributeSelect type='facialHair' />
                <AttributeSelect type='shirt' />
                <AttributeSelect type='glasses' />
                <AttributeSelect type='hat' />
              </>
            ) : (
              <ColorPicker
                color={selectedColor}
                onChange={color => {
                  dispatch({ type: Portrait.ACTIONTYPE.COLOR, payload: color.hex });
                }}
              />
            )}
          </PlaygroundOptions>
        )}
      </PlaygroundMenuContainer>
    </div>
  );
}
