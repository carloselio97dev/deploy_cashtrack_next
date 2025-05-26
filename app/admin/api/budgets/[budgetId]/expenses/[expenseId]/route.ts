// app/admin/api/budgets/[budgetId]/expenses/[expenseId]/route.ts

import { NextResponse } from 'next/server'
import { verifySession } from '@/src/auth/dal'
import getToken from '@/src/auth/token'

export async function GET(
  request: Request,
  // Aquí decimos que params es una Promise<{ budgetId, expenseId }>
  { params }: { params: Promise<{ budgetId: string; expenseId: string }> }
) {
  // Desempaqueta los valores con await
  const { budgetId, expenseId } = await params

  // … resto de tu lógica igual …
  await verifySession()
  const token = await getToken()

  const url = `${process.env.API_URL}/budgets/${budgetId}/expenses/${expenseId}`
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` }
  })

  if (!res.ok) {
    const text = await res.text()
    return NextResponse.json({ error: text || 'Error en el fetch' }, { status: res.status })
  }

  const data = await res.json()
  return NextResponse.json(data)
}
