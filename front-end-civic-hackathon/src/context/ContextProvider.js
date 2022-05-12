import React, {useState} from "react";
import { useEffect } from "react";
import Context from "./Context";

function ContextProiver({children}){
/// this is where we will add state that will be distribted though out the app. 
    let context = {};


    return (
        <Context.Provider value={context}>
            {children}
        </Context.Provider>
    )
}

export default ContextProiver