import React from 'react'

import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100
    const publish_key = 'pk_test_2Iv9XfOyiAIJVOxZtIvqCLBP00y6ddO1gX'
    
    
    const onToken = token =>{
        console.log(token)
        alert("Successful")
    }

    return(
        <StripeCheckout
            label = 'Pay Now'
            name = 'MFOLIO Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/Cuz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publish_key}
        />
    )
}
export default StripeCheckoutButton