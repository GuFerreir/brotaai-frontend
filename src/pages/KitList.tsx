import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Image,
} from '@nextui-org/react';

const kitsList = [
  {
    id: 1,
    name: 'Kit 1',
    description: 'Tudo o que você precisa para um cultivo saudável e lucrativo de Tomate Salada!',
    price: 100,
    photo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhortas.info%2Fsites%2Fdefault%2Ffiles%2Ffield%2Fimagens%2Ftomate%2Ftomate002.jpg&f=1&nofb=1&ipt=d52bca741c32ed08bad48024152cfcbfe938ce871c38b6d428dfc7b7b5bc7710&ipo=images',
  },
]

function KitList() {
  return (
    <div className="flex h-screen w-full justify-center bg-slate-100 p-4">
      {kitsList.map((kit) => (
      <Card
        key={kit.id}
        className="flex-1 text-center h-56 m-4 max-w-screen-md outline-2 outline-primary"
      >
        <CardBody className="absolute z-20 top-1">
          <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md-gap-6 items-center justify-center">
            <div className="col-span-6">
              <p className="text-2xl mt-2 ml-3 font-md text-white/90">
                {kit.description}
              </p>
            </div>
          </div>
        </CardBody>
        <CardFooter className="flex absolute z-20 bottom-0 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-right">
            <div className="flex flex-col w-full text-base font-bold text-white">
              {kit.name}
            </div>
            <Button
              className="px-10 bg-gradient-to-tr from-primary to-secondary text-white font-bold text-base shadow-lg"
              size="sm"
            >Clique para saber mais!</Button>
          </div>
        </CardFooter>
        <div className="z-10 absolute inset-0 bg-gradient-to-r from-primary to-transparent"></div>
        <Image
          removeWrapper
          alt="kit cover"
          className="z-0 w-full h-full object-cover"
          src={kit.photo}
        />
      </Card>
      ))}
    </div>
  );
}

export default KitList;
