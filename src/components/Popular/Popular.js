import image1 from "./../../img/product/image 1.png"
import image2 from "./../../img/product/image 2.png"
import image3 from "./../../img/product/image 3.png"
import image4 from "./../../img/product/image 4.png"
export const Popular = () =>{
    return(
        <div className="popular">
            <div className="container">
                <h2 className="popular__title">
                    Популярные запросы
                </h2>
                <div className="product">
                    <div className="product__list">
                        <div className="product__item">
                            <img src={image1} alt="1"/>
                            <div className="product__info">
                                <div className="product__name">3d очки</div>
                                <div className="product__salary">1499₽</div>
                            </div>
                        </div>
                        <div className="product__item">
                            <img src={image2} alt="1"/>
                            <div className="product__info">
                                <div className="product__name">3d очки</div>
                                <div className="product__salary">1499₽</div>
                            </div>
                        </div>
                        <div className="product__item">
                            <img src={image3} alt="1"/>
                            <div className="product__info">
                                <div className="product__name">3d очки</div>
                                <div className="product__salary">1499₽</div>
                            </div>
                        </div>
                        <div className="product__item">
                            <img src={image4} alt="1"/>
                            <div className="product__info">
                                <div className="product__name">3d очки</div>
                                <div className="product__salary">1499₽</div>
                            </div>
                        </div>
                        <div className="product__item">
                            <img src={image1} alt="1"/>
                            <div className="product__info">
                                <div className="product__name">3d очки</div>
                                <div className="product__salary">1499₽</div>
                            </div>
                        </div>
                        <div className="product__item product__item_1">
                            <img src={image1} alt="1"/>
                            <div className="product__info">
                                <div className="product__name">3d очки</div>
                                <div className="product__salary">1499₽</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}