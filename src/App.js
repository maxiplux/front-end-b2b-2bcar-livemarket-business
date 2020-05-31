import React, {useState, useEffect} from "react";
import DashBoard from "./general/pages/DashBoard";
import LoginComponent from "./general/auth/Login";
import './App.css';

export default function App() {
    const [user, setUser] = useState(null);
    const [state, setState] = useState({collapsed: false, user: null});


    const logout = () => {
        sessionStorage.removeItem('userProfile',);
        setUser(null);
    }

    const refreshUser = (data) => {
        data.Authorization=`Bearer ${data.access_token}`
        sessionStorage.setItem('userProfile', JSON.stringify(data));
        setUser(data);
    }


    useEffect(() => {
        if (sessionStorage.getItem('userProfile')) {
            setUser(JSON.parse(sessionStorage.getItem('userProfile')));
        }

    }, []);


    const onCollapse = collapsed => {
        setState({collapsed});
    };

    if (!user || user === {}) {
        return (
            <LoginComponent
                setUser={refreshUser}
                state={state}
                onCollapse={onCollapse}
                user={
                    user
                }/>
        );
    }

    return <DashBoard state={state}
                      onCollapse={onCollapse}
                      logout={logout}
                      user={
                          user
                      }/>;
}
