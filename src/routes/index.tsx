import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { NotFound } from "../pages/NotFound";
import { IUserProps } from "../interfaces";
import { Home } from "../pages/Home";
import { useState } from "react";

const AllRoutes = () => {
  const [user, setUser] = useState<IUserProps>({} as IUserProps);

  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard user={user} />} />
      <Route path="/" element={<Home setUser={setUser} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export { AllRoutes };
