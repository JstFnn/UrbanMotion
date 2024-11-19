import React from "react";
import { useParams } from "react-router-dom";
import HeaderAdmin from "../../../componen/Header/headerAdmin";
import ButtonCRUD from "../../../componen/button/buttonCRUD";

const ProductDetail = () => {
  const { id } = useParams();

  // Simulate fetching data based on the ID
  const product = { id, name: `Brio ${id}`, category: "Mobil", stock: "ready" };

  return (
    <div>
      <div className="flex-1 overflow-auto relative uppercase">
        <HeaderAdmin title={`Detail Produk  :  ${product.name}`} />
      </div>
      <main className="bg-#F5F6FA max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <div className="flex space-x-4 mb-4 mt-4">
          <ButtonCRUD action="edit" />
          <ButtonCRUD action="delete" />
        </div>
        <p>
          <strong>Nama:</strong> {product.name}
        </p>
        <p>
          <strong>Jenis:</strong> {product.category}
        </p>
        <p>
          <strong>Status:</strong> {product.stock}
        </p>
      </main>
    </div>
  );
};

export default ProductDetail;
