import { SpeedInsights } from '@vercel/speed-insights/next';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            <SpeedInsights />
        </>
    );
}
