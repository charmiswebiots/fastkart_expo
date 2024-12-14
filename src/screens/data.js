import images from "../utils/images"
import { Icons } from "../utils/icons";
import appColors from "../theme/appColors";
import { windowHeight, windowWidth } from "../theme/appConstant";

export const swiperData = [
    { id: 1, title: 'homepage.farmFreshVegies', subTitle: 'homepage.getInstantDelivery', shopNow: 'homepage.shopNow', image: images.banner1 },
    { id: 2, title: 'homepage.farmFreshVegies', subTitle: 'homepage.getInstantDelivery', shopNow: 'homepage.shopNow', image: images.banner2 },
];

export const recentlyBrought = [
    { id: 1, image: images.recentBought1 },
    { id: 2, image: images.recentBought3 },
    { id: 3, image: images.recentBought2 },
    { id: 4, image: images.recentBought5 },
    { id: 5, image: images.recentBought4 },
    { id: 6, image: images.recentBought1 },
    { id: 7, image: images.recentBought3 },
];


export const category = [
    { id: '1', name: 'categoryArr.oilsRefinedGhee', image: images.category1 },
    { id: '2', name: 'categoryArr.riceFlourGrains', image: images.category2 },
    { id: '3', name: 'categoryArr.foodCupboard', image: images.category3 },
    { id: '4', name: 'categoryArr.freshFruitsVegetables', image: images.category4 },
    { id: '5', name: 'categoryArr.drinksBeverages', image: images.category5 },
    { id: '6', name: 'categoryArr.instantMixes', image: images.category6 },
    { id: '7', name: 'categoryArr.readytoEat', image: images.category7 },
    { id: '8', name: 'categoryArr.dalsPulses', image: images.category8 },
];


export const offers = [
    { name: 'product.assortedCapsicumCombo', image: images.recentBought1, price: 25, weight: 'productArr.weight10', discount: '50' },
    { name: 'product.assortedCapsicumCombo', image: images.recentBought2, price: 25, weight: 'productArr.weight10', discount: '50' },
    { name: 'product.assortedCapsicumCombo', image: images.recentBought3, price: 25, weight: 'productArr.weight10', discount: '50' },
];

export const lowestPrice = [
    { name: 'product.assortedCapsicumCombo', image: images.product3, price: 25, weight: 'productArr.weight10' },
    { name: 'product.assortedCapsicumCombo', image: images.product2, price: 25, weight: 'productArr.weight10' },
    { name: 'product.assortedCapsicumCombo', image: images.product1, price: 25, weight: 'productArr.weight10' },
    { name: 'product.assortedCapsicumCombo', image: images.product4, price: 25, weight: 'productArr.weight10' },
];

export const bestPrice = [
    { name: 'product.assortedCapsicumCombo', image: images.product6, price: 25, weight: 'productArr.weight10' },
    { name: 'product.assortedCapsicumCombo', image: images.product5, price: 25, weight: 'productArr.weight10' },
    { name: 'product.assortedCapsicumCombo', image: images.product4, price: 25, weight: 'productArr.weight10' },
    { name: 'product.assortedCapsicumCombo', image: images.product2, price: 25, weight: 'productArr.weight10' },
];

export const coupons = [
    { icon: images.gpay, discount: '30', off: 20, },
    { icon: images.venmo, discount: '20', off: 90, },
    { icon: images.paypal, discount: '37', off: 70, },
];

export const drawerItems = [
    { name: 'Home', icons: <Icons.home />, showSwitch: false },
    { name: 'FastKart Pages list', icons: <Icons.pageList />, showSwitch: false },
    { name: 'Shop by Category', icons: <Icons.category />, showSwitch: false },
    { name: 'Orders', icons: <Icons.order />, showSwitch: false },
    { name: 'Your Wishlist', icons: <Icons.wishlist />, showSwitch: false },
    { name: 'Langauge', icons: <Icons.language />, showSwitch: false },
    { name: 'Your Account', icons: <Icons.profile />, showSwitch: false },
    { name: 'Notification', icons: <Icons.notification />, showSwitch: false },
    { name: 'Settings', icons: <Icons.settings />, showSwitch: false },
    { name: 'drawer.currencyConverter', icons: <Icons.currencyConverter />, showSwitch: false },
];


export const notification = [
    {
        day: 'notificationArr.title1',
        value: [
            { title: 'notificationArr.value1', subtxt: 'notificationArr.time1', icon: <Icons.discount />, tag: 'notificationArr.type3', color: appColors.drawer },
            { title: 'notificationArr.value1', subtxt: 'notificationArr.time1', icon: <Icons.offer />, tag: 'notificationArr.type3', color: appColors.yellow },
        ]
    },
    {
        day: 'notificationArr.title2',
        value: [
            { title: 'notificationArr.value3', subtxt: 'notificationArr.time3', icon: <Icons.passChange />, tag: 'notificationArr.type1', color: appColors.pink },
            { title: 'notificationArr.value4', subtxt: 'notificationArr.time4', icon: <Icons.topUp />, tag: 'notificationArr.type2', color: appColors.topUp },
            { title: 'notificationArr.value1', subtxt: 'notificationArr.time1', icon: <Icons.discount />, tag: 'notificationArr.type3', color: appColors.drawer },
            { title: 'notificationArr.value2', subtxt: 'notificationArr.time2', icon: <Icons.offer />, tag: 'notificationArr.type3', color: appColors.yellow },
            { title: 'notificationArr.value3', subtxt: 'notificationArr.time3', icon: <Icons.passChange />, tag: 'notificationArr.type1', color: appColors.pink },
            { title: 'notificationArr.value4', subtxt: 'notificationArr.time4', icon: <Icons.topUp />, tag: 'notificationArr.type2', color: appColors.topUp },
            { title: 'notificationArr.value1', subtxt: 'notificationArr.time1', icon: <Icons.discount />, tag: 'notificationArr.type3', color: appColors.drawer },
            { title: 'notificationArr.value2', subtxt: 'notificationArr.time2', icon: <Icons.offer />, tag: 'notificationArr.type3', color: appColors.drawer },
        ]
    },
];


export const myOffers = [
    { off: '50', onOrderAbove: 'cartlist.orderabove', onOrder: 'myOffersArr.onOrder', code: 'coupon.useCode ' },
    { off: '25', onOrderAbove: 'cartlist.orderabove', onOrder: 'myOffersArr.onOrder', code: 'coupon.useCode ' },
    { off: '40', onOrderAbove: 'cartlist.orderabove', onOrder: 'myOffersArr.onOrder', code: 'coupon.useCode ' },
    { off: '30', onOrderAbove: 'cartlist.orderabove', onOrder: 'myOffersArr.onOrder', code: 'coupon.useCode ' },
    { off: '15', onOrderAbove: 'cartlist.orderabove', onOrder: 'myOffersArr.onOrder', code: 'coupon.useCode' },
    { off: '10', onOrderAbove: 'cartlist.orderabove', onOrder: 'myOffersArr.onOrder', code: 'coupon.useCode ' },
];

export const termsCondition = [
    { terms: 'couponModal.terms1' },
    { terms: 'couponModal.terms2' }
];

export const offersFilter = [
    { offer: 'offersFilterArr.allOffer' },
    { offer: 'offersFilterArr.morethan50' },
    { offer: 'offersFilterArr.morethan50' },
    { offer: 'offersFilterArr.morethan50' },
    { offer: 'offersFilterArr.morethan50' },
    { offer: 'offersFilterArr.morethan50' },
];

export const recentlySearch = [
    { name: 'subCategoryArr.vegetables' },
    { name: 'subCategoryArr.fruits' },
    { name: 'recentlySearch.beauty' },
    { name: 'subCategoryArr.fruits' },
];


export const category1 = [
    { image: images.img1, backgroundColor: appColors.imgColor, borderColor: appColors.imgBorder },
    { image: images.img2, backgroundColor: appColors.imgColo2, borderColor: appColors.category1 },
    { image: images.img3, backgroundColor: appColors.imgColo3, borderColor: appColors.category2 },
    { image: images.img4, backgroundColor: appColors.imgColo3, borderColor: appColors.category4 },
    { image: images.img5, backgroundColor: appColors.imgColor, borderColor: appColors.imgBorder },
    { image: images.img6, backgroundColor: appColors.imgColo2, borderColor: appColors.category1 },
    { image: images.img7, backgroundColor: appColors.imgColo3, borderColor: appColors.category4 },

];


export const trendingProducts = [
    { name: 'product.assortedCapsicumCombo', image: images.recentBought1, price: 25, weight: 'productArr.weight10', discount: '50' },
    { name: 'product.assortedCapsicumCombo', image: images.recentBought5, price: 25, weight: 'productArr.weight10', discount: '50' },
];


export const howIOrder = [
    { question: 'aboutUsArr.question1', answer: 'aboutUsArr.answer1' },
    { question: 'aboutUsArr.question2', answer: 'aboutUsArr.answer2' },
    { question: 'aboutUsArr.question3', answer: 'aboutUsArr.answer3' },
    { question: 'aboutUsArr.question4', answer: 'aboutUsArr.answer4' },
];

export const orderHistoryTime = [
    { time: 'orderHistoryPage.processing' },
    { time: 'orderHistoryPage.last30days' },
    { time: 'orderHistory.historyTime' },
    { time: 'orderHistory.historyTime1' },
];

export const orderHistory = [
    {
        id: 'orderHistory.orderHistoryId',
        date: 'orderHistory.orderHistoryDate',
        add: 'orderHistory.orderHistoryAdd',
        paid: 250,
        item: 15,
        review: 0
    },
    {
        id: 'orderHistory.orderHistoryId',
        date: 'orderHistory.orderHistoryDate',
        add: 'orderHistory.orderHistoryAdd',
        paid: 250,
        item: 15,
        review: 2
    },
    {
        id: 'orderHistory.orderHistoryId',
        date: 'orderHistory.orderHistoryDate',
        add: 'orderHistory.orderHistoryAdd',
        paid: 250,
        item: 15,
        review: 2
    },
    {
        id: 'orderHistory.orderHistoryId',
        date: 'orderHistory.orderHistoryDate',
        add: 'orderHistory.orderHistoryAdd',
        paid: 250,
        item: 15,
        review: 5
    },
    {
        id: 'orderHistory.orderHistoryId',
        date: 'orderHistory.orderHistoryDate',
        add: 'orderHistory.orderHistoryAdd',
        paid: 250,
        item: 15,
        review: 2
    },
    {
        id: 'orderHistory.orderHistoryId',
        date: 'orderHistory.orderHistoryDate',
        add: 'orderHistory.orderHistoryAdd',
        paid: 250,
        item: 15,
        review: 3
    },
    {
        id: 'orderHistory.orderHistoryId',
        date: 'orderHistory.orderHistoryDate',
        add: 'orderHistory.orderHistoryAdd',
        paid: 250,
        item: 15,
        review: 2
    },
    {
        id: 'orderHistory.orderHistoryId',
        date: '20 Dec, 2020',
        add: 'orderHistory.orderHistoryAdd',
        paid: 250,
        item: 15,
        review: 1
    },
];


export const orderHistoryFilter = [
    {
        day: 'commonText.filter',
        value: [
            { txt: 'orderHistoryFilterArr.allOrder', id: 0 },
            { txt: 'orderHistoryFilterArr.openOrder', id: 1 },
            { txt: 'orderHistoryFilterArr.returnOrders', id: 2 },
            { txt: 'orderHistoryFilterArr.cancelledOrder', id: 3 },
        ]
    },
    {
        day: 'orderHistoryFilterArr.timeFilter',
        value: [
            { txt: 'orderHistoryFilterArr.last30days', id: 4 },
            { txt: 'orderHistoryFilterArr.last6Month', id: 5 },
            { txt: 'orderHistoryFilterArr.year1', id: 6 },
            { txt: 'orderHistoryFilterArr.year2', id: 7 },
        ]
    },
];


export const payments = [
    {
        type: 'Select Card',
        isCard: true,
        values: [
            { value: "9800 XXXX XXXX 0545", icons: images.mastercard },
            { value: "6580 XXXX XXXX 2562", icons: images.visacard },
            { value: "5125 XXXX XXXX 6262", icons: images.discovercard },
        ]
    },
    {
        type: 'Net Banking',
        isCard: false,
        values: [
            { value: "Industrial & Commercial Bank" },
            { value: "Agricultural Bank" },
            { value: "Bank of America" },
            { value: "Construction Bank Corp." },
            { value: "HSBC Holdings" },
            { value: "JPMorgan Chase & Co." },
        ]
    },
    {
        type: 'Wallet/UPI',
        isCard: false,
        values: [
            { value: 'Adyen' },
            { value: 'AlliedWallet' },
            { value: 'Brinks' },
            { value: 'Airtel Money' },
            { value: 'Apple Pay' },
            { value: 'CardFree' },
        ]
    },
    {
        type: 'Cash on Delivery',
        isCard: true,
        values: [
            { value: 'Cash on Delivery' },
        ]
    },
];


export const cart = [
    { id: 1, name: 'product.assortedCapsicumCombo', image: images.recentBought1, price: 25, weight: 'productArr.weight10', discount: '50' },
    { id: 2, name: 'product.assortedCapsicumCombo', image: images.recentBought2, price: 25, weight: 'productArr.weight10', discount: '50' },
    { id: 3, name: 'product.assortedCapsicumCombo', image: images.recentBought3, price: 25, weight: 'productArr.weight10', discount: '50' },
    { id: 4, name: 'product.assortedCapsicumCombo', image: images.recentBought4, price: 25, weight: 'productArr.weight10', discount: '50' },
];

export const shopCategory = [
    { name: 'productList.freshVegetables' },
    { name: 'productCategory.herbsSeasonings' },
    { name: 'categoryArr.drinksBeverages' },
    { name: 'categoryArr.instantMixes' },
];


export const data = [
    { name: 'product.assortedCapsicumCombo', image: images.recentBought1, price: 25, weight: 'productArr.weight10', discount: '50' },
    { name: 'product.assortedCapsicumCombo', image: images.recentBought2, price: 25, weight: 'productArr.weight10', discount: '50' },
    { name: 'product.assortedCapsicumCombo', image: images.recentBought3, price: 25, weight: 'productArr.weight10', discount: '50' },
    { name: 'product.assortedCapsicumCombo', image: images.recentBought4, price: 25, weight: 'productArr.weight10', discount: '50' },
    { name: 'product.assortedCapsicumCombo', image: images.recentBought5, price: 25, weight: 'productArr.weight10', discount: '50' },
    { name: 'product.assortedCapsicumCombo', image: images.recentBought2, price: 25, weight: 'productArr.weight10', discount: '50' },
    { name: 'product.assortedCapsicumCombo', image: images.recentBought1, price: 25, weight: 'productArr.weight10', discount: '50' },
    { name: 'product.assortedCapsicumCombo', image: images.recentBought4, price: 25, weight: 'productArr.weight10', discount: '50' },
    { name: 'product.assortedCapsicumCombo', image: images.recentBought2, price: 25, weight: 'productArr.weight10', discount: '50' },
    { name: 'product.assortedCapsicumCombo', image: images.recentBought3, price: 25, weight: 'productArr.weight10', discount: '50' },
    { name: 'product.assortedCapsicumCombo', image: images.recentBought2, price: 25, weight: 'productArr.weight10', discount: '50' },
    { name: 'product.assortedCapsicumCombo', image: images.recentBought1, price: 25, weight: 'productArr.weight10', discount: '50' },
];

export const packSize = [
    { size: 'packsizeArr.size1' },
    { size: 'packsizeArr.size2' },
    { size: 'packsizeArr.size3' },
    { size: 'packsizeArr.size4' },
];

export const location = [
    { name: 'locationArr.locationName', address: 'locationArr.locationAddress', isWork: true },
    { name: 'locationArr.locationName', address: 'locationArr.locationAddress', isWork: false },
    { name: 'locationArr.locationName', address: 'locationArr.locationAddress', isWork: true },
    { name: 'locationArr.locationName', address: 'locationArr.locationAddress', isWork: false },
];

export const cityArr = [
    { title: "cityArr.city1" },
    { title: "cityArr.city2" },
    { title: "cityArr.city3"},
    { title: "cityArr.city4" },
    { title: "cityArr.city5" },
    { title: "cityArr.city6"},
    { title: "cityArr.city7" },
    { title: "cityArr.city8" },
    { title: "cityArr.city9" },
    { title: "cityArr.city10" },
];

export const stateArr = [
    { title: 'stateArr.state1' },
    { title: 'stateArr.state2' },
    { title: 'stateArr.state3' },
    { title: 'stateArr.state4' },
    { title: 'stateArr.state5' },
    { title: 'stateArr.state6' },
    { title: 'stateArr.state7' },
    { title: 'stateArr.state8' },
    { title: 'stateArr.state9' },
    { title: 'stateArr.state10' },
];

export const orderDetails = [
    { name: 'product.assortedCapsicumCombo', gram: 'productArr.weight10', quantity: '2', price: 25 },
    { name: 'product.assortedCapsicumCombo', gram: 'productArr.weight10', quantity: '1', price: 25 },
    { name: 'product.assortedCapsicumCombo', gram: 'productArr.weight10', quantity: '1', price: 25 },
];

export const reviewStar = [
    {},
    {},
    {},
    {},
    {}
];


export const reviewList = [
    {
        reviewName: 'orderTrackingPage.name',
        review: "reviewArr.review",
    },
    {
        reviewName: 'orderTrackingPage.name',
        review: "reviewArr.review",
    },
    {
        reviewName: 'orderTrackingPage.name',
        review: "reviewArr.review",
    },
    {
        reviewName: 'orderTrackingPage.name',
        review: "reviewArr.review",
    },
    {
        reviewName: 'orderTrackingPage.name',
        review: "reviewArr.review",
    },
    {
        reviewName: 'orderTrackingPage.name',
        review: "reviewArr.review",
    },
];


export const quantity = [
    { gram: '500 g', price: '$24.00' },
    { gram: '700 g', price: '$34.00' },
    { gram: '100 g', price: '$48.00' },
    { gram: '1.5 Kg', price: '$70.00' },
    { gram: '2 Kg', price: '$100.00' },
    { gram: '5 Kg', price: '$150.00' },
];

export const delivery = [
    { delivery: 'deliveryTimeArr.deliveryTime1' },
    { delivery: 'deliveryTimeArr.deliveryTime2' },
    { delivery: 'deliveryTimeArr.deliveryTime3' },
    { delivery: 'deliveryTimeArr.deliveryTime4' },
    { delivery: 'deliveryTimeArr.deliveryTime5' },
    { delivery: 'deliveryTimeArr.deliveryTime6' },
];

export const categoryData = [
    {
        id: '1',
        name: 'categoryArr.oilsRefinedGhee',
        image: images.category1,
        subCategory: [
            { id: '1', name: 'subCategoryArr.vegetables', image: images.categoryPro1 },
            { id: '2', name: 'subCategoryArr.organic', image: images.categoryPro8 },
        ]
    },
    {
        id: '2', name: 'categoryArr.riceFlourGrains', image: images.category2, subCategory: [{ id: '1', name: 'subCategoryArr.fruits', image: images.categoryPro2 },
        { id: '2', name: 'subCategoryArr.herbs', image: images.categoryPro3 },
        ]
    },
    {
        id: '3', name: 'categoryArr.foodCupboard', image: images.category3, subCategory: [{ id: '1', name: 'subCategoryArr.organic', image: images.categoryPro8 },
        { id: '2', name: 'subCategoryArr.cutsFruit', image: images.categoryPro9 },]
    },
    {
        id: '4', name: 'categoryArr.freshFruitsVegetables', image: images.category4, subCategory: [{ id: '1', name: 'subCategoryArr.bouquets', image: images.categoryPro10 },
        { id: '2', name: 'subCategoryArr.fruits', image: images.categoryPro2 },]
    },
    {
        id: '5', name: 'categoryArr.drinksBeverages', image: images.category5, subCategory: [{ id: '1', name: 'subCategoryArr.cutsFruit', image: images.categoryPro7 },
        { id: '2', name: 'subCategoryArr.herbs', image: images.categoryPro3 },
        ]
    },
    {
        id: '6', name: 'categoryArr.instantMixes', image: images.category6, subCategory: [{ id: '1', name: 'subCategoryArr.sprouts', image: images.categoryPro5 },
        { id: '2', name: 'subCategoryArr.organic', image: images.categoryPro8 },
        ]
    },
    {
        id: '7', name: 'categoryArr.readytoEat', image: images.category7, subCategory: [{ id: '1', name: 'subCategoryArr.flowers', image: images.categoryPro6 },
        { id: '2', name: 'subCategoryArr.herbs', image: images.categoryPro3 },]
    },
    {
        id: '8', name: 'categoryArr.dalsPulses', image: images.category8, subCategory: [{ id: '1', name: 'subCategoryArr.cutsFruit', image: images.categoryPro9, }, { id: '2', name: 'subCategoryArr.herbs', image: images.categoryPro3 },

        ]
    },
];

export const DrawerItems = [
    { name: 'tabBar.home', icons: <Icons.DrawerHome />, showSwitch: false },
    { name: 'drawer.fastKartPagesList', icons: <Icons.pageList />, showSwitch: false },
    { name: 'homepage.shopByCategory', icons: <Icons.category />, showSwitch: false },
    { name: 'drawer.orders', icons: <Icons.order />, showSwitch: false },
    { name: 'drawer.yourWishlist', icons: <Icons.wishlist />, showSwitch: false },
    { name: 'drawer.langauge', icons: <Icons.language />, showSwitch: false },
    { name: 'drawer.yourAccount', icons: <Icons.profile />, showSwitch: false },
    { name: 'drawer.notification', icons: <Icons.notification />, showSwitch: false },
    { name: 'drawer.settings', icons: <Icons.settings />, showSwitch: false },
    { name: 'drawer.currencyConverter', icons: <Icons.currencyConverter />, showSwitch: false },
];


export const pagesList = [
    { name: 'pagesListArr.404' },
    { name: 'aboutUsPage.aboutUsTxt' },
    { name: 'pagesListArr.account' },
    { name: 'pagesListArr.addressType1' },
    { name: 'pagesListArr.addressType2' },
    { name: 'tabBar.cart' },
    { name: 'pagesListArr.categoryWide' },
    { name: 'pagesListArr.homePage' },
    { name: 'pagesListArr.login' },
    { name: 'drawer.notification' },
    { name: 'tabBar.offers' },
    { name: 'pagesListArr.onBoarding' },
    { name: 'pagesListArr.orderDetail' },
    { name: 'orderHistoryPage.orderHistoryTxt' },
    { name: 'pagesListArr.orderSuccess' },
    { name: 'pagesListArr.orderTracking' },
    { name: 'pagesListArr.payment' },
    { name: 'pagesListArr.product' },
    { name: 'pagesListArr.register' },
    { name: 'tabBar.search' },
    { name: 'pagesListArr.setting' },
    { name: 'pagesListArr.shop' },
    { name: 'pagesListArr.wishlist' },
];


export const langauges = [
    { key: 'hi', name: 'langaugesArr.hindi', icons: <Icons.hindi /> },
    { key: 'en', name: 'langaugesArr.english', icons: <Icons.language width={windowWidth(34)} height={windowHeight(34)} /> },
    { key: 'kr', name: 'langaugesArr.korean', icons: <Icons.korea /> },
    { key: 'ar', name: 'langaugesArr.arabic', icons: <Icons.arabic /> },
];


export const currencys = [
    { key: '₹', name: 'currencyConverterArr.indianRupees', icons: <Icons.rupees />, value: 1 },
    { key: '$', name: 'currencyConverterArr.usDollar', icons: <Icons.dollar />, value: 0.013 },
    { key: '€', name: 'currencyConverterArr.euro', icons: <Icons.euro />, value: 0.012 },
    { key: 'A$', name: 'currencyConverterArr.australianDollar', icons: <Icons.australianDollar />, value: 0.018 },
    { key: '₩', name: 'currencyConverterArr.koreanWon', icons: <Icons.koreanWon />, value: 16.44 },
];