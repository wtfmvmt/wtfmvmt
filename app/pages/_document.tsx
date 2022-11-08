import NextDocument, { Head, Html, Main, NextScript } from 'next/document'

class Document extends NextDocument<any> {

    render() {
        return (
            <Html>
                <Head>
                    <link rel="manifest" href="/assets/manifest.json" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap"
                        rel="stylesheet"
                    />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Share+Tech&display=swap"
                        rel="stylesheet"
                    />
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default Document