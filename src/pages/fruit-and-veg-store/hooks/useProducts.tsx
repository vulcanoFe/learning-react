import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Product } from "../models/Product";
import { fetchProducts } from "../services/online-store-service";
import { ProductsResponse } from "../models/ProductsResponse";

/**
 * Chiama la api che fornisce i prodotti..
 * @returns Product[]
 */
const useProducts = () => {

  const { t } = useTranslation();
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);

  const getProducts = useCallback( 
    async () => {
      try {
        const productsResponses:ProductsResponse = await fetchProducts();
        setProducts(productsResponses.products);
      } catch (error) {
        const titoloErrore = t("errore.caricamentoapi.titolo");
        const descrizioneErrore = t("errore.caricamentoapi.descrizione");
        navigate('/error', {state: {
          titolo:titoloErrore, 
          descrizione:descrizioneErrore,
          mostraCtaPrimaria:true,
          chiaveLabelCtaPrimaria: "header.menu.home",
          pathRedirectCtaPrimaria: "/home"
        }});
      }
    }, 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [navigate]);

  useEffect( () => {
    getProducts(); 
  }, [getProducts]);

  return products;
}

export default useProducts;