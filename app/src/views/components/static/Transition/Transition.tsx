import { CSSTransition } from 'react-transition-group';



const Transition = ({ children }) => {

    return (
        <CSSTransition in={true} timeout={333} unmountOnExit>
            {children}
        </CSSTransition>
    )
}

export default Transition