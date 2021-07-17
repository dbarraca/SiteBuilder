// import { useState } from 'react';
import './css/Socials.scss';
import SocialLinkForm from './SocialLinkForm';

const SocialsForm = () => {
    return (
        <div className="socials">
            <SocialLinkForm />
            <SocialLinkForm />
            <SocialLinkForm />
        </div>
    );
}

export default SocialsForm;