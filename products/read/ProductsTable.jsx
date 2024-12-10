import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductsTable = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/products");
    setProducts(response.data);
  };

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:5000/products/${productId}`);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">
      <div
        className="columns is-multiline mt-2"
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        {products.map((product) => (
          <div
            className="column is-one-quarter"
            key={product.id}
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "30px",
            }}
          >
            <div
              className="cardSetting"
              style={{ display: "flex", flexDirection: "row", width: "100%" }}
            >
              {/* Bagian Gambar */}
              <div
                className="cardSetting-image"
                style={{ flex: "1", padding: "10px" }}
              >
                <figure
                  className="imageSetting"
                  style={{ width: "100px", height: "100px" }}
                >
                  <img
                    src={product.url}
                    alt={product.name}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </figure>
              </div>

              {/* Bagian Konten (Nama dan Footer) */}
              <div
                className="cardSetting-content"
                style={{ flex: "2", padding: "10px" }}
              >
                <div className="media">
                  <div className="media-content">
                    <p
                      className="title is-4"
                      style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {product.name}
                    </p>
                  </div>
                </div>
              </div>

              <footer className="cardSetting-footer" style={{ flex: "1" }}>
                <Link
                  to={`/product-edit/${product.id}`}
                  className="card-footer-item"
                >
                  Edit
                </Link>
                <a
                  onClick={() => deleteProduct(product.id)}
                  className="card-footer-item"
                  style={{ cursor: "pointer" }} // Menambahkan gaya pointer
                >
                  Delete
                </a>
              </footer>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsTable;
