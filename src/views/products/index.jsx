import React, { useState } from 'react'
//Material
import { DataGrid } from '@mui/x-data-grid';
import { Button, Grid } from '@mui/material';
//Hooks
import useProducts from '../../hooks/product/useProduct';
//Components
import BaseModal from '../../components/common/modal';
import { DeleteActionCell } from '../../components/common/actionCells/DeleteActionCell'
import { EditActionCell } from '../../components/common/actionCells/EditActionCell';
import { ProductFrom } from './ProductFrom';

const defaultProduct = {
  id: 0,
  name: "",
  price: "",
}

const Products = () => {
  const { products, loading, createProduct, editProduct, deleteProduct } = useProducts();
  const [currentProduct, setCurrentProduct] = useState({});
  const [open, setOpen] = useState(false);
  const [subTitle, setSubTitle] = useState("");

  const handleChange = (target) => {
    setCurrentProduct({
      ...currentProduct,
      [target.name]: target.value
    });
  }

  const handleCreate = () => {
    setCurrentProduct(defaultProduct);
    setSubTitle("Creación")
    setOpen(true);
  }

  const handleEdit = (user) => {
    setCurrentProduct(user);
    setSubTitle("Edición")
    setOpen(true);
  }

  const handleDelete = (product) => {
    if (window.confirm(`Realmente desea elimina el producto ${product.name}?`)) {
      deleteProduct(product.id);
    }
  }

  const handleSave = () => {
    let result = currentProduct.id === 0
      ? createProduct(currentProduct)
      : editProduct(currentProduct);

    if (result !== null)
      setOpen(false);
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Nombre', width: 200 },
    { field: 'price', headerName: 'Precio', width: 200 },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Acciones',
      flex: 1,
      maxWidth: 150,
      minWidth: 100,
      cellClassName: 'actions',
      getActions: (data) => {
        return [
          <EditActionCell
            onClick={() => handleEdit(data.row)}
          />,
          <DeleteActionCell
            onClick={() => handleDelete(data.row)}
          />
        ];
      },
    },
  ];

  return (
    <div style={{ height: 400, width: '50%', margin: 'auto' }}>
      <Grid item xs={12} sx={{ pb: 1 }}>
        <Button
          sx={2}
          variant="contained"
          onClick={() => handleCreate()}
        >
          Nuevo Producto
        </Button>
      </Grid>
      <Grid item sx={12}>
        <DataGrid
          autoHeight={true}
          rows={products}
          columns={columns}
          loading={loading}
          pageSize={5}
        />
      </Grid>
      <BaseModal
        autoHeight={true}
        open={open}
        onClose={() => setOpen(false)}
        title="Productos"
        subTitle={subTitle}
        content={
          <ProductFrom handleChange={handleChange} currentProduct={currentProduct} />
        }
        onSubmit={() => handleSave()}
        disableSubmit={false}
      />
    </div>
  );
}


export default Products;
