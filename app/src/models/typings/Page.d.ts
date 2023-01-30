import type { NextPage } from 'next'

export type StaticPageProps = {}
export type ServerSidePageProps = {}

export type PageProps = {
  page: {
    version?: string,
    layout?: any,
    data?: any
  },
  layout: React.ReactNode | any
}



export type PageQueryProps = {
  store?: any,
  key?: string
}

export type PageObjectType = {
  version?: number | string,
  layout?: any,
  data?: any,
  pages?: any
}
