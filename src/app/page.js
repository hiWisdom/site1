"use client";
import Hero2 from "../../components/Hero2"; //Hero components
import Product_ServicesPage from "../../components/Product&Services"; //Product and Services components
import WorkwithUs from "../../components/Team/i/WrokWitUs";//Work with us choose us components
import SubscribeCTA from "../../components/Banner/CTA"; //SubscribeCTA components
import AboutPage from "../../components/About"; //About us components
import TeamPage from "../../components/Team"; //Our Team components
import FAQs from "../../components/Faq";  //Frequently asked questions components
import ContactPage from "../../components/Contact"; //Contact us components

export default function Home() {
  return (
    <>
      <Hero2/>
      <AboutPage/>
      <Product_ServicesPage/>
      <WorkwithUs/>
      <TeamPage/>
      <SubscribeCTA/>
      <FAQs/>
      <ContactPage/> 
    </>
  );
}
