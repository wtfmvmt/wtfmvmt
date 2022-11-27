import type { NextPage } from 'next'
export interface IPage<T> extends NextPage {

}

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



export type PagesDBProps = {
  store?: any,
  key: string
}

export type PageObjectType = {
  version?: number | string,
  layout?: any,
  data?: any,
  pages?: any
}
