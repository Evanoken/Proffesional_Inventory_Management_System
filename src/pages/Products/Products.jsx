import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Products.css';
import { apiDomain } from '../../Utils/Utils';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({});
  const [editProduct, setEditProduct] = useState({});
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${apiDomain}/api/products`);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleAddProduct = async () => {
    try {
      const response = await axios.post(`${apiDomain}/api/products`, newProduct);
      setProducts([...products, response.data]);
      setNewProduct({});
      setShowAddModal(false);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const handleAddFormChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleEditProduct = async () => {
    try {
      const response = await axios.put(`${apiDomain}/api/products/${editProduct.product_id}`, editProduct);
      const updatedProducts = products.map((product) => {
        if (product.product_id === response.data.product_id) {
          return response.data;
        }
        return product;
      });
      setProducts(updatedProducts);
      setEditProduct({});
      setShowEditModal(false);
    } catch (error) {
      console.error('Error editing product:', error);
    }
  };

  const handleEditFormChange = (e) => {
    setEditProduct({ ...editProduct, [e.target.name]: e.target.value });
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await axios.delete(`${apiDomain}/api/products/${productId}`);
      const updatedProducts = products.filter((product) => product.product_id !== productId);
      setProducts(updatedProducts);
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const renderAddModal = () => (
    <div className="add-modal">
      <h2>Add Product</h2>
      <form>
        <div>
          <label>Name</label>
          <input type="text" name="product_name" value={newProduct.product_name || ''} onChange={handleAddFormChange} />
        </div>
        {/* Add other form fields for category, price, quantity, etc. */}
        <div className="button-group">
          <button type="button" onClick={() => setShowAddModal(false)}>Cancel</button>
          <button type="button" onClick={handleAddProduct}>Add</button>
        </div>
      </form>
    </div>
  );

  const renderEditModal = () => (
    <div className="edit-modal">
      <h2>Edit Product</h2>
      <form>
        <div>
          <label>Name</label>
          <input type="text" name="product_name" value={editProduct.product_name || ''} onChange={handleEditFormChange} />
        </div>
        {/* Add other form fields for category, price, quantity, etc. */}
        <div className="button-group">
          <button type="button" onClick={() => setShowEditModal(false)}>Cancel.</button>
          <button type="button" onClick={handleEditProduct}>Save</button>
        </div>
      </form>
    </div>
  );
return (
<div className="products">
<h1>Products</h1>
<button className="add-button" onClick={() => setShowAddModal(true)}>Add Product</button>
{showAddModal && renderAddModal()}
{showEditModal && renderEditModal()}
<table>
{/* ...existing code... */}
<thead>
  <tr>
    <th>Name</th>
    <th>Category</th>
    <th>Price</th>
    <th>Quantity</th>
    <th>Actions</th>
  </tr>
</thead>
<tbody>
  {products.map((product) => (
    <tr key={product.product_id}>
      <td>{product.product_name}</td>
      <td>{product.category}</td>
      <td>{product.price}</td>
      <td>{product.quantity}</td>
      <td>
        <button onClick={() => {
          setEditProduct(product);
          setShowEditModal(true);
        }}>Edit</button>
        <button onClick={() => handleDeleteProduct(product.product_id)}>Delete</button>
      </td>
    </tr>
  ))}
</tbody>
{/* ...existing code... */}

</table>
</div>
);
};

export default Products;
