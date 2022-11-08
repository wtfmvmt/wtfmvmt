import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import ChatIcon from '@mui/icons-material/Chat';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShareIcon from '@mui/icons-material/Share';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';

const MagicNavigator = () => {

    const actions = [
        { icon: <KeyboardDoubleArrowUpIcon sx={{ color: 'white' }} />, name: 'Float' },
        { icon: <ChatIcon sx={{ color: 'white' }} />, name: 'Chat' },
        { icon: <NotificationsIcon sx={{ color: 'white' }} />, name: 'Notifications' },
        { icon: <ShareIcon sx={{ color: 'white' }} />, name: 'Share' },
        { icon: <ConnectWithoutContactIcon sx={{ color: 'white' }} />, name: 'Community', },
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
            icon={<AutoFixHighIcon className='text-black group-hover:text-white' />}
        >
            {actions.map((action) => (
                <SpeedDialAction
                    className="bg-transparent"
                    FabProps={{
                        sx: {
                            bgcolor: '#000000',
                            '&:hover': {
                                bgcolor: '#02DCFF',
                            }
                        }
                    }}

                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={<div className="bg-black font-major">{action?.name}</div>}
                />
            ))}
        </SpeedDial>
    )
}

export default MagicNavigator;