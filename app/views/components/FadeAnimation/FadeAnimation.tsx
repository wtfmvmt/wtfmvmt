import { Fade } from "react-awesome-reveal";

const FadeAnimation = ({ children, ...overrides }) => {

    return (
        <Fade triggerOnce {...overrides}>
            {children}
        </Fade>
    )
}

export default FadeAnimation