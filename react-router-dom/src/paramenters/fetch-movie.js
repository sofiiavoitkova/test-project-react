export const fetchMovie = ({ params }) => {
    return {
      name: "The Lord of The Rings",
      duration: 300,
      id: params.movieId,
    };
  
    return new Promise((res) => {
      setTimeout(() => {
        res({
          name: "The Lord of The Rings",
          duration: 300,
          id: params.movieId,
        });
      }, 5000);
    });
  };
  