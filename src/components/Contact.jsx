import React from "react";
import { toast } from "react-toastify";
import { motion } from "motion/react";

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "b5562825-48ed-44e9-b0cb-cd50d780b564");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("");
        toast.success("Form Submitted Successfully")
       
        event.target.reset();
      } else {
        console.log("Error", data);
        toast.error("data.message")
        setResult("");
      }
  
    };







  return (
    <motion.div  initial={{opacity:0, x:-100}}
    transition={{duration:1}}
    whileInView={{opacity:1,x:0}}
    viewport={{once:true}}
      id="contact"
      className="  w-full   container mx-auto px-6 md:20 lg:px-32 pt-10 "
    >
      <div className=" flex flex-col items-center  text-center ">
        <h2 className=" text-4xl mb-3 ">
          <span className="font-bold">Contact</span>{" "}
          <span className=" font-light underline-offset-4 decoration-1   underline">
            With Us{" "}
          </span>{" "}
        </h2>
        <p className=" text-gray-600 font-medium mb-8">
        Ready to Make a Move? Let’s Build Your <br /> Future Together
        </p>
      </div>

      <form onSubmit={onSubmit} className=" max-w-2xl mx-auto text-gray-700 pt-8 " >
 
        <div className=" flex flex-col md:flex-row gap-4">
        <div className=" flex flex-col gap-2 w-full md:w-1/2">
            Your Name 
            <input className="border w-full p-3 outline-none border-gray-400 rounded" type="text"  name="Name" placeholder="Your Name"  required/>
        </div>

<div className=" flex flex-col gap-2 w-full md:w-1/2">
Your Email 
            <input className="border w-full    p-3 outline-none border-gray-400 rounded" type="email"  name="Email" placeholder="Your Email" required />
</div>

        </div>

        <div className=" flex flex-col gap-2 mt-4 "> 
            Message
            <textarea className=" outline-none border border-gray-400 p-3 h-48 resize-none rounded " name="Message" placeholder=" Message" required></textarea>

        </div>
        <div className=" flex justify-center mt-5 mb-10">
        <button className=" px-12 py-2 rounded text-white bg-blue-600 ">{result ? result : "Send Message"}</button>
        </div>
      
      
      </form>
   
    </motion.div>
  );
};

export default Contact;
