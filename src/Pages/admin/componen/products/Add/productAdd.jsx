import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonCRUD from "../../button/buttonCRUD";
import axiosInstance from "../../../../../utils/axios";
import { getToken } from "../../../../../utils/authUtils";

const ProductAdd = () => {
  const navigate = useNavigate();
  const token = getToken();
  const [vehicle, setVehicle] = useState({
    name: "",
    type: "",
    category: "",
    transmission_type: "",
    passenger_capacity: 0,
    price: 0,
    image: "",
    status: "Ready",
    air_conditioner: false,
    doors: 0,
  });

  const handleCreate = async() => {
    try {
      const formData = new FormData();

      // Append other fields to FormData
      formData.append("name", vehicle.name);
      formData.append("type", vehicle.type);
      formData.append("category", vehicle.category);
      formData.append("transmission_type", vehicle.transmission_type);
      formData.append("passenger_capacity", vehicle.passenger_capacity);
      formData.append("price", vehicle.price);
      formData.append("air_conditioner", vehicle.air_conditioner === "Yes" ? "True" : "False");
      formData.append("doors", vehicle.doors);
  
      // Append the file to FormData
      if (vehicle.image) {
        formData.append("image", vehicle.image);
      }
      
      await axiosInstance.post("/vehicles", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`,
        },
      });

      navigate("/admin/product");
  
    } catch (error) {
      console.log(error);
      alert("Error: " + error.message)
    }
   
  };

  return (
    <div className="max-w-4xl mx-auto p-6 border rounded shadow">
      <h2 className="text-2xl font-semibold mb-6">Create Vehicle</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block font-medium">Name:</label>
          <input
            type="text"
            value={vehicle.name}
            onChange={(e) => setVehicle({ ...vehicle, name: e.target.value })}
            className="border p-2 w-full rounded mt-1  border-gray-500"
          />
        </div>
        <div>
          <label className="block font-medium">Category:</label>
          <select
            value={vehicle.category}
            onChange={(e) => setVehicle({ ...vehicle, category: e.target.value })}
            className="border p-2 w-full rounded mt-1 border-gray-500"
          >
            <option value="" disabled>Select Type</option>
            <option value="Mobil">Mobil</option>
            <option value="Motor">Motor</option>
          </select>
        </div>
        <div>
          <label className="block font-medium">Type:</label>
          <select
            value={vehicle.type}
            onChange={(e) => setVehicle({ ...vehicle, type: e.target.value })}
            className="border p-2 w-full rounded mt-1 border-gray-500"
          >
            <option value="" disabled>Select Category</option>
            <option value="luxuryCar">Luxury Cat</option>
            <option value="cityCar">City Car</option>
            <option value="mpv">MPV</option>
            <option value="twoWheelers">Two Wheelers</option>
          </select>
        </div>
        <div>
          <label className="block font-medium">Transmission Type:</label>
          <select
            value={vehicle.transmission_type}
            onChange={(e) =>
              setVehicle({ ...vehicle, transmission_type: e.target.value })
            }
            className="border p-2 w-full rounded mt-1 border-gray-500"
          >
            <option value="" disabled>Select Transmission Type</option>
            <option value="Auto">Auto</option>
            <option value="Ganda">Ganda</option>
            <option value="Manual">Manual</option>
          </select>
        </div>
        <div>
          <label className="block font-medium">Passenger Capacity:</label>
          <input
            type="number"
            value={vehicle.passenger_capacity}
            onChange={(e) =>
              setVehicle({
                ...vehicle,
                passenger_capacity: parseInt(e.target.value),
              })
            }
            className="border p-2 w-full rounded mt-1 border-gray-500"
          />
        </div>
        <div>
          <label className="block font-medium">Price:</label>
          <input
            type="number"
            value={vehicle.price}
            onChange={(e) =>
              setVehicle({ ...vehicle, price: parseInt(e.target.value) })
            }
            className="border p-2 w-full rounded mt-1 border-gray-500"
          />
        </div>
        <div>
          <label className="block font-medium">Doors:</label>
          <input
            type="number"
            value={vehicle.doors}
            onChange={(e) =>
              setVehicle({ ...vehicle, doors: parseInt(e.target.value) })
            }
            className="border p-2 w-full rounded mt-1 border-gray-500"
          />
        </div>
        <div>
          <label className="block font-medium">Air Conditioner:</label>
            <select
            value={vehicle.air_conditioner}
            onChange={(e) =>
              setVehicle({ ...vehicle, transmission_type: e.target.value })
            }
            className="border p-2 w-full rounded mt-1 border-gray-500"
          >
            <option value="" disabled>Air Conditioner</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div>
          <label className="block font-medium">Image:</label>
          <input
            type="file"
            onChange={(e) => setVehicle({ ...vehicle, image: e.target.files[0] })}
            className="border p-2 w-full rounded mt-1 "
          />
        </div>
      </div>
      <div className="mt-6">
        <ButtonCRUD
          action="create"
          onClick={() => handleCreate()}
          className="w-full mt-6"
        />
      </div>
    </div>
  )
};

export default ProductAdd;
