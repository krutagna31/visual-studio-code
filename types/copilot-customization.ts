export type Customization = {
  title: string;
  description: string;
  image: {
    src: {
      light: string;
      dark: string;
    };
    alt: string;
  };
};
