import PricingPage from "./components/Pricingpage";
import { BrowserRouter, Routes, Route, MemoryRouter } from 'react-router-dom'
import Monthly from "./components/Monthly";
import Yearly from "./components/Yearly";
import FreePack from "./components/UserAccount/FreePack";
import MonthlyPack from "./components/UserAccount/MonthlyPack";
import YearlyPack from "./components/UserAccount/YearlyPack";
import Feedback from "./Support/Feedback";
import Business from "./Support/Business";
import CancelSubscription from "./Support/SubscriptionCancel";
import React from "react";




function App() {
  return (
    <div className="app">
      <MemoryRouter>

      <Routes>
        <Route path="/" element={<PricingPage/>}/>
        <Route path="/monthly" element={<Monthly/>}/>
        <Route path="/yearly" element={<Yearly/>}/>
        <Route path="/freeTrial" element={<FreePack/>}/>
        <Route path="/monthlyPack" element={<MonthlyPack/>}/>
        <Route path="/yearlyPack" element={<YearlyPack/>}/>
        <Route path="/feedback" element={<Feedback/>}/>
        <Route path="/business" element={<Business/>}/>
        <Route path="/cancelSubscription" element={<CancelSubscription/>}/>
       

        </Routes>
      </MemoryRouter>

    </div>
  );
}

export default App;
