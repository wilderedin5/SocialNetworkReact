import React from 'react';
import OrderAdvertInfo from './OrderAdvertInfo/OrderAdvertInfo';
import OrderAdvertForm from './OrderAdvertForm/OrderAdvertForm';

const OrderAdvert = (props) => {
    const onSubmit = (formData) => {
        props.addAdvert(props.adverts.length + 1, false, 0, formData.title, formData.text, formData.image);
    }
    return (
        <div> 
            {
                props.adverts.map(advert => <OrderAdvertInfo {...advert} />)
            }
            <OrderAdvertForm onSubmit={onSubmit} />
        </div>
    )
}

export default OrderAdvert;