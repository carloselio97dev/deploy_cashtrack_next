export const formatCurrency = (quantity:number) => {
    return new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency:'USD'
    }).format(quantity);
}

export const  formatDate=(isoString: string) => {
     const date = new Date(isoString);
     const formater= new Intl.DateTimeFormat('es-ES',{
        year: 'numeric',
        month: 'long',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
     })

     return formater.format(date);
}