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
    price: "5000",
    categoryName: "non-fiction",
    isAddedToCart:false,
    isWished:false  ,
    image:"https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg"
  },
  {
    _id: uuid(),
    title: "You are Winner",
    author: "Junaid Qureshi",
    price: "3000",
    categoryName: "horror",
    isAddedToCart:false,
    isWished:false  ,
    image:"https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg"
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    price: "1000",
    categoryName: "fiction",
    isAddedToCart:false,
    isWished:false  ,
    image:"https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg"
  },
  {
    _id: uuid(),
    title: "Ikigai",
    author: "Shiv Khera",
    price: "5000",
    categoryName: "non-fiction",
    isAddedToCart:false,
    isWished:false  ,
    image:"https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg"
  },
  {
    _id: uuid(),
    title: "Bold Move",
    author: "Junaid Qureshi",
    price: "3000",
    categoryName: "horror",
    isAddedToCart:false,
    isWished:false  ,
    image:"https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg"
  },
  {
    _id: uuid(),
    title: "Reap what you sow",
    author: "Shiv Khera",
    price: "1000",
    categoryName: "fiction",
    isAddedToCart:false,
    isWished:false  ,
    image:"https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg"
  },
];
