import gamepad from "../../img/main/gamepad.png"
import headphones from "../../img/main/headphone.png"
import { CarouselProvider, Slider, Slide, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
export const Promo = () => {
    return (
        <div className="intro">
            <div className="container">
                <div className="promo">
                    <div className="promo__info">
                        <h1 className="promo__title">Покупай модную технику</h1>
                        <div className="promo__descr">Дешево, и без затруднений! Вы найдете большой выбор товаров, на которые всегда идут скидки!</div>
                        <div className="promo__button">
                        <a href="#">Продолжить</a>
                    </div>
                    </div>
                    <CarouselProvider
                        infinite={true}
                        naturalSlideWidth={400}
                        naturalSlideHeight={220}
                        totalSlides={2}
                        className="carousel__provider"
                    >
                        <Slider>
                            <Slide index={0}><img className="carousel__item" alt="gamepad" src={gamepad} /></Slide>
                            <Slide index={1}><img className="carousel__item" alt="headphones" src={headphones} /></Slide>
                        </Slider>
                        <ButtonNext className="carousel__next-arrow">Next</ButtonNext>
                    </CarouselProvider>
                </div>
            </div>
        </div>
    )
}