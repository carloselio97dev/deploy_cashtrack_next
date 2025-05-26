import { z } from 'zod';


export const LoginSchema = z.object({
    email: z.string()
        .min(1, { message: 'El Email es Obligatorio' })
        .email({ message: 'Email no válido' }),
    password: z.string()
        .min(1, { message: 'El Password no puede ir vacio' })
})

export const DraftBudgetSchema = z.object({
    name: z.string()
        .min(1, { message: 'El Nombre del presupuesto es obligatorio' }),
    amount: z.coerce.
        number({ message: 'Cantidad no válida' })
        .min(1, { message: 'Cantidad no válida' }),
})



export const PasswoordValidationSchema = z.string().min(1, { message: 'El Password no valido' })


export const DraftExpenseSchema = z.object({
    name: z.string().min(1, { message: 'El Nombre del gasto es obligatorio' }),
    amount: z.coerce.number().min(1, { message: 'Cantidad no válida' })

})

export const UpdatePasswordSchema = z.object({
        current_password: z.string().min(1, {message: 'El Password no puede ir vacio'}),
        password: z.string()
                .min(8, {message: 'El Nuevo Password debe ser de al menos 8 caracteres'}),
        password_confirmation: z.string()
  }).refine((data) => data.password === data.password_confirmation, {
      message: "Los Passwords no son iguales",
      path: ["password_confirmation"]
  });

export const SuccessSchema = z.object({
    msg: z.string()
});
export const ErrorResponseSchema = z.object({
    error: z.string()
})

export const TokenSchema = z.string({ message: "Token no válido" })
    .length(6, { message: "Token no válido" })

export const registerSchema = z.object({
    email: z.string()
        .min(1, { message: "El Email esta Obligatorio" })
        .email({ message: "Email no válido" }),
    name: z.string()
        .min(1, { message: "Tu Nombre no puede ir Vacio" }),
    password: z.string()
        .min(8, { message: "El password es muy corto, mínimo 8 carácteres" }),
    password_confirmation: z.string()
}).refine((data) => data.password == data.password_confirmation, {
    message: 'Los password no son Iguales',
    path: ['password_confirmation']
})

export const ForgotPasswordSchema = z.object({
    email: z.string()
        .min(1, { message: 'El Email es Obligatorio' })
        .email({ message: 'Email no válido' }),
})

export const ResetPasswordSchema = z.object({
    password: z.string()
        .min(8, { message: 'El Password debe ser de al menos 8 caracteres' }),
    password_confirmation: z.string()
}).refine((data) => data.password === data.password_confirmation, {
    message: "Los Passwords no son iguales",
    path: ["password_confirmation"]
});

export const UserSchema = z.object({
    id: z.number(),
    name: z.string(),
    email: z.string().email()
})

export const ExpenseAPIResponseShema = z.object({
    id: z.number(),
    name: z.string(),
    amount: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
    budgetId: z.number(),
})


export const BudgetAPIResponseSchema = z.object({
    id: z.number(),
    name: z.string(),
    amount: z.string(),
    userId: z.number(),
    createdAt: z.string(),
    updatedAt: z.string(),
    expenses:z.array(ExpenseAPIResponseShema)
})

export const updateUserSchema = z.object({
  name: z.string()
    .min(1, { message: 'El Nombre es Obligatorio' }),
  email: z.string()
    .min(1, { message: 'El Email es Obligatorio' })
    .email({ message: 'Email no válido' })
});

export const BudgetsAPIResponseSchema = z.array(BudgetAPIResponseSchema.omit({expenses:true}))
//Pasarle el Schema que quieres tomar como base
export type User = z.infer<typeof UserSchema>
export type Budget = z.infer<typeof BudgetAPIResponseSchema>
export type Expense = z.infer<typeof ExpenseAPIResponseShema>
export type DraftExpense=z.infer<typeof DraftExpenseSchema>
