import { Fragment } from "react";
import Navigation from "./pages/navigation/navigation.component";
import { GlobalStyle } from "./global.styles";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Navigation />
    </Fragment>
  );
}

export default App;
