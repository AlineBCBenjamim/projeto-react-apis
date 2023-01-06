import Router from "./routes/Router";
import { GlobalStyle } from "./GlobalStyle.styled";
import { GlobalContext } from "./contexts/GlobalContext";
import GlobalState from "./contexts/GlobalState";

function App() {
  const context = GlobalState() 
  return (
    <GlobalContext.Provider value={context}>
      <Router />
      <GlobalStyle />
    </GlobalContext.Provider>
  );
}

export default App;
