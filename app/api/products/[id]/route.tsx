import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

interface Props {
  params: {
    id: string;
  };
}

export async function GET(request: NextRequest, { params: { id } }: Props) {
  const data = await prisma.product.findUnique({
    where: {
      id,
    },
  });
  return NextResponse.json(data);
}

export async function PUT(request: NextRequest, { params: { id } }: Props) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const data = await prisma.product.update({
    where: {
      id,
    },
    data: body,
  });

  return NextResponse.json(data);
}

export async function DELETE(request: NextRequest, { params: { id } }: Props) {
  const data = await prisma.product.delete({
    where: {
      id,
    },
  });

  return NextResponse.json(data);
}
