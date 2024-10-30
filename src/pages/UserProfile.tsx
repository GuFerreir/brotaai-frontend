import React, { useState } from 'react';
import {
  Button,
  Card,
  Avatar,
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
} from '@nextui-org/react';
import {
  FaEdit,
  FaMapMarkerAlt,
  FaEnvelope,
  FaUser,
} from 'react-icons/fa';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const userKits = [
  {
    id: 1,
    name: 'kit para cultivo de tomate',
    groupCode: '123246548',
    status: 'Em aberto',
    images: ['https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhortas.info%2Fsites%2Fdefault%2Ffiles%2Ffield%2Fimagens%2Ftomate%2Ftomate002.jpg&f=1&nofb=1&ipt=d52bca741c32ed08bad48024152cfcbfe938ce871c38b6d428dfc7b7b5bc7710&ipo=images'],
  },
  {
    id: 2,
    name: 'kit para cultivo de alface',
    groupCode: '987654321',
    status: 'Em andamento',
    images: ['https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.-AhTOXzWHFZtuUX41mnoLQHaFj%26pid%3DApi&f=1&ipt=5669fff2d24a31203d5aa1768b8a2fae306d911275d4642ef28eb4741207843d&ipo=images'],
  },
  {
    id: 3,
    name: 'kit para cultivo de cenoura',
    groupCode: '456789123',
    status: 'Concluído',
    images: ['https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.BleIICzuhyb9SpN6JHveRAHaFj%26pid%3DApi&f=1&ipt=7216b2ff2ce4d076324e3e2c08df09e4c95777d921b8095d30e6c43b9cdd7403&ipo=images'],
  },
]

const UserInfo = () => {
  return (
    <Card
      className="p-8 mt-6"
      radius="lg"
    >
      <div>
        <div className="flex flex-row justify-between">
          <h4 className="text-slate-800 text-lg font-semibold">
            Informações Pessoais
          </h4>
          <Button
            startContent={<FaEdit/>}
            color="primary"
            variant='ghost'
          >
            Editar dados
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex items-center mb-2 mt-2">
            <FaUser className="text-secondary mr-2 text-xl" />
            <p>Nome Completo do Usuário</p>
          </div>
          <div className="flex items-center mb-2">
            <FaMapMarkerAlt className="text-secondary mr-2 text-xl" />
            <p>Rua de São Paulo, nº 0 - São Paulo, SP 00000-000</p>
          </div>
          <div className="flex items-center mb-2">
            <FaEnvelope className="text-secondary mr-2 text-xl" />
            <p>email@usp.br</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

type PurchaseGroupsProps = {
  setSelectedKit: (kit: UserKit) => void,
  openModal: () => void,
};

const PurchaseGroups = ({ setSelectedKit, openModal }: PurchaseGroupsProps) => {
  const handleClick = (kit: UserKit) => {
    setSelectedKit(kit)
    openModal()
  }
  return (
    <div className="mt-10">
      <h4 className="ml-6 text-2xl font-bold text-primary drop-shadow-lg">
        Grupos de compra:
      </h4>
      <div className="grid grid-cols-1 gap-4 mt-6 mb-10">
        {userKits.map(kit => (
          <Card
            key={kit.id}
            className="p-4"
            radius="lg"
          >
            <div className="flex md:flex-row flex-col justify-between items-center">
              <div className="flex md:flex-row flex-col">
                <div className="flex justify-center">
                  <Avatar
                    src={kit.images[0]}
                    className="w-20 h-20 text-large md:mr-6"
                    radius="sm"
                    isBordered
                    color="secondary"
                  />
                </div>
                <div className='flex flex-col md:mt-0 mt-4'>
                  <p className="capitalize mb-2 font-bold text-xl text-primary">
                    {kit.name}
                  </p>
                  <div className="text-sm flex flex-row">
                    <h1 className="font-bold mr-1 text-gray-900">
                      Codigo:
                    </h1>
                    {kit.groupCode}
                  </div>
                  <div className="text-sm flex flex-row">
                    <h1 className="font-bold mr-1 text-gray-900">
                      Status do pedido:
                    </h1>
                    {kit.status}
                  </div>
                </div>
              </div>
              <Button
                size="lg"
                color="primary"
                className="font-semibold md:mt-0 mt-6 md:mr-4"
                onClick={() => handleClick(kit)}
              >
                Acessar Detalhes
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

type UserKit = {
  id: number,
  name: string,
  groupCode: string,
  status: string,
  images: string[],
};

type UserKitModalProps = {
  userKit: UserKit,
  disclosure: {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
  },
};

const UserKitModal = ({ userKit, disclosure }: UserKitModalProps) => {
  const { isOpen, onClose } = disclosure;

  const statusList = [
    {
      name: 'Pedido Realizado',
      date: '10/10/2024',
      description: 'Seu pedido foi realizado com sucesso e está em processamento.',
    },
    {
      name: 'Pagamento Confirmado',
      date: '11/10/2024',
      description: 'O pagamento foi confirmado. Estamos preparando seu kit para envio.',
    },
    {
      name: 'Pedido Enviado',
      date: '13/10/2024',
      description: 'Seu pedido foi enviado e está a caminho do endereço de entrega.',
    },
    {
      name: 'Pedido Entregue',
      date: '15/10/2024',
      description: 'Seu kit foi entregue com sucesso no endereço indicado.',
    },
  ];


  const images = userKit.images.map((url) => {
    return {
      original: url,
      thumbnail: url,
    }
  })

  return (
    <Modal
      size="5xl"
      isOpen={isOpen}
      onClose={onClose}
      backdrop="blur"
      scrollBehavior="inside"
    >
      <ModalContent>
        {() => (
          <>
            <ModalBody className="mb-8">
              <div className="flex-row grid grid-cols-1 xl:grid-cols-2 mx-auto">
                <div className="col-span-1 p-5 md:p-10">
                  <Card shadow="none">
                    <ImageGallery
                      items={images}
                      showFullscreenButton={false}
                      showPlayButton={false}
                    />
                  </Card>
                </div>
                <div className="flex flex-col h-full p-5 md:p-10">
                  <h1 className="mb-5 font-bold text-2xl text-primary drop-shadow-xl capitalize">
                    {userKit.name}
                  </h1>
                  <div className='flex flex-col md:mt-0 mt-4'>
                    <div className="text-sm flex flex-row">
                      <h1 className="font-bold mr-1 text-gray-900">
                        Codigo:
                      </h1>
                      {userKit.groupCode}
                    </div>
                    <div className="text-sm flex flex-row">
                      <h1 className="font-bold mr-1 text-gray-900">
                        Centro de distribuição:
                      </h1>
                      {userKit.status}
                    </div>
                    <div className="text-sm flex flex-row">
                      <h1 className="font-bold mr-1 text-gray-900">
                        Status do pedido:
                      </h1>
                      {userKit.status}
                    </div>
                  </div>
                  <div className="flex-grow"></div>
                  <div className="mt-4 flex flex-col justify-center">
                    <Button
                      className="p-6 uppercase tracking-wide w-full font-semibold text-base bg-gradient-to-tr from-primary to-secondary"
                      color="primary"
                      size="lg"
                    >
                       Convidar para o Grupo
                   </Button>
                    <Button
                      className="mt-2 uppercase tracking-wide w-full font-semibold"
                      color="danger"
                      variant="bordered"
                      size="md"
                      isDisabled
                    >
                       Sair do Grupo
                   </Button>
                 </div>
                </div>
              </div>
              <div className="-my-6">
                {statusList.map((status) => (
                  <div className="relative pl-8 sm:pl-32 py-6 group">
                    <div className={`
                      font-caveat font-semibold drop-shadow-md text-2xl text-primary mb-1 sm:mb-0
                      ${status.name === 'Pedido Realizado' ? 'text-blue-600' : ''}
                      ${status.name === 'Pagamento Confirmado' ? 'text-primary' : ''}
                      ${status.name === 'Pedido Enviado' ? 'text-warning' : ''}
                      ${status.name === 'Pedido Entregue' ? 'text-green-400' : ''}
                    `}>
                      {status.name}
                    </div>
                    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-primary after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                      <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-white bg-gradient-to-tr from-primary to-secondary rounded-full">
                        {status.date}
                      </time>
                    </div>
                    <div className="text-slate-500">
                      {status.description}
                    </div>
                  </div>
                ))}
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

const AccountPage = () => {
  const disclosure = useDisclosure();
  const [selectedKit, setSelectedKit] = useState<UserKit>(userKits[0]);

  return (
    <div className="container mx-auto px-4 mt-10">
      <div className="flex md:flex-row flex-col text-left mb-10">
        <Avatar
          name="user"
          className="w-20 h-20 text-large ml-6 md:ml-0"
          isBordered
          color="secondary"
        />
        <div className="flex-col ml-6 mt-2">
          <h2 className="text-2xl font-bold text-slate-700">
            Olá Usuário!
          </h2>
          <p className="mt-2">
            Aqui você encontra todas as informações relacionadas a sua conta, como acompanhar seus grupos de compra, status de pedidos realizados e muito mais!
          </p>
        </div>
      </div>
      <UserInfo />
      <PurchaseGroups
        setSelectedKit={setSelectedKit}
        openModal={disclosure.onOpen}
      />
      <UserKitModal
        disclosure={disclosure}
        userKit={selectedKit}
      />

    </div>
  );
};

export default AccountPage;
