import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

interface Props {
  params: {
    id: number;
  };
}

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
  },
];

export function GET(request: NextRequest, { params: { id } }: Props) {
  if (id > products.length)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  return NextResponse.json(products[id - 1]);
}

export async function PUT(request: NextRequest, { params: { id } }: Props) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  if (id > products.length)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });

  products[id - 1] = { ...products[id - 1], ...body };

  return NextResponse.json(products);
}

export async function DELETE(request: NextRequest, { params: { id } }: Props) {
  if (id > products.length)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });

  products.splice(id - 1, 1);

  return NextResponse.json(products);
}
