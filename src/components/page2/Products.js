import phone from '../../img/phone.png'
import pk from '../../img/pk.png'
import headPhone from '../../img/headPhone.png'
import bluetoothSpeaker from '../../img/bluetoothSpeaker.png'
import laptop from '../../img/laptop.png'
import keyboard from '../../img/keyboard.png'

import arrow from '../../img/arrow.png'


const Products = ()  => {
    return(
        <div className='product__list'>
            <div className='card'>
                <div className='card__direction'>
                    <p className='card__name'>Телефоны <img className='arrow' src={arrow}/></p>
                    <p className='card__explanation'>Скидка 20% на весь ассортимент товаров!</p>
                </div>
                <img src={phone}/>
            </div>
            <div className='card'>
                <div className='card__direction'>
                    <p className='card__name'>Компьютеры <img className='arrow' src={arrow}/></p>
                    <p className='card__explanation'>Большой выбор! (iMac, Sony и мн. др.)</p>
                </div>
                <img src={pk}/>
            </div>
            <div className='card'>
                <div className='card__direction'>
                    <p className='card__name'>Наушники <img className='arrow' src={arrow}/></p>
                    <p className='card__explanation'>Скидка 30% на продукцию Apple!</p>
                </div>
                <img src={headPhone}/>
            </div>
            <div className='card'>
                <div className='card__direction'>
                    <p className='card__name'>Колонки <img className='arrow' src={arrow}/></p>
                    <p className='card__explanation'>Беспроводные, водонепроница-емые</p>
                </div>
                <img src={bluetoothSpeaker}/>
            </div>
            <div className='card'>
                <div className='card__direction'>
                    <p className='card__name'>Ноутбуки <img className='arrow' src={arrow}/></p>
                    <p className='card__explanation'>Большой выбо! (ASUS, MacBook)</p>
                </div>
                <img src={laptop}/>
            </div>
            <div className='card'>
                <div className='card__direction'>
                    <p className='card__name'>Клавиатуры <img className='arrow' src={arrow}/></p>
                    <p className='card__explanation'>+ мышки (беспроводные)</p>
                </div>
                <img src={keyboard}/>
            </div>
        </div>
    )
}

export default Products;