import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useQuery } from "@tanstack/react-query";
import TestiCard from "./TestiCard";

const Testimonial = () => {

    const { data: allStory=[], isLoading } = useQuery({
        queryKey: ["testimonial"],
        queryFn: async () => {
            const res = await fetch("/testimonial.json");
            const data = await res.json();
            return data;
          },
      });

      if (isLoading) {
        return <div className="text-center py-10 text-2xl font-semibold">Loading...</div>;
      }

    return (
        <div className="bg-white py-10">
            <h1 className="text-4xl font-bold text-center">Testimonials</h1>

            <div className="w-11/12 mx-auto py-10">
            <Swiper
          slidesPerView={1} // Default for smaller screens
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 ">
            {allStory.map((story, index) => (
              <SwiperSlide key={index}>
                <TestiCard key={story} story={story}></TestiCard>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
            </div>
        </div>
    );
}

export default Testimonial;
