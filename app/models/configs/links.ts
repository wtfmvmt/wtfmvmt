const links = () => {

    const linksArray = [
        {
            name: "Facebook",
            url: "https://www.facebook.com/wtfmvmt/",
            type: 'social'
        },
        {
            name: "Twitter",
            url: "https://twitter.com/wtfmvmt", 
            type: 'social'
        },

        {
            name: "Instagram",
            url: "https://www.instagram.com/wtfmvmt/",
            type: 'social'
        },
        {
            name: "Youtube",
            url: "https://www.youtube.com/channel/UCBtwubo6hqRS3B_kF7aIu8g",
            type: 'social'
        },
        {
            name: "Ko-fi",
            url: "https://www.ko-fi.com/wtfmvmt/",
            type: 'social'
        },
    ]

    return linksArray ?? null
}

export default links