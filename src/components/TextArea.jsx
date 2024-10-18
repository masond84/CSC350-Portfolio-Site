// TextArea.jsx

import React from 'react';

const TextArea = ({
                      name,
                      value,
                      onChange,
                      placeholder,
                      invalid,
                  }) => {
    return (
        <div className="flex justify-center items-start px-[14px] py-[12px] w-full h-[109px] bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.2)] rounded-[5px]">
      <textarea
          name={name}
          value={value}
          onChange={onChange}
          className={`w-full h-full bg-transparent outline-none resize-none placeholder-opacity-100 placeholder-[rgba(255,255,255,0.6)] ${
              invalid ? 'placeholder-red-500 text-red-500' : 'text-white'
          }`}
          placeholder={placeholder}
      ></textarea>
        </div>
    );
};

export default TextArea;
