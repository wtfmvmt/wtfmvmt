import useSWR from 'swr'
import db from "@configs/db"

const useSmartFetch = ({ apiPath }) => {

    const { client } = db

    return useSWR(apiPath, client.fetcher)
}