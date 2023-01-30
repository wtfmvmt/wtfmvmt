const theme = () => {

    const configObject = {
        typography: {
            fonts: {
                primary: "font-major",
                secondary: "font-share_tech"
            },
            sizes: {
                text: {
                    primary: ["text-2xl", "text-3xl", "text-4xl", "text-7xl"]
                }
            }
        },
    }

    return { ...configObject }
}

export default theme