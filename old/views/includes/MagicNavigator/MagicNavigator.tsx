import useBannerState from '@controllers/hooks/useBannerState';
import useModal from '@controllers/hooks/useModal';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import NotificationsIcon from '@mui/icons-material/Notifications';
import OutboundIcon from '@mui/icons-material/Outbound';
import SearchIcon from '@mui/icons-material/Search';
import ShareIcon from '@mui/icons-material/Share';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SettingsIcon from '@mui/icons-material/Settings';
import type { ComponentType } from '@models/typings/Component';
import RadioIcon from '@mui/icons-material/Radio';
import useMenuDrawerState from "@hooks/useMenuDrawerState"
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import { useState } from "react"
import useSpotifyPlayer from '@hooks/useSpotifyPlayer';


const MagicNavigator: ComponentType<any> = () => {

    const [volumeIconState, setVolumeIconState] = useState(false)


    const { open, toggleBanner } = useBannerState()
    const { toggleSpotifyPlayer } = useSpotifyPlayer()
    const { toggleModal } = useModal()
    const { toggleDrawer } = useMenuDrawerState()


    const ActionButtonSx = {
        cursor: 'pointer',
        color: 'white'
    }


    const actions = [
        {
            action: () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }),
            icon: <KeyboardDoubleArrowUpIcon sx={ActionButtonSx} />,
            name: 'Up'
        },
        {
            icon: <NotificationsIcon sx={ActionButtonSx} />,
            name: 'Banner',
            action: () => toggleBanner()
        },
        {
            icon: (volumeIconState && <VolumeUpIcon sx={ActionButtonSx} />) || <VolumeMuteIcon sx={ActionButtonSx} />,
            name: 'Sounds',
            action: () => setVolumeIconState(!volumeIconState)
        },

        {
            icon: <RadioIcon sx={ActionButtonSx} />,
            name: 'Radio',
            action: () => toggleSpotifyPlayer()
        },
        {
            icon: <SettingsIcon sx={ActionButtonSx} />,
            name: 'Menu',
            action: () => toggleDrawer()
        },


    ];

    return (
        <SpeedDial
            className="fixed z-50 transition-all ease-in cursor-pointer bottom-10 right-8 sm:flex md:flex duraiton-500 group"
            sx={{
                background: 'transparent',
                bgOpacity: 0.9
            }}
            FabProps={{
                sx: {
                    bgcolor: '#9200CC',
                    '&:hover': {
                        bgcolor: 'black',
                    }
                }
            }}

            ariaLabel="WTFMVMT_MAGIC_NAVIGATOR"
            icon={<OutboundIcon className='text-white ease-in-out rotate-45 group-hover:text-blue-200 group-hover:-rotate-45 duration-2000 will-change-transform' />}
        >

            {actions.map((action) => (
                <SpeedDialAction
                    className='bg-black cursor-pointer'
                    FabProps={{
                        sx: {
                            bgcolor: '#000000',
                            '&:hover': {
                                bgcolor: '#02DCFF',
                            }
                        }
                    }}

                    tooltipOpen
                    onClick={() => action?.action()}
                    key={action?.name}
                    icon={action?.icon}
                    tooltipTitle={<div className='text-black font-major'>{action?.name}</div>}
                />
            ))}
        </SpeedDial>
    )
}

export default MagicNavigator;