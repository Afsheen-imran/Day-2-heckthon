import { NextResponse } from 'next/server'
import { client } from '@/lib/sanity'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    const category = searchParams.get('category')

    let query = '*[_type == "product"]'
    let params = {}

    if (id) {
      query = '*[_type == "product" && _id == $id][0]'
      params = { id }
    } else if (category) {
      query = '*[_type == "product" && category == $category]'
      params = { category }
    }

    const products = await client.fetch(query, params)
    return NextResponse.json(products)
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json({ error: 'Error fetching products' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const result = await client.create({
      _type: 'product',
      ...body
    })
    return NextResponse.json(result, { status: 201 })
  } catch (error) {
    console.error('Error creating product:', error)
    return NextResponse.json({ error: 'Error creating product' }, { status: 500 })
  }
}

