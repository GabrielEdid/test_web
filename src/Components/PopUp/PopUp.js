import React from 'react';

class PopUp extends React.Component {
    openWindow = () => {
        const url = 'https://auth.mercadolibre.com.mx/authorization?response_type=code&client_id=3516733548819218&redirect_uri=https://test-web-gabriel-95557e5aa8fc.herokuapp.com/';
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    render() {
        return (
            <button onClick={this.openWindow}>
                Abrir enlace
            </button>
        );
    }
}

export default PopUp;
