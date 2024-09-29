import React from 'react';
import Header from '../components/ContactHeader';
import Footer from '../components/Footer';

const ContactPage = () => {
    return (
        <div className="relative w-full h-full min-h-screen bg-[#0A0D17] mx-auto">
            {/* Header */}
            <Header />

            {/* Main Container */}
            <div className="pt-[160px] pb-[120px] px-4">
                {/* Heading */}
                <div className="text-center">
                    <h1
                        className="text-[81.85px] font-extrabold leading-[107px] tracking-[-3px]
                        bg-gradient-to-r from-[#eceaf5] via-[#b5b1d0] to-[#6d688a] bg-clip-text text-transparent
                        opacity-100 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]

"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                        Get in touch
                    </h1>
                    <p className="mt-4 text-[22px] font-medium leading-[27px] tracking-[-0.02em] text-white opacity-70">
                        Let’s connect and bring new ideas to life! I’m excited to explore what we can build together.
                    </p>
                </div>

                {/* Container Wrapper */}
                <div
                    className="relative mt-[60px] flex flex-col lg:flex-row items-center justify-center gap-[30px] p-[20px] w-full max-w-[1092px] h-auto lg:h-[576px] mx-auto bg-[#0A0D17] border-[2px] border-[#0A0D17]/[0.05] backdrop-blur-lg rounded-[20px]"
                >
                    {/* Background Image at 10% Opacity */}
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-10 rounded-[20px]"
                        style={{
                            backgroundImage: "url('/images/background.jpg')",
                        }}
                    ></div>

                    {/* Form Wrapper */}
                    <div className="relative w-full max-w-[506px] h-auto flex flex-col items-start p-[40px] gap-[41px] z-10">
                        {/* Form Heading */}
                        <div className="flex flex-col items-start gap-[8px] w-full">
                            <h2 className="text-[30px] font-semibold leading-[36px] tracking-[-0.02em] text-white">
                                Ready to connect?
                            </h2>
                            <p className="text-[16px] font-normal leading-[19px] tracking-[-0.01em] text-white opacity-80">
                                Share your details, and let's discover what we can achieve together.
                            </p>
                        </div>

                        {/* Form */}
                        <form className="flex flex-col gap-[14px] w-full">
                            {/* Names */}
                            <div className="flex flex-col lg:flex-row gap-[14px] w-full">
                                {/* First Name */}
                                <div className="flex justify-center items-center px-[14px] py-[12px] w-full lg:w-[206px] bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.2)] rounded-[5px]">
                                    <input
                                        type="text"
                                        className="w-full bg-transparent text-white outline-none placeholder-[rgba(255,255,255,0.6)]"
                                        placeholder="First Name"
                                    />
                                </div>

                                {/* Last Name */}
                                <div className="flex justify-center items-center px-[14px] py-[12px] w-full lg:w-[206px] bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.2)] rounded-[5px]">
                                    <input
                                        type="text"
                                        className="w-full bg-transparent text-white outline-none placeholder-[rgba(255,255,255,0.6)]"
                                        placeholder="Last Name"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex justify-center items-center px-[14px] py-[12px] w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.2)] rounded-[5px]">
                                <input
                                    type="email"
                                    className="w-full bg-transparent text-white outline-none placeholder-[rgba(255,255,255,0.6)]"
                                    placeholder="Email"
                                />
                            </div>

                            {/* Phone */}
                            <div className="flex justify-center items-center px-[14px] py-[12px] w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.2)] rounded-[5px]">
                                <input
                                    type="tel"
                                    className="w-full bg-transparent text-white outline-none placeholder-[rgba(255,255,255,0.6)]"
                                    placeholder="Phone Number"
                                />
                            </div>

                            {/* Message */}
                            <div className="flex justify-center items-start px-[14px] py-[12px] w-full h-[109px] bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.2)] rounded-[5px]">
                                <textarea
                                    className="w-full h-full bg-transparent text-white outline-none resize-none placeholder-[rgba(255,255,255,0.6)]"
                                    placeholder="Message"
                                ></textarea>
                            </div>
                        </form>

                        {/* Submit Button */}
                        <button className="flex flex-row justify-center items-center gap-[10px] px-[10px] py-[12px] w-full bg-gradient-to-r from-[#5D5A88] to-[#8D8BA7] rounded-[5px]">
                            <span className="text-white text-[15px] font-medium leading-[18px] tracking-[-0.01em]">
                                Send Message
                            </span>
                        </button>
                    </div>

                    {/* Image Box */}
                    <div className="relative w-full max-w-[516px] h-[536px] z-10">
                        <div
                            className="absolute w-full h-full rounded-[12px]"
                            style={{
                                backgroundImage:
                                    "linear-gradient(360deg, rgba(10, 13, 23, 0.95) 20.4%, rgba(10, 13, 23, 0) 100%), url('/images/contact-1.png')",
                                mixBlendMode: "normal",
                            }}
                        ></div>

                        {/* Quote */}
                        <div className="absolute flex flex-col gap-[6px] w-[466px] h-[63px] left-[28px] top-[425px] z-10">
                            <p className="w-[466px] h-[38px] text-[16px] font-normal leading-[19px] tracking-[-0.01em] text-white opacity-70">
                                "Great things in business are never done by one person. They’re done by a team of people."
                            </p>
                            <p className="w-[84px] h-[19px] text-[16px] font-medium leading-[19px] tracking-[-0.01em] text-white opacity-80">
                                Steve Jobs
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default ContactPage;
