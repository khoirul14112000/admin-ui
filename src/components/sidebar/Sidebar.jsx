import "./sidebar.scss"
import { Link } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CategoryIcon from '@mui/icons-material/Category';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LogoutIcon from '@mui/icons-material/Logout';
import StoreIcon from '@mui/icons-material/Store';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Sidebar = () => {
    return (
        <div className="sidebar">
        <div className="top">
            <Link to="/">
            <span className="logo">Store</span>
            </Link>
        </div>
        <hr />
        <div className="center">
            <ul>
            <p className="title">MAIN</p>
            <li>
                <DashboardIcon className="icon"/>
                <span>Dashboard</span>
            </li>
            <p className="title">LIST</p>
            <Link to="/users">
                <li>
                    <PermIdentityIcon className="icon"/>
                    <span>Users</span>
                </li>
            </Link>
            <Link to="/products">
                <li>
                    <CreditCardIcon className="icon"/>
                <span>Products</span>
                </li>
            </Link>
            <li>
                <StoreIcon className="icon"/>
                <span>Orders</span>
            </li>
            <li>
                <CategoryIcon className="icon"/>
                <span>Categories</span>
            </li>
            <p className="title">USER</p>
            <li>
                <AccountCircleIcon className="icon"/>
                <span>Profile</span>
            </li>
            <li>
                <LogoutIcon className="icon"/>
                <span>Logout</span>
            </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>
    </div>
    )
}
export default Sidebar