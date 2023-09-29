import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { NotFound } from "../pages/NotFound";
import { IUser } from "../interfaces";
import { Home } from "../pages/Home";
import { useState } from "react";

const AllRoutes = () => {
  const [user, setUser] = useState<IUser>({} as IUser);

  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard user={user} />} />
      <Route path="/" element={<Home setUser={setUser} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export { AllRoutes };
