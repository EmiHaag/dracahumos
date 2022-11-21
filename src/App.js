import React from "react";
import "./App.css";
import Main from "./screens/main";
import { ShopProvider } from "./context/shopContext";
import { AddressProvider } from "./context/addressContext";
import { CookiesProvider, useCookies } from "react-cookie";

/* Verify from the package.json file
Run npm list --depth=0 to view the various packages in your project */

function App() {
  const [cookie, setCookie] = useCookies(["compra"]);

  if (!cookie.compra) setCookie("compra", []);
  return (
    <>
   {/*  <div style={{width:"100%", height:"15rem", position:"absolute", backgroundColor:"rgb(214, 173, 96)", color:"red"}}><h2>Sitio en mantenimiento hasta el 22/11/2022, no realize transacciones</h2></div>
    */}   <CookiesProvider>
        <ShopProvider>
          <AddressProvider>
            <Main />
          </AddressProvider>
        </ShopProvider>
      </CookiesProvider>
    </>
  );
}

export default App;
