import useBannerState from "@hooks/useBannerState";
import ReactTypingEffect from 'react-typing-effect';
import type { IComponent } from "@models/typings/Component";
import CloseIcon from "@mui/icons-material/Close";
import type { BannerProps } from "@typings/Banner";
import { CSSTransition } from 'react-transition-group';
import React from "react"

const Banner = ({ messages }: BannerProps) => {

    const { open, toggleBanner } = useBannerState()

    return (
        <CSSTransition in={open} timeout={500} unmountOnExit>

            <div className={`p-3 bg-black bg-opacity-80 backdrop-blur-lg ${!open ? "slide-out-bck-center" : ""}`}>
                <div className="flex items-center justify-center">
                    <p className="text-sm text-center font-bold font-heading text-purple-200">
                        <ReactTypingEffect
                            speed={50}
                            eraseSpeed={10}
                            typingDelay={20}
                            text={messages} />
                    </p>

                    <p onClick={() => toggleBanner()} className="hover:bg-purple-600 hover:rounded-full transition-all absolute right-2 top-2 text-gray-200 pr-1 cursor-pointer">
                        <CloseIcon />
                    </p>
                </div>

            </div>


        </CSSTransition>

    )

}

export default React.memo(Banner)