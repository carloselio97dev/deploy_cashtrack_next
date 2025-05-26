import React from 'react'

export const SuccessMessage = ({children}:{children: React.ReactNode}) => {
   return (
    <p className="text-center bg-amber-500 text-white p-3 uppercase text-sm">
        {children}
    </p>
  )
}