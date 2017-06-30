// ActionCreator returning an action.
export function selectItem(item) {
    return {
        type: 'ITEM_SELECTED',
        payload: item,
    }
}