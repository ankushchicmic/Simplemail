import PricingPage from "./components/Pricingpage";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Monthly from "./components/Monthly";
import Yearly from "./components/Yearly";
import FreePack from "./components/UserAccount/FreePack";
import MonthlyPack from "./components/UserAccount/MonthlyPack";
import YearlyPack from "./components/UserAccount/YearlyPack";




function App() {
  return (
    <div className="app">
      <BrowserRouter>

      <Routes>
        <Route path="/" element={<PricingPage/>}/>
        <Route path="/monthly" element={<Monthly/>}/>
        <Route path="/yearly" element={<Yearly/>}/>
        <Route path="/freeTrial" element={<FreePack/>}/>
        <Route path="/monthlyPack" element={<MonthlyPack/>}/>
        <Route path="/yearlyPack" element={<YearlyPack/>}/>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
