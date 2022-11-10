import PageService from "@services/pages"
import ContentSearch from "@views/components/ContentSearch"

import type { IPage, ServerSidePageProps } from "@typings/Page"

const HomePage: IPage<ServerSidePageProps> = ({ page }) => {

  return (
    <>
      <ContentSearch />
    </>
  )
}

export default HomePage

