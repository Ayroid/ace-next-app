import React from "react";

interface Props {
  params: {
    id: number;
    pid: number;
  };
}

const page = ({ params: { id, pid } }: Props) => {
  return (
    <div>
      Product {id} - Photo {pid}
    </div>
  );
};

export default page;
