import ReactTypingEffect from 'react-typing-effect';
import type { IComponent } from '@models/typings/Component';

export type TypedTextProps  = {
    speed?: number,
    eraseSpeed?: number,
    typingDelay?: number,
    text: string[]
}
const TypedText: IComponent<TypedTextProps>  = ({ speed, eraseSpeed, typingDelay, text, ...overrides }: TypedTextProps) => {

    return (
        <ReactTypingEffect
            {...overrides}
            speed={speed ? speed : 50}
            eraseSpeed={eraseSpeed ? eraseSpeed : 10}
            typingDelay={typingDelay ? typingDelay : 20}
            text={text} />
    )
}

export default TypedText