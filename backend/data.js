import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Shani",
      email: "admin@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "Jhon",
      email: "user@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      link: "https://amzn.to/3cmKgTU",
      name: "Book kids",
      category: "Shirts",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX482_BO1,204,203,200_.jpg",
      price: 120,
      countInStock: 10,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      link: "https://amzn.to/2SMqKJu",
      name: "hair Perfector",
      category: "Shirts",
      image: "/images/Hair-Perfector.png",
      price: 120,
      countInStock: 20,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      link: "https://amzn.to/3xZuRls",
      name: "product Brush",
      category: "Shirts",
      image: "/images/product-brush.png",
      price: 120,
      countInStock: 0,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      link: "4",
      name: "eye Lush4",
      category: "Shirts",
      image: "/images/eyelush.png",
      price: 120,
      countInStock: 15,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      link: "5",
      name: "eye Lush5",
      category: "Shirts",
      image: "/images/eyelush.png",
      price: 120,
      countInStock: 5,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      link: "6",
      name: "eye Lush6",
      category: "Shirts",
      image: "/images/eyelush.png",
      price: 120,
      countInStock: 12,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
  ],
};

export default data;