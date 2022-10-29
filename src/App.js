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
      <CookiesProvider>
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
