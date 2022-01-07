export function formatePrice(price) {
    const numero = price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    return numero;

}


export const removeClass = (element, classe, ) => element.classList.remove(classe);
export const addClass = (element, classe, ) => element.classList.add(classe);