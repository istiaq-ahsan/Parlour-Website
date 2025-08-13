const ContactForm = () => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-pink-50 px-4 py-10">
        <div className="w-full max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center text-gray-800 mb-10">
            Let us handle your <br className="sm:hidden" />
            <span className="text-gray-900">project, professionally.</span>
          </h2>
  
          <form className="bg-transparent">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="bg-white p-4 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="bg-white p-4 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="bg-white p-4 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="bg-white p-4 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
  
            <div className="mt-6">
              <textarea
                placeholder="Your Message"
                rows="5"
                className="bg-white w-full p-4 border border-gray-200 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-pink-400"
              ></textarea>
            </div>
  
            <div className="mt-6 text-center">
              <button
                type="submit"
                className="bg-[#F63E7B] hover:bg-pink-600 text-white font-medium px-6 py-3 rounded-md transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default ContactForm;
  