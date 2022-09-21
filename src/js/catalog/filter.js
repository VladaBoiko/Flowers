export const sections = {
  offerSpecial: 'Спеціальна пропозиція',
  dayOffer: 'Пропозиція дня',
  recommendOffer: 'Рекомендуємо троянди',
  offerPlus: 'З квітами купують',
  earlierWatched: 'Раніше переглянуто',
};

export const filterWords = {
  category: 'Категорія',
  sort: 'Вид',
  color: 'Колір',
  amount: 'Кількість',
  size: 'Розмір',
  form: 'Форма букету',
  price: 'Ціна',
};
let filteredData = [];
export const filterData = (data, filterParams) => {
  const filterKeys = Object.keys(filterWords);

  if (Object.keys(filterParams).length) {
    const filterByCategory = filterByOption(data, filterParams[filterKeys[0]], filterKeys[0]);

    const filterByType = filterByOption(filterByCategory, filterParams[filterKeys[1]], filterKeys[1]);

    const filterByColor = filterByOption(filterByType, filterParams[filterKeys[2]], filterKeys[2]);

    const filterByAmount = filterByOption(filterByColor, filterParams[filterKeys[3]], filterKeys[3]);

    const filterBySize = filterByOption(filterByAmount, filterParams[filterKeys[4]], filterKeys[4]);

    const filterByForm = filterByOption(filterBySize, filterParams[filterKeys[5]], filterKeys[5]);

    const filteredData = filterByPrice(filterByForm, filterParams[filterKeys[6]]);

    return filteredData;
  }
  return data;
};

export const filterByOption = (data, filterParam, filterKey) => {
  return data.filter(card => {
    if (filterParam.length === 0) {
      return true;
    }
    return filterParam.includes(card[filterKey]);
  });
};

export const filterByPrice = (data, filterParam) =>
  data.filter(card => {
    if (filterParam.length === 0) {
      return true;
    }

    let cardPriceRange = '';
    if (card.price < 30) {
      cardPriceRange = 'до 30';
    } else if (card.price >= 30 && card.price < 45) {
      cardPriceRange = '30 - 45';
    } else if (card.price >= 45 && card.price < 65) {
      cardPriceRange = '45 - 65';
    } else if (card.price >= 65 && card.price < 80) {
      cardPriceRange = '65 - 80';
    } else if (card.price >= 80) {
      cardPriceRange = 'від 80';
    }

    return filterParam.includes(cardPriceRange) > 0;
  });

export const filterById = (data, idList) =>
  (filteredData = [...data].filter(card => idList.indexOf(card.id) > -1).sort((a, b) => b.rating - a.rating));

export const filterBySection = (data, section, otherData) => {
  // let filteredData = [];

  if (section !== sections.earlierWatched) {
    filteredData = [...data].filter(card => card.section === section).sort((a, b) => b.rating - a.rating);
  } else if (otherData) {
    filteredData = filterById(data, otherData);
  }

  if (filteredData && section === sections.earlierWatched && filteredData.length > 4) {
    return filteredData.slice(0, 4);
  }

  if (filteredData && filteredData.length > 8) {
    return filteredData.slice(0, 8);
  }
  return filteredData;
};
