import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../ui/HomePage";
import { ProductContainerMain } from "../components/products/ProductContainerMain";
import { ContactFormContainer } from "../components/contact-form/ContactFormContainer";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productos" element={<ProductContainerMain />} />
        <Route path="/contacto" element={<ContactFormContainer />} />
      </Routes>
    </BrowserRouter>
  );
};
