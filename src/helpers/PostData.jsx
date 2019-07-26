

// ini function untuk fetch data dengan method post 

export function PostData(type, userData){

    let BaseUrl = 'http://localhost:8080/api/users/';

    return new Promise((resolve, reject) =>{
        fetch(BaseUrl+type,{
            method:'POST',
            body:JSON.stringify(userData)
        })
        .then((response)=> response.JSON())
        .then((responseJson)=>{
            resolve(responseJson);
        })
        .catch((error)=> {
            reject(error);
        });
        
    })
}