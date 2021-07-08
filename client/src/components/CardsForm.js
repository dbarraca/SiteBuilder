import CardForm from './CardForm';
import './css/Cards.scss';

const CardsForm = () => {
    return (
        <div className="cards">
            <CardForm />
            <CardForm />
            <CardForm />
        </div>
    );
}

export default CardsForm;