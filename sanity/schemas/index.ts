import type { SchemaTypeDefinition } from 'sanity';

import { account, user } from './auth';
import {
  copyComponent,
  galleryComponent,
  imageComponent,
  pageBlockComponent,
} from './components';
import details from './details';
import landing, { credentials } from './landing';
import { column, display, elements, flex, gridCell, row } from './layout';
import page from './page';
import work, { workCard } from './work';

export const schemaTypes: { types: Array<SchemaTypeDefinition> } = {
  types: [
    // components
    copyComponent,
    galleryComponent,
    imageComponent,
    pageBlockComponent,

    // layout
    column,
    display,
    elements,
    flex,
    gridCell,
    row,

    // work
    work,
    workCard,
    page,

    // landing
    landing,
    credentials,

    // details
    details,

    // auth
    user,
    account,
  ],
};
