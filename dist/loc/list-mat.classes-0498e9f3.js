const UniListMatClasses = {
    list: 'mdc-list',
    listDense: 'mdc-list--dense',
    item: 'mdc-list-item',
    itemText: 'mdc-list-item__text',
    twoLine: ' mdc-list--two-line',
    itemPrimaryText: 'mdc-list-item__primary-text',
    itemSecondaryText: 'mdc-list-item__secondary-text',
    group: 'mdc-list-group',
    groupSubheader: 'mdc-list-group__subheader',
    divider: 'mdc-list-divider',
    itemGraphic: 'mdc-list-item__graphic'
};

function uniListMatClass() {
    return {
        [UniListMatClasses.list]: true
    };
}
function uniListItemMatClass() {
    return {
        [UniListMatClasses.item]: true
    };
}
function uniListItemGraphicMatClass() {
    return {
        [UniListMatClasses.itemGraphic]: true
    };
}

export { UniListMatClasses as U, uniListMatClass as a, uniListItemMatClass as b, uniListItemGraphicMatClass as u };
