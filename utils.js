export function getAllId(items){
    return items.map(items => items?.id ?? null);
}