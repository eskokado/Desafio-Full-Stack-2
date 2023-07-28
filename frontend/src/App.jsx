import { ToastContainer } from "react-toastify";
import { RoutesMain } from "./routes";
import Global from "./styles/global";

function App() {
  return (
    <>
      <Global />
      <RoutesMain />
      <ToastContainer position="top-center" />
    </>
  );
}

export default App;