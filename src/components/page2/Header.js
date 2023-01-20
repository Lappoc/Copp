import Search from "./Search";

import user from "../../img/user.png"

const Header = () => {
    return (
        <header className='header'>
            <p className='logo'>COPP.</p>
            <Search/>
            <img className='user' src={user}/>
        </header>
    )
}
export default Header;