import CoffeeIcon from '@mui/icons-material/Coffee'
import ColorLens from "@mui/icons-material/ColorLens"
import Diversity1 from "@mui/icons-material/Diversity1"
import Domain from "@mui/icons-material/Domain"
import Event from "@mui/icons-material/Event"
import FacebookIcon from '@mui/icons-material/Facebook'
import FiberNew from "@mui/icons-material/FiberNew"
import Handshake from "@mui/icons-material/Handshake"
import InstagramIcon from '@mui/icons-material/Instagram'
import LibraryBooks from "@mui/icons-material/LibraryBooks"
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import PermMedia from "@mui/icons-material/PermMedia"
import Store from "@mui/icons-material/Store"
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory"
import TwitterIcon from '@mui/icons-material/Twitter'
import Visibility from "@mui/icons-material/Visibility"


import type { IConfiguration } from '@models/typings/Configuration'

const icons = () => {

    const iconsData = {
        "visibility": Visibility,
        "facebook":  FacebookIcon,
        "twitter": TwitterIcon,
        "linkedin": LinkedInIcon,
        "event": Event,
        "colorLens": ColorLens,
        "domain": Domain,
        "new": FiberNew,
        "handshake": Handshake,
        "libraryBooks": LibraryBooks,
        "coffee": CoffeeIcon,
        "store": Store,
        "mallDirectory": StoreMallDirectoryIcon,
        "media": PermMedia,
        "youtube": Visibility,
        "diversity_1": Diversity1, 
        "instagram": InstagramIcon,
    }

    return { ...iconsData } ?? null
}

export default icons