import React, { createElement, useMemo } from 'react';

import { Yoni, type AttributeActionType } from '../../contexts';

interface AttributeProps {
  attribute: AttributeActionType;
}

export default function Attribute({ attribute }: AttributeProps) {
  const { attributes, state } = Yoni.useContext();
  const { type, fill } = attributes[attribute];

  const elementId = useMemo(
    () => `${attribute}${type ? `-${type}` : ''}`,
    [attribute, type]
  );

  const elements = useMemo(
    () =>
      Yoni.elements[
        attribute as keyof typeof Yoni.elements
        //@ts-ignore
      ]({ type, fill, state }),
    [attribute, fill, state, type]
  );

  return (
    <g id={elementId} key={elementId}>
      {elements.map((element, i) =>
        createElement(element.type, {
          ...element.props,
          key: i,
        })
      )}
    </g>
  );
}
