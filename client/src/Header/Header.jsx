import { Link } from "react-router-dom";
import classes from './Header.module.css'
import axios from 'axios'
import { useEffect } from "react";
const Header = () => {
    return ( 
        <div>
            <div className={classes.Header}>
                <Link className={classes.Link} to={"/Tests"}> Тесты</Link>
                <div className={classes.Test}></div>
                <Link onClick={logout} className={classes.Link}>Выйти</Link>
                <div className={classes.Test}></div>
                <Link className={classes.Link} to={"/LogIn"}>Вход</Link>
            </div>
                <hr className={classes.Hr}/>

        </div>
     );
     function logout() {
     axios.get('https://localhost:7232/Account/Logout', {withCredentials:true})
     }
}
 
export default Header;