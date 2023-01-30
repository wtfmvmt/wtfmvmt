import { twMerge } from "tailwind-merge"

const Heading = ({ children, sx }) => {

    return (
        <h1 className={twMerge('text-3xl font-extrabold font-major md:text-4xl font-heading', sx)}>
            {children}
        </h1>
    )
}

export default Heading