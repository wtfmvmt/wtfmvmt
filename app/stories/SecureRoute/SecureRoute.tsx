/* eslint-disable @next/next/no-img-element */
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
      fields: [
        {
          name: "Name",
          type: "text",
          placeholder: "i.e Brandon Payne"
        }
      ],
      actions: [],
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


    const Field = ({ name, type, placeholder }) => {

      return (
        <div className="mb-6">
          <label className="block mb-2 font-extrabold" htmlFor="">
            {name ?? "NAME_NOT_FOUND"}
          </label>
          <input
            className="inline-block w-full p-4 text-lg font-extrabold leading-6 placeholder-indigo-900 bg-white border-2 border-indigo-900 rounded shadow"
            type={type ?? "text"}
            placeholder={placeholder ?? "PLACEHOLDER_NOT_FOUND"}
          />
        </div>
      )
    }

    const Fields = ({ fields }) => {

      return (
        <>
          {
            fields ?
              fields.map((field, index) => {
                return (
                  <Field {...field} key={index} />
                )
              }) :
              <>FIELDS_NOT_FOUND</>
          }
        </>
      )
    }

    return (
      <form action="">
        <a
          className="flex items-center justify-center px-6 py-4 mb-6 text-lg font-extrabold leading-6 transition duration-200 bg-black border-indigo-900 rounded shadow hover:text-white hover:bg-indigo-800 border-3"
          href="#"
        >
          <img
            className="w-12 h-12 mr-3"
            src={logo as unknown as string}
            alt=""
          />

        </a>
        <div className="mb-6">
          <label className="block mb-2 font-extrabold" htmlFor="">
            Name
          </label>
          <input
            className="inline-block w-full p-4 text-lg font-extrabold leading-6 placeholder-indigo-900 bg-white border-2 border-indigo-900 rounded shadow"
            type="text"
            placeholder="David"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-extrabold" htmlFor="">
            Password
          </label>
          <input
            className="inline-block w-full p-4 text-lg font-extrabold leading-6 placeholder-indigo-900 bg-white border-2 border-indigo-900 rounded shadow"
            type="password"
            placeholder="**********"
          />
        </div>
        <button className="inline-block w-full px-6 py-4 mb-6 text-lg font-extrabold leading-6 text-center text-white transition duration-200 bg-indigo-800 border-indigo-900 rounded shadow hover:bg-indigo-900 border-3">
          Sign In
        </button>

        <p className="font-extrabold text-center">
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
      <div className="container relative px-4 mx-auto cursor-pointer">
        <div className="max-w-2xl px-6 py-12 mx-auto bg-white border-4 border-black shadow-2xl md:p-16 rounded-xl">
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-3xl font-extrabold md:text-4xl">
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