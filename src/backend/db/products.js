import { v4 as uuid } from "uuid";
/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */
import {
  air_zoom_maxfly_more_uptempo,
  air_zoom_pegasus_38,
  jordan_1_mid,
  jordan_one_low,
  jordan_one_mid_blue,
  jordan_why_not,
  KD15_EP,
  kyrie_infinity_ep,
  LeBron_19,
  nike_mercurial,
  nike_running_shoe,
  premier_3_FG,
  running,
  shoe,
  zoomX_streakfly,
} from "../../assests";

export const products = [
  {
    _id: uuid(),
    name: "Jordan 1 Mid",
    price: 99,
    description:
      "Inspired by the original AJ1, the Air Jordan 1 Mid offers fans a chance to follow in MJ's footsteps. Fresh colour trims the clean, classic materials, imbuing modernity into a classic design.",
    categoryName: "jordans",
    inWishList: true,
    rating: 4,
    productImage: jordan_one_mid_blue,
  },
  {
    _id: uuid(),
    name: "Alphafly Zoom",
    price: 98,
    description:
      "Push to the finish with the next step in our sustainability journey.We made the ultralight Nike Air Zoom Alphafly Next Nature with at least 50% recycled content by weight, using recycled materials that won't sacrifice performance.It's still made to help you unlock new personal records, with a secure, breathable design that is so light, it'll feel like flying.You've trained hard, time to lace up and break through wearing a shoe born from waste.",
    categoryName: "running",
    inWishList: false,
    rating: 3,
    productImage: nike_running_shoe,
  },
  {
    _id: uuid(),
    name: "jordan Mid SE",
    price: 97,
    categoryName: "jordans",
    inWishList: false,
    rating: 2,
    description:
      "Give your look an edge, in the Air Jordan 1 Mid SE.Made from premium leather throughout, it features an updated colour scheme, making a fresh play on the all-time favourite Full-grain leather in the upper provides classic style and durability, Encapsulated Air unit in the heel offers lightweight cushioning Rubber tread gives you durable traction.",
    productImage: jordan_1_mid,
  },
  {
    _id: uuid(),
    name: "Jordan Zoom",
    price: 96,
    description: "",

    categoryName: "jordans",
    inWishList: false,
    rating: 1,
    productImage: air_zoom_maxfly_more_uptempo,
  },
  {
    _id: uuid(),
    name: "Football Zoom",
    price: 701,
    description:
      "Show your team pride in a brand-new Nike Mercurial Vapor 14 Academy By You. Pop your design with an array of colours that reflect your power, speed and agility. Plate options let you pick the traction that's right for your game and a national flag option lets you rep your favourite squad.",
    categoryName: "football",
    inWishList: false,
    rating: 4,
    productImage: nike_mercurial,
  },
  {
    _id: uuid(),
    name: "LeBron 19",
    price: 107,
    categoryName: "basketball",
    description:
      "LeBron plays less in the paint and more at the point, so it makes sense that he wants to feel a little quicker. His 19th signature gives you the feeling of containment but with a lighter design that's ideal for fast, strong players like LeBron who stretch the court.",
    inWishList: false,
    rating: 4,
    productImage: LeBron_19,
  },
  {
    _id: uuid(),
    name: "Premier 3 FG",
    price: 901,
    description:
      "The Nike Premier 3 gets back to the basics with a timeless silhouette wrapped in supple kangaroo leather—helping you to move confidently as an unstoppable force on the pitch.",
    categoryName: "football",
    inWishList: false,
    rating: 3,
    productImage: premier_3_FG,
  },
  {
    _id: uuid(),
    name: "Kyrie Infinity EP",
    price: 108,
    categoryName: "basketball",
    description:
      "The faster Kyrie slows down, the quicker he can speed up or change direction. His ability to control his movement keeps defenders guessing—and him in control. The Kyrie Infinity EP provides a tight fit with enhanced responsiveness in the forefoot and traction up the sides, helping you accelerate and decelerate on demand.",
    inWishList: false,
    rating: 1,
    productImage: kyrie_infinity_ep,
  },
  {
    _id: uuid(),
    name: "KD15 EP",
    price: 101,
    categoryName: "basketball",
    description:
      "Kevin Durant thrives on big games. When the stakes are high, he will play every minute if it means getting a crucial victory. The KD15 is ready to go the distance. Lighter than his previous signature shoe, it helps you stay bouncy and comfortable at crunch time. The ride is as smooth as KDs pull-up jumper and the cushioning is as plush as his right-to-left crossover in traffic, so that you can feel contained when your team needs you the most. This EP version uses an extra-durable sole thats ideal for outdoor courts.",
    inWishList: false,
    rating: 3,
    productImage: KD15_EP,
  },
  {
    _id: uuid(),
    name: "jordan why not",
    price: 101,
    categoryName: "basketball",
    description:
      "Russell Westbrook is fast. The Jordan Why Not .5 helps keep him contained with updated cushioning, data-informed traction and a full-foot fit system that keeps him in control. It has the rugged utility look of a trail running shoe combined with the on-purpose clash of colours and materials at the core of Why Not?",
    inWishList: false,
    rating: 3,
    productImage: jordan_why_not,
  },
  {
    _id: uuid(),
    name: "Jordan 1 low",
    price: 115,
    description:
      "Are you ready for game day? Your fave kicks are. Inspired by the original AJ1 from '85, pixelated graphics and branding nod to old-school video games, while patent-leather overlays up the shine. What are you waiting for—hit the streets without a glitch.",
    categoryName: "jordans",
    inWishList: false,
    rating: 2,
    productImage: jordan_one_low,
  },
  {
    _id: uuid(),
    name: "zoom streakfly",
    price: 103,
    description:
      "Our lightest racing shoe, the Nike ZoomX Streakfly is all about the speed you need to take on the competition in a mile, 5K or 10K race. Low profile with sleek details, it feels like it disappears on your foot to help you better connect with the road on the way to your personal best.",
    categoryName: "running",
    inWishList: false,
    rating: 3,
    productImage: zoomX_streakfly,
  },
  {
    _id: uuid(),
    name: "Walking Zoom",
    price: 100,
    categoryName: "walking",
    inWishList: false,
    rating: 4,
    description:
      "The Nike React Infinity Run Flyknit 2 continues to help reduce injury and keep you running.A refreshed upper uses Flywire technology that combines with Flyknit for support and breathability where you need it.The high foam heights provide soft responsiveness and long-lasting comfort.Its still one of our most tested shoes, designed to help you feel the potential when your foot hits the pavement.",
    productImage: shoe,
  },
  {
    _id: uuid(),
    name: "Zoom Pegasus",
    price: 197,
    description:
      "Your workhorse with wings returns. The Nike Air Zoom Pegasus 38 continues to put a spring in your step, using the same responsive foam as its predecessor. Breathable mesh in the upper combines the comfort and durability you want with a wider fit at the toes.",
    categoryName: "running",
    inWishList: false,
    rating: 3,
    productImage: air_zoom_pegasus_38,
  },
];
