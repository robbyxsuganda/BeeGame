import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./views/Home";
import BaseLayout from "./views/BaseLayout";
import Login from "./views/Login";
import EditGame from "./views/EditGame";
import AddGame from "./views/AddGame";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<BaseLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/add-game" element={<AddGame />} />
            <Route path="/edit-game/:id" element={<EditGame />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
