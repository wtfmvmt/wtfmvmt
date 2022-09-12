import uuid from 'react-uuid';


export type Action = {
    name: string,
    type: string,
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
    action?: Action
}


const Authenticator = ({ title, message, users, action }: AuthenticatorProps) => {


    const Users = () => {

        return (
            users ? <div className="mb-10">
                <label
                    className="font-bold font-heading bg-transparent text-gray-200"
                >
                    User
                </label>
                <select
                    className="block w-full mt-4 py-4 px-8 border bg-transparent border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md bg-black bg-transparent-40"
                    name="user-types"
                    id="user-types"
                >
                   {users.map((user, index) => {

                    return (
                
                        <option className='bg-black text-white' key={uuid()} value={3}>{user.name}</option>
                    )
                   })}
                   
                </select>
            </div> : <></>

        )
    }

    return (
        <section className="py-20  overflow-x-hidden">
            <div className="relative container px-4 mx-auto ">
                <div className="relative max-w-4xl mx-auto bg-black bg-opacity-50">
                    <div className="absolute inset-0 border border-gray-300 my-24 -ml-4 -mr-4" />



                    <div className="relative mx-auto py-28 px-4 border border-white text-center">
                        <a
                            className="inline-block mb-12 text-3xl font-bold font-heading text-white"
                            href="#"
                        >
                            <img
                                className="h-44"
                                src="/assets/images/logo-transparent.png"
                                alt=""
                                width="auto"
                            />
                        </a>
                        <h2 className="mb-14 text-4xl text-white font-bold font-heading">
                            {title ? title : 'Facade'}
                        </h2>
                        <div className="relative max-w-xl mx-auto">

                            <div className="max-w-md mx-auto">
                                <h2 className="mb-10 text-xl text-white font-bold font-heading">
                                    {message ? message : 'Enter your credentials'}
                                </h2>


                                <form action="">

                                  <Users/>

                                    <input
                                        className="bg-transparent w-full mb-10 px-12 py-6 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                                        type="password"
                                        placeholder="Repeat password"
                                    />

                                    <button className="mt-12 md:mt-16 bg-purple-700 hover:scale-90 transition-all text-white font-bold font-heading py-5 px-8 rounded-md uppercase">
                                        {action ? action.name : "Sign In"}
                                    </button>
                                </form>


                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>

    )
}

export default Authenticator