
import Button from "./components/Button";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Link from "next/link";

export default function Home() {

  
  return (
    <>
    
    <div className="flex justify-between">
      <div>
      <h1 className=" heading pt-5 font-bold text-xl pl-10 text-#2F0147">News & Sports</h1>

      </div>

      <div  className="pr-11  ">
       <Link href="/signUp"><Button title={"Sign Up"}/></Link> 
      </div>
    </div>

    <div className="animation flex flex-wrap gap-8 p-6">
     
     <Link href='/blog1'>  <Card id={1} src={"https://static.wixstatic.com/media/81e4cb3234ed40418beeb153a026bc9d.jpg/v1/fill/w_740,h_493,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/81e4cb3234ed40418beeb153a026bc9d.jpg"} title= {"United Nations"} description = {"This is precisely why you are bound to experience convenience and communicate without interruptions with the highly advanced services."}  /></Link>
  
<Link href='/blog2'><Card src={"https://static.wixstatic.com/media/fe6e09fd4db8450c8e9aa013c11b4e30.jpg/v1/fill/w_740,h_494,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/fe6e09fd4db8450c8e9aa013c11b4e30.jpg"} title={"Rugby World Cup 2023"} description={" Globfone takes usability and user satisfaction to a whole new level with these exemplary services. Employ our time efficient services and make."} /></Link>
    
<Link href='/blog3'> <Card src={"https://static.wixstatic.com/media/2a5204e9e05b438b85155da4b68cee3e.jpg/v1/fill/w_740,h_492,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2a5204e9e05b438b85155da4b68cee3e.jpg"} title={"Air raids across Syria"} description={"Welcome to your blog post. Use this space to connect with your readers and potential customers in a way that’s current and interesting."}/></Link>
   
    </div>

<h1 className="pt-5 font-bold text-xl pl-10 text-#2F0147">Entertainment & Politics</h1>
<div className="flex flex-wrap gap-8 p-7">

  <Link href='/blog4'>    <Card src={"https://static.wixstatic.com/media/c47e73702a694f288ec311c545c2d563.jpg/v1/fill/w_740,h_493,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c47e73702a694f288ec311c545c2d563.jpg"} title={"Women's Day March"} description={" The attractive and easy to use interface lets users send text messages in a matter of minutes. Additionally, "}/></Link>

<Link href="/blog5">    <Card src={"https://static.wixstatic.com/media/01c75ae547b54cfeb7b2ed44d8b7716e.jpg/v1/fill/w_740,h_493,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/01c75ae547b54cfeb7b2ed44d8b7716e.jpg"} title={"Let's talk social reform"} description={"Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading."}/></Link>

<Link href='/blog6'> <Card src={"https://static.wixstatic.com/media/25a3e85de9d04f4d971f2dc342385145.jpg/v1/fill/w_740,h_492,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/25a3e85de9d04f4d971f2dc342385145.jpg"} title={"Panthers win Missouri"} description={"Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading."}/></Link>
   
    </div>

    

  
    </>
  );
}
