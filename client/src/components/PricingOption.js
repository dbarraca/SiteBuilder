const PricingOption = () => {
    return (
        <div className="pricing-option">
            <div className="pricing-box">
                <h3>Pricing Plan</h3>

                <p className="option-message">Products and Services describe here...</p>

                <h2 className="price">$100</h2>

                <button className="button-primary">Sign Up</button>
            </div>

            <ul className="details">
                <li>Core Items</li>
                <li>1,000,000 Assets</li>
                <li>24/7 Customer Support</li>
            </ul>
        </div>
    )
}

export default PricingOption;