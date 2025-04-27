import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {

    const { data: allService = [], isLoading } = useQuery({
        queryKey: ["services"],
        queryFn: async () => {
          const res = await fetch("/service.json");
          const data = await res.json();
          return data;
        },
      });
    
      if (isLoading) {
        return <div className="text-center py-10 text-2xl font-semibold">Loading...</div>;
      }
    

    return (
        <div className='bg-white py-20'>
            
            <h1 className='text-4xl text-center font-bold'>Our Awesome Services</h1>
            <div className="flex gap-5 overflow-x-auto py-6 w-11/12 mx-auto px-1">
               {allService.map(service => (
               <ServiceCard key={service.id} service={service} />
              ))}
            </div>
        </div>
    );
}

export default Services;
