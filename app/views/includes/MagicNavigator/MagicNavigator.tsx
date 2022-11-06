import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import NearMeIcon from '@mui/icons-material/NearMe';
import PrintIcon from '@mui/icons-material/Print';
import SaveIcon from '@mui/icons-material/Save';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import ScrollToTop from "react-scroll-to-top";
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';

const actions = [
    { icon: <BubbleChartIcon sx={{ color: 'white' }} />, name: 'Float' },
    { icon: <ChatIcon sx={{ color: 'white' }} />, name: 'Chat' },
    { icon: <NotificationsIcon sx={{ color: 'white' }} />, name: 'Notifications' },

];

const MagicNavigator = () => {

    return (
        <SpeedDial
            className="fixed bottom-10 right-8 z-50 sm:flex md:flex cursor-pointer transition-all ease-in duraiton-500"
            sx={{ background: 'transparent' }}
            FabProps={{
                sx: {
                    bgcolor: 'purple',
                    '&:hover': {
                        bgcolor: 'black',
                    }
                }
            }}

            ariaLabel="SpeedDial basic example"
            icon={<NearMeIcon />}
        >
            {actions.map((action) => (
                <SpeedDialAction
                    className="bg-transparent"
                    FabProps={{
                        sx: {
                            bgcolor: '#000000',
                            '&:hover': {
                                bgcolor: 'purple',
                            }
                        }
                    }}

                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                />
            ))}
        </SpeedDial>
    )
}

export default MagicNavigator;