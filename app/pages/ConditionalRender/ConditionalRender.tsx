import { CSSTransition } from 'react-transition-group';

const ConditionalRender = ({ children, condition }) => {

    return (
        <CSSTransition timeout={300} in={condition}>
            {children}
        </CSSTransition>
    )
}
export default ConditionalRender