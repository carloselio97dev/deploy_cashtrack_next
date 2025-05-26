"use server";

import getToken from "@/src/auth/token";
import { ErrorResponseSchema, SuccessSchema, updateUserSchema } from "@/src/schemas";

type PrevStateInfo = {
    errors:string[],
    success:string
}


export const updateInfoUser  = async (prevState:PrevStateInfo,formData:FormData) => {


  const infoUser = {
         name:formData.get('name')?.toString() || '',
         email:formData.get('email')?.toString() || ''
    }
    const updateUser= updateUserSchema.safeParse(infoUser)

    if(!updateUser.success){
        return {
            errors: updateUser.error.issues.map((issue) => issue.message),
            success:''
        }
 
    }

    const token = await getToken();
    const url = `${process.env.API_URL}/auth/user`;
    const req = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
             'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            name: updateUser.data.name,
            email: updateUser.data.email
        })
    })

       const json =  await req.json();
       if(!req.ok){
        const error=ErrorResponseSchema.parse(json);
        return {
             errors:[error.error],
              success:''
        }
       }
       const success=SuccessSchema.parse(json);

    return {
          errors:[],
             success:success.msg
    }
}

