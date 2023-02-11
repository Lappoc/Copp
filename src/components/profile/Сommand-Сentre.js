import go from '../../img/go.png'

const CommandCentre = () => {
    return(
        <div className='user'>
            <div className='user__information'>
                <p><b>Безопасность</b></p>
                <img src={go}/>
            </div>
            <div className='user__information'>
                <p><b>Уведомления</b></p>
                <label className="label">
                    <div className="toggle">
                        <input className="toggle-state" type="checkbox" name="check" value="check"/>
                        <div className="indicator"></div>
                    </div>
                </label>
            </div>
            <div className='user__information'>
                <p><b>Корзина</b></p>
                <img src={go}/>
            </div>
        </div>
    )
}
export default CommandCentre;