import type { NextPage } from 'next'


export interface IPage<T> extends NextPage{
    
}



export type StaticPageProps = {}
export type ServerSidePageProps = {}

export type PageProps = {
    page: {
      id?: string,
      version?: string,
      layout?: any,
      data?: any
    }
  }