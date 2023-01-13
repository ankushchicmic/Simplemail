import PricingPage from "./components/Pricingpage";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Monthly from "./components/Monthly";
import YearlyPayPalButton from "./components/Yearly";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PricingPage />} />
          <Route path="/monthly" element={<Monthly />} />
          <Route path="/yearly" element={<YearlyPayPalButton />} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
