import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <div>
            <Link>Тесты</Link>
            <Link to={"/LogIn"}>Регистрация</Link>
        </div>
     );
}
 
export default Header;