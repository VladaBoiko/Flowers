document.body.addEventListener('click', onFilterItemClick);

function onFilterItemClick(evt) {
    const activeFilterItem = document.querySelector('.filter-item.is-active')
    if (!evt.target.closest('.filter-item')) {
        if (activeFilterItem) {
        activeFilterItem.classList.remove('is-active');
        }
        return;
    }

    if (activeFilterItem) {
        activeFilterItem.classList.remove('is-active');
    }

    const nextActiveFilterItem = evt.target.closest('.filter-item');
    nextActiveFilterItem.classList.add('is-active');
} 