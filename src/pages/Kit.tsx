import {
  Card,
  Input,
  Button,
} from '@nextui-org/react';
import "react-image-gallery/styles/css/image-gallery.css";

import {
  Link,
} from 'react-router-dom';

import React, { useState } from 'react';

import HorizontalScrollContainer from '../components/HorizontalScrollContainer';
import KitItem from '../components/KitItem';
import authStore from '../stores/auth';

//const placeholderImg = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.HXjrN7E_oEQ9on8xHGHjLwHaHa%26pid%3DApi&f=1&ipt=9ff9061ca922299577b2f8941947852dca5eb27216a9a91c7c3667ce29470edc&ipo=images'

export default function Kit({kitEscolhid}: any) {

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
            image: 'https://images.petz.com.br/fotos/1618341725333.jpg',
            maxQuantity: 2000,
            minQuantity: 0,
            quantity: 1,
            description: 'O adubo é essencial para enriquecer o solo com os nutrientes necessários para o desenvolvimento inicial das plantas. Ele ajuda a melhorar a estrutura do solo e a retenção de umidade, proporcionando um ambiente adequado para as raízes.'
          },
          {
            name: 'Calcário',
            image: 'https://cobasi.vteximg.com.br/arquivos/ids/178912-368-368/Calcario-Dolomitico-3kg-Faixa-B-Dimy.jpg?v=638134675686700000',
            maxQuantity: 1000,
            minQuantity: 0,
            quantity: 1,
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
            image: 'https://www.instaagro.com/media/catalog/product/s/e/sementes-de-tomate-salada-ind.-h_brido-serato-f1-topseed-premium---1mx.jpg?width=614&height=614&store=default&image-type=image',
            maxQuantity: 1000,
            minQuantity: 0,
            quantity: 5,
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
            image: 'https://http2.mlstatic.com/D_NQ_NP_832971-MLB70889911211_082023-O.webp',
            maxQuantity: 1000,
            minQuantity: 0,
            quantity: 1,
            description: 'O fertilizante NPK fornece nitrogênio, fósforo e potássio, elementos essenciais para o crescimento das plantas. Ele auxilia no desenvolvimento das raízes, flores e frutos, promovendo uma colheita abundante.'
          },
          {
            name: 'Inseticida orgânico',
            image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTArK9YrTjcbDth2TmlGtXDMpC0L8dNdCAFdR_CupCX4adyNA0Y9Lz8CKfjEszhH3aoQokYpPjkRISijwu4SYGhv1zR6vAta22Tqi8ULxzDBJm3-jbQnG83jA&usqp=CAE',
            maxQuantity: 1000,
            minQuantity: 0,
            quantity: 1,
            description: 'Os insumos contra pragas ajudam a proteger as plantas de tomate contra insetos e doenças, mantendo-as saudáveis durante o crescimento. Esses produtos são essenciais para evitar perdas de produtividade.'
          },
        ],
        description: 'Crescimento e manutenção: aplicar fertilizantes e controlar pragas durante o crescimento das plantas.',
        importance: 'Nesta fase, o fornecimento de nutrientes e o controle de pragas são fundamentais para garantir o desenvolvimento saudável das plantas e a produção de frutos de qualidade.',
      },
    ],
  }
  
  const [area, setArea] = useState(0);
  const [kitState, setKitState] = useState(kit);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleAreaChange = (e: React.ChangeEvent<HTMLInputElement>) => {  
    const value = parseFloat(e.target.value);
    setArea(isNaN(value) ? 0 : value);
  };

  const handleAreaOnClick = () => {
    if (isNaN(area) || area <= 0) {
      console.error("Por favor, insira uma área válida.");
      return;
    }

    const updatedKit = updateProductQuantities(kit, area);
    setKitState(updatedKit);

  
    console.log(kitState);
  };

  const handleOrderCreation = async () => {
    try {
      // Desabilita o botão
      setIsButtonDisabled(true);
  
      // Recupera o usuário atual
      const currentUser = authStore.getState().user;
  
      // Adiciona o usuário ao payload
      const payload = {
        user: currentUser, // Adiciona o usuário ao payload
        kit: kitState,     // Inclui o kit atualizado
      };
  
      const response = await fetch("https://hook.us1.make.com/x21rauxw2ib2buhyrlmpvfwo8c4t4fo8", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload), // Envia o payload completo
      });
  
      if (!response.ok) {
        throw new Error(`Erro ao criar pedido: ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log("Pedido criado com sucesso:", data);
    } catch (error) {
      console.error("Erro ao criar pedido:", error);
    } finally {
      // Reabilita o botão após 10 segundos
      setTimeout(() => {
        setIsButtonDisabled(false);
      }, 10000);
    }
  };
  

  function updateProductQuantities(kit: any, multiplier: number) {
    return {
      ...kit,
      stages: kit.stages.map((stage: any) => ({
        ...stage,
        products: stage.products.map((product: any) => ({
          ...product,
          quantity: Math.ceil(product.quantity * 1.2 * multiplier),
        })),
      })),
    };
  }

  return (
  <div className="justify-center items-center w-full p-4">
    <div className="md:max-w-[80%] mx-auto relative px-8 sm:px-16 py-6 group">
      <h1 className="font-bold text-2xl text-primary drop-shadow-xl">
        {kitState.name}
      </h1>
      <p className="mt-2 text-slate-600 text-justify">
        {kitState.description}
      </p>
      
      <br></br><br></br>

      <h1 className="mb-10 font-bold text-2xl text-slate-700 drop-shadow-xl">
          Nos dê alguns detalhes e inicie agora a sua compra!
      </h1>
        
      <Input
          label={<h1 className="font-semibold text-slate-600">Área de plantio em m²:</h1>}
          labelPlacement="outside"
          placeholder="Área em m²"
          color="secondary"
          variant="bordered"
          className="md:max-w-[50%]"
          onChange={handleAreaChange}
      />

      <Button
          className="mt-16 p-6 uppercase tracking-wide w-full font-semibold text-base bg-gradient-to-tr from-primary to-secondary"
          color="primary"
          size="lg"
          onClick={handleAreaOnClick}
        >
          Calcular quantidade ideais
      </Button>

    </div>

    <div key={JSON.stringify(kitState)}>
      {kitState.stages.map((stage) => (
        <div
          key={stage.id}
          className="md:max-w-[80%] mx-auto relative pl-8 sm:pl-24 py-6 group"
        >
          <div className="font-caveat font-medium text-2xl text-primary mb-1 sm:mb-0">
            {stage.name}
          </div>
          <div className="flex flex-col sm:flex-row items-start mb-1">
            <div className="text-xl font-semibold text-slate-600">
              {stage.description}
            </div>
          </div>
          <div className="text-slate-500">{stage.importance}</div>
          <HorizontalScrollContainer>
            {stage.products.map((product, index) => (
              <KitItem key={index} product={{ ...product }} />
            ))}
          </HorizontalScrollContainer>
        </div>
      ))}
    </div>




    <Card className="bg-slate-100 flex flex-col items-center justify-center md:max-w-[80%] mx-auto mt-10 mb-10">
      <div className="flex flex-col h-full p-5 md:p-10 items-center text-center">
        <h1 className="mt-8 mb-6 font-bold text-xl text-slate-700">
          Já escolheu os produtos? Agora clique abaixo para realizar o pedido!
        </h1>
        <div className="flex justify-center w-full">
          <Button
            className="mt-16 p-6 uppercase tracking-wide w-full font-semibold text-base bg-gradient-to-tr from-primary to-secondary"
            color="primary"
            size="lg"
            onClick={handleOrderCreation}
            disabled={isButtonDisabled}
          >
            <Link to={'/user'}>
              Iniciar Compra
            </Link>
          </Button>
        </div>
      </div>
    </Card>


  </div>
  );
}
