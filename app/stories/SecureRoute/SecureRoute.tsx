import logo from "../assets/logo.png"

export type SecureRouteProps = {
  children: React.ReactNode,
  token?: string,
  show?: boolean
}

const SecureRoute = ({ children, token, show }: SecureRouteProps) => {

  const { signInParams, authenticatorParams } = {
    signInParams: {
      title: "WTFMVMT",
      heading: "Authentication is required."
    },
    authenticatorParams: {
      action: () => { },
      fields: [],
      footer: {
        text: "",
        cta: {
          text: "",
          url: ""
        }
      }
    }
  }


  const Authenticator = () => {
    return (
      <form action="">
        <div className="mb-6">
          <label className="block mb-2 font-extrabold" htmlFor="">
            Name
          </label>
          <input
            className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded"
            type="text"
            placeholder="David"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-extrabold" htmlFor="">
            Email
          </label>
          <input
            className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded"
            type="email"
            placeholder="hello@shuffle.dev"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-extrabold" htmlFor="">
            Password
          </label>
          <input
            className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded"
            type="password"
            placeholder="**********"
          />
        </div>
        <button className="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200">
          Sign Up
        </button>
        <a
          className="flex items-center justify-center mb-6 py-4 px-6 hover:text-white leading-6 text-lg font-extrabold bg-black hover:bg-indigo-800 border-3 border-indigo-900 shadow rounded transition duration-200"
          href="#"
        >
          <img
            className="w-8 h-8 mr-3"
            src={logo} alt=""
          />
          <span>Sign in with Apple</span>
        </a>
        <p className="text-center font-extrabold">
          Don’t have an account?{" "}
          <a className="text-indigo-500 hover:underline" href="#">
            Sign In
          </a>
        </p>
      </form>
    )
  }

  const SignIn = ({ title, heading, authenticatorParams }) => {
    return (
      <div className="container px-4 mx-auto relative cursor-pointer">
        <div className="py-12 px-6 md:p-16 border-4 border-black shadow-2xl bg-white rounded-xl max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2">
              {title ?? "TITLE_NOT_FOUND"}
            </h2>
            <p className="text-lg font-extrabold leading-7 text-purple-800">
              {heading ?? "HEADING_NOT_FOUND"}
            </p>
          </div>
          <Authenticator />
        </div>
      </div>

    )
  }



  return (
    <>
      {
        !show ?
          <SignIn {...signInParams} authenticatorParams={authenticatorParams} /> :
          <>
            {children}
          </>
      }
    </>
  )
}

export default SecureRoute