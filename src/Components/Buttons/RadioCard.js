import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import "./Button.css";

export function RadioCard({ variants, onChange }) {
  const [selectedVariant, setSelectedVariant] = useState(variants[0]?.value || "");

  const handleChange = (variant) => {
    setSelectedVariant(variant);
    onChange(variant);
  };

  const variantValues = Object.values(variants);

  return (
    <RadioGroup
      className="d-flex pt-2 cursor-pointer"
      value={selectedVariant}
      onChange={handleChange}
    >
      {variantValues.map((variant, index) => (
        <RadioGroup.Option value={variant.value} key={index}>
          {({ checked }) => (
            <span
              className={`${
                checked ? "active-tab" : "unactive-tab"
              } tab-btn-style`}
              onClick={() => handleChange(variant)}
            >
              {variant.value}
            </span>
          )}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  );
}