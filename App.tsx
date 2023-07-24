import { Provider } from "react-redux";
import { store } from "./src/app/store";
import CounterApp from "./src/CounterApp";

export default function App() {
  return (
    <Provider store={store}>
      <CounterApp />
    </Provider>
  );
}
