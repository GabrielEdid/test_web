import React from 'react';

function PopUpLink() {
    const openLink = () => {
        window.open('https://www.google.com', '_blank');
    };

    return (
        <button onClick={openLink}>
            Abrir Google en nueva ventana
        </button>
    );
}

export default PopUpLink;
