import { IoCloseOutline, IoOptionsOutline } from 'react-icons/io5';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useContext } from "react";
import { CompareContext } from "../contexts/CompareContext";
import "./CompProdWidget.scss";

const CompProdWidget = () => {
    
    const [compCards, setCompCards] = useContext(CompareContext);
    
    const removeCard = (id) => {
        setCompCards(compCards.filter(compCard => compCard.id !== id ));
    };

    return ( 

        <div className="compProdWidget alignfull">
            <div className="compProdWidget__inner container">
                <div className="compProdWidget__cards">
                
                    {compCards?.map((card, index) => (
                        <div className="compProdWidgetCard" key={index}>
                            <div className="compProdWidgetCard__img" >
                                {Object.values(card.attributes?.Images).map((img, index) => ( 
                                    <LazyLoadImage effect="opacity" src={img[0].attributes.url} key={index} alt={''} />
                                ))}
                            </div>
                            <div className="compProdWidgetCard__content">
                                <button className='compProdWidgetCard__remove' onClick={() => {removeCard(card.id)}}><IoCloseOutline /></button>
                                <div className='compProdWidgetCard__content-inner'>
                                    <h3 className='card__title'>{card.attributes.Name}</h3>
                                    <span className='card__price'>£ {card.attributes.Price}.00</span>
                                </div>
                            </div>
                        </div>
                    ))} 


                </div>
                <div className="compProdWidget__btn-compare">
                    <button className="btn">Compare <IoOptionsOutline /></button>
                </div>

            </div>
        </div>

     );

}
 
export default CompProdWidget;