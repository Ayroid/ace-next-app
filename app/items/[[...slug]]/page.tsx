import React from "react";

interface Props {
  params: {
    slug: string[];
  };
}

const ItemsPage = ({ params: { slug } }: Props) => {
  return <div>Items {slug?.join(" ")}</div>;
};

export default ItemsPage;
