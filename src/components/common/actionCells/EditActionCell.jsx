import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import { GridActionsCellItem } from '@mui/x-data-grid';

export const EditActionCell = ({ onClick }) =>
    <GridActionsCellItem
        icon={<EditIcon />}
        label="Edit"
        onClick={onClick}
        color="inherit"
    />
