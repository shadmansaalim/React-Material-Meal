import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';


const SearchBar = (props) => {
    return (
        <Paper
            component="form"
            sx={{ display: 'flex', alignItems: 'center', width: '80%', mx: 'auto', my: 5 }}
        >
            <InputBase
                onChange={props.handleSearch}
                sx={{ ml: 1, flex: 1 }}
                placeholder="Looking for foods?"
                inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}

export default SearchBar;