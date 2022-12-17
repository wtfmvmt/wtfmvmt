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
}) as typeof Chip; // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

function handleClick(event: React.MouseEvent<Element, MouseEvent>) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export type BreadcrumProps = {
    message?: string
}

export type BreadProps = {
    breadcrumbs?: BreadcrumProps
}
const Bread = ({ breadcrumbs }: BreadProps) => {

    return (
        <div className="self-center m-auto font-share_tech hidden lg:flex" role="presentation" onClick={handleClick}>
            <Breadcrumbs aria-label="breadcrumb">
                <StyledBreadcrumb
                    component="a"
                    href="/"
                    label={<span className="font-bold">Hippie Hideout 12/24</span>}
                    icon={<NotificationsIcon fontSize="small" />}
                />
                <StyledBreadcrumb
                    component="a"
                    href="/"
                    label={<span className="font-bold">Merry Christmas!</span>}
                    icon={<NotificationsIcon fontSize="small" />}
                />
                <StyledBreadcrumb
                    component="a"
                    href="/"
                    label={<span className="font-bold">Checkout Vivalapvyne Records!</span>}
                    icon={<NotificationsIcon fontSize="small" />}
                />


            </Breadcrumbs>
        </div>
    )
}

export default Bread