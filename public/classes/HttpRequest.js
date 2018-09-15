class HttpRequest {

    static get(url, params = {}){
        return this.request('GET', url, params);
    }
    static post(url, params = {}){
        return request('POST', url, params);
    }
    static put(url, params = {}){
        return request('PUT', url, params);
    }
    static delete(url, params = {}){
        return request('DELETE', url, params);
    }

    static request(method, url, params = {} ){

        return new Promise( (resolve, reject)=> {
            
            let ajax = new XMLHttpRequest();
            ajax.open(method, url);

            ajax.onerror = event => {
                reject(e);
            }

            ajax.onload = event => {
                let obj = {};
    
                try{
                    obj = JSON.parse(ajax.responseText);
                }catch(e){
                    reject(e);
                }

                resolve(obj);
            }
            ajax.send();
        });
    }
}