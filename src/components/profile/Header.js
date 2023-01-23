import back  from '../../img/back.png'
import edit from '../../img/edit.png'

const Header = () => {
    return (
        <header className='header'>
            <button className='btn'><img src={back} className='back'/></button>
            <button className='btn'><img src={edit} className='edit'/></button>
        </header>
    )
}
export default Header;