declare namespace NodeJS {
  export interface ProcessEnv {
    NEXT_PUBLIC_SANITY_PROJECT_ID: string;
    NEXT_PUBLIC_SANITY_DATASET: string;
    NEXT_PUBLIC_SANITY_WEBTOKEN: string;
    NEXT_PUBLIC_SANITY_AUTHTOKEN: string;
    NEXT_PUBLIC_GOOGLE_CLIENT_ID: string;
    NEXT_PUBLIC_GOOGLE_CLIENT_SECRET: string;
    NEXT_PUBLIC_NEXTAUTH_SECRET: string;
    NEXT_PUBLIC_LOCATION: string;
  }
}
