// ContactPage.jsx

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
    return (
        <div>
            {/* Header */}
            <Header />
            <div className="relative w-full h-full min-h-screen bg-[#0A0D17] mx-auto">
                {/* Main Container */}
                <div className="pt-[160px] pb-[120px] px-4">
                    {/* Heading */}
                    <div className="text-center">
                        <h1
                            className="text-[81.85px] font-extrabold leading-[107px] tracking-[-3px]
              bg-gradient-to-r from-[#eceaf5] via-[#b5b1d0] to-[#6d688a] bg-clip-text text-transparent
              opacity-100 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
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
                            <ContactForm />
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
        </div>
    );
};

export default ContactPage;
