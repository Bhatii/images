import { Provider } from "react-redux";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import store from "./store";

import "./App.css";


function App() {
  return (
    <Provider store={ store }>
      <div className="App">
        <Header />
        <Home />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
