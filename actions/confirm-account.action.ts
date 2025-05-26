"use server";

import { ErrorResponseSchema, TokenSchema } from "@/src/schemas";


type  ActionStateType = {
    errors:string[],
    success:string
}

export async function confirmAccount(token:string, prevState:ActionStateType){

  
    const confirmToken=TokenSchema.safeParse(token);
    if(!confirmToken.success){
        return {
            errors:confirmToken.error.issues.map((issue)=>issue.message),
            success:''
        }
    }
     //Confirmar el Usuario
     const url = `${process.env.API_URL}/auth/confirm-account`;
     const req = await fetch(url, {
         method: "POST",
         headers: {
             "Content-Type": "application/json"
         },
         body: JSON.stringify({
            token:confirmToken.data
         })
     })

     const json = await req.json();
    
     console.log(req.ok);
     console.log(json);

     if(!req.ok){

        const {error} = ErrorResponseSchema.parse(json);
        return {
            errors: [error],
            success:''
        }
     }

     // El backend devuelve un string simple, así que lo usamos directamente
     return {
         errors: [],
         success: json
     }
}
