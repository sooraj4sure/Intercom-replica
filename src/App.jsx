import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ConversationsPage from "./pages/ConversationsPage";

const App = () => {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-50">
      

        <main className="flex-1 p-6">
          <Routes>
           
            <Route path="/" element={<ConversationsPage />} />
          
           
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
