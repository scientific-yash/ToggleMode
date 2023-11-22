import React, { useState } from 'react';

const Products = () => {
  const initialProducts = [
    { id: 1, name: 'Bag', price: 100, manufacturingDate: '14/11/23' },
    { id: 2, name: 'Mobile', price: 10000, manufacturingDate: '10/11/23' },
    { id: 3, name: 'Camera', price: 2000, manufacturingDate: '14/10/23' },
    { id: 4, name: 'Laptop', price: 60000, manufacturingDate: '01/08/23' },
    // Add more products as needed
  ];

  const [filterValue, setFilterValue] = useState('');
  const [products, setProducts] = useState(initialProducts);

  const handleFilterChange = (event) => {
    setFilterValue(event.target.value);
    filterProducts(event.target.value);
  };

  const filterProducts = (value) => {
    const filteredProducts = initialProducts.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );
    setProducts(filteredProducts);
  };

  return (
    <>
      <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>This is the Products Page</h2>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <label>Filter&nbsp;</label>
        <input type='text' value={filterValue} onChange={handleFilterChange}></input><br></br>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <table>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Manufacturing Date</th>
          </tr>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.manufacturingDate}</td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};

export default Products;
