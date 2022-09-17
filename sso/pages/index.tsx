import RootLayout from '@layouts/RootLayout'
import Authenticator from '@views/components/Authenticator'
import { signIn } from "next-auth/react"

export type ServerPage = {
}

export interface IPage<T> { 
}

const IndexPage: IPage<ServerPage> = ({ pageData }) => {


  return (
    <RootLayout {...pageData.layout}>
      <Authenticator onSignIn={signIn} />
    </RootLayout>
  )
}

export default IndexPage



export async function getServerSideProps() {

  return {
    props: {
      pageData: []
    }
  }
}
