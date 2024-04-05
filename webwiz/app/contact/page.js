import React from "react";

function Contact(){ 
    return(
    <div className='md:w-full flex justify-center items-center md:h-[90vh]  flex-col h-[140vh]'>
     <div>
        <h1 className="text-white/70 font-semibold flex justify-center items-center text-3xl py-9 justify-center px-20">Get In Touch</h1>
        <div>
            <form className="">
                <div className="flex flex-wrap flex justify-center items-center">
                    <div className="px-3">
                        <label className="block py-1 text-white/70" htmlFor="fname">First Name</label>
                        <input className="block rounded-sm py-2 bg-black/30  text-white/90 outline-none focus:border-purple-400 focus:border-2" type="text" name="first" required />
                    </div>
                    <div className="px-3">
                        <label className="block py-1 text-white/70" htmlFor="lname">Last Name</label>
                        <input className="block rounded-sm py-2 bg-black/30  text-white/90 outline-none focus:border-purple-400 focus:border-2" type="text" name="last" required />
                    </div>
                </div>
                <div className="block py-3">
                    <label className="text-white/70 mx-2" htmlFor="email">Email</label>
                    <input className="w-[60%] mx-9 rounded-sm py-2 bg-black/30  text-white/90 outline-none focus:border-purple-400 focus:border-2" type="email" name="email" required/>
                </div>
                <div className="flex items-center py-3">
                    <label className="text-white/70 px-2" htmlFor="msg">Message</label>
                    {/* <input className="h-[20vh] w-[75%] mx-2 rounded-sm py-2 bg-black/30  text-white/90 outline-none focus:border-purple-400 focus:border-2" type="text" name="msg" required/> */}
                  <textarea rows="4" name="msg" className="w-[60%] mx-2 rounded-sm bg-black/30  text-white/90 outline-none focus:border-purple-400 focus:border-2" required></textarea>
                </div>
                <div className="flex justify-center">
                  <button className=" bg-[#9834c7] py-2 rounded-md w-[60%] h-full text-white font-mono font-semibold flex justify-center items-center hover:bg-[#9834c7be]">Submit</button> 
                </div>
            </form>
        </div>
     </div>
     <div className='h-[90vh] w-[98%] flex justify-evenly items-center flex-col'>
         <h1 className='text-white/70 font-semibold text-1xl my-2'></h1>
         <div className =' md:h-[25vh] h-[85vh] w-[55%] flex justify-evenly items-center  max-[700px]:flex-col  max-[700px]:gap-y-1'>
            <div className="bg-purple-400 rounded-md mx-10 h-[18vh] aspect-square flex flex-col justify-center items-center">
              <div className="py-2 text-base font-semibold">
                Om Chillure
              </div>
              <div className="py-2 hover:drop-shadow-[0_0_5px_#29043b] ">
                <a href="https://www.linkedin/in/omchillure" target="_blank">LinkedIn</a> 
              </div>
              <div className="py-2 hover:drop-shadow-[0_0_5px_#29043b] ">
                <a href="" target="_blank">Github</a>
              </div>
            </div>
            <div className="bg-purple-400 rounded-md mx-10  aspect-square flex flex-col justify-center items-center h-[18vh]">
              <div className="py-2 text-base font-semibold">
                Krishna Vijaywargia
              </div>
              <div className="py-2 hover:drop-shadow-[0_0_5px_#29043b] ">
                <a href="https://www.linkedin.com/in/krishna-vijaywargia-404895201" target="_blank">LinkedIn</a> 
              </div>
              <div className="py-2 hover:drop-shadow-[0_0_5px_#29043b] ">
                <a href="https://github.com/KrishnaV2" target="_blank">Github</a>
              </div>
            </div>
            <div className="bg-purple-400 mx-10 rounded-md h-[30vh] aspect-square flex flex-col justify-center items-center h-[18vh]">
              <div className="py-2 text-base font-semibold">
                Jay Gupta
              </div>
              <div className="py-2 hover:drop-shadow-[0_0_5px_#29043b] ">
                <a href="https://www.linkedin/in/jaygupta17" target="_blank">LinkedIn</a> 
              </div>
              <div className="py-2 hover:drop-shadow-[0_0_5px_#29043b] ">
                <a href="https://www.github.com/jaygupta17" target="_blank">Github</a>
              </div>
            </div>
         </div>
     </div>
    </div>
    )
}
export default Contact;