import { atom, useRecoilState } from 'recoil';

const spotifyPlayerState = atom({
    key: 'spotifyPlayerState',
    default: {
        show: false,
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
