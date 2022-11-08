
import PageService from "@services/pages"
import type { IPage, ServerSidePageProps } from "@typings/Page"

const MembershipsIndexPage: IPage<ServerSidePageProps> = () => {

  return (
    <>

    </>
  )
}

export default MembershipsIndexPage

export async function getServerSideProps() {

  return {
    props: {
      data: []
    }
  }
}
