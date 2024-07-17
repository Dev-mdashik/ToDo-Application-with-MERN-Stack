import React from "react";
import { Host } from "../host";
import { Url } from "../api/api";
import { PostMethod } from "../http_request/commonRequest";

export const LoginAuth = async (data: any) => {
    try {
        const response = await fetch(`${Host}${Url.login}`, PostMethod(data));
        const result = response.json();
        return result;
    }
    catch (err) {
        console.error(err);
    }
}

export const SignUpAuth = async (data: any) => {
    try {
        const response = await fetch(`${Host}${Url.login}`, PostMethod(data));
        const result = response.json();
        return result;
    }
    catch (err) {
        console.error(err);
    }
}

