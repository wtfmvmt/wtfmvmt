import optimizedFetch from "@controllers/services/nextFetch"

const media = {

    id: 'mediaDB',
    version: Date.now(),
    methods: {
        getImages: async () => {

            const ImagesFilter = (image) => {
                return image.Types.multi_select.some(image => image?.name === "🖼️Photo")
            }

            const data = await fetch(`${process.env.NODE_ENV === "production" ? "https://wtfmvmt.com/api/media" : `http://localhost:${process.env.PORT || 3000}/api/media`}`, {
                method: 'GET',
            }).then(res => res.json())
                .then(data => data.map(data => data.properties))
                .then(data => data.filter(ImagesFilter))
                .then(data => data.map(data => ({
                    id: data.Title?.formula?.string || Date.now(),
                    src: data.Media?.files[0]?.file?.url || '',
                })))

            return data
        },
    }




}

export default media