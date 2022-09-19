import ReactTypingEffect from 'react-typing-effect';


export type TypedTextProps = {
    speed?: number,
    eraseSpeed?: number,
    typingDelay?: number,
    text: string[]
}
const TypedText = ({ speed, eraseSpeed, typingDelay, text, ...rest }: TypedTextProps) => {

    return (
        <ReactTypingEffect
            {...rest}
            speed={speed ? speed : 50}
            eraseSpeed={eraseSpeed ? eraseSpeed : 10}
            typingDelay={typingDelay ? typingDelay : 20}
            text={text} />
    )
}

export default TypedText