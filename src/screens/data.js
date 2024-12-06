import images from "../utils/images"
import { Icons } from "../utils/icons";
import appColors from "../theme/appColors";
import { windowHeight, windowWidth } from "../theme/appConstant";

export const swiperData = [
    {
        id: 1,
        title: 'Farm Fresh Vegies',
        subTitle: 'Get instant delivery',
        shopNow: 'Shop Now',
        image: images.banner1,
    },
    {
        id: 2,
        title: 'Farm Fresh Vegies',
        subTitle: 'Get instant delivery',
        shopNow: 'Shop Now',
        image: images.banner2,
    },
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
    { id: '1', name: 'Oils,Refined & Ghee', image: images.category1 },
    { id: '2', name: 'Rice, Flour & Grains', image: images.category2 },
    { id: '3', name: 'Food Cupboard', image: images.category3 },
    { id: '4', name: 'Fresh Fruits& Vegetables', image: images.category4 },
    { id: '5', name: 'Drinks & Beverages', image: images.category5 },
    { id: '6', name: 'Instant Mixes', image: images.category6 },
    { id: '7', name: 'Ready to Eat', image: images.category7 },
    { id: '8', name: 'Dals & Pulses', image: images.category8 },
];


export const offers = [
    { name: 'Assorted Capsicum Combo', image: images.recentBought1, price: '$25.00', weight: '500g', discount: '50' },
    { name: 'Assorted Capsicum Combo', image: images.recentBought2, price: '$25.00', weight: '500g', discount: '50' },
    { name: 'Assorted Capsicum Combo', image: images.recentBought3, price: '$25.00', weight: '500g', discount: '50' },
];

export const lowestPrice = [
    { name: 'Assorted Capsicum Combo ', image: images.product3, price: '$25.00', weight: '500g' },
    { name: 'Assorted Capsicum Combo ', image: images.product2, price: '$25.00', weight: '500g' },
    { name: 'Assorted Capsicum Combo ', image: images.product1, price: '$25.00', weight: '500g' },
    { name: 'Assorted Capsicum Combo ', image: images.product4, price: '$25.00', weight: '500g' },
];

export const bestPrice = [
    { name: 'Assorted Capsicum Combo ', image: images.product6, price: '$25.00', weight: '500g' },
    { name: 'Assorted Capsicum Combo ', image: images.product5, price: '$25.00', weight: '500g' },
    { name: 'Assorted Capsicum Combo ', image: images.product4, price: '$25.00', weight: '500g' },
    { name: 'Assorted Capsicum Combo ', image: images.product2, price: '$25.00', weight: '500g' },
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
        day: 'Yesterday',
        value: [
            { title: 'UPTO 40% OFF, Sales Ends..', subtxt: '3.00pm, 10 July, 2021', icon: <Icons.discount />, tag: 'offer', color: appColors.drawer },
            { title: 'FLAT 30% OFF, Sales Ends..', subtxt: '5.00pm, 10 July, 2021', icon: <Icons.offer />, tag: 'offer', color: appColors.yellow },
        ]
    },
    {
        day: 'Last 7 Days',
        value: [
            { title: 'Password Succesfully Changed', subtxt: '8.00am, 15 Jan, 2021', icon: <Icons.passChange />, tag: 'Signin', color: appColors.pink },
            { title: '$200 top up successfully', subtxt: '9.00am, 10 Jan, 2021', icon: <Icons.topUp />, tag: 'Topup', color: appColors.topUp },
            { title: 'UPTO 40% OFF, Sales Ends..', subtxt: '3.00pm, 10 July, 2021', icon: <Icons.discount />, tag: 'offer', color: appColors.drawer },
            { title: 'FLAT 30% OFF, Sales Ends..', subtxt: '5.00pm, 05 July, 2021', icon: <Icons.offer />, tag: 'offer', color: appColors.yellow },
            { title: 'Password Succesfully Changed', subtxt: '8.00am, 15 Jan, 2021', icon: <Icons.passChange />, tag: 'Signin', color: appColors.pink },
            { title: '$200 top up successfully', subtxt: '9.00am, 10 Jan, 2021', icon: <Icons.topUp />, tag: 'Signin', color: appColors.topUp },
            { title: 'UPTO 40% OFF, Sales Ends..', subtxt: '3.00pm, 10 July, 2021', icon: <Icons.discount />, tag: 'Topup', color: appColors.drawer },
            { title: 'FLAT 30% OFF, Sales Ends..', subtxt: '5.00pm, 05 July, 2021', icon: <Icons.offer />, tag: 'offer', color: appColors.drawer },
        ]
    },
];


export const myOffers = [
    { off: '50', onOrderAbove: 'on order above $250.00', onOrder: 'on your first order', code: 'Use Code: ' },
    { off: '25', onOrderAbove: 'hdfc credit card', onOrder: 'on your first order', code: 'Use Code: ' },
    { off: '40', onOrderAbove: 'on order above $250.00', onOrder: 'on your first order', code: 'Use Code: ' },
    { off: '30', onOrderAbove: 'on order above $250.00', onOrder: 'on your first order', code: 'Use Code: ' },
    { off: '15', onOrderAbove: 'on order above $250.00', onOrder: 'on your first order', code: 'Use Code: ' },
    { off: '10', onOrderAbove: 'on order above $250.00', onOrder: 'on your first order', code: 'Use Code: ' },
];

export const termsCondition = [
    {
        terms: '1. Information on how to participate forms part of these Terms & Conditions. By participating, claimants agree to be bound by these Terms & Conditions. Claimants must comply with these Terms & Conditions for a coupon to be valid.'
    },
    { terms: "2. Each claimant is entitled to one coupon per accommodation establishment. Coupons are not transferable and are not redeemable for cash and cannot be combined with any other coupons or any other offer or discounts or promotions offered by Quovai." }
];

export const offersFilter = [
    { offer: 'All Offers' },
    { offer: '10-30% off' },
    { offer: '30-50% off' },
    { offer: '50-70% off' },
    { offer: '70-90% off' },
    { offer: '90-100% off' },
];

export const recentlySearch = [
    { name: 'Vegetables' },
    { name: 'Fruits' },
    { name: 'Beauty' },
    { name: 'Fruits' },
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
    { name: 'Assorted Capsicum Combo', image: images.recentBought1, price: '$25.00', weight: '500g', discount: '50' },
    { name: 'Assorted Capsicum Combo', image: images.recentBought5, price: '$25.00', weight: '500g', discount: '50' },
];


export const howIOrder = [
    { question: 'Browse products using the search feature', answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
    { question: 'Add item to your Shopping Cart', answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
    { question: 'Choose a convenient delivery time', answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
    { question: 'Select suitable payment option', answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
];

export const orderHistoryTime = [
    { time: 'Processing' },
    { time: 'Last 30 days' },
    { time: 'November' },
    { time: 'October' },
];

export const orderHistory = [
    {
        id: '#5151515',
        date: '20 Dec, 2020',
        add: '8857 Morris Rd. ,Charlottesville..',
        paid: '$250.00',
        item: 15,
        review: 0
    },
    {
        id: '#5151515',
        date: '20 Dec, 2020',
        add: '8857 Morris Rd. ,Charlottesville..',
        paid: '$250.00',
        item: 15,
        review: 2
    },
    {
        id: '#5151515',
        date: '20 Dec, 2020',
        add: '8857 Morris Rd. ,Charlottesville..',
        paid: '$250.00',
        item: 15,
        review: 2
    },
    {
        id: '#5151515',
        date: '20 Dec, 2020',
        add: '8857 Morris Rd. ,Charlottesville..',
        paid: '$250.00',
        item: 15,
        review: 5
    },
    {
        id: '#5151515',
        date: '20 Dec, 2020',
        add: '8857 Morris Rd. ,Charlottesville..',
        paid: '$250.00',
        item: 15,
        review: 2
    },
    {
        id: '#5151515',
        date: '20 Dec, 2020',
        add: '8857 Morris Rd. ,Charlottesville..',
        paid: '$250.00',
        item: 15,
        review: 3
    },
    {
        id: '#5151515',
        date: '20 Dec, 2020',
        add: '8857 Morris Rd. ,Charlottesville..',
        paid: '$250.00',
        item: 15,
        review: 2
    },
    {
        id: '#5151515',
        date: '20 Dec, 2020',
        add: '8857 Morris Rd. ,Charlottesville..',
        paid: '$250.00',
        item: 15,
        review: 1
    },
];


export const orderHistoryFilter = [
    {
        day: 'Filter',
        value: [
            { txt: 'All Order', id: 0 },
            { txt: 'Open Order', id: 1 },
            { txt: 'ReturnOrders', id: 2 },
            { txt: 'Cancelled Order', id: 3 },
        ]
    },
    {
        day: 'Time Filter',
        value: [
            { txt: 'Last 30 days', id: 4 },
            { txt: 'Last 6 Month', id: 5 },
            { txt: '2021', id: 6 },
            { txt: '2022', id: 7 },
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
    { id: 1, name: 'Assorted Capsicum Combo', image: images.recentBought1, price: '$25.00', weight: '500g', discount: '50' },
    { id: 2, name: 'Assorted Capsicum Combo', image: images.recentBought2, price: '$25.00', weight: '500g', discount: '50' },
    { id: 3, name: 'Assorted Capsicum Combo', image: images.recentBought3, price: '$25.00', weight: '500g', discount: '50' },
    { id: 4, name: 'Assorted Capsicum Combo', image: images.recentBought4, price: '$25.00', weight: '500g', discount: '50' },
];

export const shopCategory = [
    { name: 'Fresh Vegetables' },
    { name: 'Herbs & Seasonings' },
    { name: 'Drinks & Beverages' },
    { name: 'Instant Mixes' },
];


export const data = [
    { name: 'Assorted Capsicum Combo', image: images.recentBought1, price: '$25.00', weight: '500g', discount: '50' },
    { name: 'Assorted Capsicum Combo', image: images.recentBought2, price: '$25.00', weight: '500g', discount: '50' },
    { name: 'Assorted Capsicum Combo', image: images.recentBought3, price: '$25.00', weight: '500g', discount: '50' },
    { name: 'Assorted Capsicum Combo', image: images.recentBought4, price: '$25.00', weight: '500g', discount: '50' },
    { name: 'Assorted Capsicum Combo', image: images.recentBought5, price: '$25.00', weight: '500g', discount: '50' },
    { name: 'Assorted Capsicum Combo', image: images.recentBought2, price: '$25.00', weight: '500g', discount: '50' },
    { name: 'Assorted Capsicum Combo', image: images.recentBought1, price: '$25.00', weight: '500g', discount: '50' },
    { name: 'Assorted Capsicum Combo', image: images.recentBought4, price: '$25.00', weight: '500g', discount: '50' },
    { name: 'Assorted Capsicum Combo', image: images.recentBought2, price: '$25.00', weight: '500g', discount: '50' },
    { name: 'Assorted Capsicum Combo', image: images.recentBought3, price: '$25.00', weight: '500g', discount: '50' },
    { name: 'Assorted Capsicum Combo', image: images.recentBought2, price: '$25.00', weight: '500g', discount: '50' },
    { name: 'Assorted Capsicum Combo', image: images.recentBought1, price: '$25.00', weight: '500g', discount: '50' },
];

export const packSize = [
    { size: '100g-500g' },
    { size: 'p500g-1kg' },
    { size: '1kg-1.5kg' },
    { size: '1.5kg-2kg' },
];

export const location = [
    { name: "Noah Hamilton", address: "8857 Morris Rd.,Charlottesville, VA 22901", isWork: true },
    { name: "Noah Hamilton", address: "8857 Morris Rd.,Charlottesville, VA 22901", isWork: false },
    { name: "Noah Hamilton", address: "8857 Morris Rd.,Charlottesville, VA 22901", isWork: true },
    { name: "Noah Hamilton", address: "8857 Morris Rd.,Charlottesville, VA 22901", isWork: false },
    // { name: "Noah Hamilton", address: "8857 Morris Rd.,Charlottesville, VA 22901", isWork: false },
    // { name: "Noah Hamilton", address: "8857 Morris Rd.,Charlottesville, VA 22901", isWork: true },
];

export const cityArr = [
    { title: "Paris" },
    { title: "New York" },
    { title: "Mumbai" },
    { title: "Delhi" },
    { title: "Chicago" },
    { title: "Vancouver" },
    { title: "Las Vegas" },
    { title: "Seoul" },
    { title: "Franklin" },
    { title: "Madison" },
];

export const stateArr = [
    { title: 'Assam' },
    { title: 'Argentina' },
    { title: 'Gujarat' },
    { title: 'Andhra Pradesh' },
    { title: 'Finland' },
    { title: 'France' },
    { title: 'Germany' },
    { title: 'South Korea' },
    { title: 'Himachal Pradesh' },
    { title: 'Kerala' },
];

export const orderDetails = [
    { name: 'Assorted Capsicum Combo ', gram: '500g', quantity: '2', price: '$25.00' },
    { name: 'Assorted Capsicum Combo ', gram: '500g', quantity: '1', price: '$25.00' },
    { name: 'Assorted Capsicum Combo ', gram: '500g', quantity: '1', price: '$25.00' },
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
        reviewName: 'Andrea Joanne',
        review: "It's a really cute skirt! I didn't expect to feel so good in a polyester material. The print is slightly",
    },
    {
        reviewName: 'Andrea Joanne',
        review: "It's a really cute skirt! I didn't expect to feel so good in a polyester material. The print is slightly",
    },
    {
        reviewName: 'Andrea Joanne',
        review: "It's a really cute skirt! I didn't expect to feel so good in a polyester material. The print is slightly",
    },
    {
        reviewName: 'Andrea Joanne',
        review: "It's a really cute skirt! I didn't expect to feel so good in a polyester material. The print is slightly",
    },
    {
        reviewName: 'Andrea Joanne',
        review: "It's a really cute skirt! I didn't expect to feel so good in a polyester material. The print is slightly",
    },
    {
        reviewName: 'Andrea Joanne',
        review: "It's a really cute skirt! I didn't expect to feel so good in a polyester material. The print is slightly",
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
    { delivery: '7 Am' },
    { delivery: '9 Am' },
    { delivery: '11 Am' },
    { delivery: '5 Pm' },
    { delivery: '7 Pm' },
    { delivery: '9 Pm' },
];

export const categoryData = [
    {
        id: '1',
        name: 'Oils, Refined & Ghee',
        image: images.category1,
        subCategory: [
            { id: '1', name: 'Vegetables', image: images.categoryPro1 },
            { id: '2', name: 'Organic', image: images.categoryPro8 },
        ]
    },
    {
        id: '2', name: 'Rice, Flour & Grains', image: images.category2, subCategory: [{ id: '1', name: 'Fruits', image: images.categoryPro2 },
        { id: '2', name: 'Herbs', image: images.categoryPro3 },
        ]
    },
    {
        id: '3', name: 'Food Cupboard', image: images.category3, subCategory: [{ id: '1', name: 'Organic', image: images.categoryPro8 },
        { id: '2', name: 'Cuts Fruits', image: images.categoryPro9 },]
    },
    {
        id: '4', name: 'Fresh Fruits & Vegetables', image: images.category4, subCategory: [{ id: '1', name: 'Bouquets', image: images.categoryPro10 },
        { id: '2', name: 'Fruits', image: images.categoryPro2 },]
    },
    {
        id: '5', name: 'Drinks & Beverages', image: images.category5, subCategory: [{ id: '1', name: 'Cuts Fruits', image: images.categoryPro7 },
        { id: '2', name: 'Herbs', image: images.categoryPro3 },
        ]
    },
    {
        id: '6', name: 'Instant Mixes', image: images.category6, subCategory: [{ id: '1', name: 'Sprouts', image: images.categoryPro5 },
        { id: '2', name: 'Organic', image: images.categoryPro8 },
        ]
    },
    {
        id: '7', name: 'Ready to Eat', image: images.category7, subCategory: [{ id: '1', name: 'Flowers', image: images.categoryPro6 },
        { id: '2', name: 'Herbs', image: images.categoryPro3 },]
    },
    {
        id: '8', name: 'Dals & Pulses', image: images.category8, subCategory: [{ id: '1', name: 'Cuts Fruits', image: images.categoryPro9, }, { id: '2', name: 'Herbs', image: images.categoryPro3 },

        ]
    },
];

export const DrawerItems = [
    { name: 'Home', icons: <Icons.DrawerHome />, showSwitch: false },
    { name: 'FastKart Pages List', icons: <Icons.pageList />, showSwitch: false },
    { name: 'Shop by Category', icons: <Icons.category />, showSwitch: false },
    { name: 'Orders', icons: <Icons.order />, showSwitch: false },
    { name: 'Your Wishlist', icons: <Icons.wishlist />, showSwitch: false },
    { name: 'Langauge', icons: <Icons.language />, showSwitch: false },
    { name: 'Your Account', icons: <Icons.profile />, showSwitch: false },
    { name: 'Notification', icons: <Icons.notification />, showSwitch: false },
    { name: 'Settings', icons: <Icons.settings />, showSwitch: false },
    { name: 'Currency Converter', icons: <Icons.currencyConverter />, showSwitch: false },
];


export const pagesList = [
    { name: '404' },
    { name: 'About Us' },
    { name: 'Account' },
    { name: 'Address Type 1' },
    { name: 'Address Type 2' },
    { name: 'Cart' },
    { name: 'Category Wide' },
    { name: 'Home Page' },
    { name: 'Login' },
    { name: 'Notification' },
    { name: 'Offers' },
    { name: 'On Boarding' },
    { name: 'Order Detail' },
    { name: 'Order History' },
    { name: 'Order Success' },
    { name: 'Order Tracking' },
    { name: 'Payment' },
    { name: 'Product' },
    { name: 'Register' },
    { name: 'Search' },
    { name: 'Setting' },
    { name: 'Shop' },
    { name: 'Wishlist' },
];


export const langauges = [
    { key: 'hi', name: 'Hindi', icons: <Icons.hindi /> },
    { key: 'en', name: 'English', icons: <Icons.language width={windowWidth(34)} height={windowHeight(34)} /> },
    { key: 'kr', name: 'Korean', icons: <Icons.korea /> },
    { key: 'ar', name: 'Arabic', icons: <Icons.arabic /> },
];


export const currencys = [
    { key: '₹', name: 'Indian rupees', icons: <Icons.rupees />, value: 1 },
    { key: '$', name: 'United State dollar', icons: <Icons.dollar />, value: 0.013 },
    { key: '€', name: 'Euro', icons: <Icons.euro />, value: 0.012 },
    { key: 'A$', name: 'Australian Dollar', icons: <Icons.australianDollar />, value: 0.018 },
    { key: '₩', name: 'Korean Won', icons: <Icons.koreanWon />, value: 16.44 },
];