import React from "react";
import { fetchAccessToken } from "../../APIs/APIMeLi";

class PopUp extends React.Component {
  state = {
    code: null,
    accessToken: null,
  };

  openWindow = () => {
    const url =
      "https://auth.mercadolibre.com.mx/authorization?response_type=code&client_id=3516733548819218&redirect_uri=https://test-web-gabriel-95557e5aa8fc.herokuapp.com/";
    window.open(url, "_self", "noopener,noreferrer");
  };

  componentDidMount() {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    if (code) {
      console.log("User has returned with code:", code);
      console.log("Full redirected URL:", window.location.href);

      // Update the state with the code
      this.setState({ code });

      // Directly fetch the access token using the API function
      fetchAccessToken(code)
        .then((token) => {
          console.log("Successfully fetched access token:", token);
          this.setState({ accessToken: token });
        })
        .catch((error) => {
          console.error("Error while fetching the access token:", error);
        });
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
        <h1>El Code es: {this.state.code}</h1>
        {this.state.accessToken && (
          <p>Access Token: {this.state.accessToken}</p>
        )}
      </>
    );
  }
}

export default PopUp;
