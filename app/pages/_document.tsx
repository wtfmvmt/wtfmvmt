import NextDocument, { Head, Html, Main, NextScript } from 'next/document'



class Document extends NextDocument<any> {
    render() {
        return (
            <Html>
                <Head>

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