export const goToPokedexPage = (navigate) => {
  navigate("/");
};

export const goToPokemonsListPage = (navigate) => {
  navigate("/list");
};

export const goToDetailPage = (navigate, name) => {
  navigate(`/detail/${name}`);
};

