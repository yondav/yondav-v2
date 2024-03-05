import { useLiveQuery } from '@sanity/preview-kit';

import {
  allWorkQuery,
  detailsQuery,
  landingQuery,
  type AllWorkQueryResult,
  type DetailsQueryResult,
  type LandingQueryResult,
} from '../../../sanity';
import IndexPageScreen from '../../screens/indexPage';

export default function PreviewIndexPage({
  data,
}: {
  data: {
    landing: Array<LandingQueryResult>;
    details: Array<DetailsQueryResult>;
    work: Array<AllWorkQueryResult>;
  };
}) {
  const [landing] = useLiveQuery(data.landing, landingQuery);
  const [details] = useLiveQuery(data.details, detailsQuery);
  const [work] = useLiveQuery(data.work, allWorkQuery);

  return <IndexPageScreen data={{ landing, details, work }} />;
}
