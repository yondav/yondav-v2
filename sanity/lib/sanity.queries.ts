import type { SanityImageAssetDocument } from 'next-sanity';
import { groq } from 'next-sanity';
import type { PortableTextBlock } from 'sanity';

import type { FlexStyles, GridCols, GridRows } from '../../src/styles';
import type { Nullable } from '../../src/utils';

export interface QueryResult {
  id: string;
  _createdAt: string;
  _updatedAt: string;
}

export interface LandingQueryResult extends QueryResult {
  title: string;
  credentials: {
    resume: string;
    readout: string;
  };
}

export const landingQuery = groq`*[_type == 'landing'] {
  'id': _id + '_' + _rev,
  _createdAt,
  _updatedAt,
  title,
  'credentials': {
    'resume': credentials.resume.asset->url,
    'readout': credentials.readout.asset->url
  }
}`;

export interface DetailsQueryResult extends QueryResult {
  title: string;
  copy: PortableTextBlock;
}

export const detailsQuery = groq`*[_type == 'details']`;

export interface UserQueryResult extends QueryResult {
  name: string;
  emailVerified: boolean;
  image: string;
}

export const userQuery = groq`*[_type == 'user' && email == $email]{
  'id': _id + '_' + _rev,
  name,
  emailVerified,
  image,
  _createdAt,
  _updatedAt
}`;

export interface SlugQueryResult extends QueryResult {
  slug: string;
}

export const slugsQuery = groq`*[_type == 'work']{
  'id': _id + '_' + _rev,
  'slug': slug.current,
  _createdAt,
  _updatedAt
}`;

export interface AllWorkQueryResult extends SlugQueryResult {
  link: string;
  title: string;
  card: {
    image: string;
    description: string;
  };
}

export const allWorkQuery = groq`*[_type == 'work']{
  'id': _id + '_' + _rev,
  'slug': slug.current,
  _createdAt,
  _updatedAt,
  link,
  title,
  'card': {
    'image': card.image.asset->url,
    'description': card.description
  }
}`;

export type PageBlockDisplayBreak = {
  gridCell: {
    _typename: 'gridCell';
    colStart: GridCols | 13;
    colEnd: GridCols | 13;
    rowStart: GridRows | 7;
    rowEnd: GridRows | 7;
  };
  flex?: FlexStyles & {
    _typename: 'flex';
    flex: boolean;
  };
};

export type PageBlockDisplay = {
  _typename: 'display';
  baseline: PageBlockDisplayBreak;
  sm?: PageBlockDisplayBreak;
  md?: PageBlockDisplayBreak;
  lg?: PageBlockDisplayBreak;
  xl?: PageBlockDisplayBreak;
};

export type PageBlockElement = {
  id: string;
  copyBlock: Nullable<PortableTextBlock>;
  image: {
    metadata: SanityImageAssetDocument['metadata'];
    url: Nullable<string>;
  };
  alt: Nullable<string>;
};

export interface WorkPageQueryResult extends Omit<AllWorkQueryResult, 'card'> {
  page: QueryResult & {
    protected: Nullable<boolean>;
    blocks: Array<{
      id: string;
      display: PageBlockDisplay;
      elements: Array<PageBlockElement>;
    }>;
  };
}

export const workPageBySlug = groq`*[_type == 'work' && slug.current == $slug]{
  'id': _id + '_' + _rev,
  'slug': slug.current,
  _createdAt,
  _updatedAt,
  link,
  title,
  "page": *[_type == 'page' && references(^._id)][0]{
    'id': _id + '_' + _rev,
    protected,
    _createdAt,
    _updatedAt,
    'blocks': blocks[]{
      display,
      elements[]{
        'id': _type + '_' + _key,
        copyBlock,
        'image': {
          'metadata': image.asset->metadata,
          'url': image.asset->url
        },
        alt
      },
      'id': _type + '_' + _key
    }
  }
}`;
