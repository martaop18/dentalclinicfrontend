export const checkError = (name, value) => {

    switch(name){

        case "email":
        
            if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)){
                return "Email is wrong";
            }
                return "";

        case "password":
       
            if(value.length < 6){
                return "Password must be 6 characters";
            }
            return "";

         case "name":
            if (value.length < 2){
                return "Name must be 6 characters";
            }
            return "";

        break;

        default:
            console.log("Wrong format");
    }
}