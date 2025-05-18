import { Route, Routes } from "react-router-dom";
import { MainPage, Page } from "../pages/";
import { Navbar } from "../ui";
import { ListProyects } from "../pages/components";
import AboutMe from "../pages/components/AboutMe";
import { Contact } from "../pages/components/Contact";

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/page/:id" element={<Page />} />
        <Route path="/proyects" element={<ListProyects />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};
