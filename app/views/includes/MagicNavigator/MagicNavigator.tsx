import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import NearMeIcon from '@mui/icons-material/NearMe';
const actions = [
    { icon: <FileCopyIcon />, name: 'Copy' },
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
];

const MagicNavigator = () => {

    return (
        <SpeedDial
            className="fixed bottom-10 left-8 z-50 sm:flex md:flex cursor-pointer transition-all ease-in duraiton-500"
            sx={{ background: 'transparent' }}
            FabProps={{
                sx: {
                    bgcolor: '#000000',
                    '&:hover': {
                        bgcolor: 'purple',
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