// getData est une function generique qui va recevoir un type T, 
// ce type T est ce qui va être renvoyer de cette fonction 
// à l'intérieur d'une promesse
export const getData = async <T>(url: string): Promise<T> => {
    const response = fetch(url);
    return await (await response).json();
}