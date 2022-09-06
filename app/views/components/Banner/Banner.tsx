import useBannerState from "@hooks/useBannerState";
import CloseIcon from '@mui/icons-material/Close';
import ReactTypingEffect from 'react-typing-effect';
import { CSSTransition } from 'react-transition-group';

export type BannerProps = {
    messages: string[],
    icon?: string
}

const Banner = ({ messages, icon }: BannerProps) => {


    const { open, toggleBanner } = useBannerState()

    return (
        <CSSTransition in={open} timeout={900} unmountOnExit>


            <div className={`p-3 bg-black ${!open ? "bounce-out-top" : ""}`}>
                <div className="flex items-center justify-center">
                    <p className="text-xs font-bold font-heading text-blue-100">
                        <ReactTypingEffect speed={50} eraseSpeed={10} typingDelay={20} text={messages} />
                    </p>

                    <p onClick={() => toggleBanner()} className="absolute right-1 top-1 text-white">
                        <CloseIcon />
                    </p>

                </div>

            </div>


        </CSSTransition>

    )

}

export default Banner