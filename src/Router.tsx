import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home/index";
import { NewRoom } from "./pages/NewRoom/index";
import { Room } from "./pages/Room/index";
import { AdminRoom } from "./pages/AdminRoom/index";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/rooms/new" element={<NewRoom />} />
            <Route path="/rooms/:id" element={<Room/>} />
            <Route path="/admin/rooms/:id" element={<AdminRoom/>} /> 
      </Routes>
    )
}