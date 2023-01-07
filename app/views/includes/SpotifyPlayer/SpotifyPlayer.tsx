import useSpotifyPlayer from "@hooks/useSpotifyPlayer"
import Loader from "@includes/Loader"
import type { ComponentType } from "@typings/Component"
import dynamic from "next/dynamic"


export type SpotifyPlayerProps = {
}

const SpotifyPlayer: ComponentType<SpotifyPlayerProps> = () => {

    const { playerState } = useSpotifyPlayer()

    const Spotify = dynamic(() => import("react-spotify-embed"), {
        loading: () => <Loader />,
        ssr: true
    })


    return (
        playerState.show ?
            <div className="z-50 absolute left-10 bottom-2 cursor-pointer">
                <Spotify link={playerState.link} />
            </div>
            : <></>
    )
}

export default SpotifyPlayer