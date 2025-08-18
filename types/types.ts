export interface NavLink {
  name: string;
  href: string;
}

export interface Customization {
  title: string;
  description: string;
  image: {
    light: string;
    dark: string;
  }
}