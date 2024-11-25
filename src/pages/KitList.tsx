import React, { useState, useEffect } from 'react';
import {
  Link,
} from 'react-router-dom';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Image,
} from '@nextui-org/react';


function KitList() {
  const kitsList = [
    {
      id: 1,
      nome: 'Kit Tomate Salada',
      descricao: 'Compre o que você precisa para um cultivo saudável e lucrativo!',
      price: 100,
      imagemUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhortas.info%2Fsites%2Fdefault%2Ffiles%2Ffield%2Fimagens%2Ftomate%2Ftomate002.jpg&f=1&nofb=1&ipt=d52bca741c32ed08bad48024152cfcbfe938ce871c38b6d428dfc7b7b5bc7710&ipo=images',
    },
  ]

  const handleAreaOnClick = async () => {
    try {
      const response = await fetch("http://localhost:8080/kits", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error(`Erro ao criar pedido: ${response.statusText}`);
      }
  
      const allKits = await response.json();
      console.log("Kits encontrados:", allKits);
      setKitsListState(allKits);
    } catch (error) {
      console.error("Erro ao buscar kits:", error);
    }
  };
  useEffect(() => {
    handleAreaOnClick();
  }, []);

  const [kitsListState, setKitsListState] = useState(kitsList);

  return (
    <div className="grid grid-cols-1 w-full p-4" key={JSON.stringify(kitsListState)}>
      {kitsList.map((kit) => (
      <div
        key={kit.id}
        className="flex col-span-1 w-full justify-center items-center"
      >
        <Card
          className="grow text-center h-72 md:h-56 m-4 max-w-screen-md outline outline-primary"
        >
          <CardBody className="absolute z-20 top-1">
            <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md-gap-6 items-center justify-center">
              <div className="col-span-6">
                <p className="text-2xl mt-2 ml-3 font-semibold text-white">
                  {kit.descricao}
                </p>
              </div>
            </div>
          </CardBody>
          <CardFooter className="flex absolute z-20 bottom-0 border-t-1 border-default-600 dark:border-default-100 backdrop-blur-sm">
            <div className="flex flex-grow gap-2 flex-col md:flex-row items-right">
              <div className="flex flex-col w-full text-base font-bold text-white text-right md:text-center">
                {kit.nome}
              </div>
              <div className="flex flex-col md:flex-0">
                <Button
                  className="md:px-10 tracking-wide bg-gradient-to-tr from-secondary to-primary text-white font-bold text-base shadow-lg"
                  size="sm"
                >
                  <Link to={'/kit'}>
                    Clique para saber mais!
                  </Link>
                </Button>
              </div>
            </div>
          </CardFooter>
          <div className="z-10 absolute inset-0 bg-gradient-to-r from-primary to-transparent"></div>
          <Image
            removeWrapper
            alt="kit cover"
            className="z-0 w-full min-h-full object-cover"
            src={kit.imagemUrl}
          />
        </Card>
        </div>
      ))}
    </div>
  );
}

export default KitList;
