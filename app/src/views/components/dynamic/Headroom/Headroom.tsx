import { Headroom as ReactHeadroom } from "react-headroom"


export type HeadroomProps = {
    children: any
}

const Headroom = (children: HeadroomProps) => {

    return (
        <ReactHeadroom>
            {children}
        </ReactHeadroom>
    )
}

export default Headroom