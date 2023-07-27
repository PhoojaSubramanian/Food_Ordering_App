
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Components/Login/login';
import Signup from './Components/Signup/signup';
import Navbar from './Components/NavBar/navbar';
import Homepage from './Components/Home/homepage'
import Cart from './Components/Cart/cart';
import Footer from './Components/Footer/footer';
import Search from './Components/Search/Search';
import Food from './Components/Food/Food';
import Parent_Cart from './Components/Cart/Parent_Cart';
import Restaurant from './Components/Restaurant/Restaurant';
import Favourites from './Components/Favourites/Favourites';
import DisplayRestaurant from './Components/DisplayRestaurant/DisplayRestaurant';
import Profile from './Components/Profile/Profile';
import Otp from './Components/Otp/Otp';
import AdminHome from './Components/Admin/AdminHome';
import DeliveryHome from './Components/Delivery/DeliveryHome';
import RestaurantHome from './Components/RestaurantPage/RestaurantHome';
import FeedBack from './Components/Feedback/feedback';
import AdminFood from './Components/Admin/AdminFood';
import AdminRestaurant from './Components/Admin/AdminRestaurant';
import AdminNavbar from './Components/Admin/AdminNavbar';
import AdminRestaurantOwner from './Components/Admin/AdminRestaurantOwner';
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path ='/home' element={<Homepage/>} ></Route>
        <Route path='/' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}></Route>
        <Route path ='/nav' element={<Navbar/>} ></Route>
        <Route path ='/cart' element={<Cart/>} ></Route>
        <Route path ='/foot' element={<Footer/>} ></Route>
        <Route path ='/search' element={<Search/>} ></Route>
        <Route path ='/foods' element={<Food/>} ></Route>
        <Route path ='/parent_cart' element={<Parent_Cart/>} ></Route>
        <Route path ='/restaurant' element={<Restaurant/>} ></Route>
        <Route path ='/favourites' element={<Favourites/>} ></Route>
        <Route path ='/displayrestaurant' element={<DisplayRestaurant/>} ></Route>
        <Route path ='/profile' element={<Profile/>} ></Route>
        <Route path ='/otp' element={<Otp/>} ></Route>
        <Route path ='/adminHome' element={<AdminHome/>} ></Route>
        <Route path ='/deliveryHome' element={<DeliveryHome/>} ></Route>
        <Route path ='/restaurantHome' element={<RestaurantHome/>} ></Route>
        <Route path ='/feed' element={<FeedBack/>} ></Route>
        <Route path ='/adminFood' element={<AdminFood/>} ></Route>
        <Route path ='/adminRestaurant' element={<AdminRestaurant/>} ></Route>
        <Route path ='/adminNav' element={<AdminNavbar/>} ></Route>
        <Route path ='/adminrestown' element={<AdminRestaurantOwner/>} ></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

