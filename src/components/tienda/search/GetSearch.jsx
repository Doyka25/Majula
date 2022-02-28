import useProducts from "../../../hooks/useProducts";

export const Searching = (query) => {
  const { data } = useProducts();

  if (query === "") {
    return [];
  }

  return data.filter((item) =>
    item.name.toLowerCase().includes(query.trim().toLowerCase())
  );
};
