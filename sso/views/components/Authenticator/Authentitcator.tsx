import uuid from "@utils/uuid"

export type Action = {
    name: string,
    type?: string,
    payload?: string,
    authorized?: boolean
}

export type User = {
    name: string,
    role: string,
}

export type AuthenticatorProps = {
    title?: string,
    message?: string,
    users?: User[],
    onSignIn?: Function,
    action?: Action
}


const Authenticator = ({ title, message, users, onSignIn }: AuthenticatorProps) => {


    const SignIn = () => {

        return (
            <a href="/dashboard">
                <button className="mt-12 md:mt-16 bg-purple-700 hover:scale-90 transition-all text-white font-bold font-heading py-5 px-8 rounded-md uppercase">
                    Sign In
                </button>
            </a>
        )

    }


    const Favicon = () => {

        return (
            <a
                className="inline-block mb-12 text-3xl font-bold font-heading text-white"
                href="/"
            >
                <img
                    className="h-44"
                    src="/assets/images/logo-transparent.png"
                    alt=""
                    width="auto"
                />
            </a>
        )
    }


    const SignInForm = () => {
        return (
            <div className="max-w-md mx-auto">

                <h2 className="mb-10 text-xl text-white font-bold font-heading">
                    {message ? message : 'Enter your credentials'}
                </h2>


                <form action="">

                    <input
                        className="bg-transparent w-full mb-10 px-12 py-6 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                        type="password"
                        placeholder="Repeat password"
                    />
                    <SignIn />
                </form>


            </div>
        )
    }

    return (
        <section className="py-20  overflow-x-hidden">
            <div className="relative container px-4 mx-auto ">
                <div className="relative max-w-4xl mx-auto bg-black bg-opacity-50">
                    <div className="absolute inset-0 border border-gray-300 my-24 -ml-4 -mr-4" />

                    <div className="relative mx-auto py-28 px-4 border border-white text-center">


                        <Favicon />
                        <h2 className="mb-14 text-4xl text-white font-bold font-heading">
                            {title ? title : 'Facade'}
                        </h2>

                        <div className="relative max-w-xl mx-auto">

                            <SignInForm />

                        </div>


                    </div>
                </div>
            </div>
        </section>

    )
}

export default Authenticator