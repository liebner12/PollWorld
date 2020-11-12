import * as SecureStore from 'expo-secure-store';

export const registerLogic = (email, password) => {
    const server = "http://localhost:3000/users";
    const expected_status = 201;

    const register_data = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    };
    fetch(server, register_data)
        .then(response => {
            if(response.status === expected_status){
                console.log("Zarejestrowano")
                let token_value = JSON.stringify(response.headers.get('authorization'));
                SecureStore.setItemAsync("token",token_value);
                //TODO Przejście do kolejnego etapu rejestracji
            }
            else{
                //TODO Dostaliśmy status code oznaczający błąd, wyswietl komunikat, wróc do ekranu rejestracji
                console.log("error", response.status)
            }
        })


}
