import { NavbarContainer } from "./components/navbar/NavbarContainer";
import { AppRouter } from "./routes/Routes";
import { HomePage } from "./ui/HomePage";

function App() {
  return (
    <>
      <NavbarContainer />
      <AppRouter />
    </>
  );
}

export default App;
