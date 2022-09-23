import type { CallToAction } from "@models/typings/CallToAction"
import { SocialIcon } from "react-social-icons"
import GridIcon from "@components/GridIcon"
import PhoneIcon from "@components/PhoneIcon"
import EmailIcon from "@components/EmailIcon"
import { Fade } from "react-awesome-reveal";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export type Social = {
    url: string,
    name: string
}

export type ContactSectionProps = {
    socials: Social[]
    phone: string,
    email: string,
    label: string,
    heading: string,
    description: string,
    cta: {
        primary: CallToAction,
        secondary: CallToAction
    }
}


const $ContactSection = ({ socials, phone, email, label, heading, description, cta }: ContactSectionProps) => {


    const PropsObject: ContactSectionProps = {

        socials: socials ? socials : [
            {
                url: "https://www.facebook.com/kevin.martinez.581",
                name: "SOCIALS_PROPERTY_NOT_FOUND"
            }
        ],
        phone: phone ? phone : "PHONE_PROPERTY_NOT_FOUND",
        email: email ? email : "EMAIL_PROPERTY_NOT_FOUND",
        label: label ? label : "LABEL_PROPERTY_NOT_FOUND",
        heading: heading ? heading : "HEADING_PROPERTY_NOT_FOUND",
        description: description ? description : "DESCRIPTION_PROPERTY_NOT_FOUND",
        cta: cta ? cta : {
            primary: {
                name: cta?.primary?.name ? cta?.primary?.name : "PRIMARY_CTA_LABEL_PROPERTY_NOT_FOUND",
                url: cta?.primary?.url ? cta?.primary?.url : "PRIMARY_CTA_URL_PROPERTY_NOT_FOUND"
            },
            secondary: {
                name: "SECONDARY_CTA_LABEL_PROPERTY_NOT_FOUND",
                url: "SECONDARY_CTA_URL_PROPERTY_NOT_FOUND"
            }
        }
    }

    return PropsObject


}



const ContactSection = ({ phone, email, socials, label, heading, description, cta }: ContactSectionProps) => {


    const Email = () => {

        return (
            <div className="flex mb-14">
                <div className="flex-shrink-0 -mt-4 inline-flex items-center justify-center w-16 h-16 mr-8 bg-white rounded-full border-3 border-indigo-900 text-indigo-900 shadow-md">
                    <EmailIcon />
                </div>
                <div>
                    <h3 className="text-2xl font-extrabold mb-3">Email</h3>
                    <p className="hover:scale-90 whitespace-nowrap transition-all text-xl sm:text-2xl text-red-200 bg-black bg-opacity-80 p-4 rounded">
                        {email}

                        <CopyToClipboard onCopy={() => alert(`Copied!`)} text={email}>
                            <span className="p-2 whitespace-nowrap">
                                <ContentCopyIcon />
                            </span>
                        </CopyToClipboard>
                    </p>
                </div>
            </div>
        )
    }


    const CallToActions = () => {
        return (

            cta ? <div className="w-full lg:w-1/2 px-4">
                <div className="flex flex-wrap items-center lg:justify-end">
                    <a
                        className="inline-block w-full md:w-auto mb-2 md:mb-0 md:mr-4 py-4 px-6 text-center leading-6 text-lg text-white font-extrabold bg-purple-800 hover:bg-purple-900 border-3 border-purple-900 shadow rounded transition duration-200"
                        href={cta?.primary?.url}
                    >
                        {cta?.primary?.name}
                    </a>
                    <a
                        className="inline-block w-full md:w-auto py-4 px-6 text-center leading-6 text-lg text-indigo-900 hover:text-white font-extrabold bg-white hover:bg-indigo-800 border-3 border-indigo-900 shadow rounded transition duration-200"
                        href={cta?.secondary?.url}
                    >
                        {cta?.secondary?.name}
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
                        <Fade cascade>

                            {

                                socials && socials.map((social, index) => {

                                    return (
                                        <a
                                            key={index}
                                            className="mb-8 inline-block mr-6 hvr-pop"
                                            href={social.url}
                                        >
                                            <SocialIcon url={social.url} bgColor="white" />
                                        </a>



                                    )
                                })
                            }
                        </Fade>
                    </div>
                </div>
            </div>
        )
    }

    return (

        <section className="py-26 mt-4 bg-black bg-opacity-10">
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
                    <CallToActions />
                </div>


                <div className="flex flex-wrap -mx-4 items-center">
                    <div className="w-full lg:w-1/3 px-4 mb-16 lg:mb-0">
                        <Email />
                        <Socials />
                    </div>


                    <div className="w-full lg:w-2/3 px-4">
                        <img
                            className="block object-cover border-3 border-indigo-900 rounded-2xl shadow-md"
                            src="/assets/images/contact-us.svg"
                            alt=""
                        />
                    </div>


                </div>
            </div>
        </section>
    )
}

export { $ContactSection }
export default ContactSection