


export const ErrrorMessage = ({children}:{children: React.ReactNode}) => {
  return (
    <p className="text-center bg-red-600 text-white p-3 m-3 uppercase text-sm">
        {children}
    </p>
  )
}
