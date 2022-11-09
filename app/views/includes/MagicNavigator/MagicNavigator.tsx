import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShareIcon from '@mui/icons-material/Share';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';

import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useBannerState from '@controllers/hooks/useBannerState';


const MagicNavigator = () => {

    const { open, toggleBanner } = useBannerState()


    const ActionButtonSx = {
        cursor: 'pointer',
        color: 'white'
    }


    const actions = [
        {
            action: () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }),
            icon: <KeyboardDoubleArrowUpIcon sx={ActionButtonSx} />,
            name: 'Top'
        },
        {
            icon: <NotificationsIcon sx={ActionButtonSx} />,
            name: 'Notifications',
            action: () => toggleBanner()
        },
        {
            icon: <ShareIcon sx={ActionButtonSx} />,
            name: 'Share'
        },
        {
            icon: <ConnectWithoutContactIcon sx={ActionButtonSx} />,
            name: 'Community',
        },
    ];

    return (
        <SpeedDial
            className="fixed bottom-10 right-8 z-50 sm:flex md:flex cursor-pointer transition-all ease-in duraiton-500 group"
            sx={{ background: 'transparent' }}
            FabProps={{
                sx: {
                    bgcolor: '#9200CC',
                    '&:hover': {
                        bgcolor: 'black',
                    }
                }
            }}

            ariaLabel="SpeedDial basic example"
            icon={<AutoFixHighIcon className='text-white group-hover:text-blue-200' />}
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
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={<div className='font-major text-white m-0 bg-black'>{action?.name}</div>}
                />
            ))}
        </SpeedDial>
    )
}

export default MagicNavigator;