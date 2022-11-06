import EmailIcon from "@components/EmailIcon"
import GridIcon from "@components/GridIcon"
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { SocialIcon } from "react-social-icons"
import useNotification from "@hooks/useNotification"
import type { ComponentType } from "@models/typings/Component"
import type { ContactSectionProps } from "@typings/ContactSection"


const ContactSection: ComponentType<ContactSectionProps> = ({ email, socials, label, heading, description, cta }: ContactSectionProps) => {

    const { sendNotification } = useNotification();
    
    const Email = () => {

        return (
            email ? <div className="flex mb-14">
                <div className="flex-shrink-0 -mt-4 inline-flex items-center justify-center w-16 h-16 mr-8 bg-white rounded-full border-3 text-purple-900 shadow-md">
                    <EmailIcon />
                </div>
                <div>
                    <h3 className="text-2xl font-extrabold mb-3">Email</h3>
                    <p className="hover:scale-90 group cursor-pointer whitespace-nowrap hover:bg-opacity-100 transition-all text-xl sm:text-2xl text-purple-500 bg-black bg-opacity-70 p-4 rounded">
                        {email ? email : "EMAIL_PROPERTY_NOT_FOUND"}

                        <CopyToClipboard onCopy={() => sendNotification({
                            message: "Email Copied",
                            duration: 5000
                        })}
                            text={email}>
                            <span className="p-2 whitespace-nowrap cursor-pointer group-hover:scale-110 transition-all">
                                <ContentCopyIcon />
                            </span>
                        </CopyToClipboard>
                    </p>
                </div>
            </div> : <></>
        )
    }


    const CallToAction = () => {
        return (

            cta ? <div className="w-full lg:w-1/2 px-4">
                <div className="flex flex-wrap items-center lg:justify-end">
                    <a
                        className="inline-block w-full md:w-auto mb-2 md:mb-0 md:mr-4 py-4 px-6 text-center leading-6 text-lg text-white font-extrabold bg-purple-800 hover:bg-purple-900 border-3 border-purple-900 shadow rounded transition duration-200"
                        href={cta.primary.url}
                    >
                        {cta.primary.name}
                    </a>
                    <a
                        className="inline-block w-full md:w-auto py-4 px-6 text-center leading-6 text-lg text-indigo-900 hover:text-white font-extrabold bg-white hover:bg-indigo-800 border-3 border-indigo-900 shadow rounded transition duration-200"
                        href={cta.secondary.url}
                    >
                        {cta.secondary.name}
                    </a>
                </div>
            </div> : <></>
        )
    }
    const Socials = () => {

        return (
            <div className="flex">
                <div className="flex-shrink-0 -mt-4 inline-flex items-center justify-center w-16 h-16 mr-8 bg-white rounded-full border-3 border-indigo-900 text-indigo-900 shadow-md">
                    <GridIcon />
                </div>
                <div>
                    <h3 className="text-2xl font-extrabold mb-3">Socials</h3>
                    <div className="flex items-center justify-center flex-wrap">

                        {

                            socials ? socials.map((social, index) => {

                                return (
                                    <a
                                        key={index}
                                        className="mb-8 inline-block mr-6 hvr-pop"
                                        href={social?.url}
                                    >
                                        <SocialIcon bgColor="white" url={social?.url} />
                                    </a>



                                )
                            }) : <></>
                        }
                    </div>
                </div>
            </div>
        )
    }

    return (

        <section className="py-26 mt-4">
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap -mx-4 mb-16 items-center">
                    <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                        <div className="max-w-xl">
                            <span className="text-lg font-extrabold text-orange-500">
                                {label}
                            </span>
                            <h1 className="text-4xl font-extrabold font-heading mt-3 mb-3">
                                {heading}
                            </h1>
                            <p className="text-xl font-extrabold leading-8">
                                {description}
                            </p>
                        </div>
                    </div>
                    <CallToAction />
                </div>


                <div className="flex flex-wrap -mx-4 items-center">
                    <div className="w-full lg:w-1/3 px-4 mb-16 lg:mb-0">
                        <Email />
                        <Socials />
                    </div>


                    <div className="w-full lg:w-2/3 px-4">
                        <img
                            className="block object-cover"
                            src="/assets/images/contact-us.svg"
                            alt=""
                        />
                    </div>


                </div>
            </div>
        </section>
    )
}

export default ContactSection