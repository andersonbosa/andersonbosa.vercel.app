import { Box, Chip, Typography } from "@mui/material"


interface TagsFilterProps {
    tags: string[]
    selectedTags: string[]
    onTagToggle: (tag: string) => void
}

export const TagsFilter: React.FC<TagsFilterProps> = ({
    tags,
    selectedTags,
    onTagToggle
}) => {
    return (
        <Box>
            <Typography variant='subtitle1'>Filter by tags</Typography>
            <Box>
                {tags.map(
                    tag => (
                        <Chip
                            key={tag}
                            label={tag}
                            onClick={() => onTagToggle(tag)}
                            color={selectedTags.includes(tag) ? 'primary' : 'default'}
                            sx={{ mr: 1, mt: 1 }}                        >
                        </Chip>
                    )
                )}
            </Box>
        </Box>
    )
}