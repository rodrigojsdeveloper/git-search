import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Home } from "../pages/Home";
import { useState } from "react";

const AllRoutes = () => {
  const [user, setUser] = useState<object>({});

  return (
    <Routes>
      <Route path="/" element={<Home setUser={setUser} />} />
      <Route path="/dashboard" element={<Dashboard user={user} />} />
    </Routes>
  );
};

export { AllRoutes };
