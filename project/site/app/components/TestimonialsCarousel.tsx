"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export function TestimonialsCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false })
  ]);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      content: "Outstanding work! The website exceeded our expectations. Professional, responsive, and delivered on time.",
      avatar: "👩‍💼",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Manager, Innovation Labs",
      content: "Incredible attention to detail and excellent communication throughout the project. Highly recommended!",
      avatar: "👨‍💻",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Founder, Creative Agency",
      content: "Transformed our vision into reality. The design is modern, clean, and exactly what we needed.",
      avatar: "👩‍🎨",
      rating: 5
    },
    {
      id: 4,
      name: "David Kim",
      role: "CTO, Digital Solutions",
      content: "Top-notch developer with great problem-solving skills. Will definitely work together again!",
      avatar: "👨‍🔬",
      rating: 5
    }
  ];

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-4"
          >
            <div className="card bg-base-200 shadow-xl border border-base-300 h-full hover:shadow-2xl transition-all">
              <div className="card-body">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-5xl">{testimonial.avatar}</div>
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-base-content/70">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-base-content/80 italic">&ldquo;{testimonial.content}&rdquo;</p>
                <div className="flex gap-1 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 fill-warning"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
