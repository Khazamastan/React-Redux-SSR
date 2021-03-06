var product = require('./products'); // Imports routes for the products
var restaurant = require('./restaurant'); // Imports routes for the products
var cart = require('./cart'); // Imports routes for the products
var user = require('./user'); // Imports routes for the products
import {getBaseURL} from '../api';
let baseURL = getBaseURL();
export default function handleRoutes(app) {
    console.error("HELLO" + baseURL);
    app.use(`${baseURL}/product`, product);
    app.use(`${baseURL}/restaurant`, restaurant);
    app.use(`${baseURL}/cart`, cart);
    app.use(`${baseURL}/user`, user);

//   app.get("/api/news", (req, res) => {
//     res.json([
//       {
//         id: 1,
//         price: 130,
//         image:
//           "https://images.unsplash.com/photo-1536974735554-66bfa1ede9f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=150&h=150",
//         name: "Fianto Duri",
//         details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//         date: new Date("2017-04-14T15:30:00.000Z"),
//       },
//       {
//         id: 2,
//         price: 126,
//         image:
//           "https://images.unsplash.com/photo-1490457843367-34b21b6ccd85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=150&q=80",
//         name: "Ordinary Wizardin",
//         details:
//           "Maecenas non lorem finibus, efficitur massa at, sollicitudin nibh.",
//         date: new Date("2017-04-14T15:30:00.000Z"),
//       },
//       {
//         id: 3,
//         price: 114,
//         image:
//           "https://images.unsplash.com/photo-1521305916504-4a1121188589?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=150&q=80",
//         name: "Is muggle-baitin",
//         details: "Praesent laoreet massa vitae dui fringilla gravida.",
//         date: new Date("2017-04-14T15:30:00.000Z"),
//       },
//       {
//         id: 4,
//         price: 97,
//         image:
//           "https://images.unsplash.com/photo-1573333515743-56d57731dd1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=150&q=80",
//         name: "Untransfiguration",
//         details: "Etiam venenatis urna ac nulla euismod dictum.",
//         date: new Date("2017-04-14T15:30:00.000Z"),
//       },
//       {
//         id: 5,
//         price: 85,
//         image:
//           "https://images.unsplash.com/photo-1560684352-8497838a2229?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=150&q=80",
//         name: "Crackin",
//         details: "Vivamus rutrum tortor ac massa ultricies luctus.",
//         date: new Date("2017-04-14T15:30:00.000Z"),
//       },
//       {
//         id: 6,
//         price: 74,
//         image:
//           "https://images.unsplash.com/photo-1558520871-44a39440e1c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=150&q=80",
//         name: "Conservin",
//         details:
//           "Suspendisse commodo nunc non odio tempor, vel sodales felis iaculis.",
//         date: new Date("2017-04-14T15:30:00.000Z"),
//       },
//       {
//         id: 7,
//         price: 66,
//         image:
//           "https://images.unsplash.com/photo-1550950158-d0d960dff51b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=150&q=80",
//         name: "Th",
//         details: "Vestibulum eu est nec ante tincidunt laoreet.",
//         date: new Date("2017-04-14T15:30:00.000Z"),
//       },
//       {
//         id: 8,
//         price: 50,
//         image:
//           "https://images.unsplash.com/photo-1576343123473-0e7d3a34c5da?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
//         name: "Th",
//         details: "Aenean vel eros non felis fermentum congue ut vel dui..",
//         date: new Date("2017-04-14T15:30:00.000Z"),
//       },
//       {
//         id: 9,
//         price: 34,
//         image:
//           "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=150&q=80",
//         name: "Crackin",
//         details: "Ut eu augue ut massa posuere imperdiet..",
//         date: new Date("2017-04-14T15:30:00.000Z"),
//       },
//       {
//         id: 10,
//         price: 29,
//         image:
//           "https://images.unsplash.com/photo-1562629595-ba188068fb33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=150&q=80",
//         name: "Could wizard",
//         details:
//           "Nulla in justo ullamcorper, vulputate mauris id, pharetra nisi.",
//         date: new Date("2017-04-14T15:30:00.000Z"),
//       },
//       {
//         id: 11,
//         price: 20,
//         image:
//           "https://images.unsplash.com/photo-1447195047884-0f014b0d9288?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=150&q=80",
//         name: "ASK WN",
//         details: "Aenean pretium leo ac ex eleifend laoreet.",
//         date: new Date("2017-04-14T15:30:00.000Z"),
//       },
//       {
//         id: 12,
//         price: 16,
//         image:
//           "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
//         name: "Show WN: Wa",
//         details:
//           "Fusce vitae eros eleifend, tincidunt elit ac, suscipit ligula.",
//         date: new Date("2017-04-14T15:30:00.000Z"),
//       },
//     ]);
//   });
}
