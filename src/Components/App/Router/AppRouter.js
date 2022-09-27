import { Routes, Route } from "react-router-dom";
import FlashMessages from "../../FlashMessages/FlashMessages";
import Modal from "../../Modal/Modal";
import { Home } from "../../Pages/Home";
import NotFound from "../../Pages/NotFound";

import Footer from "../Partials/Footer";
import Header from "../Partials/Header";

const AppRouter = () => {
  return (
    <>
      <FlashMessages /> {/* component for flashmessages */}
      <Modal /> {/* component for modal */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRouter;
