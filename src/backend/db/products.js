import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name: "Running Zoom",
    price: 99,
    categoryName: "running",
    inWishList: true,
    rating: 4,
  },
  {
    _id: uuid(),
    name: "Running Zoom",
    price: 98,
    categoryName: "running",
    inWishList: false,
    rating: 3,
  },
  {
    _id: uuid(),
    name: "Jordan Zoom",
    price: 97,
    categoryName: "jordans",
    inWishList: false,
    rating: 2,
  },
  {
    _id: uuid(),
    name: "Jordan Zoom",
    price: 96,
    categoryName: "jordans",
    inWishList: false,
    rating: 1,
  },
  {
    _id: uuid(),
    name: "Football Zoom",
    price: 701,
    categoryName: "football",
    inWishList: false,
    rating: 4,
  },
  {
    _id: uuid(),
    name: "Football Zoom",
    price: 801,
    categoryName: "football",
    inWishList: false,
    rating: 4,
  },
  {
    _id: uuid(),
    name: "Football Zoom",
    price: 901,
    categoryName: "football",
    inWishList: false,
    rating: 3,
  },
  {
    _id: uuid(),
    name: "Basketball Zoo",
    price: 102,
    categoryName: "basketball",
    inWishList: false,
    rating: 1,
  },
  {
    _id: uuid(),
    name: "Basketball Zoo",
    price: 109,
    categoryName: "basketball",
    inWishList: false,
    rating: 3,
  },
  {
    _id: uuid(),
    name: "Basketball Zoo",
    price: 115,
    categoryName: "basketball",
    inWishList: false,
    rating: 2,
  },
  {
    _id: uuid(),
    name: "Walking Zoom",
    price: 103,
    categoryName: "walking",
    inWishList: false,
    rating: 3,
  },
  {
    _id: uuid(),
    name: "Walking Zoom",
    price: 100,
    categoryName: "walking",
    inWishList: false,
    rating: 4,
  },
  {
    _id: uuid(),
    name: "Jordan Zoom",
    price: 100,
    categoryName: "jordans",
    inWishList: false,
    rating: 3,
  },
];
