import CloseIcon from "@mui/icons-material/Close"
import ColorLens from "@mui/icons-material/ColorLens"
import Diversity1 from "@mui/icons-material/Diversity1"
import Domain from "@mui/icons-material/Domain"
import Event from "@mui/icons-material/Event"
import FiberNew from "@mui/icons-material/FiberNew"
import Handshake from "@mui/icons-material/Handshake"
import LibraryBooks from "@mui/icons-material/LibraryBooks"
import PermMedia from "@mui/icons-material/PermMedia"
import Store from "@mui/icons-material/Store"
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory"
import Visibility from "@mui/icons-material/Visibility"


const icons = () => {

    const iconsData = {
        "VISIBILITY": Visibility,
        "STORE": Store,
        "COLOR_LENS": ColorLens,
        "LIBRARY_BOOKS": LibraryBooks,
        "EVENT": Event,
        "HANDSHAKE": Handshake,
        "DIVERSITY": Diversity1,
        "MEDIA": PermMedia,
        "NEW": FiberNew,
        "DOMAIN": Domain,
        "VENDOR": StoreMallDirectoryIcon,
        "CLOSE": CloseIcon
    }

    return { ...iconsData } ?? null
}

export default icons