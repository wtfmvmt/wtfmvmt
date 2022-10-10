import Banner from "@components/Banner";
import BurgerIcon from "@components/BurgerIcon";
import useMenuDrawerState from "@hooks/useMenuDrawerState";
import AnnouncementIcon from '@mui/icons-material/Announcement';
import Autocomplete from '@mui/material/Autocomplete';
import Badge from '@mui/material/Badge';
import TextField from '@mui/material/TextField';
import type { HeaderProps } from "@typings/Header";
import Headroom from "react-headroom";

const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
    {
        label: 'The Lord of the Rings: The Return of the King',
        year: 2003,
    },
    { label: 'The Good, the Bad and the Ugly', year: 1966 },
    { label: 'Fight Club', year: 1999 },
    {
        label: 'The Lord of the Rings: The Fellowship of the Ring',
        year: 2001,
    },
    {
        label: 'Star Wars: Episode V - The Empire Strikes Back',
        year: 1980,
    },
    { label: 'Forrest Gump', year: 1994 },
    { label: 'Inception', year: 2010 },
    {
        label: 'The Lord of the Rings: The Two Towers',
        year: 2002,
    },
    { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { label: 'Goodfellas', year: 1990 },
    { label: 'The Matrix', year: 1999 },
    { label: 'Seven Samurai', year: 1954 },
    {
        label: 'Star Wars: Episode IV - A New Hope',
        year: 1977,
    },
    { label: 'City of God', year: 2002 },
    { label: 'Se7en', year: 1995 },
    { label: 'The Silence of the Lambs', year: 1991 },
    { label: "It's a Wonderful Life", year: 1946 },
    { label: 'Life Is Beautiful', year: 1997 },
    { label: 'The Usual Suspects', year: 1995 },
    { label: 'Léon: The Professional', year: 1994 },
    { label: 'Spirited Away', year: 2001 },
    { label: 'Saving Private Ryan', year: 1998 },
    { label: 'Once Upon a Time in the West', year: 1968 },
    { label: 'American History X', year: 1998 },
    { label: 'Interstellar', year: 2014 },
    { label: 'Casablanca', year: 1942 },
    { label: 'City Lights', year: 1931 },
    { label: 'Psycho', year: 1960 },
    { label: 'The Green Mile', year: 1999 },
    { label: 'The Intouchables', year: 2011 },
    { label: 'Modern Times', year: 1936 },
    { label: 'Raiders of the Lost Ark', year: 1981 },
    { label: 'Rear Window', year: 1954 },
    { label: 'The Pianist', year: 2002 },
    { label: 'The Departed', year: 2006 },
    { label: 'Terminator 2: Judgment Day', year: 1991 },
    { label: 'Back to the Future', year: 1985 },
    { label: 'Whiplash', year: 2014 },
    { label: 'Gladiator', year: 2000 },
    { label: 'Memento', year: 2000 },
    { label: 'The Prestige', year: 2006 },
    { label: 'The Lion King', year: 1994 },
    { label: 'Apocalypse Now', year: 1979 },
    { label: 'Alien', year: 1979 },
    { label: 'Sunset Boulevard', year: 1950 },
    {
        label: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
        year: 1964,
    },
    { label: 'The Great Dictator', year: 1940 },
    { label: 'Cinema Paradiso', year: 1988 },
    { label: 'The Lives of Others', year: 2006 },
    { label: 'Grave of the Fireflies', year: 1988 },
    { label: 'Paths of Glory', year: 1957 },
    { label: 'Django Unchained', year: 2012 },
    { label: 'The Shining', year: 1980 },
    { label: 'WALL·E', year: 2008 },
    { label: 'American Beauty', year: 1999 },
    { label: 'The Dark Knight Rises', year: 2012 },
    { label: 'Princess Mononoke', year: 1997 },
    { label: 'Aliens', year: 1986 },
    { label: 'Oldboy', year: 2003 },
    { label: 'Once Upon a Time in America', year: 1984 },
    { label: 'Witness for the Prosecution', year: 1957 },
    { label: 'Das Boot', year: 1981 },
    { label: 'Citizen Kane', year: 1941 },
    { label: 'North by Northwest', year: 1959 },
    { label: 'Vertigo', year: 1958 },
    {
        label: 'Star Wars: Episode VI - Return of the Jedi',
        year: 1983,
    },
    { label: 'Reservoir Dogs', year: 1992 },
    { label: 'Braveheart', year: 1995 },
    { label: 'M', year: 1931 },
    { label: 'Requiem for a Dream', year: 2000 },
    { label: 'Amélie', year: 2001 },
    { label: 'A Clockwork Orange', year: 1971 },
    { label: 'Like Stars on Earth', year: 2007 },
    { label: 'Taxi Driver', year: 1976 },
    { label: 'Lawrence of Arabia', year: 1962 },
    { label: 'Double Indemnity', year: 1944 },
    {
        label: 'Eternal Sunshine of the Spotless Mind',
        year: 2004,
    },
    { label: 'Amadeus', year: 1984 },
    { label: 'To Kill a Mockingbird', year: 1962 },
    { label: 'Toy Story 3', year: 2010 },
    { label: 'Logan', year: 2017 },
    { label: 'Full Metal Jacket', year: 1987 },
    { label: 'Dangal', year: 2016 },
    { label: 'The Sting', year: 1973 },
    { label: '2001: A Space Odyssey', year: 1968 },
    { label: "Singin' in the Rain", year: 1952 },
    { label: 'Toy Story', year: 1995 },
    { label: 'Bicycle Thieves', year: 1948 },
    { label: 'The Kid', year: 1921 },
    { label: 'Inglourious Basterds', year: 2009 },
    { label: 'Snatch', year: 2000 },
    { label: '3 Idiots', year: 2009 },
    { label: 'Monty Python and the Holy Grail', year: 1975 },
];

const notifications = {
    queue: '3'
}

const Header = ({ favicon, cta, banner, title, search }: HeaderProps) => {
    const { toggleDrawer } = useMenuDrawerState()

    const Notifier = () => {
        return (
            <div className="hidden">
                <Badge badgeContent={notifications.queue} color="secondary">
                    <AnnouncementIcon />
                </Badge>
            </div>
        )
    }


    const MobileNavBurger = () => (
        <a className="navbar-burger cursor-pointer self-center mr-12 xl:hidden" href="#">
            <div className="xl:flex items-center">
                <a className="flex items-center hover:text-gray-600" href="#">
                    <Notifier />
                    <BurgerIcon action={() => toggleDrawer()} />
                </a>
            </div>
        </a>
    )

    const SearchBar = () => {

        return (

            <>
                {
                    true && (
                        <div className="hidden xl:flex mx-auto py-3 pl-6 pr-3 border border-gray-200 rounded-lg">



                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={top100Films}
                                sx={{ width: 300, border: 0, color: 'white', fontFamily: 'var(--font-primary)' }}

                                renderInput={(params) =>
                                    <TextField variant="standard" {...params}
                                        InputProps={{
                                            sx: {
                                                outline: 'white',
                                                border: 'white',
                                                color: 'white',
                                                '& .MuiInput-underline:before': { borderBottomColor: 'white' },
                                                '& .MuiInput-underline:after': { borderBottomColor: 'white' },
                                            }
                                        }}
                                        InputLabelProps={{
                                            sx: {
                                                border: 'white',
                                            },
                                        }}
                                        sx={{

                                            color: '#FFFFFF',
                                            fontFamily: 'Major Mono Display',
                                            borderWidth: '0px',
                                            outline: 0,
                                            padding: '0.5rem 0.5rem 0 0',
                                            '& .MuiInput-underline:before': { borderBottomColor: 'white' },
                                            '& .MuiInput-underline:after': { borderBottomColor: 'white' },
                                        }} className="w-full bg-transparent border-1 border-white focus:ring-transparent focus:outline-none py-2" label={<span className="text-white">SEEK & FIND</span>} />
                                }
                            />

                            <select
                                className="flicker-in-1 pl-6 pr-6 border-0 bg-black border-l border-gray-100 focus:border-gray-100 focus:ring-transparent bg-transparent focus:outline-none cursor-pointer"
                                name=""
                                id="search-selector"
                            >
                                {
                                    search.map((item, index) => (
                                        <option key={index} className="bg-black">{item.id}</option>
                                    ))
                                }
                            </select>
                        </div>
                    )
                }
            </>
        )
    }

    const Favicon = () => {
        return (
            <>
                {
                    favicon && (

                        <a className="flex-shrink-0 text-3xl font-bold font-heading" href={favicon.url}>
                            <img
                                className="h-16"
                                src={favicon.src}
                                alt=""
                                width="auto"
                            />
                        </a>
                    )
                }
            </>
        )
    }

    const NavBurger = () => (

        <div className="cursor-pointer hover:scale-90 duration-700 hidden xl:flex">
            <BurgerIcon action={() => toggleDrawer()} />
        </div>
    )

    return (
        <section className="relative pb-20 overflow-hidden w-full">
            <Headroom>

                <Banner {...banner} />
                <nav className="flex justify-between backdrop-blur-2xl border-b">

                    <div className="px-12 py-6 flex w-full items-center">
                        <Favicon />
                        <SearchBar />

                        <div className="xl:flex items-center ">
                            <a className="flex items-center hover:text-gray-600" href="/">
                                <Notifier />
                            </a>
                        </div>
                    </div>

                    <NavBurger />
                    <MobileNavBurger />
                </nav>
            </Headroom>
        </section>
    )
}

export default Header
















