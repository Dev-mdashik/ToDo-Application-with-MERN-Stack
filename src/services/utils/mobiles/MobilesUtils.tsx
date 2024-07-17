import { Url } from "../../api/api"
import { Host } from "../../host"
import { GetMethod, PostMethod, PutMethod, DeleteMethod } from "../../http_request/commonRequest"

export const CreateMobiles = async (data: any) => {
    try {
        const response = await fetch(`${Host}${Url.createMobiles}`, PostMethod(data));
        const result = response.json();        
        return result;
    }
    catch(e) {
        console.error('error', e)
    }
}

export const GetMobiles = async () => {
    try {
        const response = await fetch(`${Host}${Url.getMobiles}`, GetMethod());
        const result = response.json();        
        return result;
    }
    catch(e) {
        console.error('error', e)
    }
}

export const updateMobiles = async (id: string, data: any) => {
    try {
        const response = await fetch(`${Host}${Url.updateMobiles}${id}`, PutMethod(data))
        const result = response.json();
        return result;
    } catch (e) {
        console.error('error', e)
    }
}

export const DeleteMobiles = async (id: any) => {
    try {
        const response = await fetch(`${Host}${Url.deleteMobiles}${id}`, DeleteMethod());
        const result = response.json();
        return result;
    }
    catch(e) {
        console.error('error', e)
    }
}

