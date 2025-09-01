import type { ITreeData } from "../interfaces";

export const animalsData: ITreeData = {
  id: 'animal-classification-root-id',
  title: 'Классификация животных',
  tree: {
    val: 'Царство Животные',
    id: 'animal-kingdom-id',
    children: [
      {
        val: 'Подцарство Простейшие',
        id: 'subkingdom-protozoa-id',
        children: [
          { val: 'Тип Саркомастигофоры', id: 'type-sarcomastigophora-id', children: [] },
          { val: 'Тип Споровики (Апикомплексы)', id: 'type-apicomplexa-id', children: [] },
          { val: 'Тип Инфузории', id: 'type-ciliophora-id', children: [] }
        ]
      },
      {
        val: 'Подцарство Многоклеточные',
        id: 'subkingdom-metazoa-id',
        children: [
          {
            val: 'Тип Хордовые',
            id: 'phylum-chordata-id',
            children: [
              {
                val: 'Класс Млекопитающие',
                id: 'class-mammalia-id',
                children: [
                  { val: 'Отряд Однопроходные', id: 'order-monotremata-id' },
                  { val: 'Отряд Сумчатые', id: 'order-marsupialia-id' },
                  { val: 'Отряд Насекомоядные (Eulipotyphla)', id: 'order-eulipotyphla-id' },
                  { val: 'Отряд Рукокрылые', id: 'order-chiroptera-id' },
                  { val: 'Отряд Грызуны', id: 'order-rodentia-id' },
                  { val: 'Отряд Хищные', id: 'order-carnivora-id' },
                  { val: 'Отряд Приматы', id: 'order-primates-id' },
                  { val: 'Отряд Парнокопытные', id: 'order-artiodactyla-id' },
                  { val: 'Отряд Непарнокопытные', id: 'order-perissodactyla-id' },
                  { val: 'Отряд Хоботные', id: 'order-proboscidea-id' },
                  { val: 'Отряд Сирены', id: 'order-sirenia-id' },
                  { val: 'Отряд Трубкозубые', id: 'order-tubulidentata-id' },
                  { val: 'Отряд Панголины', id: 'order-pholidota-id' },
                  { val: 'Отряд Зайцеобразные', id: 'order-lagomorpha-id' },
                  { val: 'Отряд Даманы', id: 'order-hyracoidea-id' },
                  { val: 'Отряд Ластоногие', id: 'order-pinnipedia-id' },
                  { val: 'Отряд Австралийские сумчатые', id: 'order-australidelphia-id' },
                  { val: 'Отряд Китообразные', id: 'order-cetacea-id' },
                  { val: 'Отряд Афросорициды', id: 'order-afrosoricida-id' }
                ]
              },
              {
                val: 'Класс Птицы',
                id: 'class-aves-id',
                children: [
                  { val: 'Отряд Аистообразные', id: 'order-ciconiiformes-id' },
                  { val: 'Отряд Буревестникообразные (трубконосые)', id: 'order-procellariiformes-id' },
                  { val: 'Отряд Воробьинообразные', id: 'order-passeriformes-id' },
                  { val: 'Отряд Гагарообразные', id: 'order-gaviiformes-id' },
                  { val: 'Отряд Голубеобразные', id: 'order-columbiformes-id' },
                  { val: 'Отряд Гусеобразные', id: 'order-anseriformes-id' },
                  { val: 'Отряд Дятлообразные', id: 'order-piciformes-id' },
                  { val: 'Отряд Журавлеобразные', id: 'order-gruiformes-id' },
                  { val: 'Отряд Козодоеобразные', id: 'order-caprimulgiformes-id' },
                  { val: 'Отряд Кукушкообразные', id: 'order-cuculiformes-id' },
                  { val: 'Отряд Курообразные', id: 'order-galliformes-id' },
                  { val: 'Отряд Пеликанообразные (веслоногие)', id: 'order-pelecaniformes-id' },
                  { val: 'Отряд Пингвинообразные', id: 'order-sphenisciformes-id' },
                  { val: 'Отряд Поганкообразные', id: 'order-podicipediformes-id' },
                  { val: 'Отряд Ракшеобразные', id: 'order-coraciiformes-id' },
                  { val: 'Отряд Ржанкообразные', id: 'order-charadriiformes-id' },
                  { val: 'Отряд Рябкообразные', id: 'order-pterocliformes-id' },
                  { val: 'Отряд Совообразные', id: 'order-strigiformes-id' },
                  { val: 'Отряд Соколообразные', id: 'order-falconiformes-id' },
                  { val: 'Отряд Стрижеобразные', id: 'order-apodiformes-id' },
                  { val: 'Отряд Трогонообразные', id: 'order-trogoniformes-id' },
                  { val: 'Отряд Туракообразные', id: 'order-musophagiformes-id' },
                  { val: 'Отряд Фламингообразные', id: 'order-phoenicopteriformes-id' },
                  { val: 'Отряд Колибриобразные', id: 'order-trochiliformes-id' },
                  { val: 'Отряд Птицы-мыши', id: 'order-coliiformes-id' },
                  { val: 'Отряд Попугаеобразные', id: 'order-psittaciformes-id' },
                  { val: 'Отряд Страусообразные', id: 'order-struthioniformes-id' },
                  { val: 'Отряд Казуарообразные', id: 'order-casuariiformes-id' },
                  { val: 'Отряд Кивиообразные', id: 'order-apterygiformes-id' },
                  { val: 'Отряд Нандуобразные', id: 'order-rheiformes-id' },
                  { val: 'Отряд Тинамуобразные', id: 'order-tinamiformes-id' }
                ]
              },
              {
                val: 'Класс Пресмыкающиеся',
                id: 'class-reptilia-id',
                children: [
                  { val: 'Отряд Чешуйчатые', id: 'order-squamata-id' },
                  { val: 'Отряд Черепахи', id: 'order-testudines-id' },
                  { val: 'Отряд Крокодилы', id: 'order-crocodilia-id' },
                  { val: 'Отряд Крылы', id: 'order-rhynchocephalia-id' }
                ]
              },
              {
                val: 'Класс Земноводные',
                id: 'class-amphibia-id',
                children: [
                  { val: 'Отряд Хвостатые', id: 'order-caudata-id' },
                  { val: 'Отряд Бесхвостые', id: 'order-anura-id' },
                  { val: 'Отряд Безногие', id: 'order-apoda-id' }
                ]
              },
              {
                val: 'Класс Рыбы',
                id: 'class-fish-id',
                children: [
                  { val: 'Отряд Хрящевые рыбы', id: 'order-chondrichthyes-id' },
                  { val: 'Отряд Костные рыбы', id: 'order-osteichthyes-id' }
                ]
              }
            ]
          },
          {
            val: 'Тип Членистоногие',
            id: 'phylum-arthropoda-id',
            children: [
              {
                val: 'Класс Насекомые',
                id: 'class-insecta-id',
                children: [
                  { val: 'Отряд Чешуекрылые', id: 'order-lepidoptera-id' },
                  { val: 'Отряд Жесткокрылые', id: 'order-coleoptera-id' },
                  { val: 'Отряд Двукрылые', id: 'order-diptera-id' },
                  { val: 'Отряд Перепончатокрылые', id: 'order-hymenoptera-id' },
                  { val: 'Отряд Таракановые', id: 'order-blattodea-id' },
                  { val: 'Отряд Богомоловые', id: 'order-mantodea-id' },
                  { val: 'Отряд Прямокрылые', id: 'order-orthoptera-id' }
                ]
              },
              {
                val: 'Класс Паукообразные',
                id: 'class-arachnida-id',
                children: [
                  { val: 'Отряд Пауки', id: 'order-araneae-id' },
                  { val: 'Отряд Скорпионы', id: 'order-scorpiones-id' },
                  { val: 'Отряд Тромбидиевидные', id: 'order-trombidiformes-id' },
                  { val: 'Отряд Сенокосцы', id: 'order-opiliones-id' }
                ]
              },
              {
                val: 'Класс Ракообразные',
                id: 'class-crustacea-id',
                children: [
                  { val: 'Отряд Круглоротые', id: 'order-cyclostomatida-id' },
                  { val: 'Отряд Крабы', id: 'order-decapsida-id' },
                  { val: 'Отряд Креветки', id: 'order-dendrobranchiata-id' }
                ]
              }
            ]
          },
          {
            val: 'Тип Моллюски',
            id: 'phylum-mollusca-id',
            children: [
              { val: 'Класс Головоногие', id: 'class-cephalopoda-id', children: [
                  { val: 'Отряд Каракатицы', id: 'order-sepia-id' },
                  { val: 'Отряд Кальмары', id: 'order-teuthida-id' },
                  { val: 'Отряд Осьминоги', id: 'order-octopoda-id' }
                ]
              },
              { val: 'Класс Двуустки', id: 'class-bivalvia-id', children: [] },
              { val: 'Класс Брюхоногие', id: 'class-gastropoda-id', children: [] }
            ]
          },
          {
            val: 'Тип Иглокожие',
            id: 'phylum-echinodermata-id',
            children: [
              { val: 'Класс Морские звезды', id: 'class-asteroidea-id', children: [] },
              { val: 'Класс Морские ежи', id: 'class-echinoidea-id', children: [] },
              { val: 'Класс Морские лилии', id: 'class-crinoidea-id', children: [] }
            ]
          },
          {
            val: 'Тип Кишечнополостные',
            id: 'phylum-cnidaria-id',
            children: [
              { val: 'Класс Сцифоидные', id: 'class-scyphozoa-id', children: [] },
              { val: 'Класс Гидроидные', id: 'class-hydrozoa-id', children: [] }
            ]
          },
          {
            val: 'Тип Плоские черви',
            id: 'phylum-platyhelminthes-id',
            children: []
          },
          {
            val: 'Тип Кольчатые черви',
            id: 'phylum-annelida-id',
            children: []
          },
          {
            val: 'Тип Круглые черви',
            id: 'phylum-nematoda-id',
            children: []
          }
        ]
      }
    ]
  }
};
