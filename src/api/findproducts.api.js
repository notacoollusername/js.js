export async function findProductList(brand) {
    const response=await fetch(`http://localhost:5000/Products/?brand=${brand}`);
    const product=response.json();
    return product;
}