// InputField.jsx

import React from 'react';

const InputField = ({
                        type,
                        name,
                        value,
                        onChange,
                        placeholder,
                        invalid,
                    }) => {
    return (
        <div className="flex justify-center items-center px-[14px] py-[12px] w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.2)] rounded-[5px]">
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className={`w-full bg-transparent outline-none placeholder-opacity-100 placeholder-[rgba(255,255,255,0.6)] ${
                    invalid ? 'placeholder-red-500 text-red-500' : 'text-white'
                }`}
                placeholder={placeholder}
            />
        </div>
    );
};

export default InputField;
