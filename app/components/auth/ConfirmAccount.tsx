"use client"
import { confirmAccount } from '@/actions/confirm-account.action'
import { PinInput, PinInputField } from '@chakra-ui/pin-input'
import { useRouter } from 'next/navigation'
import { startTransition, useActionState, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

type ActionStateType = {
  errors: string[];
  success: string;
}

export const ConfirmAccount = () => {
  const router = useRouter();
  const [isComplete, setIsComplete] = useState(false);
  const [token, setToken] = useState("")

  const confirmAccountWithToken = confirmAccount.bind(null, token)

  const [state, dispatch] = useActionState<ActionStateType>(confirmAccountWithToken, {
    errors: [],
    success: ''
  });

  const handleChange = (token: string) => {
    setIsComplete(false);
    setToken(token)
  }

  useEffect(() => {
    if (isComplete) {
      startTransition(() => {
        dispatch();
      });
    }
  }, [isComplete, router])

  useEffect(() => {
    if (state.errors) {
      state.errors.forEach((error: string) => {
        toast.error(error)
      })
    }
    if (state.success) {
      toast.success(state.success ,{
          onClose:()=>{
            router.push('/auth/login')
          }
      })
    }
  }, [state, router])


  const handleComplete = () => {
    setIsComplete(true);
  }

  return (
    <>


      <div className='flex justify-center gap-5 my-10'>

        <PinInput
          value={token}
          onChange={handleChange}
          onComplete={handleComplete}
        >
          <PinInputField className='h-10 w-10 border-gray-300 shadow rounded-lg placeholder-white text-center text-2xl font-bold' />
          <PinInputField className='h-10 w-10 border-gray-300 shadow rounded-lg placeholder-white text-center text-2xl font-bold' />
          <PinInputField className='h-10 w-10 border-gray-300 shadow rounded-lg placeholder-white text-center text-2xl font-bold' />
          <PinInputField className='h-10 w-10 border-gray-300 shadow rounded-lg placeholder-white text-center text-2xl font-bold' />
          <PinInputField className='h-10 w-10 border-gray-300 shadow rounded-lg placeholder-white text-center text-2xl font-bold' />
          <PinInputField className='h-10 w-10 border-gray-300 shadow rounded-lg placeholder-white text-center text-2xl font-bold' />
        </PinInput>
      </div>
    </>

  )
}
