import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DAppProvider, ChainId } from "@usedapp/core";
import { getDefaultProvider } from "ethers";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const config = {
  readOnlyChainId: ChainId.Goerli,
  readOnlyUrls: {
    [ChainId.Goerli]: getDefaultProvider("goerli")
  }
};

root.render(
  <StrictMode>
    <DAppProvider config={config}>
      <App />
    </DAppProvider>
  </StrictMode>
);
