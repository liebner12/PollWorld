import * as SecureStore from 'expo-secure-store';

const isLoggedIn = async () => {
    const expected_status = 200;
    const server = "https://server.com";
    let token = await SecureStore.getItemAsync("token");
    const token_login_data  = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Basic: '.concat(token),
        }
    };

    await fetch(server.concat("/login"), token_login_data)
        .then(response => {
            if(response.status === expected_status){
                console.log("Zalogowano automatycznie")
                //TODO zebranie zwróconych przez serwer danych i przejście do ekranu HOME
            }
            else{
                console.log("error", response.status)
                //TODO przejście z tego punktu do ekranu logowania
            }
        }
        )

}