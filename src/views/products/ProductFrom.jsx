import { Box, TextField } from '@mui/material'
import { styles } from './styles'

export const ProductFrom = ({ handleChange, currentProduct }) => {
    return (
        <Box sx={styles.inputFields}>
            <TextField
                placeholder="Nombre"
                name="name"
                label="Nombre"
                required
                value={currentProduct.name}
                autoFocus
                onChange={(e) => handleChange(e.target)}
            />

            <TextField
                placeholder="Precio"
                name="price"
                label="Precio"
                required
                value={currentProduct.price}
                onChange={(e) => handleChange(e.target)}
            />
        </Box>
    )
}
