import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#F63E7B]">
            <div className="container px-6 py-12 mx-auto text-white">
                <div className="md:flex md:-mx-3 md:items-center md:justify-between">
                    <h1 className="text-xl font-semibold tracking-tight md:mx-3 xl:text-2xl">
                        Subscribe to our newsletter for beauty tips & offers.
                    </h1>

                    <div className="mt-6 md:mx-3 shrink-0 md:mt-0 md:w-auto">
                        <a
                            href="#"
                            className="inline-flex items-center justify-center w-full px-4 py-2 text-sm text-black hover:text-white duration-300 bg-white hover:bg-[#F63E7B] hover:border-2 rounded-lg gap-x-3 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
                        >
                            <span>Sign Up Now</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                />
                            </svg>
                        </a>
                    </div>
                </div>

                <hr className="my-6 border-gray-200 md:my-10" />

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-xs md:text-base">
                    <div>
                        <p className="font-semibold">Quick Links</p>
                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <a href="#" className="text-white hover:text-gray-200">Home</a>
                            <a href="#" className="text-white hover:text-gray-200">About Us</a>
                            <a href="#" className="text-white hover:text-gray-200">Our Services</a>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold">Beauty Services</p>
                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <a href="#" className="text-white hover:text-gray-200">Facial & Skin Care</a>
                            <a href="#" className="text-white hover:text-gray-200">Hair Styling</a>
                            <a href="#" className="text-white hover:text-gray-200">Bridal Makeup</a>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold">Support</p>
                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <a href="#" className="text-white hover:text-gray-200">FAQs</a>
                            <a href="#" className="text-white hover:text-gray-200">Privacy Policy</a>
                            <a href="#" className="text-white hover:text-gray-200">Terms & Conditions</a>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold">Contact Us</p>
                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <a href="#" className="text-white hover:text-gray-200">+880 123 456 7890</a>
                            <a href="#" className="text-white hover:text-gray-200">support@parlourbeauty.com</a>
                        </div>
                    </div>
                </div>


                
            </div>
        </footer>
    );
}

export default Footer;
