import Head from "next/head"
import type { IComponent } from "@models/typings/Component"
import type { MetaProps } from "@typings/Meta"

const Meta: IComponent<MetaProps> = (props: MetaProps) => {

    return (
        <Head>
            <title>{props.pageTitle || "Home"}</title>
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