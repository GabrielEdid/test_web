import React from 'react';
import PropTypes from 'prop-types';  // Importing PropTypes for prop validation.

class PopUp extends React.Component {
    state = {
        code: null
    };

    openWindow = () => {
        const url = 'https://auth.mercadolibre.com.mx/authorization?response_type=code&client_id=3516733548819218&redirect_uri=https://test-web-gabriel-95557e5aa8fc.herokuapp.com/';
        window.open(url, '_self', 'noopener,noreferrer');
    }

    componentDidMount() {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        if (code) {
            console.log("User has returned with code:", code);
            console.log("Full redirected URL:", window.location.href);
            
            // Update the state with the code
            this.setState({ code });

            // Check if sendCodeToFetchToken is a function before calling it
            if (typeof this.props.sendCodeToFetchToken === 'function') {
                this.props.sendCodeToFetchToken(code);
            } else {
                console.warn('sendCodeToFetchToken prop is not a function');
            }

        } else {
            console.log("Oops! Something Happened!");
        }
    }

    render() {
        return (
            <>
                <button onClick={this.openWindow}>
                    Iniciar Sesion con Mercado Libre
                </button>
                <h1>
                    El Code es: {this.state.code}
                </h1>
            </>
        );
    }
}

// Define the prop types and expectations for this component.
PopUp.propTypes = {
    sendCodeToFetchToken: PropTypes.func.isRequired  // It's expected to be a function and is required.
};

export default PopUp;