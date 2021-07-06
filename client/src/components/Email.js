import './css/Email.scss';

const Email = () => {
    return (
        <div className="email">
            <h3>Let's Chat</h3>
            
            <div  className="form-inputs">
                <input type="text" name="firstname" placeholder="First Name"/>

                <input type="text" name="lastname" placeholder="Last Name" />

                <input type="text" name="email" placeholder="Email" />
            </div>

            <textarea name="body" placeholder="Let us know what is on your mind." />

            <button className="button-primary">Submit</button>
        </div>
    )
}

export default Email;