export type DataPageProps = {
    store?: [],
    pageKey: string
}

export interface IDataPage {
    version?: string | number,
    id?: string,
    data?: any,
    layout?: any
}