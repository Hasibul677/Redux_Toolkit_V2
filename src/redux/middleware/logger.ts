import { Middleware } from "@reduxjs/toolkit"


const logger: Middleware = (store) => (next) => (action)=>{
    console.log("Current State",store.getState());
    next(action);
    console.log("Update State",store.getState());
}

export default logger;
