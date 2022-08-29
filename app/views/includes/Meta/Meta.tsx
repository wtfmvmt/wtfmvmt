import Head from "next/head"
import meta from "@configs/meta"


const Meta = ({ pageTitle }) => {

    return (
        <Head>
            <title>{meta.title} | {pageTitle || "Home"}</title>
            <>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Major+Mono+Display&family=Nova+Mono&display=swap"
    rel="stylesheet"
  />
</>



            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
            <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
            <link
                rel="apple-touch-icon android-chrome icon"
                sizes="57x57"
                href="/assets/icons/57x57.png"
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