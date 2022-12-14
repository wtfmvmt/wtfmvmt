import * as React from 'react';
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NotificationsIcon from '@mui/icons-material/Notifications';







const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor = "#000000AA"

    return {
        backgroundColor,
        height: theme.spacing(3),
        color: "white",
        opacity: 0.50,
        cursor: "pointer",
        fontFamily: "var(--font-primary)",
        fontWeight: theme.typography.fontWeightRegular,
        '&:hover, &:focus': {
            opacity: 1.00,
            boxShadow: theme.shadows[4],
            backgroundColor: emphasize(backgroundColor, 0.06),
        },
        '&:active': {
            boxShadow: theme.shadows[3],
            opacity: 1.00,
            backgroundColor: emphasize(backgroundColor, 0.12),
        },
    };
}) as typeof Chip;


export type BreadcrumProps = {
    message?: string
}

export type BreadProps = {
    breadcrumbs?: BreadcrumProps[]
}
const Bread = ({ breadcrumbs }: BreadProps) => {

    return (
        <div className="self-center hidden m-auto font-share_tech lg:flex" role="presentation">
            <Breadcrumbs aria-label="breadcrumb">

                {
                    breadcrumbs ? breadcrumbs.map((breadcrumb, index) => {
                        return (
                            <StyledBreadcrumb key={index}
                                component="a"
                                href="/"
                                label={<span className="font-bold">{breadcrumb?.message}</span>}
                                icon={<NotificationsIcon fontSize="small" />}
                            />
                        )
                    }) :
                        <>

                            <StyledBreadcrumb
                                component="a"
                                href="/"
                                label={<span className="font-bold">Home</span>}
                                icon={<NotificationsIcon fontSize="small" />}
                            />

                        </>
                }


            </Breadcrumbs>
        </div>
    )
}

export default Bread