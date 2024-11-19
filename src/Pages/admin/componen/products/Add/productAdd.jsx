import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonCRUD from "../../button/buttonCRUD";

const ProductAdd = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    category: "",
    stock: "",
  });

  const handleCreate = () => {
    alert("Product created!");
  };

  return (
    <div>
      <div>
        <label className="block">Nama:</label>
        <input
          type="text"
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
          className="border p-2 rounded mt-2"
        />
      </div>
      <div>
        <label className="block">Kategori:</label>
        <input
          type="text"
          value={product.category}
          onChange={(e) => setProduct({ ...product, category: e.target.value })}
          className="border p-2 rounded mt-2"
        />
      </div>
      <div>
        <label className="block">Status:</label>
        <input
          type="text"
          value={product.stock}
          onChange={(e) => setProduct({ ...product, stock: e.target.value })}
          className="border p-2 rounded mt-2"
        />
      </div>
      <ButtonCRUD action="create" onClick={handleCreate} />
    </div>
  );
};

export default ProductAdd;
