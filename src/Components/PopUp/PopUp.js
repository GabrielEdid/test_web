import React, { useEffect } from 'react';

class PopUp extends React.Component {
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
            // You can handle the code here, e.g., send it to your server for further processing
        }
    }

    render() {
        return (
            <button onClick={this.openWindow}>
                Iniciar Sesion con Mercado Libre
            </button>
        );
    }
}

export default PopUp;
