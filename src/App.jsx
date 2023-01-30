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
import SuccessPayment from "./SuccessPayment/SuccessPayment";




function App() {
  return (
    <div className="app">
      <BrowserRouter>

        <Routes>
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/pricing/monthly" element={<Monthly />} />
          <Route path="/pricing/yearly" element={<Yearly />} />
          <Route path="/pricing/freeTrial" element={<FreePack />} />
          <Route path="/pricing/monthlyPack" element={<MonthlyPack />} />
          <Route path="/pricing/yearlyPack" element={<YearlyPack />} />
          <Route path="/pricing/feedback" element={<Feedback />} />
          <Route path="/pricing/business" element={<Business />} />
          <Route path="/pricing/cancelSubscription" element={<CancelSubscription />} />
          <Route path="/pricing/monthly/paymentSuccess" element={<SuccessPayment />} />
          <Route path="/pricing/yearly/paymentSuccess" element={<SuccessPayment />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
