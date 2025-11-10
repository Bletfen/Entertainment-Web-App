interface IMovies {
  _id: string;
  title: string;
  isTrending: boolean;
  rating: string;
  thumbnail: {
    regular: {
      small: string;
      medium: string;
      large: string;
    };
    trending?: {
      small: string;
      medium?: string;
      large: string;
    };
  };
  title: string;
  year: number;
  category: string;
}

type TMovies = ITrendingProps[];
