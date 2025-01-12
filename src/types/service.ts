export interface Service {
  _id: string;
  name?: string;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  image?: string;
  price?: string;
  duration?: string;
  location?: string;
  features?: string[];
}
