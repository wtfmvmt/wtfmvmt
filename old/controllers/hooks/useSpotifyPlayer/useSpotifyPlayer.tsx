import { atom, useRecoilState } from 'recoil';

const spotifyPlayerState = atom({
    key: 'spotifyPlayerState',
    default: {
        show: false,
        link: "https://open.spotify.com/playlist/7lTTJmeVL6wYidCJeoC9g2?si=s9NIDTWFSaebdEdR3GKWZQ&nd=1"
    },
});

const useSpotifyPlayer = () => {

    const [playerState, setPlayerState] = useRecoilState(spotifyPlayerState);

    const showSpotifyPlayer = () => {
        setPlayerState({
            ...playerState,
            show: true
        })
    }

    const toggleSpotifyPlayer = () => {

        setPlayerState({
            ...playerState,
            show: !playerState.show
        })
    }


    const closeSpotifyPlayer = () => {

        setPlayerState({
            ...playerState,
            show: false
        })
    }



    return { showSpotifyPlayer, toggleSpotifyPlayer, closeSpotifyPlayer, playerState };

}

export default useSpotifyPlayer
