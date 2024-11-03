import { Categories } from "../components/Categorias/Categories";
import { NavbarContainer } from "../components/navbar/NavbarContainer";
import { ProductRecommendedContainer } from "../components/products-recommended/ProductRecommendedContainer";
import { ProductCard } from "../components/products/ProductCard";
import { ProductContainerMain } from "../components/products/ProductContainerMain";
import { Carrousel } from "../ui/Carrousel";
import { WhatsappIcon } from "../ui/WhatsappIcon";

export const HomePage = () => {
  return (
    <>
      <Carrousel />
      <Categories />
      <ProductRecommendedContainer />
      <ProductContainerMain title={"Destacados"} />

      <WhatsappIcon />
    </>
  );
};
