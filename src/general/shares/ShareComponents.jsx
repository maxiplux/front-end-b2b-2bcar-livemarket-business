import React from "react";


import {Route, Switch} from "react-router-dom";

import ProductList from "../components/products/ProductList";
import ProductEdit from "../components/products/ProductEdit";

import About from "../pages/About";
import Topics from "../pages/Topics";
import Home from "../pages/Home";

export default function ShareComponents(props) {


    //todo:Handler all using json conf
    return (

        <Switch>
            <Route path="/about"><About {...props} /></Route>
            <Route path="/topics"><Topics {...props}  /></Route>


            <Route path="/products/edit/:id" children={<ProductEdit  {...props} />}/>
            <Route path="/products/delete/:id" children={<ProductEdit {...props} />}/>

            <Route path="/products"><ProductList {...props}  /></Route>
            <Route path="/"><Home  {...props} /></Route>
        </Switch>
    );
}
