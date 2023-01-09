import type { ComponentType } from "@typings/Component";
import type { MetaProps } from "@typings/Meta";
import { NextSeo } from 'next-seo';
import meta from "@configs/meta"

const Meta: ComponentType<MetaProps> = ({ title, pageTitle, description }: MetaProps) => {

    return (
        <NextSeo
            title={`${pageTitle} | ${title ?? meta.title}`}
            themeColor="#9200CC"
            description={description ?? meta.description}
            additionalLinkTags={meta?.icons ?? null}
            canonical={meta.url}
            openGraph={{
                url: 'https://www.wtfmvmt.com',
                title: meta.title,
                description: description ?? meta.description,
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
            
                ],
                siteName: meta.title,
            }}
            twitter={{
                handle: '@wtfmmvt',
                site: '@wtfmvmt',
                cardType: 'summary_large_image',
            }}
        />


    )
}

export default Meta