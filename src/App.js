import PricingPage from "./components/Pricingpage";
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Monthly from "./components/Monthly";
import Yearly from "./components/Yearly";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<PricingPage/>}/>
        <Route path="/monthly" element={<Monthly/>}/>
        <Route path="/yearly" element={<Yearly/>}/>

      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
