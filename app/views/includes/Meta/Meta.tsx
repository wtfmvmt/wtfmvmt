import type { ComponentType } from "@typings/Component";
import type { MetaProps } from "@typings/Meta";
import { NextSeo } from 'next-seo';
import Head from "next/head";

const Meta: ComponentType<MetaProps> = ({ title, pageTitle }: MetaProps) => {

    return (
        <Head>
            <title>{title} | {pageTitle}</title>
            <NextSeo
                title={title}
                description="This example uses more of the available config options."
                canonical="https://www.wtfmvmt.com/"
                openGraph={{
                    url: 'https://www.url.ie/a',
                    title: 'Open Graph Title',
                    description: 'Open Graph Description',
                    images: [
                        {
                            url: 'https://www.example.ie/og-image-01.jpg',
                            width: 800,
                            height: 600,
                            alt: 'Og Image Alt',
                            type: 'image/jpeg',
                        },
                        {
                            url: 'https://www.example.ie/og-image-02.jpg',
                            width: 900,
                            height: 800,
                            alt: 'Og Image Alt Second',
                            type: 'image/jpeg',
                        },
                        { url: 'https://www.example.ie/og-image-03.jpg' },
                        { url: 'https://www.example.ie/og-image-04.jpg' },
                    ],
                    siteName: 'WTFMVMT',
                }}
                twitter={{
                    handle: '@wtfmmvt',
                    site: '@wtfmmvt',
                    cardType: 'summary_large_image',
                }}
            />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="theme-color" content="#000000" />
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
            <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
            <link
                rel="apple-touch-icon android-chrome icon"
                sizes="180x180"
                href="/assets/icons/180x180.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="72x72"
                href="/apple-touch-icon-72x72.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="76x76"
                href="/apple-touch-icon-76x76.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="114x114"
                href="/apple-touch-icon-114x114.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="120x120"
                href="/apple-touch-icon-120x120.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="144x144"
                href="/apple-touch-icon-144x144.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="152x152"
                href="/apple-touch-icon-152x152.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/apple-touch-icon-180x180.png"
            />



        </Head >
    )
}

export default Meta