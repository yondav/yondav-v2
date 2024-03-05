import NextAuth, { type NextAuthOptions } from 'next-auth';
// import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from 'next-auth/providers/google';
import { SanityAdapter, SanityCredentials } from 'next-auth-sanity';

import { getClient } from '../../../../sanity';

const client = getClient(process.env.NEXT_PUBLIC_SANITY_AUTHTOKEN);

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
  session: { strategy: 'jwt' },
  adapter: SanityAdapter(client),
  providers: [
    // OAuth authentication providers
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
    SanityCredentials(client),
    // CredentialsProvider({
    //   name: 'Credentials',
    //   credentials: {
    //     password: { label: 'Password', type: password }
    //   },
    //   authorize(credentials, req){
    //     const { password } = credentials;
    //   }
    // })
  ],
};

export default NextAuth(authOptions);

// export default NextAuth({
//   secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
//   providers: [
//     // OAuth authentication providers
//     GoogleProvider({
//       clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
//       clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET as string,
//     }),
//   ],
// });
