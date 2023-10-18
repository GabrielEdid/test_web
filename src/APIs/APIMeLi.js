import React from 'react';
import axios from 'axios';
import PopUp from './PopUp';  // Ensure this path is correct

class APIMeLi extends React.Component {
    fetchAccessToken = (code) => {
        // Define the API endpoint and your data
        const endpoint = 'https://api.mercadolibre.com/oauth/token';
        const data = {
            client_id: '3516733548819218',
            grant_type: 'authorization_code',
            client_secret: 'w7sU8woCroDxWxMeqXx5TOI1ETPKHeTr',
            redirect_uri: 'https://test-web-gabriel-95557e5aa8fc.herokuapp.com/',
            code: code  // Use the code here
        };

        // Make the POST request
        axios.post(endpoint, data)
        .then(response => {
            // Extract the access token from the response
            const accessToken = response.data.access_token;
            console.log('Access Token:', accessToken);
            // You can store the token in local storage or use it as needed
            // localStorage.setItem('access_token', accessToken);
        })
        .catch(error => {
            console.log('Error fetching the access token:', error);
        });
    }

    render() {
        return <PopUp sendCodeToFetchToken={this.fetchAccessToken} />
    }
}

export default APIMeLi;
