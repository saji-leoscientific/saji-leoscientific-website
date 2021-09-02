import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import Slideshow from '../components/ReactSlider/ReactSlider';
import LayoutProviders from '@theme/LayoutProviders'
import Head from '@docusaurus/Head';
import Navbar from '@theme/Navbar';
import Footer from '@theme/Footer';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--transparent', styles.heroBanner)}
    style={{background: "transparent", position:"absolute", top:"20px", marginLeft:"5px", textAlign:"center", cursor:"default"}}
    >
      <div className="container" >
        <h1 className="hero_"
        style={{color:"#505050", cursor:"default"}} // top badge color
        >{siteConfig.title}</h1>
        <p className="hero__subtitle"
        style={{color:"#505050"}} // top badge tagline color
        >{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
          style={{backgroundColor:"skyblue", color:"#505050"}}
            className="button button--secondary button--lg btncolor"
            to="/docs/intro">
            Products Page
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
//////////////////////
  const [loading, setLoading] = useState(true);
////////////////////////

useEffect(() => {
  setTimeout(() => {
    setLoading(false);
  }, 0.0000001);
}, []);

////////////////////////

// window.onload= function trial () {
//   setTimeout(() => {
//   return(
//     <Layout
//       title={`Hello from ${siteConfig.title}`}
//       description="Description will go into a meta tag in <head />">

//         {/* <div className='slideshower'>   */}
//         <Slideshow />
//         {/* </div> */}
      
//       {/* <p>Basldfksd</p> */}           
//       <HomepageHeader />

//       <main>
//         <HomepageFeatures />
//       </main>
//     </Layout>
//   ) 
//   }, 10);
// }
/////////////////////////////

// window.onload = function exampleFunction() {
  
//   // Function to be executed
// }
////////////////////////

  const {siteConfig} = useDocusaurusContext();
  // return (
    
  //   // <div 
  //   // //style={{position:"absolute"}}
  //   // >
      
  //   // {/* <div>{loading ? "loading..." : "hello"}</div>; */}

  //   // <Layout
  //   //   title={`Hello from ${siteConfig.title}`}
  //   //   description="Description will go into a meta tag in <head />">

  //   //     {/* <div className='slideshower'>   */}
  //   //     <Slideshow />
  //   //     {/* </div> */}
      
  //   //   {/* <p>Basldfksd</p> */}           
  //   //   <HomepageHeader />

  //   //   <main>
  //   //     <HomepageFeatures />
  //   //   </main>
  //   // </Layout>
  //   // </div>

  //   <div 
  //   //style={{position:"absolute"}}
  //   // onLoad={trial()}
  //   >
      
  
  //   <Layout
  //   title={`Hello from ${siteConfig.title}`}
  //   description="Description will go into a meta tag in <head />">

  //     {/* <div className='slideshower'>   */}
  //     <Slideshow />
  //     {/* </div> */}
    
  //   {/* <p>Basldfksd</p> */}           
  //   <HomepageHeader />

  //   <main>
  //     <HomepageFeatures />
  //   </main>
  // </Layout>
 

    
  //   {/* <div>{loading ? "loading..." : "hello"}</div>; */}

 
  //   </div>


///////////////////////////////////

  return (
    
    <div 
    //style={{position:"absolute"}}
    >
      
  
    {/* <Layout
    title={`${siteConfig.title}`}
    description="Description will go into a meta tag in <head />"/> */}
    <LayoutProviders
    
    >
    {/* <Head
    title={`${siteConfig.title}`}
    description="Description will go into a meta tag in <head />"
    />   */}
    
    
    
    {/* <Head>
    <title> {`${siteConfig.title}`} </title>
    <meta name="description" content="Description will go into a meta tag in <head />" />
    </Head>  
     */}

    <Parent>  
      <Head>    
        <title>My Title</title>    
        <meta name="description" content="Helmet application" />  
      </Head>  
      <Child>    
        <Head>      
          <title>Nested Title</title>      
          <meta name="description" content="Nested component" />    
        </Head>  
      </Child>
    </Parent>     

    <Navbar
    />
    </LayoutProviders>
    {/* <Navbar
    title={`${siteConfig.title}`}
    description="Description will go into a meta tag in <head />"/> */}


    
  {loading ?  console.log('loading...') :  
    
    <>

    {/* <div className='slideshower'>   */}
    <Slideshow />
    {/* </div> */}
    
    {/* <p>Basldfksd</p> */}          
    <HomepageHeader />

    <main>
      <HomepageFeatures />
    </main>

   <Footer/>
    </>
    }  

  {/* </Layout> */}
   
  

  </div>
  
);
};
