'use client'

import SearchIcon from '@mui/icons-material/Search';
import { Box, InputAdornment, TextField } from '@mui/material';

interface SearchBarProps {
    searchInput: string;
    setSearchInput: (value: string) => void;
    handleSearchSubmit: (e: React.FormEvent) => void;
}

export default function DataSearchBar({ searchInput, setSearchInput, handleSearchSubmit }: SearchBarProps) {
    return (
        <form onSubmit={handleSearchSubmit}>
            <Box display="flex" gap={2} mb={3}>
                <TextField
                    label="Search your favorite content"
                    variant="outlined"
                    fullWidth
                    value={searchInput}
                    onChange={e => setSearchInput(e.target.value)}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <SearchIcon />
                            </InputAdornment>
                        )
                    }}
                />
            </Box>
        </form>
    );
}