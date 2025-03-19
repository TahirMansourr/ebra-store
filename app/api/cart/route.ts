import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req : NextRequest) {
  const existingCart = req.cookies.get('cart');
  console.log('this is my exisiting cart' , existingCart)
  if (existingCart) {
    const res = NextResponse.json(JSON.parse(existingCart.value));
    res.cookies.set('cart' , existingCart.value, {httpOnly: true})
  }

  try {
    const response = await fetch('https://fakestoreapi.com/carts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: 3,
        products: []
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to create cart');
    }

    const newCart = await response.json();

    const res = NextResponse.json(newCart);
    res.cookies.set('cart' , JSON.stringify(newCart), {httpOnly : true})
    
    return res;
  } catch (error) {
    console.error('Error creating cart:', error);
    return NextResponse.json({ error: 'Failed to create cart' }, { status: 500 });
  }
}
 