export const checkError = (name, value) => {

    switch(name){

        case "email":
        
            if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)){
                return "email is wrong";
            }
                return "";

        case "password":
       
            if(value.length < 6){
                return "Password must be 6 characters";
            }

        break;

        default:
            console.log("Wrong format");
    }


}