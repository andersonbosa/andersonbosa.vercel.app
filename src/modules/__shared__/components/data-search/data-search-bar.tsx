'use client'

import SearchIcon from '@mui/icons-material/Search';
import { Box, IconButton, TextField } from '@mui/material';
import { useIsMobile } from '../../hooks/is-mobile.hook';

interface SearchBarProps {
    searchInput: string;
    setSearchInput: (value: string) => void;
    handleSearchSubmit: (e: React.FormEvent) => void;
}

export default function DataSearchBar({ searchInput, setSearchInput, handleSearchSubmit }: SearchBarProps) {
    const isMobile = useIsMobile()
    return (
        <form onSubmit={handleSearchSubmit}>
            <Box display="flex" justifyContent='center' p={0} mb={isMobile ? 4 : 0}>
                <TextField
                    fullWidth
                    label="Search your favorite content"
                    variant="outlined"
                    value={searchInput}
                    onChange={e => setSearchInput(e.target.value)}
                    InputProps={{
                        endAdornment: (<IconButton> <SearchIcon /> </IconButton>)
                    }}
                    sx={{
                        maxWidth: isMobile ? 'inherit' : '400px'
                    }}
                />
            </Box>
        </form>
    );
}