import { ToastContainer } from "react-toastify";
import { RoutesMain } from "./routes";
import Global from "./styles/global";
import { UserProvider } from './contexts/UserContext'
import { TransactionProvider } from './contexts/TransactionContext'

function App() {
  return (
    <>
      <Global />
      <UserProvider>
        <TransactionProvider>
          <RoutesMain />
        </TransactionProvider>
      </UserProvider>
      <ToastContainer position="top-center" />
    </>
  );
}

export default App;