import NoFooterLayout from "@/layout/NoFooterLayout";
import Link from "next/link";
import React from "react";

function ProductCategory({ selectedCategory }) {
  return (
    <div className="mt-[7rem] px-[1em]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
        {selectedCategory.map((eachCopmonents) => (
          <div
            key={eachCopmonents._id}
            className="border shadow-lg rounded-lg hover:scale-105 duration-300"
          >
            <Link href={`/details/${eachCopmonents._id}`}>
              <img
                src={eachCopmonents.Image}
                alt={eachCopmonents.ProductName}
                className="w-full h-[500px] sm:h-[300px] md:h-[380px] lg:h-[400px] object-cover rounded-t-lg"
              />
            </Link>
            <div className="px-1">
              <div className="flex justify-between px-2 py-4">
                <p className="font-bold">{eachCopmonents.ProductName}</p>
              </div>
              <div className="flex justify-between px-2 py-4">
                <p>
                  <span className="font-bold">Type</span>:{" "}
                  {eachCopmonents.ProductType}
                </p>
                <p>{eachCopmonents.Status}</p>
                <p>Rating : {eachCopmonents.Rating}</p>
              </div>
              <div className="flex justify-between px-2 py-4">
                <p className="font-bold">$ {eachCopmonents.Price}</p>
                <Link href={`/details/${eachCopmonents._id}`}>
                <p
                  className="font-bold cursor-pointer hover:text-blue-700"
                  style={{ textDecoration: "underline" }}
                >
                  See More Details
                </p>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCategory;

ProductCategory.getLayout = function getLayout(page) {
  return <NoFooterLayout>{page}</NoFooterLayout>;
};

export const getStaticPaths = async () => {
  const response = await fetch("http://localhost:3000/api/products");
  const componentsType = await response.json();
  const paths = componentsType.data.map((product) => ({
    params: { productCategory: product.ProductType },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const response = await fetch(
    `http://localhost:3000/api/products?category=${params.productCategory}`
  );
  const selectedComponents = await response.json();
  return {
    props: {
      selectedCategory: selectedComponents.data,
    },
  };
};
