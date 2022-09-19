import { default as StableFetcher } from 'swr'
import db from "@configs/db"
import { useCallback as memoizer } from "react"

const optimizedFetch = ({ apiPath }) => {

    const { client } = db

    const fetcher = memoizer((apiPath) => {
        return StableFetcher(apiPath, client.fetcher)
    }, [apiPath])

    return fetcher
}


export default optimizedFetch