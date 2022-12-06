import '../styles/globals.css'
import { AppProps } from 'next/app'
import { AuthProvider } from '../hooks/useAuth'
import {RecoilRoot} from "recoil";


export default function  MyApp({ Component, pageProps }: AppProps):JSX.Element {
    // @ts-ignore
    const AnyComponent = Component as any;
    return (
        <RecoilRoot>
            <AuthProvider>
                <AnyComponent {...pageProps} />
            </AuthProvider>
        </RecoilRoot>
    )
}


