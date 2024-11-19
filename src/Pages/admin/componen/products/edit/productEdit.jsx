import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: `Brio ${id}`,
    category: "Mobil",
    stock: "ready",
  });

  const handleSave = () => {
    alert(`Product ${id} saved!`);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold">Edit Product: {product.name}</h2>
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
      <button onClick={handleSave} className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
        Save
      </button>
    </div>
  );
};

export default ProductEdit;
