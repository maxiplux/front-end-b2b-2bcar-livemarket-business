import React from "react";
import {Link, Route, Switch, useParams, useRouteMatch} from "react-router-dom";
import {DatePicker} from "antd";

function Topic() {
    let {topicId} = useParams();
    return (
        <>
            <DatePicker/>
            <h3>Requested topic ID: {topicId}</h3>
        </>
    );
}

export default function Topics() {
    let match = useRouteMatch();

    return (
        <div>
            <h2>Topics</h2>

            <ul>
                <li>
                    <Link to={`${match.url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
                </li>
            </ul>

            <Switch>
                <Route path={`${match.path}/:topicId`}>
                    <Topic/>
                </Route>
                <Route path={match.path}>
                    <h3>Please select a topic.</h3>
                </Route>
            </Switch>
        </div>
    );
}
