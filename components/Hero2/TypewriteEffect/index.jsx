import Typewriter from "typewriter-effect";
// import './style.css';

const HeroTypeWriter = () => {

 
 
 return (

    <>
        <Typewriter
            options={{
            strings: [
                " Helping Startup Enterpreneurs Build and Grow a Sustainable and Successful Business  ",
                " Building and Growing A Bootstarp Private Equity Company.",
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