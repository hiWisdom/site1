"use client";
import React, {useState} from "react";
import { motion } from "framer-motion";

const SubscribeCTA = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubscribe = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);
        setError(null);

        try {
            const response = await fetch("http://localhost/heelheid/subscribe.php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });
            const result = await response.json();
            if (result.success) {
                setMessage(`Subscribed successfully! Location: ${result.location.country}`);
                setEmail("");
            } else {
                setError(result.error || "Subscription failed.");
            }
        } catch (err) {
            setError("Network error, please try again.");
        } finally {
            setLoading(false);
        }
    };
  return (
    <>
      {/* <!-- ===== SubscribeCTA Start ===== --> */}
      {/* <section className="overflow-hidden px-4 md:px-8 2xl:px-0 py-25"> */}
      <section className="my-5 lg:my-[6em] mx-[4%]">
        {/* <div className="mx-auto max-w-c-1390 rounded-lg bg-gradient-to-t from-[#DEE7FF] to-[#f4710f] px-7.5 py-12.5 md:px-12.5 xl:px-17.5 xl:py-0"> */}
          {/* <div className="gap-8 md:flex-nowrap md:items-center md:justify-between md:gap-0  flex"> */}
          {/* <div className="w-fit mx-auto bg-primary rounded-[32px] flex flex-col lg:flex-row nine20 lg:p-20 p-4 bg-gradient-to-r from-[#E86512] to-[#f4710f] "> */}
          {/* <div className="w-fit mx-auto rounded-[32px] flex flex-col lg:flex-row nine20 lg:p-20 p-4"
     style={{
        background: "radial-gradient(circle at 30% 50%, #E86512, #f4710f)"
     }}> */}

<div className="container w-fit mx-auto rounded-[32px] flex flex-col lg:flex-row nine20 lg:p-20 p-4 custom-bg"
    //  style={{
    //     background: "linear-gradient(120deg, #E86512 30%, #f4710f 70%)"
    //  }}
     
     >

    <div className="right-circle" ></div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left lg:w-1/2 my-auto subscribeCTA"
            >

                <div>

                    <h1 
                        className="relative text-4xl lg:text-7xl text-white"
                        style={{fontFamily: 'AvenirBold'}}
                    >
                    Be Exclusive!
                    </h1>
                    
                    <p className="relative text-white">
                        Join our Newsletter.
                    </p>
                </div>
              
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right lg:w-1/2 m-auto subscribeCTA"
            >
              <div className="relative m-auto grid gap-[2em]">

                <div className="grid gap-[1em]">
                  <h1 className="text-white text-[18px] font-extrabold">
                      Stay ahead of the curve with our weekly newsletter.  
                  </h1>

                  <p className="text-white">
                      Get exclusive updates on, new acquisition opportunities, Job openings for talented team members, Insider information on upcoming events, Behind-the-scenes insights into our company's journey, challenges, and successes
                  </p>
                </div>

                <form onSubmit={handleSubscribe} className="flex items-center bg-gray-100 h-14 lg:w-[390px] rounded-lg">
                    <input
                        type="email"
                        placeholder="Your email..."
                        className="p-3 w-full text-gray-700 bg-gray-100 rounded-l-lg focus:outline-none"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type="submit" className="bg-black text-white px-6 mx-3 h-10 rounded-lg hover:bg-primary transition duration-300">
                        {loading ? "Submitting..." : "Submit"}
                    </button>
                    {message && <p className="text-green-600 mt-2">{message}</p>}
                    {error && <p className="text-red-600 mt-2">{error}</p>}
                </form>

              </div>

            </motion.div>

          </div>
        {/* </div> */}
      </section>
      {/* <!-- ===== SubscribeCTA End ===== --> */}
    </>
  );
};

export default SubscribeCTA;
