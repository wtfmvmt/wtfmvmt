import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export type SearchBarProps = {
    search?: any
}
const SearchBar = ({ search }: SearchBarProps) => {

    return (
        <div className="xl:flex text-slate-200 mx-auto py-3 pl-6 pr-3 border border-gray-200 rounded-lg font-major">
            <Autocomplete
                id="WTFMVMT_SEARCH_BARS"
                options={[]}
                sx={{ width: "100%", border: 0, color: 'white', fontFamily: 'var(--font-primary)' }}
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

                            borderWidth: '0px',
                            outline: 0,
                            padding: '0.5rem 0.5rem 0 0',
                            '& .MuiInput-underline:before': { borderBottomColor: 'white' },
                            '& .MuiInput-underline:after': { borderBottomColor: 'white' },
                        }} className="w-full bg-transparent border-1 font-share_tech border-white focus:ring-transparent focus:outline-none py-2" label={<span className="text-slate-200 font-major">SEEK & FIND</span>} />
                }
            />


        </div>
    )
}


export default SearchBar