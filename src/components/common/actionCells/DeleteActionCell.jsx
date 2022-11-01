import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { GridActionsCellItem } from '@mui/x-data-grid';

export const DeleteActionCell = ({ onClick }) =>
    <GridActionsCellItem
        icon={<DeleteIcon />}
        label="Delete"
        onClick={onClick}
        color="inherit"
    />