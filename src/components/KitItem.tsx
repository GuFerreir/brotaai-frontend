import React, {
  ChangeEvent,
  useState,
} from 'react';
import {
  Button,
  Image,
  Input,
} from '@nextui-org/react';
import {
  FaPlus,
  FaMinus,
} from "react-icons/fa";

type Product = {
  name: string;
  image: string;
  maxQuantity: number;
  minQuantity: number;
};

type KitItemProps = {
  product: Product;
};

export default function TimelineLayout({ product }: KitItemProps) {
  const [quantity, setQuantity] = useState(product.minQuantity);
  
  const handleUpdate = (value: number) => {
    if (value > product.maxQuantity) {
      setQuantity(product.maxQuantity);
      return;
    }
    if (value < product.minQuantity) {
      setQuantity(product.minQuantity);
      return;
    }

    setQuantity(value);
  }

  const handleTextUpdate = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { value } = e.target;

    const number = Number.parseInt(value);

    if (!number) return

    handleUpdate(number);
  }

  return (
    <div className="flex-shrink-0 justify-center w-40">
      <div className="p-0">
        <Image
          className="rounded-full w-40 h-40 drop-shadow-xl"
          src={product.image}
          alt="Produto"
        />
      </div>
      <div className="mt-4 text-center">
        <div className="flex justify-center mb-2">
          <Button
            color="secondary"
            size="sm"
            variant="ghost"
            isIconOnly
            isDisabled={quantity === product.minQuantity}
            onClick={() => handleUpdate(quantity - 1)}
          >
            <FaMinus />
          </Button>
          <Input
            className="mx-2 text-bold w-16"
            value={quantity.toString()}
            size="sm"
            color="secondary"
            variant="bordered"
            onChange={handleTextUpdate}
            />
          <Button
            color="secondary"
            size="sm"
            variant="ghost"
            isIconOnly
            isDisabled={quantity === product.maxQuantity}
            onClick={() => handleUpdate(quantity + 1)}
          >
            <FaPlus />
          </Button>
        </div>
        <p className="text-lg font-semibold">
          {product.name}
        </p>
      </div>
    </div>
  );
}

