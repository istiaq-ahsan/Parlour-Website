import jerin from "../../assets/images/jerin.png"
const Banner = () => {
    return (
        <div className="bg-pink-50 py-12">
            <div className=" w-11/12  mx-auto flex flex-col-reverse md:flex-row items-center gap-8 px-6">
                {/* Text Section */}
                <div className="md:w-1/2 text-center md:text-left space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                        Beauty Salon <br /> For Every Woman
                    </h1>
                    <p className="text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Purus commodo ipsum duis laoreet maecenas. Feugiat.
                    </p>
                    <button className="btn bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-md shadow-lg">
                        Get An Appointment
                    </button>
                </div>

                {/* Image Section */}
                <div className="md:w-1/2 flex justify-center">
                    <img
                        className="w-full max-w-sm rounded-lg shadow-md"
                        src={jerin}
                        alt="Salon"
                    />
                </div>
            </div>
        </div>
    );
}

export default Banner;
