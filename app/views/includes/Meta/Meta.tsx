import type { ComponentType } from "@typings/Component";
import type { MetaProps } from "@typings/Meta";
import { NextSeo } from 'next-seo';

const Meta: ComponentType<MetaProps> = ({ title, pageTitle }: MetaProps) => {

    return (
        <NextSeo
            title={`${title} | ${pageTitle}`}
            themeColor="#000000"
            description=""
            canonical="https://www.wtfmvmt.com/"
            openGraph={{
                url: 'https://www.wtfmvmt.com',
                title: 'WTFMVMT',
                description: '',
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


    )
}

export default Meta