import Typewriter from "typewriter-effect";
// import './style.css';

const HeroTypeWriter = () => {

 
 
 return (

    <>
        <Typewriter
            options={{
            strings: [
                " Helping Startup Build Successful Business.",
                " Helping Enterprenuers Build Sustainable Business.",
                " Building and Growing A Bootstrap Private Equity Company.",
            ],
            autoStart: true,
            loop: true,
            delay: 50,
            }}
        />
    </>

 ) 

}

export default  HeroTypeWriter;