import { signUpHandler } from 'next-auth-sanity';

import { getClient } from '../../../../sanity';

export default signUpHandler(getClient());
