import images from "../utils/images"
import { Icons } from "../utils/icons";
import appColors from "../theme/appColors";

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
    { name: 'Oils,Refined & Ghee', image: images.category1 },
    { name: 'Rice, Flour & Grains', image: images.category2 },
    { name: 'Food Cupboard', image: images.category3 },
    { name: 'Fresh Fruits& Vegetables', image: images.category4 },
    { name: 'Drinks & Beverages', image: images.category5 },
    { name: 'Instant Mixes', image: images.category6 },
    { name: 'Ready to Eat', image: images.category7 },
    { name: 'Dals & Pulses', image: images.category8 },
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

export const packSize= [
    { size: '100g-500g'},
    { size: 'p500g-1kg'},
    { size: '1kg-1.5kg'},
    { size: '1.5kg-2kg'},
];