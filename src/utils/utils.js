export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  };
};

export const runQuery = (movies, query) => {
  if (query !== '')
    return movies.filter(movie =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
  return movies;
};
