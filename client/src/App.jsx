import { Route, Routes } from "react-router-dom";
import AddBlog from "./pages/AddBlog";
import HomePage from "./pages/HomePage";
import DeleteBlog from "./pages/DeleteBlog";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/addblog" element={<AddBlog />} />
        <Route path="/deleteblog" element={<DeleteBlog />} />
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
      </Routes>
    </>
  );
}

export default App;
