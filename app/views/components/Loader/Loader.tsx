import { PacmanLoader } from "react-spinners"
import PositionSx from "@views/styles/Position"

const Loader = () => {
    const { tw: absoluteCenterTw } = PositionSx.absolute_center
    return (
        <div className={`${absoluteCenterTw()}`}>
            <PacmanLoader color="#9200CC" />
        </div>
    )
}

export default Loader