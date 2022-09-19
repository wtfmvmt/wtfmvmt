import useBannerState from "@hooks/useBannerState";
import Icon from "@components/Icon"
import TypedText from "@components/TypedText";
import Countdown from "@components/Countdown"

import type { BannerProps } from "@typings/Banner";

import { CSSTransition } from 'react-transition-group';

const Banner = ({ messages, countdown }: BannerProps) => {


    const { open, toggleBanner } = useBannerState()

    return (
        <CSSTransition in={open} timeout={400} unmountOnExit>

            <div className={`p-3 bg-black ${!open ? "slide-out-bck-center" : ""}`}>
                <div className="flex items-center justify-center">
                    <p className="text-sm text-center font-bold font-heading text-purple-200">
                        <TypedText speed={50} eraseSpeed={10} typingDelay={20} text={messages} />
                    </p>

                    <p onClick={() => toggleBanner()} className="hover:scale-60 transition-all absolute right-1 top-4 text-gray-200 pr-4">
                        <Icon id="CLOSE" />
                    </p>

                </div>

            </div>


        </CSSTransition>

    )

}

export default Banner