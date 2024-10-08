import React from 'react';

const Skills = () => {
  return (
    <div style={{width: "1000px", top: "1250px", position: "absolute"}}>
      <div className="absolute text-center text-gray-900 font-bold text-[20px]" style={{ left: "600px", top: "186px" }}>
        Download My Resume here!
      </div>
      
      {/* "View" button with link to resume */}
      <a 
        href= "../files/elon-musk-resume.pdf"
        target="_blank" 
        rel="noopener noreferrer" 
        className="absolute w-[130px] h-[54px] bg-[#65558F] rounded-[100px] overflow-hidden flex items-center justify-center" 
        style={{ left: "675px", top: "250px" }}
      >
        <div className="text-center text-white font-medium text-[14px]">
          View
        </div>
      </a>
    </div>
  );
};

export default Skills;





      