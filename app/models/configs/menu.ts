import meta from "@configs/meta"

const menu = ({ links }) => {
    

    return {
        favicon: {
            src: meta().logo.src,
            url: '/'
        },

        links,
        cta: [

            {
                name: '🎃Support Us',
                url: 'https://ko-fi.com/wtfmvmt'
            }
        ]
    }
}

export default menu