import user from '../../img/user2.png'

const User = () => {
    return(
        <>
            <div className='center'>
                <div className='circle'>
                    <img src={user}/>
                </div>
                <div className='user_name'>
                    <h2 style={{color: '#0077C0'}}>Анна</h2>
                    <h2 style={{color: '#37AEF6'}}>Ло</h2>
                </div>
            </div>
            <div className='user'>
                <div className='user__information'>
                    <p style={{color: '#AEAEAE'}}>Пол</p>
                    <p>Женский</p>
                </div>
                <div className='user__information'>
                    <p style={{color: '#AEAEAE'}}>42</p>
                    <p>Года</p>
                </div>
                <div className='user__information'>
                    <p style={{color: '#AEAEAE'}}>2 дня</p>
                    <p>Зарегистр.</p>
                </div>
                <div className='user__information'>
                    <p style={{color: '#AEAEAE'}}>4</p>
                    <p>Друга</p>
                </div>
            </div>
        </>
    )
}
export default User;