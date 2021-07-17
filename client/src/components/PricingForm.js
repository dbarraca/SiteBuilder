import PricingOption from './PricingOption';
import './css/Pricing.scss';

const PricingForm = () => {
    return (
        <div className="pricing">
            <PricingOption />
            <PricingOption />
            <PricingOption />
        </div>
    )
}

export default PricingForm;