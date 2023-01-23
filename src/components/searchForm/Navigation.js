import arrow from '../../img/arrow.png'


const Navigation = () => {
    return(
        <>
            <ul>
                <li><a href="">Главная <img className='arrow' src={arrow}/> </a></li>
                <li><a href="">Профиль <img className='arrow' src={arrow}/></a></li>
                <li><a href="">Поиск <img className='arrow' src={arrow}/></a></li>
            </ul>
        </>
    )
}
export default Navigation;