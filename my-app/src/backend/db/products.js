import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    
    
    title: "The Book Of Life",
    author: "J Krishnamurti",
    price: 250,
    nonfiction: "nonfiction",
    isAddedToCart:false,
    isWished:false  ,
    image:"https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51H5MlNiNpL._SY445_SX342_.jpg",
    rating:2,
    quantity:1
  },
  {
    _id: uuid(),
    title: "Yersternight",
    author: "Cat Winters",
    price: 400,
    horror: "horror",
    isAddedToCart:false,
    isWished:false  ,
    image:"https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91FJF+27RbL._SY466_.jpg",
    rating:4.5,
    quantity:1
  },
  {
    _id: uuid(),
    title: "Yaar Papa",
    author: "Divya Prakash Dubey",
    price: 550,
    fiction: "fiction",
    isAddedToCart:false,
    isWished:false  ,
    image:"https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71UchDE8PQL._SY466_.jpg",
    rating:3.5,
    quantity:1
  },
  {
    _id: uuid(),
    title: "Iron Flame",
    author: "Rebecca Yarros",
    price: 1000,
    fiction: "fiction",
    isAddedToCart:false,
    isWished:false  ,
    image:"https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91JsmiyAReL._SY466_.jpg",
    rating:5,
    quantity:1
  },
  {
    _id: uuid(),
    title: "That Night",
    author: "Nidhi Upadhyay",
    price: 750,
    horror: "horror",
    isAddedToCart:false,
    isWished:false  ,
    image:"https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81b1PP4RK1L._SY466_.jpg",
    rating: 4.7 ,
    quantity:1
  },
  {
    _id: uuid(),
    title: "Atomic Habits",
    author: "James Clear",
    price: 800,
    nonfiction: "nonfiction",
    isAddedToCart:false,
    isWished:false  ,
    image:"https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg",
    rating:4.5,
    quantity:1
  },
  {
    _id: uuid(),
    title: "It Follows You",
    author: "Keran Pantth Joshi",
    price: 900,
    horror: "horror",
    isAddedToCart:false,
    isWished:false  ,
    image:"https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81XZWZfinrS._SY466_.jpg",
    rating: 3.9,
    quantity:1
  },
  {
    _id: uuid(),
    title: "Greatest Work Of Jane Austen",
    author: "Jane Austen",
    price: 950,
    fiction: "fiction",
    isAddedToCart:false,
    isWished:false  ,
    image:"https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91nntenr9pL._SY466_.jpg",
    rating:3.9,
    quantity:1
  },
  {
    _id: uuid(),
    title: "Ikigai",
    author: "Keira Miki",
    price: 450,
    nonfiction: "nonfiction",
    isAddedToCart:false,
    isWished:false  ,
    image:"https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41k8aHbVSBL._SY445_SX342_.jpg",
    rating:4.7,
    quantity:1
  },
  
];
