import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';

import { authOptions } from '../auth/[...nextauth]';

export default async function preview(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    res.redirect('/admin');
    return;
  }

  res.setDraftMode({ enable: true });
  res.writeHead(307, { Location: '/' });
  res.end();
}
