import React from "react";
import TestimonialCard from "./TestimonialCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      content:
        "SkillSphere helped me find a mentor who guided me through my career transition. The community is incredibly supportive!",
      author: {
        name: "Sarah Johnson",
        title: "Frontend Developer",
        avatarUrl: "https://i.pravatar.cc/150?img=1",
      },
    },
    {
      content:
        "The project collaborations on SkillSphere gave me the practical experience I needed to land my dream job.",
      author: {
        name: "Michael Chen",
        title: "Software Engineer",
        avatarUrl: "https://i.pravatar.cc/150?img=3",
      },
    },
    {
      content:
        "As a mentor, I find great satisfaction in helping others grow while also expanding my own network.",
      author: {
        name: "Jessica Rodriguez",
        title: "Data Scientist",
        avatarUrl: "https://i.pravatar.cc/150?img=5",
      },
    },
    {
      content:
        "The tutorials on Algorithmic Dev are simply the best. They helped me transition from a junior to a senior developer in just a year.",
      author: {
        name: "Alex Thompson",
        title: "Senior Developer",
        avatarUrl: "https://i.pravatar.cc/150?img=8",
      },
    },
  ];

  return (
    <div className="min-h-[500px] py-16 w-full mt-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center animate-fade-in">
          <h2 className="text-3xl font-extrabold sm:text-4xl dark:text-white text-blue-500 inline-block">
            Hear from our community
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Don't just take our word for it. See how our platform has helped
            tech professionals succeed.
          </p>
        </div>

        <div className="mt-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full px-4"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3 pl-4"
                >
                  <div
                    className="animate-fade-in w-11/12 aspect-square"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <TestimonialCard
                      content={testimonial.content}
                      author={testimonial.author}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-4">
              <CarouselPrevious className="static rounded-full transition-transform hover:scale-110 hover:shadow-md" />
              <CarouselNext className="static rounded-full transition-transform hover:scale-110 hover:shadow-md" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
