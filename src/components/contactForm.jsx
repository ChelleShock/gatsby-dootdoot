import React from 'react';


class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        };


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
      
        
    }
    
    
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }


    handleSubmit(event) {
        // event.preventDefault();
        const { name, email, message } = this.state;
        // alert('A form was submitted: ' + name + ' email: ' + email + ' message: ' + message);
       

    }

    handleReset(event) {
        this.setState({
            name: '',
            email: '',
            message: ''
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} action="https://formspree.io/doot.dootmedia@gmail.com"
                method="POST">
                <input type="hidden" name="_next" value="/"></input>
                <div className="field half first">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange} />

                </div>
                <div className="field half">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" value={this.state.email} onChange={this.handleChange} />
                </div>
                <div className="field">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" rows="4" onChange={this.handleChange}></textarea>
                </div>
                <ul className="actions">
                    <li><input type="submit" value="Send Message" className="special" /></li>
                    <li><input type="reset" value="Reset" onClick={this.handleReset} /></li>
                </ul>

            </form>
        );
    }
}

export default NameForm
