import RootLayout from "@/layout/RootLayout";

export default function Home() {
  return (
    <div style={{paddingTop:"5rem",height:"100vh"}}>
      <h1>Home Page</h1>
    </div>
  );
}

Home.getLayout = function getLayout(page){
  return <RootLayout>
    {page}
  </RootLayout>
}