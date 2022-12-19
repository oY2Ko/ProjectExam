import { Link } from "react-router-dom";
import classes from './Header.module.css'

const Header = () => {
    return ( 
        <div className={classes.Header}>
            <Link className={classes.Link} to={"/Tests"}> Тесты</Link>
            <div className={classes.Test}></div>
            <Link className={classes.Link}>Зарегистрировать пользователя</Link>
            <div className={classes.Test}></div>
            <Link className={classes.Link} to={"/LogIn"}>Вход</Link>
        </div>
     );
}
 
export default Header;