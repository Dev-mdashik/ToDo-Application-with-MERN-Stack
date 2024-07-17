import React from "react";

export const GetMethod = () => {
    const http = {
        method: "GET",
        header: {'Content-Type' :  "application/json"},       
    }
    return http;
}

export const PostMethod = (data: any) => {
    const http = {
        method: "POST",
        headers: {'Content-Type' :  "application/json"},
        body: JSON.stringify(data),
    }
    return http;
}

export const PutMethod = (data: any) => {
    const http = {
        method: "PUT",
        headers: {'Content-Type' :  "application/json"},
        body: JSON.stringify(data),
    }
    return http;
}

export const DeleteMethod = () => {
    const http = {
        method: "DELETE",
        header: {'Content-Type' :  "application/json"},        
    }
    return http;
}

