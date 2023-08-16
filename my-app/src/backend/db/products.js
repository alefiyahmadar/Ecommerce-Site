import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "You Can WIN",
    author: "Shiv Khera",
    price: 50,
    nonfiction: "nonfiction",
    isAddedToCart:false,
    isWished:false  ,
    image:"https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg",
    rating:2,
    quantity:1
  },
  {
    _id: uuid(),
    title: "You are Winner",
    author: "Junaid Qureshi",
    price: 450,
    horror: "horror",
    isAddedToCart:false,
    isWished:false  ,
    image:"https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg",
    rating:4.5,
    quantity:1
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    price: 550,
    fiction: "fiction",
    isAddedToCart:false,
    isWished:false  ,
    image:"https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg",
    rating:3.5,
    quantity:1
  },
  {
    _id: uuid(),
    title: "Ikigai",
    author: "Shiv Khera",
    price: 700,
    nonfiction: "nonfiction",
    isAddedToCart:false,
    isWished:false  ,
    image:"https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg",
    rating:5,
    quantity:1
  },
  {
    _id: uuid(),
    title: "Bold Move",
    author: "Junaid Qureshi",
    price: 750,
    horror: "horror",
    isAddedToCart:false,
    isWished:false  ,
    image:"https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg",
    rating: 5,
    quantity:1
  },
  {
    _id: uuid(),
    title: "Reap what you sow",
    author: "Shiv Khera",
    price: 800,
    fiction: "fiction",
    isAddedToCart:false,
    isWished:false  ,
    image:"https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg",
    rating:1.5,
    quantity:1
  },
  {
    _id: uuid(),
    title: "Old Monk",
    author: "Junaid Qureshi",
    price: 1000,
    horror: "horror",
    isAddedToCart:false,
    isWished:false  ,
    image:"https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg",
    rating: 3.9,
    quantity:1
  },
  {
    _id: uuid(),
    title: "Summer 0f 2000",
    author: "Shiv Khera",
    price: 950,
    fiction: "fiction",
    isAddedToCart:false,
    isWished:false  ,
    image:"https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg",
    rating:3.9,
    quantity:1
  },
];
