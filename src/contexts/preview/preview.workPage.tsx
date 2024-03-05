import { useLiveQuery } from '@sanity/preview-kit';

import { workPageBySlug, type WorkPageQueryResult } from '../../../sanity';
import WorkPageScreen from '../../screens/workPage';

export default function PreviewWorkPage({
  data,
  slug,
}: {
  data: Array<WorkPageQueryResult>;
  slug: string;
}) {
  const [page] = useLiveQuery(data, workPageBySlug, { slug });

  return <WorkPageScreen content={page[0]} />;
}
