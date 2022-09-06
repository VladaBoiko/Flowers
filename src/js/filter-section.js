document.body.addEventListener('click', onFilterItemClick);
    
function onFilterItemClick(evt) {
    const activeFilterItem = document.querySelector('[data-filter-item].is-active');
    const activeDropdownList = document.querySelector('[data-filter-item].is-active>ul');
    
    
    if (!evt.target.closest('[data-filter-item]')) {
        if (activeFilterItem) {
            switchFilterState(activeFilterItem);
            switchFilterState(activeDropdownList);
        }
        return;
    }

    if (evt.target.closest('[data-filter-item].is-active')) {
        switchFilterState(activeFilterItem);
        switchFilterState(activeDropdownList);
        return;
    }

    if (activeFilterItem) {
        switchFilterState(activeFilterItem);
        switchFilterState(activeDropdownList);
    }

    const nextActiveFilterItem = evt.target.closest('[data-filter-item]');
    if (nextActiveFilterItem) {
        nextActiveFilterItem.classList.add('is-active');
        const firstActiveDropdownList = document.querySelector('[data-filter-item].is-active>ul');
        switchFilterState(firstActiveDropdownList)
    }
}

function switchFilterState(dropdownList) {
    dropdownList.classList.toggle('is-active');
}
