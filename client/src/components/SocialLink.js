import Link from './img/Link.svg';

const SocialLink = () => {
    return (
        <div className="social">
            <a href="https://www.google.com/" target="_blank" class="social-link">
                <img className="social-icon" src={Link} alt="social link"/>

                <div className="social-text">@SocialLink</div>
            </a>
        </div>
    );
}

export default SocialLink;