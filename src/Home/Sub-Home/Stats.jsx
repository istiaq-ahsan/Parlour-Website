import service_img from "../../assets/images/service.png";

const Stats = () => {
    return (
        <div className="bg-pink-50 py-10">
            <div className=" py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
     
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="hidden md:block">
            <div className="bg-pink-200 rounded-lg h-96 w-full flex items-center justify-center">
              <img src={service_img} alt="" />
            </div>
          </div>

          <div className="w-11/12 mx-auto">
            <h1 className="text-4xl font-bold">
              Let us handle your beauty Professionally.
            </h1>
            
            <p className="my-10 text-gray-600">
              With well trained professionals, we provide amazing beauty services for all
              your needs, from hair to skincare and everything in between.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="">
                <p className="text-3xl font-bold text-pink-600">500+</p>
                <p className="text-gray-600">Happy Customers</p>
              </div>
              <div className="">
                <p className="text-3xl font-bold text-pink-600">16+</p>
                <p className="text-gray-600">Total Services</p>
              </div>
            </div>
          </div>
          
          {/* Right Column - Image (placeholder) */}
        </div>
      </div>
    </div>
        </div>
    );
}

export default Stats;
