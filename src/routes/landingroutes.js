import AccountPage from "../Moduls/AccountPage";
import ForgotPassword from "../Moduls/ForgotPassword";
import FrontPage from "../Moduls/FrontPage";
import ProductPage from "../Moduls/ProductPage";
import CartPage from "../Moduls/CartPage";
import CheckoutShipping from "../Moduls/CheckoutShipping";
import CheckoutShipping2 from "../Moduls/CheckoutShipping2";
import CheckoutReviewPage from "../Moduls/CheckoutReviewPage";
import Profile from "../Moduls/Management/Profile";
import AddressPage from "../Moduls/Management/Address";
import OrderPage from "../Moduls/Management/Order";
import AddlistPage from "../Moduls/Management/Addlist";
import AddlistscreatedPage from "../Moduls/Management/Addlistscreated";
import PaymentPage from "../Moduls/Management/Payment";
import SubscriptionsPage from "../Moduls/Management/Subscriptions";
import UpdateloginPage from "../Moduls/Management/Updatelogin";
import UpdatesecurityPage from "../Moduls/Management/Updatesecurity";
import DevicePage from "../Moduls/Management/Device";
import Activate from "../Moduls/Activate";
import CompleteProfile from "../Moduls/CompleteProfile";
import MyAccount from "../Moduls/MyAccount";
import OrderDetail from "../Moduls/Management/OrderDetail";
import ThanksPage from "../Moduls/Management/Thanks"
import CategorySearch from "../Moduls/Management/CategorySearch";

var landingRoutes = [
    { path: '/', auth:false, exact: true, name: 'Landing', icon: 'mdi mdi-account-key', component: FrontPage },
    { path: '/category',auth:false, exact: true, name: 'Category', icon: 'mid mid-account-key',component: CategorySearch },
    { path: '/forgot-password', auth:false, exact: true, name: 'ForgotPassword', icon: 'mdi mdi-account-key', component: ForgotPassword },
    { path: '/account', auth:false, exact: true, name: 'Account', icon: 'mdi mdi-account-key', component: AccountPage },
    { path: '/complete-profile', auth:true, exact: false, name: 'Complete profile', icon: 'mdi mdi-account-plus', component: CompleteProfile },
    { path: '/product/:pid', auth:false, exact: false, name: 'Product', icon: 'mdi mdi-account-plus', component: ProductPage },
    { path: '/profile', auth:true, exact: false, name: 'Product', icon: 'mdi mdi-account-plus', component: Profile },
    { path: '/address', auth:true, exact: false, name: 'Product', icon: 'mdi mdi-account-plus', component: AddressPage },
    { path: '/thanks', auth:true,exact:false, name:'Thanks', icon:'mdi mdi-account-plus',component:ThanksPage},
    { path: '/order', auth:true, exact: false, name: 'Product', icon: 'mdi mdi-account-plus', component: OrderPage },
    { path: '/order-detail',auth:true,exact:false, name: 'Product', icon:'mdi mdi-account-plus', component: OrderDetail },
    { path: '/addlist', auth:true, exact: false, name: 'Product', icon: 'mdi mdi-account-plus', component: AddlistPage },
    { path: '/addlistscreated', auth:true, exact: false, name: 'Product', icon: 'mdi mdi-account-plus', component: AddlistscreatedPage },
    { path: '/payment', auth:true, exact: false, name: 'Product', icon: 'mdi mdi-account-plus', component: PaymentPage },
    { path: '/subscriptions', auth:true, exact: false, name: 'Product', icon: 'mdi mdi-account-plus', component: SubscriptionsPage },
    { path: '/updatelogin', auth:true, exact: false, name: 'Product', icon: 'mdi mdi-account-plus', component: UpdateloginPage },
    { path: '/updatesecurity', auth:true, exact: false, name: 'Product', icon: 'mdi mdi-account-plus', component: UpdatesecurityPage },
    { path: '/device', auth:true, exact: false, name: 'Product', icon: 'mdi mdi-account-plus', component: DevicePage },
    { path: '/myaccount', auth:true, exact: false, name: 'My Account', icon: 'mdi mdi-account-plus', component: MyAccount },
    { path: '/cart', auth:false, exact: false, name: 'Cart', icon: 'mdi mdi-account-plus', component: CartPage },
    { path: '/checkout-shipping', auth:false, exact: false, name: 'CheckoutShipping', icon: 'mdi mdi-account-plus', component: CheckoutShipping },
    { path: '/checkout-shipping2', auth:false, exact: false, name: 'CheckoutShipping2', icon: 'mdi mdi-account-plus', component: CheckoutShipping2 },
    { path: '/checkout-review', auth:false, exact: false, name: 'CheckoutReview', icon: 'mdi mdi-account-plus', component: CheckoutReviewPage },
    { path: '/activate/:uid/:token', auth:false, exact: false, name: 'Activate', icon: 'mdi mdi-account-plus', component: Activate },
  	{ path: null, pathTo: '/', name: 'Home', redirect: true }
];

export default landingRoutes;