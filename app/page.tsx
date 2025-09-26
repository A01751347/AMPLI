// src/main.tsx o pages/_app.tsx (React/Next)
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

export default function App({ Component, pageProps }) {
  return (
    <Authenticator>
      {() => <Component {...pageProps} />}
    </Authenticator>
  );
}
