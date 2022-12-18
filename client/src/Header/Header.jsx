import { Link } from "react-router-dom";
import classes from './Header.module.css'

const Header = () => {
    return ( 
        <div className={classes.Header}>
            <Link className={classes.Link} to={"/Tests"}> Тесты</Link>
            <Link className={classes.Link} to={"/LogIn"}>Регистрация</Link>
        </div>
     );
}
 
export default Header;