import type { IPage } from "@typings/Page"
import PageLayout from "@layouts/PageLayout";
import DrawerMenu from "@views/includes/DrawerMenu";
import Header from "@components/Header"

const BannerCountdown = () => (
    <section className="py-26 md:py-32 min-h-screen md:min-h-0 relative overflow-hidden">

        <div className="container px-4 mx-auto relative">
            <img
                className="block w-full mx-auto mb-12 h-64 object-cover border-3 border-indigo-900 rounded-2xl shadow-lg"
                src="nigodo-assets/img/photo-board.jpg"
                alt=""
            />
            <div className="max-w-xl text-center mx-auto">
                <span className="inline-flex mb-4 h-6 items-center justify-center text-xs font-extrabold px-2 text-indigo-900 rounded border border-indigo-900 bg-green-200 uppercase">
                    Coming Soon
                </span>
                <h1 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold font-heading mb-3">
                    We're doing something new...
                </h1>
                <p className="text-xl font-extrabold leading-7 mb-6">
                    Something went wrong, so this page is broken.
                </p>
                <div className="flex flex-wrap items-center justify-center">
                    <a
                        className="inline-block w-full md:w-auto py-4 px-6 mb-4 md:mb-0 md:mr-6 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200"
                        href="#"
                    >
                        Go back to Homepage
                    </a>
                    <a
                        className="inline-block w-full md:w-auto py-4 px-6 text-center leading-6 text-lg text-indigo-900 hover:text-white font-extrabold bg-white hover:bg-indigo-800 border-3 border-indigo-900 shadow rounded transition duration-200"
                        href="#"
                    >
                        Try Again
                    </a>
                </div>
            </div>
        </div>
    </section>
)
const Newsletter = () => (
    <section className="py-26 relative overflow-hidden">
        <img
            className="absolute top-0 left-0 w-1/2"
            src="nigodo-assets/background-elements/pattern-smash-dots-orange-left.svg"
            alt=""
        />
        <img
            className="absolute top-0 right-0 w-1/2"
            src="nigodo-assets/background-elements/pattern-smash-dots-orange-right.svg"
            alt=""
        />
        <div className="container px-4 mx-auto relative">
            <div className="p-8 md:p-16 bg-white border-3 border-indigo-900 rounded-2xl shadow">
                <div className="max-w-3xl mx-auto text-center">
                    <span className="text-lg font-extrabold text-orange-500">
                        Newsletter
                    </span>
                    <h1 className="text-3xl md:text-4xl font-extrabold font-heading mt-3 mb-4">
                        Sign up for our newsletter
                    </h1>
                    <p className="text-xl font-extrabold leading-8 mb-10">
                        Stay in the loop with everything you need to know.
                    </p>
                </div>
                <div className="max-w-lg mx-auto">
                    <div className="flex flex-wrap -mx-2 justify-center">
                        <div className="flex-grow w-full md:w-auto px-2 mb-2">
                            <input
                                className="inline-block w-full p-4 text-lg font-extrabold placeholder-indigo-900 shadow border-2 border-indigo-900 rounded outline-none"
                                type="email"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="w-full md:w-auto px-2 mb-2">
                            <a
                                className="inline-flex items-center justify-center w-full md:w-auto h-full py-4 px-5 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 rounded transition duration-200"
                                href="#"
                            >
                                Subscribe
                            </a>
                        </div>
                        <div className="w-full px-2">
                            <p className="text-xs font-extrabold">
                                We care about your data in our privacy policy
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

)
const Supporters = () => (
    <section className="py-26">
        <div className="container px-4 mx-auto">
            <h2 className="text-center text-xl font-extrabold mb-6">
                Trusted by the top companies in this industry
            </h2>
            <div className="flex flex-wrap -mx-4 -mb-8">
                <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
                    <div className="flex items-center justify-center h-44 p-6 md:px-12 bg-white border-3 border-indigo-900 rounded-2xl shadow-md">
                        <img src="nigodo-assets/logo-clouds/microsoft.svg" alt="" />
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
                    <div className="flex items-center justify-center h-44 p-6 md:px-12 bg-white border-3 border-indigo-900 rounded-2xl shadow-md">
                        <img src="nigodo-assets/logo-clouds/google.svg" alt="" />
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
                    <div className="flex items-center justify-center h-44 p-6 md:px-12 bg-white border-3 border-indigo-900 rounded-2xl shadow-md">
                        <img src="nigodo-assets/logo-clouds/spotify.svg" alt="" />
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
                    <div className="flex items-center justify-center h-44 p-6 md:px-12 bg-white border-3 border-indigo-900 rounded-2xl shadow-md">
                        <img src="nigodo-assets/logo-clouds/slack.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>

)

const ComingSoonPage: IPage = () => {

    return (
        <PageLayout>
            <DrawerMenu/>
            <Header/>
            <BannerCountdown />
            <Newsletter />
            <Supporters />
        </PageLayout>
    )
}

export default ComingSoonPage;