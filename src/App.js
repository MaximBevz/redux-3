import './App.css';
import Header from "./components/header/header";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import ProductList from "./components/poroductsList/productList";
import ProductDetails from "./components/productDetails/productDetails";

function App() {
  return (
    <div className="App">
        <Router>
            <Header />
            <Switch>
                <Route exact path={'/'} component={ProductList}/>
                <Route exact path={'/product/:productId'} component={ProductDetails}/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
