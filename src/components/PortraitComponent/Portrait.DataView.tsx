import { useEffect, useMemo } from 'react';
import tw, { css, styled } from 'twin.macro';

import { Portrait, UiTheme } from '../../contexts';

interface Line {
  lineNumber: number;
  indentation: number;
  trailingComma: boolean;
  content: {
    key: string;
    value: string;
  };
}

const StyledLine = styled.div(tw`hover:bg-neutral-100 w-full`);
const LineNumber = styled.span(tw`text-neutral-200`);
const LinePunctuation = styled.span(tw`text-fg`);
const LineKey = styled.span<{ indentation: number }>(({ indentation }) => [
  indentation < 2 && tw`text-primary-700`,
  indentation === 2 && tw`text-secondary-700`,
  indentation === 3 && tw`text-accent-primary-700`,
  indentation === 4 && tw`text-accent-secondary-700`,
]);
const LineValue = styled.span<{ isNull?: boolean }>(({ isNull }) => [
  isNull ? tw`text-red-700` : tw`text-neutral-500`,
]);
const LineColorSwatch = styled.div<{ hex: string }>(({ hex }) => [
  tw`inline-block w-4 h-4 ml-2 rounded border border-neutral-200 shadow`,
  css`
    background-color: ${hex};
  `,
]);

const Line = ({ lineNumber, indentation, trailingComma, content }: Line) => {
  return (
    <StyledLine>
      <LineNumber>
        {lineNumber}
        {'  '}
      </LineNumber>
      {Array.from(Array(indentation).keys()).map(() => '  ')}
      {content.value ? (
        <>
          <LinePunctuation>{'"'}</LinePunctuation>
          <LineKey indentation={indentation}>{content.key}</LineKey>
          <LinePunctuation>{'": '}</LinePunctuation>
          {content.value === '{' ? (
            <LineKey indentation={indentation + 1}>{content.value}</LineKey>
          ) : content.value === 'null' ? (
            <LineValue isNull={content.value === 'null'}>{content.value}</LineValue>
          ) : (
            <>
              <LinePunctuation>{'"'}</LinePunctuation>
              <LineValue isNull={content.value === 'null'}>{content.value}</LineValue>
              <LinePunctuation>{'"'}</LinePunctuation>
            </>
          )}
          {trailingComma && <LinePunctuation>,</LinePunctuation>}
          {/^#(?:[0-9a-fA-F]{3}){1,2}$/.test(content.value) && (
            <LineColorSwatch hex={content.value} />
          )}
        </>
      ) : (
        <LineKey indentation={indentation > 0 ? indentation + 1 : indentation}>
          {content.key}
        </LineKey>
      )}
      {'\n'}
    </StyledLine>
  );
};
export default function PortraitDataView() {
  const { color } = UiTheme.useThemeContext();
  const {
    portrait: { attributes },
  } = Portrait.usePortraitContext();

  const initialValue: Array<Line> = useMemo(
    () =>
      JSON.stringify(
        {
          theme: color,
          attributes,
        },
        null,
        2
      )
        .split('\n')
        .map((line, i) => ({
          lineNumber: i + 1,
          indentation: (line.length - line.trimStart().length) / 2,
          trailingComma: line.split('')[line.split('').length - 1] === ',',
          content: {
            key: line.trimStart().replace(':', '').replaceAll('"', '').split(' ')[0],
            value: line
              .trimStart()
              .replace(':', '')
              .replaceAll('"', '')
              .replace(',', '')
              .split(' ')[1],
          },
        })),
    [attributes, color]
  );
  return (
    <pre
      css={{
        ...tw`text-xs p-8 bg-neutral-50 max-h-[40vh] overflow-scroll rounded shadow-2xl`,
      }}
    >
      {initialValue.map(line => (
        <Line
          key={line.lineNumber}
          lineNumber={line.lineNumber}
          indentation={line.indentation}
          content={line.content}
          trailingComma={line.trailingComma}
        />
      ))}
    </pre>
  );
}
