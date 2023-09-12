import NoFooterLayout from '@/layout/NoFooterLayout'
import React from 'react'
import AddComponentsDetails from './componentsDetails'

function AddPcComponents({selectedCategory}) {

  return (
    <div className='mt-[6rem]'>
      {selectedCategory.map((categoryData,index) => (
        <AddComponentsDetails key={index} singleProduct={categoryData}/>
      ))}
    </div>
  )
}

export default AddPcComponents

export const getServerSideProps = async (context) => {
  const { params } = context;
  const response = await fetch(
    `http://localhost:3000/api/products?category=${params.addcomponents}`
  );
  const selectedComponents = await response.json();
  return {
    props: {
      selectedCategory: selectedComponents.data,
    },
  };
};

AddPcComponents.getLayout = function getLayout(page){
    return <NoFooterLayout>
        {page}
    </NoFooterLayout>
}