import { Gift } from "./Gift";

import ThankYou from "./ThankYou";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";

export const Main = () => {
    const history = useHistory();
    console.log("history = ", history)
    useEffect(() => {
        if (null != localStorage.getItem("mobileNo"))
        history.push("/thankq");
        // let mobileNo = localStorage.getItem("mobileNo");
        console.log("mobileNo", localStorage.getItem("mobileNo"));
        
    });
    return (
            <Switch>
                <Route exact path="/" component={Gift} />
                <Route path="/thankq" component={ThankYou} />
            </Switch>

    )
}