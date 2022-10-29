import { useState, useEffect } from "react";

const useApi = (compras, buyingMay) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [cumpleMayorista, setCumpleMayorista] = useState(false);
  const [subTotalNoMayorista, setSubTotalNoMayorista] = useState(0);

  useEffect(() => {
    let subTotalMayorista = 0;
    let auxCantidadDracas = 0;
    let auxSubTotalNoMayorista = 0;

    if (compras.length > 0) {
      compras.forEach((element) => {
        if (element.category === "0" && buyingMay) {
          auxCantidadDracas += 1;
          subTotalMayorista += parseInt(element.price);
        } else {
          auxSubTotalNoMayorista += parseInt(element.price);
        }
      });
    }

    if (auxCantidadDracas === 10) {
      setCumpleMayorista(true);
    } else {
      setCumpleMayorista(false);
    }

    setTotalPrice(subTotalMayorista);
    setSubTotalNoMayorista(auxSubTotalNoMayorista);

    return;
  }, [compras]);

  return {
    totalPrice,
    subTotalNoMayorista,
    cumpleMayorista,
  };
};

export default useApi;
