const axios = require("axios");

export const baseUri = "/backend/"; 
//export const baseUri = "http://localhost/backend/"; // uri para test*/

const uriNewItem = "database/updateDatabaseNewItemStock.php";
const uriUpdateItem = "database/updateDatabaseItem.php";
const uriAddNovedad = "database/addNovedad.php";

const uriDeleteItem = "database/deleteItem.php";
const uriDeleteNovedad = "database/deleteNovedad.php";
const uriSignIn = "signIn.php";

export const getItems = async () => {
  const response = await axios
    .get(baseUri + "get_all_items.php")
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
  return await response;
};

//get specific item from ID
export const getItem = async (id) => {
  const response = await axios
  .post(
    baseUri + "get_item.php",
    JSON.stringify({ idItem: parseInt(id) })
  )
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
  return await response;
};

export const getNovedades = async () => {
  const response = await axios
    .get(baseUri + "get_novedades.php")
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
  return await response;
};
export const updateDatabaseItemStock = async (idItem, newStock) => {
  const response = await axios
    .post(
      baseUri + "updateDatabaseItemStock.php",
      JSON.stringify({ idItem: parseInt(idItem), newStock: newStock })
    )
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      return error;
    });
  return await response;
};

export const updateDatabaseItem = async (datos) => {
  const response = await axios
    .post(baseUri + uriUpdateItem, datos)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
      return error;
    });
  return response;
};
export const updateDatabaseNewItemStock = async (datos) => {
  const response = await axios
    .post(baseUri + uriNewItem, datos)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
      return error;
    });
  return response;
};
export const addNovedad = async (datos) => {
  const response = await axios
    .post(baseUri + uriAddNovedad, datos)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
      return error;
    });
  return response;
};
export const deleteItem = async (id) => {
  const response = await axios
    .delete(baseUri + uriDeleteItem, { data: id })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
      return error;
    });
  return response;
};
export const deleteNovedad = async (id) => {
  const response = await axios
    .delete(baseUri + uriDeleteNovedad, { data: id })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
      return error;
    });
  return response;
};

export const signIn = async (data) => {
  const response = axios
    .post(baseUri + uriSignIn, {
      data,
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
  return response;
};
