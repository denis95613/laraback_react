import { commonConstants } from "../constants";

const initialState = {
  proType: 3,
  storeHands: [
    {
      dis: "Upto 22.4% Cashback",
      was: "Was 11.2%",
      logoimage: "images/banggood.jpg",
    },
    {
      dis: "Upto 14.4% Cashback",
      was: "Was 9.6%",
      logoimage: "images/lightinthebox.jpg",
    },
    {
      dis: "Upto $80.00 Cashback",
      was: "Was $40.00",
      logoimage: "images/dx.jpg",
    },
    {
      dis: "Upto 5.1% Cashback",
      was: "Was 3.4%",
      logoimage: "images/shutterstock.jpg",
    },
    {
      dis: "Upto 4.2% Cashback",
      logoimage: "images/abebooks.png",
    },
    {
      dis: "Upto 11% Cashback",
      logoimage: "images/berrylook.jpg",
    },
    {
      dis: "Upto 8% Cashback",
      was: "Was 6.8%",
      logoimage: "images/biba-in.jpg",
    },
    {
      dis: "Upto $252.00 Cashback",
      was: "Was 168%",
      logoimage: "images/cleartrip-in.jpg",
    },
    {
      dis: "Upto 5.6% Cashback",
      logoimage: "images/easte.jpg",
    },
    {
      dis: "Upto 8% Cashback",
      logoimage: "images/eric.jpg",
    },
  ],
  storeClothings: [
    {
      dis: "Upto 22.4% Cashback",
      was: "Was 11.2%",
      logoimage: "images/banggood.jpg",
    },
    {
      dis: "Upto 14.4% Cashback",
      was: "Was 9.6%",
      logoimage: "images/lightinthebox.jpg",
    },
    {
      dis: "Upto $80.00 Cashback",
      was: "Was $40.00",
      logoimage: "images/dx.jpg",
    },
    {
      dis: "Upto 5.1% Cashback",
      was: "Was 3.4%",
      logoimage: "images/shutterstock.jpg",
    },
    {
      dis: "Upto 4.2% Cashback",
      logoimage: "images/abebooks.png",
    },
    {
      dis: "Upto 11% Cashback",
      logoimage: "images/berrylook.jpg",
    },
    {
      dis: "Upto 8% Cashback",
      was: "Was 6.8%",
      logoimage: "images/biba-in.jpg",
    },
    {
      dis: "Upto $252.00 Cashback",
      was: "Was 168%",
      logoimage: "images/cleartrip-in.jpg",
    },
    {
      dis: "Upto 5.6% Cashback",
      logoimage: "images/easte.jpg",
    },
    {
      dis: "Upto 8% Cashback",
      logoimage: "images/eric.jpg",
    },
  ],
  storeOnlineGames: [
    {
      dis: "Upto 22.4% Cashback",
      was: "Was 11.2%",
      logoimage: "images/dx.jpg",
    },
    {
      dis: "Upto 14.4% Cashback",
      was: "Was 9.6%",
      logoimage: "images/banggood.jpg",
    },
    {
      dis: "Upto $80.00 Cashback",
      was: "Was $40.00",
      logoimage: "images/lightinthebox.jpg",
    },
    {
      dis: "Upto 5.1% Cashback",
      was: "Was 3.4%",
      logoimage: "images/shutterstock.jpg",
    },
    {
      dis: "Upto 4.2% Cashback",
      logoimage: "images/abebooks.png",
    },
    {
      dis: "Upto 11% Cashback",
      logoimage: "images/berrylook.jpg",
    },
    {
      dis: "Upto 8% Cashback",
      was: "Was 6.8%",
      logoimage: "images/biba-in.jpg",
    },
    {
      dis: "Upto $252.00 Cashback",
      was: "Was 168%",
      logoimage: "images/cleartrip-in.jpg",
    },
    {
      dis: "Upto 5.6% Cashback",
      logoimage: "images/easte.jpg",
    },
    {
      dis: "Upto 8% Cashback",
      logoimage: "images/eric.jpg",
    },
  ],
  offerLatests: [
    {
      dis: "Upto 22.4% Cashback",
      was: "Was 11.2%",
      logoimage: "images/dx.jpg",
    },
    {
      dis: "Upto 14.4% Cashback",
      was: "Was 9.6%",
      logoimage: "images/money-back.png",
    },
    {
      dis: "Upto $80.00 Cashback",
      was: "Was $40.00",
      logoimage: "images/banggood.jpg",
    },
    {
      dis: "Upto 5.1% Cashback",
      was: "Was 3.4%",
      logoimage: "images/shutterstock.jpg",
    },
    {
      dis: "Upto 4.2% Cashback",
      logoimage: "images/abebooks.png",
    },
    {
      dis: "Upto 11% Cashback",
      logoimage: "images/lightinthebox.jpg",
    },
    {
      dis: "Upto 8% Cashback",
      was: "Was 6.8%",
      logoimage: "images/biba-in.jpg",
    },
    {
      dis: "Upto $252.00 Cashback",
      was: "Was 168%",
      logoimage: "images/cleartrip-in.jpg",
    },
    {
      dis: "Upto $252.00 Cashback",
      was: "Was 168%",
      logoimage: "images/easte.jpg",
    },
    {
      dis: "Upto $252.00 Cashback",
      was: "Was 168%",
      logoimage: "images/money-back.png",
    },
  ],
  offerHealths: [
    {
      dis: "Upto 22.4% Cashback",
      was: "Was 11.2%",
      logoimage: "images/banggood.jpg",
    },
    {
      dis: "Upto 14.4% Cashback",
      was: "Was 9.6%",
      logoimage: "images/lightinthebox.jpg",
    },
    {
      dis: "Upto $80.00 Cashback",
      was: "Was $40.00",
      logoimage: "images/dx.jpg",
    },
    {
      dis: "Upto 5.1% Cashback",
      was: "Was 3.4%",
      logoimage: "images/shutterstock.jpg",
    },
    {
      dis: "Upto 4.2% Cashback",
      logoimage: "images/abebooks.png",
    },
    {
      dis: "Upto 11% Cashback",
      logoimage: "images/berrylook.jpg",
    },
    {
      dis: "Upto 8% Cashback",
      was: "Was 6.8%",
      logoimage: "images/biba-in.jpg",
    },
    {
      dis: "Upto $252.00 Cashback",
      was: "Was 168%",
      logoimage: "images/cleartrip-in.jpg",
    },
    {
      dis: "Upto $252.00 Cashback",
      was: "Was 168%",
      logoimage: "images/easte.jpg",
    },
    {
      dis: "Upto $252.00 Cashback",
      was: "Was 168%",
      logoimage: "images/money-back.png",
    },
  ],
  offerFashions: [
    {
      dis: "Upto 22.4% Cashback",
      was: "Was 11.2%",
      logoimage: "images/dx.jpg",
    },
    {
      dis: "Upto 14.4% Cashback",
      was: "Was 9.6%",
      logoimage: "images/lightinthebox.jpg",
    },
    {
      dis: "Upto $80.00 Cashback",
      was: "Was $40.00",
      logoimage: "images/banggood.jpg",
    },
    {
      dis: "Upto 5.1% Cashback",
      was: "Was 3.4%",
      logoimage: "images/lightinthebox.jpg",
    },
    {
      dis: "Upto 4.2% Cashback",
      was: "Was 3.4%",
      logoimage: "images/money-back.png",
    },
    {
      dis: "Upto 11% Cashback",
      was: "Was 3.4%",
      logoimage: "images/biba-in.jpg",
    },
    {
      dis: "Upto 8% Cashback",
      was: "Was 6.8%",
      logoimage: "images/biba-in.jpg",
    },
    {
      dis: "Upto $252.00 Cashback",
      was: "Was 168%",
      logoimage: "images/cleartrip-in.jpg",
    },
    {
      dis: "Upto $252.00 Cashback",
      was: "Was 168%",
      logoimage: "images/easte.jpg",
    },
    {
      dis: "Upto $252.00 Cashback",
      was: "Was 168%",
      logoimage: "images/money-back.png",
    },
  ],
  dealFeatures: [
    {
      logoimage: "images/banggood.jpg",
      label: "40% Off",
      logoProfile: "images/cap.jpeg",
      dis: "Upto 22.4% Cashback",
      wasAmt: "$1,320.00",
      currentAmt: "$327.00",
      linkProduct:
        "Women Flower Cotton Warm Beanies Cap Muslim Casual Hat -Watermelon Red",
      linkView: "View All Banggood Deals",
    },
    {
      logoimage: "images/ipad2.png",
      label: "40% Off",
      logoProfile: "images/easte.jpg",
      dis: "Upto 22.4% Cashback",
      wasAmt: "$1,320.00",
      currentAmt: "$327.00",
      linkProduct:
        "Women Flower Cotton Warm Beanies Cap Muslim Casual Hat -Watermelon Red",
      linkView: "View All Banggood Deals",
    },
    {
      logoimage: "images/eric.jpg",
      label: "40% Off",
      logoProfile: "images/cap.jpeg",
      dis: "Upto 22.4% Cashback",
      wasAmt: "$1,320.00",
      currentAmt: "$327.00",
      linkProduct:
        "Women Flower Cotton Warm Beanies Cap Muslim Casual Hat -Watermelon Red",
      linkView: "View All Banggood Deals",
    },
    {
      logoimage: "images/dx.jpg",
      label: "40% Off",
      logoProfile: "images/cap.jpeg",
      dis: "Upto 22.4% Cashback",
      wasAmt: "$1,320.00",
      currentAmt: "$327.00",
      linkProduct:
        "Women Flower Cotton Warm Beanies Cap Muslim Casual Hat -Watermelon Red",
      linkView: "View All Banggood Deals",
    },
    {
      logoimage: "images/shutterstock.jpg",
      label: "40% Off",
      logoProfile: "images/cap.jpeg",
      dis: "Upto 22.4% Cashback",
      wasAmt: "$1,320.00",
      currentAmt: "$327.00",
      linkProduct:
        "Women Flower Cotton Warm Beanies Cap Muslim Casual Hat -Watermelon Red",
      linkView: "View All Banggood Deals",
    },
    {
      logoimage: "images/abebooks.png",
      label: "40% Off",
      logoProfile: "images/cap.jpeg",
      dis: "Upto 22.4% Cashback",
      wasAmt: "$1,320.00",
      currentAmt: "$327.00",
      linkProduct:
        "Women Flower Cotton Warm Beanies Cap Muslim Casual Hat -Watermelon Red",
      linkView: "View All Banggood Deals",
    },
    {
      logoimage: "images/berrylook.jpg",
      label: "40% Off",
      logoProfile: "images/cap.jpeg",
      dis: "Upto 22.4% Cashback",
      wasAmt: "$1,320.00",
      currentAmt: "$327.00",
      linkProduct:
        "Women Flower Cotton Warm Beanies Cap Muslim Casual Hat -Watermelon Red",
      linkView: "View All Banggood Deals",
    },
    {
      logoimage: "images/biba-in.jpg",
      label: "40% Off",
      logoProfile: "images/cap.jpeg",
      dis: "Upto 22.4% Cashback",
      wasAmt: "$1,320.00",
      currentAmt: "$327.00",
      linkProduct:
        "Women Flower Cotton Warm Beanies Cap Muslim Casual Hat -Watermelon Red",
      linkView: "View All Banggood Deals",
    },
    {
      logoimage: "images/cleartrip-in.jpg",
      label: "40% Off",
      logoProfile: "images/cap.jpeg",
      dis: "Upto 22.4% Cashback",
      wasAmt: "$1,320.00",
      currentAmt: "$327.00",
      linkProduct:
        "Women Flower Cotton Warm Beanies Cap Muslim Casual Hat -Watermelon Red",
      linkView: "View All Banggood Deals",
    },
    {
      logoimage: "images/easte.jpg",
      label: "40% Off",
      logoProfile: "images/cap.jpeg",
      dis: "Upto 22.4% Cashback",
      wasAmt: "$1,320.00",
      currentAmt: "$327.00",
      linkProduct:
        "Women Flower Cotton Warm Beanies Cap Muslim Casual Hat -Watermelon Red",
      linkView: "View All Banggood Deals",
    },
  ],
  dealElectronics: [
    {
      logoimage: "images/ipad2.png",
      label: "40% Off",
      logoProfile: "images/cap.jpeg",
      dis: "Upto 22.4% Cashback",
      wasAmt: "$1,320.00",
      currentAmt: "$327.00",
      linkProduct:
        "Women Flower Cotton Warm Beanies Cap Muslim Casual Hat -Watermelon Red",
      linkView: "View All Banggood Deals",
    },
    {
      logoimage: "images/ipad2.png",
      label: "40% Off",
      logoProfile: "images/easte.jpg",
      dis: "Upto 22.4% Cashback",
      wasAmt: "$1,320.00",
      currentAmt: "$327.00",
      linkProduct:
        "Women Flower Cotton Warm Beanies Cap Muslim Casual Hat -Watermelon Red",
      linkView: "View All Banggood Deals",
    },
    {
      logoimage: "images/eric.jpg",
      label: "40% Off",
      logoProfile: "images/cap.jpeg",
      dis: "Upto 22.4% Cashback",
      wasAmt: "$1,320.00",
      currentAmt: "$327.00",
      linkProduct:
        "Women Flower Cotton Warm Beanies Cap Muslim Casual Hat -Watermelon Red",
      linkView: "View All Banggood Deals",
    },
    {
      logoimage: "images/dx.jpg",
      label: "40% Off",
      logoProfile: "images/cap.jpeg",
      dis: "Upto 22.4% Cashback",
      wasAmt: "$1,320.00",
      currentAmt: "$327.00",
      linkProduct:
        "Women Flower Cotton Warm Beanies Cap Muslim Casual Hat -Watermelon Red",
      linkView: "View All Banggood Deals",
    },
    {
      logoimage: "images/shutterstock.jpg",
      label: "40% Off",
      logoProfile: "images/cap.jpeg",
      dis: "Upto 22.4% Cashback",
      wasAmt: "$1,320.00",
      currentAmt: "$327.00",
      linkProduct:
        "Women Flower Cotton Warm Beanies Cap Muslim Casual Hat -Watermelon Red",
      linkView: "View All Banggood Deals",
    },
    {
      logoimage: "images/abebooks.png",
      label: "40% Off",
      logoProfile: "images/cap.jpeg",
      dis: "Upto 22.4% Cashback",
      wasAmt: "$1,320.00",
      currentAmt: "$327.00",
      linkProduct:
        "Women Flower Cotton Warm Beanies Cap Muslim Casual Hat -Watermelon Red",
      linkView: "View All Banggood Deals",
    },
    {
      logoimage: "images/berrylook.jpg",
      label: "40% Off",
      logoProfile: "images/cap.jpeg",
      dis: "Upto 22.4% Cashback",
      wasAmt: "$1,320.00",
      currentAmt: "$327.00",
      linkProduct:
        "Women Flower Cotton Warm Beanies Cap Muslim Casual Hat -Watermelon Red",
      linkView: "View All Banggood Deals",
    },
    {
      logoimage: "images/biba-in.jpg",
      label: "40% Off",
      logoProfile: "images/cap.jpeg",
      dis: "Upto 22.4% Cashback",
      wasAmt: "$1,320.00",
      currentAmt: "$327.00",
      linkProduct:
        "Women Flower Cotton Warm Beanies Cap Muslim Casual Hat -Watermelon Red",
      linkView: "View All Banggood Deals",
    },
    {
      logoimage: "images/cleartrip-in.jpg",
      label: "40% Off",
      logoProfile: "images/cap.jpeg",
      dis: "Upto 22.4% Cashback",
      wasAmt: "$1,320.00",
      currentAmt: "$327.00",
      linkProduct:
        "Women Flower Cotton Warm Beanies Cap Muslim Casual Hat -Watermelon Red",
      linkView: "View All Banggood Deals",
    },
    {
      logoimage: "images/easte.jpg",
      label: "40% Off",
      logoProfile: "images/cap.jpeg",
      dis: "Upto 22.4% Cashback",
      wasAmt: "$1,320.00",
      currentAmt: "$327.00",
      linkProduct:
        "Women Flower Cotton Warm Beanies Cap Muslim Casual Hat -Watermelon Red",
      linkView: "View All Banggood Deals",
    },
  ],
  dealFashions: [
    {
      logoimage: "images/banggood.jpg",
      label: "40% Off",
      logoProfile: "images/cap.jpeg",
      dis: "Upto 22.4% Cashback",
      wasAmt: "$1,320.00",
      currentAmt: "$327.00",
      linkProduct:
        "Women Flower Cotton Warm Beanies Cap Muslim Casual Hat -Watermelon Red",
      linkView: "View All Banggood Deals",
    },
    {
      logoimage: "images/ipad2.png",
      label: "40% Off",
      logoProfile: "images/easte.jpg",
      dis: "Upto 22.4% Cashback",
      wasAmt: "$1,320.00",
      currentAmt: "$327.00",
      linkProduct:
        "Women Flower Cotton Warm Beanies Cap Muslim Casual Hat -Watermelon Red",
      linkView: "View All Banggood Deals",
    },
    {
      logoimage: "images/eric.jpg",
      label: "40% Off",
      logoProfile: "images/cap.jpeg",
      dis: "Upto 22.4% Cashback",
      wasAmt: "$1,320.00",
      currentAmt: "$327.00",
      linkProduct:
        "Women Flower Cotton Warm Beanies Cap Muslim Casual Hat -Watermelon Red",
      linkView: "View All Banggood Deals",
    },
    {
      logoimage: "images/dx.jpg",
      label: "40% Off",
      logoProfile: "images/cap.jpeg",
      dis: "Upto 22.4% Cashback",
      wasAmt: "$1,320.00",
      currentAmt: "$327.00",
      linkProduct:
        "Women Flower Cotton Warm Beanies Cap Muslim Casual Hat -Watermelon Red",
      linkView: "View All Banggood Deals",
    },
    {
      logoimage: "images/shutterstock.jpg",
      label: "40% Off",
      logoProfile: "images/cap.jpeg",
      dis: "Upto 22.4% Cashback",
      wasAmt: "$1,320.00",
      currentAmt: "$327.00",
      linkProduct:
        "Women Flower Cotton Warm Beanies Cap Muslim Casual Hat -Watermelon Red",
      linkView: "View All Banggood Deals",
    },
    {
      logoimage: "images/abebooks.png",
      label: "40% Off",
      logoProfile: "images/cap.jpeg",
      dis: "Upto 22.4% Cashback",
      wasAmt: "$1,320.00",
      currentAmt: "$327.00",
      linkProduct:
        "Women Flower Cotton Warm Beanies Cap Muslim Casual Hat -Watermelon Red",
      linkView: "View All Banggood Deals",
    },
    {
      logoimage: "images/berrylook.jpg",
      label: "40% Off",
      logoProfile: "images/cap.jpeg",
      dis: "Upto 22.4% Cashback",
      wasAmt: "$1,320.00",
      currentAmt: "$327.00",
      linkProduct:
        "Women Flower Cotton Warm Beanies Cap Muslim Casual Hat -Watermelon Red",
      linkView: "View All Banggood Deals",
    },
    {
      logoimage: "images/biba-in.jpg",
      label: "40% Off",
      logoProfile: "images/cap.jpeg",
      dis: "Upto 22.4% Cashback",
      wasAmt: "$1,320.00",
      currentAmt: "$327.00",
      linkProduct:
        "Women Flower Cotton Warm Beanies Cap Muslim Casual Hat -Watermelon Red",
      linkView: "View All Banggood Deals",
    },
    {
      logoimage: "images/cleartrip-in.jpg",
      label: "40% Off",
      logoProfile: "images/cap.jpeg",
      dis: "Upto 22.4% Cashback",
      wasAmt: "$1,320.00",
      currentAmt: "$327.00",
      linkProduct:
        "Women Flower Cotton Warm Beanies Cap Muslim Casual Hat -Watermelon Red",
      linkView: "View All Banggood Deals",
    },
    {
      logoimage: "images/easte.jpg",
      label: "40% Off",
      logoProfile: "images/cap.jpeg",
      dis: "Upto 22.4% Cashback",
      wasAmt: "$1,320.00",
      currentAmt: "$327.00",
      linkProduct:
        "Women Flower Cotton Warm Beanies Cap Muslim Casual Hat -Watermelon Red",
      linkView: "View All Banggood Deals",
    },
  ],
  cashbackHands: [
    {
      dis: "Upto 22.4% Cashback",
      was: "Was 11.2%",
      logoimage: "images/banggood.jpg",
    },
    {
      dis: "Upto 14.4% Cashback",
      was: "Was 9.6%",
      logoimage: "images/lightinthebox.jpg",
    },
    {
      dis: "Upto $80.00 Cashback",
      was: "Was $40.00",
      logoimage: "images/dx.jpg",
    },
    {
      dis: "Upto 5.1% Cashback",
      was: "Was 3.4%",
      logoimage: "images/shutterstock.jpg",
    },
    {
      dis: "Upto 4.2% Cashback",
      logoimage: "images/abebooks.png",
    },
    {
      dis: "Upto 11% Cashback",
      logoimage: "images/berrylook.jpg",
    },
    {
      dis: "Upto 8% Cashback",
      was: "Was 6.8%",
      logoimage: "images/biba-in.jpg",
    },
    {
      dis: "Upto $252.00 Cashback",
      was: "Was 168%",
      logoimage: "images/cleartrip-in.jpg",
    },
    {
      dis: "Upto 5.6% Cashback",
      logoimage: "images/easte.jpg",
    },
    {
      dis: "Upto 8% Cashback",
      logoimage: "images/eric.jpg",
    },
  ],
  cashbackBooks: [
    {
      dis: "Upto 22.4% Cashback",
      was: "Was 11.2%",
      logoimage: "images/banggood.jpg",
    },
    {
      dis: "Upto 14.4% Cashback",
      was: "Was 9.6%",
      logoimage: "images/lightinthebox.jpg",
    },
    {
      dis: "Upto $80.00 Cashback",
      was: "Was $40.00",
      logoimage: "images/dx.jpg",
    },
    {
      dis: "Upto 5.1% Cashback",
      was: "Was 3.4%",
      logoimage: "images/shutterstock.jpg",
    },
    {
      dis: "Upto 4.2% Cashback",
      logoimage: "images/abebooks.png",
    },
    {
      dis: "Upto 11% Cashback",
      logoimage: "images/berrylook.jpg",
    },
    {
      dis: "Upto 8% Cashback",
      was: "Was 6.8%",
      logoimage: "images/biba-in.jpg",
    },
    {
      dis: "Upto $252.00 Cashback",
      was: "Was 168%",
      logoimage: "images/cleartrip-in.jpg",
    },
    {
      dis: "Upto 5.6% Cashback",
      logoimage: "images/easte.jpg",
    },
    {
      dis: "Upto 8% Cashback",
      logoimage: "images/eric.jpg",
    },
  ],
  cashbackDeposits: [
    {
      dis: "Upto 22.4% Cashback",
      was: "Was 11.2%",
      logoimage: "images/banggood.jpg",
    },
    {
      dis: "Upto 14.4% Cashback",
      was: "Was 9.6%",
      logoimage: "images/lightinthebox.jpg",
    },
    {
      dis: "Upto $80.00 Cashback",
      was: "Was $40.00",
      logoimage: "images/dx.jpg",
    },
    {
      dis: "Upto 5.1% Cashback",
      was: "Was 3.4%",
      logoimage: "images/shutterstock.jpg",
    },
    {
      dis: "Upto 4.2% Cashback",
      logoimage: "images/abebooks.png",
    },
    {
      dis: "Upto 11% Cashback",
      logoimage: "images/berrylook.jpg",
    },
    {
      dis: "Upto 8% Cashback",
      was: "Was 6.8%",
      logoimage: "images/biba-in.jpg",
    },
    {
      dis: "Upto $252.00 Cashback",
      was: "Was 168%",
      logoimage: "images/cleartrip-in.jpg",
    },
    {
      dis: "Upto 5.6% Cashback",
      logoimage: "images/easte.jpg",
    },
    {
      dis: "Upto 8% Cashback",
      logoimage: "images/eric.jpg",
    },
  ],
  categoryDeals: [
    {
      categoryBgImg: "images/others-header.png",
      categoryImg: "images/others.png",
      categoryTitle: "Others",
    },
    {
      categoryBgImg: "images/others-header.png",
      categoryImg: "images/others.png",
      categoryTitle: "Kitchen Appliances",
    },
    {
      categoryBgImg: "images/others-header.png",
      categoryImg: "images/others.png",
      categoryTitle: "Home Appliances",
    },
    {
      categoryBgImg: "images/others-header.png",
      categoryImg: "images/others.png",
      categoryTitle: "Home & Kitchen",
    },
    {
      categoryBgImg: "images/others-header.png",
      categoryImg: "images/others.png",
      categoryTitle: "Baby & Kids",
    },
    {
      categoryBgImg: "images/others-header.png",
      categoryImg: "images/others.png",
      categoryTitle: "Watches",
    },
  ],
  categoryCoupons: [
    {
      categoryImg: "images/clothing-icon.png",
      categoryTitle: "Clothing",
    },
    {
      categoryImg: "images/clothing-icon.png",
      categoryTitle: "Shoes",
    },
    {
      categoryImg: "images/clothing-icon.png",
      categoryTitle: "Gifts & Flowers",
    },
    {
      categoryImg: "images/clothing-icon.png",
      categoryTitle: "Health & Beauty",
    },
    {
      categoryImg: "images/clothing-icon.png",
      categoryTitle: "Accessories & Bags",
    },
    {
      categoryImg: "images/clothing-icon.png",
      categoryTitle: "Baby & Kids products",
    },
    {
      categoryImg: "images/clothing-icon.png",
      categoryTitle: "Sports & Recreation",
    },
    {
      categoryImg: "images/clothing-icon.png",
      categoryTitle: "Books",
    },
  ],
  categoryStores: [
    {
      categoryImg: "images/online-games.png",
      categoryTitle: "Online Games",
    },
    {
      categoryImg: "images/online-games.png",
      categoryTitle: "Deposits",
    },
    {
      categoryImg: "images/online-games.png",
      categoryTitle: "Loans",
    },
    {
      categoryImg: "images/online-games.png",
      categoryTitle: "Financial programs",
    },
    {
      categoryImg: "images/online-games.png",
      categoryTitle: "Client",
    },
    {
      categoryImg: "images/online-games.png",
      categoryTitle: "Online Services",
    },
    {
      categoryImg: "images/online-games.png",
      categoryTitle: "Professional services",
    },
    {
      categoryImg: "images/online-games.png",
      categoryTitle: "Games for iOS",
    },
  ],
};

export function common(state = initialState, action) {
  switch (action.type) {
    case commonConstants.GETALL_SUCCESS:
      return {
        items: action.common,
      };
    case commonConstants.SET_SUCCESS:
      return { ...initialState, proType: action.proType.proType };
    default:
      return state;
  }
}
