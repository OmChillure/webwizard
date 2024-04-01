import React from "react";

function About() {
  const team = [
    {
      name: "Jay Gupta",
      branch: "Data Science",
      skills: ["NextJs", "Tailwind CSS", "Appwrite", "Figma"],
      socials : [{LinkedIn : ''} , {Github : ''}],

    },
    {
      name: "Krishna Vijaywargiy",
      branch: "Data Science",
      skills: ["NextJs", "Tailwind CSS","Figma" , "Java"],
      socials : [{LinkedIn : ''} , {Github : ''}],
    },
    {
      name: "Om Chillure",
      branch: "ENCS",
      skills: [ "ML", "Gen AI" ,"NextJs", "Tailwind CSS"],
      socials : [{LinkedIn : ''} , {Github : ''}],

    },
  ];
  const stack = ["Next.js", "Appwrite", "Python"];
  return (
    <div className="h-[190vh] w-full flex justify-center items-center flex-col">
      <div className="h-[150vh] w-[98%] flex justify-evenly items-center flex-col">
        <h1 className="text-white/70 font-semibold text-1xl my-2">
          Team Members
        </h1>
        {team.map((member) => (
          <div className="rounded-[15px] h-[40vh] w-[55%] bg-black/25 border-[1px] border-purple-500/10 flex justify-center items-center text-white gap-x-14">
            <div className="h-[90%] aspect-square rounded-[50%] bg-purple-700 flex justify-center items-center">
              Image
            </div>
            <div className="flex justify-center items-start flex-col gap-y-2">
              <h1>{member.name}</h1>
              <h1 className="text-white/40">{member.branch}</h1>
              <h1 className="flex gap-x-2">
                {member.skills.map((skill) => (
                  <div className="py-1 px-2 rounded-md text-center bg-black/45 text-purple-700">
                    {skill}
                  </div>
                ))}
              </h1>
              <div className='flex gap-x-3'>
                  <a href='' target='_blank'>LinkedIn</a>
                  <a href='' target='_blank'>Github</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="h-[40vh] w-[98%] flex justify-evenly items-center flex-col">
        <h1 className="text-white/70 font-semibold text-1xl my-2">
          Tech Stack
        </h1>
        <div className=" h-[30vh] w-[55%] flex justify-evenly items-center">
          {stack.map((ele) => (
            <div className="bg-purple-400 h-[30vh] aspect-square flex justify-center items-center">
              {ele}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
