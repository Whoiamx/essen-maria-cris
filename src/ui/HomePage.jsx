import { Categories } from "../components/Categorias/Categories";
import { ProductRecommendedContainer } from "../components/products-recommended/ProductRecommendedContainer";
import { ProductContainerMain } from "../components/products/ProductContainerMain";
import { Carrousel } from "../ui/Carrousel";
import { WhatsappIcon } from "../ui/WhatsappIcon";
import { Footer } from "./Footer";

export const HomePage = () => {
  return (
    <>
      <Carrousel />
      <Categories />
      <ProductRecommendedContainer />
      <ProductContainerMain title={"Destacados"} />

      <WhatsappIcon />
      <Footer />
    </>
  );
};
