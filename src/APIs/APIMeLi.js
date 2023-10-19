import axios from 'axios';

// API Function to fetch the access token
export const fetchAccessToken = async (code) => {
    // Define the API endpoint and your data
    const endpoint = 'https://api.mercadolibre.com/oauth/token';
    const data = {
        client_id: '3516733548819218',
        grant_type: 'authorization_code',
        client_secret: 'w7sU8woCroDxWxMeqXx5TOI1ETPKHeTr',
        redirect_uri: 'https://test-web-gabriel-95557e5aa8fc.herokuapp.com/',
        code: code
    };

    try {
        const response = await axios.post(endpoint, data);
        const accessToken = response.data.access_token;
        console.log('Access Token:', accessToken);
        // You can store the token in local storage or use it as needed
        // localStorage.setItem('access_token', accessToken);
        return accessToken;  // Return the token so the calling function can use it
    } catch (error) {
        console.log('Error fetching the access token:', error);
        throw error;  // Throw the error to be handled by the calling function
    }
};
