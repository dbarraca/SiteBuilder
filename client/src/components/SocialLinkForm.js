import Link from './img/Link.svg';

const SocialLinkForm = () => {
    return (
        <div className="social">
            <a href="https://www.google.com/" target="_blank" rel="noreferrer" className="social-link">
                {/* <img className="social-icon" src={Link} alt="social link"/> */}
                <input className="social-icon" type="image" src={Link} alt="social link"/>

                <div className="social-text">
                    @
                    <input className="text-input" type="text" placeholder="SocialLink"/>
                    {/* value="SocialLink"  */}
                </div>
            </a>
        </div>
    );
}

export default SocialLinkForm;