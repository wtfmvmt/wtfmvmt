import { Fade } from "react-awesome-reveal";



const Animation = ({ type, children }) => {


    switch (type) {
        case "fade":
            return (<Fade>
                {children}
            </Fade>
            )
        default:
            return (<Fade>
                {children}
            </Fade>
            )
    }
}


export default Animation