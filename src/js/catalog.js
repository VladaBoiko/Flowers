import { APIGetData } from './fetch-cards';
import { createMarkup, clearData } from './catalog/markup';

const refs = {
  resetFormBtn: document.querySelector('.filter-catalog__clear-all-btn'),
  form: document.querySelector('.filter-catalog'),
  catalogList: document.querySelector('.catalog-list'),
  loadMoreBtn: document.querySelector('.catalog__btn'),
};

const catalogData = {
  selector: refs.catalogList,
  params: '',
  async renderData() {
    try {
      await queryAndRender(this.selector, this.params);
    } catch (error) {
      console.log(error);
    }
  },
};

catalogData.renderData(refs.catalogList);

refs.form.reset();

refs.resetFormBtn.addEventListener('click', () => refs.form.reset());

refs.form.addEventListener('change', () => {
  clearData(refs.catalogList);
  catalogData.selector = refs.catalogList;
  catalogData.params = getChececkedCheckBox().join('|');
  catalogData.renderData();
});

refs.loadMoreBtn.addEventListener('click', () => {
  refs.loadMoreBtn.disabled = true;
  catalogData.renderData().finally(() => {
    refs.loadMoreBtn.disabled = false;
  });
});

function getChececkedCheckBox() {
  return [...refs.form].reduce((acc, el) => {
    if (el.nodeName === 'INPUT' && el.checked) {
      const value = el.nextElementSibling.textContent;
      return [...acc, value];
    } else {
      return [...acc];
    }
  }, []);
}

async function queryAndRender(list, params = '') {
  // console.log(params);
  const searchParams = new URLSearchParams({
    filter: params,
    p: 1,
    l: 8,
  }).toString();
  // console.log(searchParams);
  const data = await APIGetData.getData(searchParams);
  const markup = createMarkup(data);
  list.insertAdjacentHTML('beforeend', markup);
}
