import "./styles.css";
import { useEthers, useEtherBalance } from "@usedapp/core";
import { utils } from "ethers";

export default function App() {
  const { activateBrowserWallet, account } = useEthers();
  const etherBalance = useEtherBalance(account);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <button onClick={activateBrowserWallet}>Connect</button>
      {account && account}
      <br />
      {etherBalance && utils.formatEther(etherBalance)}
    </div>
  );
}
