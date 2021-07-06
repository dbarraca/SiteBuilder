import PricingOption from './PricingOption';
import './css/Pricing.scss';

const Pricing = () => {
    return (
        <div className="pricing">
            <PricingOption />
            <PricingOption />
            <PricingOption />
        </div>
    )
}

export default Pricing;