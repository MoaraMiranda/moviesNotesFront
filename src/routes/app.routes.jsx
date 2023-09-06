import { Routes, Route } from "react-router-dom";

import { CreateMovie } from "../pages/CreateMovie";
import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile";
import { NotePreview } from "../pages/NotePreview";
import { AppError } from "../pages/AppError";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<CreateMovie />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/preview/:id" element={<NotePreview />} />
      <Route path="*" element={<AppError />} />
    </Routes>
  );
}
