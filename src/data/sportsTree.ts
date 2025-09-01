import type { ITreeData } from "../interfaces";

export const sportsData: ITreeData = {
  id: 'sports-classification-root-id',
  title: 'Классификация видов спорта',
  tree: {
    val: 'Виды спорта',
    id: 'sports-root-id',
    children: [
      {
        val: 'Олимпийские виды спорта',
        id: 'olympic-sports-id',
        children: [
          {
            val: 'Летние олимпийские виды спорта',
            id: 'summer-olympics-id',
            children: [
              { val: 'Легкая атлетика', id: 'athletics-id' },
              { val: 'Плавание', id: 'swimming-id' },
              { val: 'Гимнастика', id: 'gymnastics-id' },
              { val: 'Фехтование', id: 'fencing-id' },
              { val: 'Парусный спорт', id: 'sailing-id' },
              { val: 'Велоспорт', id: 'cycling-id' },
              { val: 'Стрельба', id: 'shooting-id' },
              { val: 'Теннис', id: 'tennis-id' },
              { val: 'Борьба', id: 'wrestling-id' },
              { val: 'Бокс', id: 'boxing-id' },
              { val: 'Триатлон', id: 'triathlon-id' }
              // И другие летние олимпийские виды
            ]
          },
          {
            val: 'Зимние олимпийские виды спорта',
            id: 'winter-olympics-id',
            children: [
              { val: 'Фигурное катание', id: 'figure-skating-id' },
              { val: 'Конькобежный спорт', id: 'speed-skating-id' },
              { val: 'Лыжные гонки', id: 'cross-country-skiing-id' },
              { val: 'Биатлон', id: 'biathlon-id' },
              { val: 'Бобслей', id: 'bobsleigh-id' },
              { val: 'Скелетон', id: 'skeleton-id' },
              { val: 'Санный спорт', id: 'luge-id' },
              { val: 'Хоккей с шайбой', id: 'ice-hockey-id' },
              { val: 'Кёрлинг', id: 'curling-id' }
              // И другие зимние олимпийские виды
            ]
          }
        ]
      },
      {
        val: 'Игровые виды спорта',
        id: 'game-sports-id',
        children: [
          { val: 'Футбол', id: 'football-id' },
          { val: 'Баскетбол', id: 'basketball-id' },
          { val: 'Волейбол', id: 'volleyball-id' },
          { val: 'Теннис', id: 'tennis-game-id' },
          { val: 'Хоккей', id: 'hockey-id' },
          { val: 'Регби', id: 'rugby-id' },
          { val: 'Бейсбол', id: 'baseball-id' }
          // Другие игровые виды спорта
        ]
      },
      {
        val: 'Единоборства',
        id: 'martial-arts-id',
        children: [
          { val: 'Бокс', id: 'boxing-martial-id' },
          { val: 'Дзюдо', id: 'judo-id' },
          { val: 'Тайский бокс', id: 'muay-thai-id' },
          { val: 'Каратэ', id: 'karate-id' },
          { val: 'Таэквондо', id: 'taekwondo-id' },
          { val: 'Борьба', id: 'wrestling-martial-id' }
          // Другие виды единоборств
        ]
      },
      {
        val: 'Циклические виды спорта',
        id: 'cyclic-sports-id',
        children: [
          { val: 'Бег', id: 'running-id' },
          { val: 'Велоспорт', id: 'cycling-cyclic-id' },
          { val: 'Плавание', id: 'swimming-cyclic-id' },
          { val: 'Лыжный спорт', id: 'skiing-id' }
          // Другие циклические виды
        ]
      },
      {
        val: 'Скоростно-силовые виды спорта',
        id: 'speed-strength-sports-id',
        children: [
          { val: 'Метание копья', id: 'javelin-throw-id' },
          { val: 'Прыжки', id: 'jumping-id' },
          { val: 'Спринт', id: 'sprint-id' },
          { val: 'Тяжелая атлетика', id: 'weightlifting-id' }
        ]
      },
      {
        val: 'Технические виды спорта',
        id: 'technical-sports-id',
        children: [
          { val: 'Автоспорт', id: 'autosport-id' },
          { val: 'Мотоспорт', id: 'motorsport-id' },
          { val: 'Парусный спорт', id: 'sailing-technical-id' },
          { val: 'Стрельба из лука', id: 'archery-id' }
        ]
      },
      {
        val: 'Спортивные игры с мячом',
        id: 'ball-sports-id',
        children: [
          { val: 'Футбол', id: 'football-ball-id' },
          { val: 'Баскетбол', id: 'basketball-ball-id' },
          { val: 'Волейбол', id: 'volleyball-ball-id' },
          { val: 'Регби', id: 'rugby-ball-id' },
          { val: 'Хоккей на траве', id: 'field-hockey-id' }
        ]
      },
      {
        val: 'Экстремальные виды спорта',
        id: 'extreme-sports-id',
        children: [
          { val: 'Скалолазание', id: 'rock-climbing-id' },
          { val: 'Парапланеризм', id: 'paragliding-id' },
          { val: 'Серфинг', id: 'surfing-id' },
          { val: 'Сноуборд', id: 'snowboard-id' },
          { val: ' BMX', id: 'bmx-id' }
        ]
      }
    ]
  }
};
