export const ProductContainer = () => {
  const [productInCard, setProductInCard] = useState(ProductsEssen);

  const productInCardMemorized = useMemo(() => {
    return productInCard;
  }, [productInCard]);

  return (
    <>
      <Box></Box>
    </>
  );
};
