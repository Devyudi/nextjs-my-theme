import Document, {Html, Head, Main, NextScript} from 'next/document'
import Script from "next/script";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }


    render() {
        return (
            <Html lang={'id'}>
                <Head>
                    <meta name="application-name" content="PWA App" />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                    <meta name="apple-mobile-web-app-title" content="PWA App" />
                    <meta name="description" content="Best PWA App in the world" />
                    <meta name="format-detection" content="telephone=no" />
                    <meta name="mobile-web-app-capable" content="yes" />
                    <meta name="theme-color" content="#000000" />

                    <link rel="apple-touch-icon" href="/vercel.svg" />
                    <link
                        rel="apple-touch-icon"
                        sizes="152x152"
                        href="/vercel.svg"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/vercel.svg"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="167x167"
                        href="/vercel.svg"
                    />

                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/vercel.svg"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/vercel.svg"
                    />
                    <link rel="manifest" href="/manifest.json" />
                    <link rel="mask-icon" href="/vercel.svg" color="#5bbad5" />
                    <link rel="shortcut icon" href="/favicon.ico" />
                    <link rel={'icon'} href={'/assets/google-logo.svg'}/>
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=optional"
                    />
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap&display=optional"
                        rel="stylesheet"/>
                </Head>
                <body className={'bg-fixed w-full pb-10'}>
                <Main/>

                <NextScript/>

                </body>
            </Html>
        )
    }
}

export default MyDocument
