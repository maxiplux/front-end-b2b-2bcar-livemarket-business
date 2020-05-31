import axios from "axios";
import qs from "qs";
import Settings from "../../Settings";

const AuthServices = {
    doLogin: user => {
        const credenciales = btoa(`${Settings.SecurityCredentials.user}:${Settings.SecurityCredentials.password}`);

        const httpHeaders = {
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
            Authorization: "Basic " + credenciales
        };

        let data = {
            grant_type: "password",
            username: user.username,
            password: user.password
        };

        return axios.post(`${Settings.url}${Settings.auth}`, qs.stringify(data), {headers: httpHeaders});

    }
};

export default AuthServices;
