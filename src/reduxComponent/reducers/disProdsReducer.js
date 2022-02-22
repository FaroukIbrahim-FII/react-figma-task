const FILTER_ITEMS = "FILTER_ITEMS";
const products = [
  {
    id: 1,
    imgsrc: "http://localhost:3000/blueBag.png",
    imgName: "Blue Bage",
    price: 50,
    condition: "new",
    rate: 4,
  },
  {
    id: 2,
    imgsrc: "http://localhost:3000/blueShirt.png",
    imgName: "Blue Shirt",
    price: 34,
    condition: "second hand",
    rate: 3,
  },
  {
    id: 3,
    imgsrc: "http://localhost:3000/brownJacket.png",
    imgName: "Brown Jacket",
    price: 123,
    condition: "refurbished",
    rate: 5,
  },
  {
    id: 4,
    imgsrc: "http://localhost:3000/letherWallet.png",
    imgName: "Lether Wallet",
    price: 63,
    condition: "other",
    rate: 5,
  },
  {
    id: 5,
    imgsrc: "http://localhost:3000/shorts.png",
    imgName: "Shorts",
    price: 89,
    condition: "new",
    rate: 2,
  },
  {
    id: 6,
    imgsrc: "http://localhost:3000/toxedo.png",
    imgName: "Toxedo",
    price: 102,
    condition: "refurbished",
    rate: 1,
  },
];

const disProdsReducer = (state = products, action) => {
  switch (action.type) {
    case FILTER_ITEMS:
      const oldState = [...state];
      const filteredArray = action.payload;
      return filteredArray;
    default:
      return state;
  }
};
export default disProdsReducer;
