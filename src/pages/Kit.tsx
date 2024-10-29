import HorizontalScrollContainer from '../components/HorizontalScrollContainer';
import KitItem from '../components/KitItem';

const placeholderImg = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.HXjrN7E_oEQ9on8xHGHjLwHaHa%26pid%3DApi&f=1&ipt=9ff9061ca922299577b2f8941947852dca5eb27216a9a91c7c3667ce29470edc&ipo=images'

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
        },
        {
          name: 'Calcário',
          image: placeholderImg,
          maxQuantity: 10,
          minQuantity: 2,
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
        },
        {
          name: 'Insumos contra pragas',
          image: placeholderImg,
          maxQuantity: 10,
          minQuantity: 2,
        },
        {
          name: 'Insumos contra pragas',
          image: placeholderImg,
          maxQuantity: 10,
          minQuantity: 2,
        },
        {
          name: 'Insumos contra pragas',
          image: placeholderImg,
          maxQuantity: 10,
          minQuantity: 2,
        },
        {
          name: 'Insumos contra pragas',
          image: placeholderImg,
          maxQuantity: 10,
          minQuantity: 2,
        },
        {
          name: 'Insumos contra pragas',
          image: placeholderImg,
          maxQuantity: 10,
          minQuantity: 2,
        },
        {
          name: 'Insumos contra pragas',
          image: placeholderImg,
          maxQuantity: 10,
          minQuantity: 2,
        },
        {
          name: 'Insumos contra pragas',
          image: placeholderImg,
          maxQuantity: 10,
          minQuantity: 2,
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
        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[3.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-secondary after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[3.5rem] after:-translate-x-1/2 after:translate-y-1.5">
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
  </div>
  );
}
