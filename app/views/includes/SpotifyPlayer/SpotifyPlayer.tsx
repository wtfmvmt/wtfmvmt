import dynamic from "next/dynamic"
import Loader from "@includes/Loader"
import type { ComponentType } from "@typings/Component"
import useSpotifyPlayer from "@hooks/useSpotifyPlayer"

export type SpotifyPlayerProps = {
}

const SpotifyPlayer: ComponentType<SpotifyPlayerProps> = () => {

    const { playerState } = useSpotifyPlayer()

    const Spotify = dynamic(() => import("react-spotify-embed"), {
        loading: () => <Loader />,
        ssr: false
    })

    return (
        playerState.show ?
            <div className="z-50 fixed left-10 bottom-2">
                <Spotify link="https://open.spotify.com/playlist/7lTTJmeVL6wYidCJeoC9g2?si=s9NIDTWFSaebdEdR3GKWZQ&nd=1" />
            </div> : <></>
    )
}

export default SpotifyPlayer