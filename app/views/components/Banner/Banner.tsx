import ReactTypingEffect from 'react-typing-effect';

export type BannerProps = {
    message: string[]
}

const Banner = ({ message }: BannerProps) => {
    return (
        <div className="py-2 bg-black">
            <div className="flex items-center justify-center">
                <svg
                    className="mr-2"
                    width={18}
                    height={11}
                    viewBox="0 0 18 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        y="3.07129"
                        width={4}
                        height={10}
                        rx={2}
                        transform="rotate(-45 0 3.07129)"
                        fill="white"
                    />
                    <rect
                        x={8}
                        y="2.82861"
                        width={4}
                        height={10}
                        rx={2}
                        transform="rotate(-45 8 2.82861)"
                        fill="white"
                    />
                </svg>
                <p className="text-xs font-bold font-heading text-blue-100">
                <ReactTypingEffect speed={50} eraseSpeed={10} typingDelay={20} text={message} />

                 
                </p>
            </div>
        </div>
    )
}

export default Banner