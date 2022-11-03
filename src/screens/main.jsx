import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Address from "./address";
import CheckOut from "./checkout";
import Home from "./home";
import HumoInverso from "./humoInverso";
import CompraProtegida from "./compraProtegida";
import Icons from "../components/icons";
import Mayoristas from "./mayoristas";
import Minoristas from "./minoristas";
import PagoExitoso from "./pagoExitoso";
import Payment from "./payment";
import ProductItem from "./productItem";
import QuienesSomos from "./quienes-somos";
import ShopCar from "../components/shopCar";
import ListarStock from "./admin/listarStock";
import Agregar from "./admin/agregarModelo";
import mainAdmin from "./admin/index";
import Login from "./admin/login";
import Eliminar from "./admin/eliminar";
import PrivateRoute from "../utils/privateRoute";
import PublicRoute from "../utils/publicRoute";
import Novedades from "./novedades";
import AgregarNovedad from "./admin/agregarNovedad";
import EliminarNovedad from "./admin/eliminarNovedad";
import editarItem from "./admin/editarItem";

const Main = () => {
  return (
    <BrowserRouter>
      <Icons />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/mayoristas" component={Mayoristas}></Route>
        <Route path="/minoristas" component={Minoristas}></Route>
        <Route path="/showItem" component={ProductItem} />
        <Route path="/compra-protegida" component={CompraProtegida} />
        <Route path="/novedades" component={Novedades} />
        <Route path="/checkout" component={CheckOut} />
        <Route path="/checkout-address" component={Address} />
        <Route path="/payment" component={Payment}></Route>

        <Route path="/catalogo"></Route>
        <Route
          path="/que-son-y-como-funcionan-cascadas-de-humo-inverso"
          component={HumoInverso}
        ></Route>
        <Route path="/quienes-somos" component={QuienesSomos}></Route>
        <Route path="/payment-success" component={PagoExitoso}></Route>
        <Route
          exact
          path="/mercadopago"
          render={() => {
            window.location.href = "/mercadopago/";
          }}
        />
        {/* 
      <Route path="/admin" component={Admin}></Route>*/}
        <PublicRoute path="/login" component={Login} />
        <PrivateRoute path="/admin" component={mainAdmin} />
        <PrivateRoute path="/listar" component={ListarStock}></PrivateRoute>
        <PrivateRoute path="/editarItem" component={editarItem}></PrivateRoute>
        <PrivateRoute path="/agregar" component={Agregar}></PrivateRoute>
        <PrivateRoute path="/eliminar" component={Eliminar}></PrivateRoute>
        <PrivateRoute
          path="/agregar-novedad"
          component={AgregarNovedad}
        ></PrivateRoute>
        <PrivateRoute
          path="/eliminar-novedad"
          component={EliminarNovedad}
        ></PrivateRoute>
      </Switch>

      <ShopCar />
    </BrowserRouter>
  );
};
export default Main;
