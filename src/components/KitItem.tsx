import React, {
  ChangeEvent,
  useState,
} from 'react';
import {
  Badge,
  Button,
  Image,
  Input,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from '@nextui-org/react';
import {
  FaPlus,
  FaMinus,
  FaInfo,
} from "react-icons/fa";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

type Product = {
  name: string;
  image: string;
  maxQuantity: number;
  minQuantity: number;
  quantity: number;
  description: string;
};

type KitItemProps = {
  product: Product;
};

const images = [
  {
    original: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.JKUuLwqaQZChQAc6apfUOAHaE9%26pid%3DApi&f=1&ipt=e0f367603b91519d8322c7e1be117993fcff5ca3f71c7ed374bf9485e0c7b76a&ipo=images',
    thumbnail: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.JKUuLwqaQZChQAc6apfUOAHaE9%26pid%3DApi&f=1&ipt=e0f367603b91519d8322c7e1be117993fcff5ca3f71c7ed374bf9485e0c7b76a&ipo=images',
  },
  {
    original: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.dYHjcbeSsSuvf-V3wMuqEwHaFA%26pid%3DApi&f=1&ipt=751f7b6424e901e22133665047b9fb279c70beddf7265ff867b192f9eacdd6e7&ipo=images',
    thumbnail: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.dYHjcbeSsSuvf-V3wMuqEwHaFA%26pid%3DApi&f=1&ipt=751f7b6424e901e22133665047b9fb279c70beddf7265ff867b192f9eacdd6e7&ipo=images',
  },
  {
    original: 'https://www.portaldoagronegocio.com.br/storage/images/notices/631e71be79c50.jpg',
    thumbnail: 'https://www.portaldoagronegocio.com.br/storage/images/notices/631e71be79c50.jpg',
  },
];


export default function TimelineLayout({ product }: KitItemProps) {
  const [quantity, setQuantity] = useState(product.quantity);
  const { isOpen, onOpen, onClose } = useDisclosure();
  
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
      <div
        className="p-0 cursor-pointer"
        onClick={onOpen}
      >
        <Badge
          content={<FaInfo />}
          color="primary"
          shape="circle"
          isOneChar
          size='lg'
        >
          <Image
            className="rounded-full w-40 h-40 drop-shadow-xl"
            src={product.image}
            alt="Produto"
          />
        </Badge>
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
      <Modal
        size="xl"
        isOpen={isOpen}
        onClose={onClose}
        backdrop="blur"
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader
                className="flex flex-col gap-1 font-bold text-xl text-primary"
              >
                {product.name}
              </ModalHeader>
              <ModalBody className="mb-8">
              <ImageGallery
                items={images}
                showFullscreenButton={false}
                showPlayButton={false}
                />
                <p>
                  {product.description}
                </p>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

