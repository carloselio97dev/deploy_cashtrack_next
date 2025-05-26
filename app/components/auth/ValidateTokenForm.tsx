import { validateToken } from "@/actions/validate-token-action";
import { PinInput, PinInputField } from "@chakra-ui/pin-input";
import { startTransition, useActionState, useEffect, useState ,Dispatch } from "react";
import { toast } from "react-toastify";

type ValidateTokenFormProps = {
  setIsValidToken:Dispatch<React.SetStateAction<boolean>>
  token:string
  setToken:Dispatch<React.SetStateAction<string>>
}

export default function ValidateTokenForm({setIsValidToken, token, setToken}:ValidateTokenFormProps) {


    const [isComplete, setIsComplete] = useState(false);

    const validateTokenInput = validateToken.bind(null, token);
    const [state, dispatch] = useActionState(validateTokenInput, {
        errors:[],
        success:'',
    })

    console.log(state);

    useEffect(() => {
      if(isComplete){
       // Envolvemos la llamada a dispatch en startTransition
       startTransition(() => {
        dispatch();
    });
      }
    }, [isComplete])

    useEffect(() => {
      if(state.errors){
          state.errors.forEach(error=>{
            toast.error(error);
          })
      }
      if(state.success){
        toast.success(state.success);
        setIsValidToken(true);
      }
    }, [state , setIsValidToken])




  const handleChange = (token: string) => {
         setIsComplete(false);
        setToken(token);
  }

  const handleComplete = () => {
     setIsComplete(true);
  
  }

  return (
    <div className="flex justify-center gap-5 my-10">
      <PinInput
        value={token}
        onChange={handleChange}
        onComplete={handleComplete}
      >
        <PinInputField className="h-10 w-10 text-center border border-gray-300 shadow rounded-lg placeholder-white" />
        <PinInputField className="h-10 w-10 text-center border border-gray-300 shadow rounded-lg placeholder-white" />
        <PinInputField className="h-10 w-10 text-center border border-gray-300 shadow rounded-lg placeholder-white" />
        <PinInputField className="h-10 w-10 text-center border border-gray-300 shadow rounded-lg placeholder-white" />
        <PinInputField className="h-10 w-10 text-center border border-gray-300 shadow rounded-lg placeholder-white" />
        <PinInputField className="h-10 w-10 text-center border border-gray-300 shadow rounded-lg placeholder-white" />
      </PinInput>
    </div>
  )
}