import React from "react";
import { Select } from "antd";

function MultiSelect() {
  const options = [
    { value: 1, label: "Pokiza" },
    { value: 2, label: "Nasiya savdo 1" },
    { value: 3, label: "Nasiya savdo 2" },
    { value: 4, label: "Nasiya savdo 3" },
  ];

  const handleChange = (value) => {
    let mass = [];
    mass = [...mass,value]
    console.log(`selected ${mass}`);
  };
  return (
    <Select
      className="user_input_field"
      mode="tags"
      placeholder="Ruhsat etilgan filiallar"
      onChange={handleChange}
      options={options}
    />
  );
}

export default MultiSelect;
