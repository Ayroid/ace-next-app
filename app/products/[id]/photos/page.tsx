import React from "react";

interface Props {
  params: {
    id: number;
  };
}

const page = ({ params: { id } }: Props) => {
  return <div>Product {id} Photos</div>;
};

export default page;
