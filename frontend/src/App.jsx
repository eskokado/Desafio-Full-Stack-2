import { ToastContainer } from "react-toastify";
import { RoutesMain } from "./routes";
import Global from "./styles/global";
import { UserProvider } from './contexts/UserContext'

function App() {
  return (
    <>
      <Global />
      <UserProvider>
        <RoutesMain />
      </UserProvider>
      <ToastContainer position="top-center" />
    </>
  );
}

export default App;