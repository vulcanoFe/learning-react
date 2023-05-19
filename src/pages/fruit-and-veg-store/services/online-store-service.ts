import httpClient from "../../../shared/http-client";
import { checkSuccessfulResponse } from "../../../shared/http-client/checkSuccessfulResponse";
import { ProductsResponse } from "../models/ProductsResponse";

const PRODUCTS_API = "/onlinestore/api/v1/products";

export async function fetchProducts():Promise<ProductsResponse> {
  const response = await httpClient.get(PRODUCTS_API, { headers: {}, responseType: 'json' });
  if (!checkSuccessfulResponse(response)) throw new Error('Errore caricamento prodotti');
  return ProductsResponse.adapt(response.data);
}