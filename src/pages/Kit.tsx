import {
  Card,
  Input,
  Button,
} from '@nextui-org/react';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import HorizontalScrollContainer from '../components/HorizontalScrollContainer';
import KitItem from '../components/KitItem';

const placeholderImg = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.HXjrN7E_oEQ9on8xHGHjLwHaHa%26pid%3DApi&f=1&ipt=9ff9061ca922299577b2f8941947852dca5eb27216a9a91c7c3667ce29470edc&ipo=images'

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

const kit = {
  id: 1,
  name: 'Kit para cultivar Tomate',
  description: 'Conheça o nosso Kit Completo para Cultivo de Tomate, pensado especialmente para atender todas as suas necessidades ao longo das etapas de produção. Desde as sementes até a colheita, oferecemos uma seleção de produtos essenciais para o preparo do solo, adubação, irrigação, controle de pragas e doenças, além de soluções específicas para o desenvolvimento saudável dos tomates. Facilite o seu cultivo com produtos de qualidade e tenha tudo o que precisa em um só lugar. Nosso kit proporciona praticidade e eficiência, garantindo que você tenha os melhores resultados em cada fase do processo.',
  stages: [
    {
      id: 1,
      name: 'Etapa 1',
      products: [
        {
          name: 'Adubo',
          image: placeholderImg,
          maxQuantity: 20,
          minQuantity: 5,
          description: 'O adubo é essencial para enriquecer o solo com os nutrientes necessários para o desenvolvimento inicial das plantas. Ele ajuda a melhorar a estrutura do solo e a retenção de umidade, proporcionando um ambiente adequado para as raízes.'
        },
        {
          name: 'Calcário',
          image: placeholderImg,
          maxQuantity: 10,
          minQuantity: 2,
          description: 'O calcário é utilizado para corrigir a acidez do solo, garantindo um pH adequado para o cultivo de tomate. Esse ajuste permite que as plantas absorvam melhor os nutrientes e cresçam de forma saudável.'
        },
      ],
      description: 'Preparação do solo: arar o terreno e aplicar corretivos e fertilizantes.',
      importance: 'Esta etapa é crucial para garantir que o solo tenha os nutrientes e o pH adequados para o crescimento saudável das plantas de tomate.',
    },
    {
      id: 2,
      name: 'Etapa 2',
      products: [
        {
          name: 'Sementes de tomate',
          image: placeholderImg,
          maxQuantity: 100,
          minQuantity: 30,
          description: 'As sementes de tomate de alta qualidade garantem o início do cultivo com plantas saudáveis e vigorosas. É importante escolher sementes certificadas para assegurar a uniformidade e a produtividade do plantio.'
        },
      ],
      description: 'Plantio: semear as sementes de tomate, garantindo espaçamento adequado e irrigação.',
      importance: 'O plantio adequado, com espaçamento correto e irrigação regular, é essencial para garantir o crescimento uniforme e evitar competição entre as plantas.',
    },
    {
      id: 3,
      name: 'Etapa 3',
      products: [
        {
          name: 'Fertilizante NPK',
          image: placeholderImg,
          maxQuantity: 10,
          minQuantity: 2,
          description: 'O fertilizante NPK fornece nitrogênio, fósforo e potássio, elementos essenciais para o crescimento das plantas. Ele auxilia no desenvolvimento das raízes, flores e frutos, promovendo uma colheita abundante.'
        },
        {
          name: 'Insumos contra pragas',
          image: placeholderImg,
          maxQuantity: 10,
          minQuantity: 2,
          description: 'Os insumos contra pragas ajudam a proteger as plantas de tomate contra insetos e doenças, mantendo-as saudáveis durante o crescimento. Esses produtos são essenciais para evitar perdas de produtividade.'
        },
        {
          name: 'Insumos contra pragas',
          image: placeholderImg,
          maxQuantity: 10,
          minQuantity: 2,
          description: 'Os insumos contra pragas ajudam a proteger as plantas de tomate contra insetos e doenças, mantendo-as saudáveis durante o crescimento. Esses produtos são essenciais para evitar perdas de produtividade.'
        },
        {
          name: 'Insumos contra pragas',
          image: placeholderImg,
          maxQuantity: 10,
          minQuantity: 2,
          description: 'Os insumos contra pragas ajudam a proteger as plantas de tomate contra insetos e doenças, mantendo-as saudáveis durante o crescimento. Esses produtos são essenciais para evitar perdas de produtividade.'
        },
        {
          name: 'Insumos contra pragas',
          image: placeholderImg,
          maxQuantity: 10,
          minQuantity: 2,
          description: 'Os insumos contra pragas ajudam a proteger as plantas de tomate contra insetos e doenças, mantendo-as saudáveis durante o crescimento. Esses produtos são essenciais para evitar perdas de produtividade.'
        },
        {
          name: 'Insumos contra pragas',
          image: placeholderImg,
          maxQuantity: 10,
          minQuantity: 2,
          description: 'Os insumos contra pragas ajudam a proteger as plantas de tomate contra insetos e doenças, mantendo-as saudáveis durante o crescimento. Esses produtos são essenciais para evitar perdas de produtividade.'
        },
        {
          name: 'Insumos contra pragas',
          image: placeholderImg,
          maxQuantity: 10,
          minQuantity: 2,
          description: 'Os insumos contra pragas ajudam a proteger as plantas de tomate contra insetos e doenças, mantendo-as saudáveis durante o crescimento. Esses produtos são essenciais para evitar perdas de produtividade.'
        },
        {
          name: 'Insumos contra pragas',
          image: placeholderImg,
          maxQuantity: 10,
          minQuantity: 2,
          description: 'Os insumos contra pragas ajudam a proteger as plantas de tomate contra insetos e doenças, mantendo-as saudáveis durante o crescimento. Esses produtos são essenciais para evitar perdas de produtividade.'
        },
      ],
      description: 'Crescimento e manutenção: aplicar fertilizantes e controlar pragas durante o crescimento das plantas.',
      importance: 'Nesta fase, o fornecimento de nutrientes e o controle de pragas são fundamentais para garantir o desenvolvimento saudável das plantas e a produção de frutos de qualidade.',
    },
  ],
}

export default function Kit() {
  return (
  <div className="justify-center items-center w-full p-4">
    <div className="md:max-w-[80%] mx-auto relative px-8 sm:px-16 py-6 group">
      <h1 className="font-bold text-2xl text-primary drop-shadow-xl">
        {kit.name}
      </h1>
      <p className="mt-2 text-slate-600 text-justify">
        {kit.description}
      </p>
    </div>
    {kit.stages.map((stage) => (
      <div
        key={stage.id}
        className="md:max-w-[80%] mx-auto relative pl-8 sm:pl-24 py-6 group"
      >
        <div className="font-caveat font-medium text-2xl text-primary mb-1 sm:mb-0">
          {stage.name}
        </div>
        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[3.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-secondary after:border-4 after:box-content after:border-slate-100 after:rounded-full sm:after:ml-[3.5rem] after:-translate-x-1/2">
          <div className="text-xl font-semibold text-slate-600">
            { stage.description }
          </div>
        </div>
        <div className="text-slate-500">
          { stage.importance }
        </div>
        <HorizontalScrollContainer>
          {stage.products.map((product, index) => (
            <KitItem
              key={index}
              product={product}
            />
          ))}
        </HorizontalScrollContainer>
      </div>
    ))}
    <Card className="bg-slate-100 flex-row md:max-w-[80%] grid grid-cols-1 xl:grid-cols-2 mx-auto mt-10 mb-10">
      <div className="col-span-1 p-5 md:p-10">
        <Card
          className="bg-slate-100 xl:h-[600px]"
          isBlurred={true}
          shadow="none"
        >
        <ImageGallery
          items={images}
          showFullscreenButton={false}
          showPlayButton={false}
        />
        </Card>
      </div>
      <div className="flex flex-col h-full p-5 md:p-10">
        <h1 className="mb-10 font-bold text-2xl text-slate-700 drop-shadow-xl">
          Nos dê alguns detalhes e inicie agora a sua compra!
        </h1>
        <Input
          label={<h1 className='font-semibold text-slate-600'>
            Área de plantio de Tomate:
              </h1>}
          labelPlacement="outside"
          placeholder="Área em m²"
          color="secondary"
          variant="bordered"
          className="md:max-w-[50%]"
          />
        <h1 className="mt-8 mb-6 font-bold text-xl text-slate-700">
          Já possui um grupo?
        </h1>
        <Input
          label={<h1 className='font-semibold text-slate-600'>
            Código:
              </h1>}
          labelPlacement="outside"
          placeholder="Código de grupo existente"
          color="secondary"
          variant="bordered"
          className="md:max-w-[50%]"
          />
        <div className="flex-grow"></div>
        <div className="flex justify-center">
          <Button
            className="mt-16 p-6 uppercase tracking-wide w-full font-semibold text-base bg-gradient-to-tr from-primary to-secondary"
            color="primary"
            size="lg"
          >
             Iniciar Compra
         </Button>
       </div>
      </div>
    </Card>
  </div>
  );
}
