import { createClient } from '@sanity/client';
import type { SanityClient } from '@sanity/client';

import type { Nullable } from '../../src/utils';
import { apiVersion, dataset, projectId, useCdn } from '../sanity.env';

import type {
  AllWorkQueryResult,
  SlugQueryResult,
  WorkPageQueryResult,
} from './sanity.queries';
import {
  detailsQuery,
  landingQuery,
  type DetailsQueryResult,
  type LandingQueryResult,
  type UserQueryResult,
  userQuery,
  slugsQuery,
  allWorkQuery,
  workPageBySlug,
} from './sanity.queries';

export function getClient(previewToken?: string): SanityClient {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
  });

  return previewToken
    ? client.withConfig({
        token: previewToken,
        useCdn: false,
        ignoreBrowserTokenWarning: true,
        perspective: 'previewDrafts',
      })
    : client;
}

export async function getIndexData(previewToken?: string) {
  const client = getClient(previewToken);
  const landing = await client.fetch<Array<LandingQueryResult>>(landingQuery);
  const details = await client.fetch<Array<DetailsQueryResult>>(detailsQuery);
  const work = await client.fetch<Array<AllWorkQueryResult>>(allWorkQuery);

  return { landing, details, work };
}

export async function getUser(config: { email: Nullable<string> }) {
  if (!config.email) return false;

  const client = getClient(process.env.NEXT_PUBLIC_SANITY_AUTHTOKEN);
  const [user] = await client.fetch<Array<UserQueryResult>>(userQuery, config);

  return user;
}

export async function validateUser(config: { email: Nullable<string> }) {
  if (!config.email) return false;

  const client = getClient(process.env.NEXT_PUBLIC_SANITY_AUTHTOKEN);
  const user = await client.fetch<Array<UserQueryResult>>(userQuery, config);

  return !!user[0]?.emailVerified;
}

export async function getSlugs(previewToken?: string) {
  const client = getClient(previewToken);
  const slugs = await client.fetch<Array<SlugQueryResult>>(slugsQuery);

  return slugs;
}

export async function getWorkPageBySlug(
  config: { slug: Nullable<string> },
  previewToken?: string
) {
  const client = getClient(previewToken);
  const page = await client.fetch<Array<WorkPageQueryResult>>(workPageBySlug, config);

  return page;
}
