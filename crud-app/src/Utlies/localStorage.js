export const getLocalData=(key)=>{
    if(key){
        return localStorage.getItem(key);

    }

}
export const saveLocalData=(key,value)=>{
    if(key && value){
        localStorage.setItem(key,value);
    }
}