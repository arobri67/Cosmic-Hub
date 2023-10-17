import "./App.css";
import Header from "./components/Header";
import Selector from "./components/Selector";

const App = () => {
  const todayDate = new Date(Date.now()).toISOString().slice(0, 10);
  return <Selector today={todayDate} />;
};

export default App;
