import React, { useRef } from "react";
import Slider from "react-slick";

const testimonial_data = [
  {
    id: 1,
    name: "Courtney Henry",
    img: "assets/img/icon/test-ava-01.png",
    title: "Sr. UX/UI Designer",
    des: (
      <>
        Working with such a dedicated and motivated group of students has been an absolute pleasure. They have shown remarkable growth and determination in their journey to become skilled professionals in their field. It's always rewarding to witness their progress and see them apply the knowledge and skills they have acquired. I am proud to be a part of their learning experience.
      </>
    ),
  },
  {
    id: 2,
    name: "Devon Lane",
    img: "assets/img/icon/test-ava-02.png",
    title: "Software Engineer",
    des: (
      <>
        Instructing at this institution has been a truly fulfilling experience. The level of commitment and enthusiasm displayed by both the students and staff is truly remarkable. It's clear that they have a genuine passion for learning and improving their skills. As an instructor, it's incredibly gratifying to be able to guide and support them in their journey towards success. I am grateful for the opportunity to work with such talented individuals.
      </>
    ),
  },
  {
    id: 3,
    name: "Jenny Wilson",
    img: "assets/img/icon/test-ava-03.png",
    title: "Content Writer",
    des: (
      <>
        I have had the privilege of teaching at this institution for several years now and I am continually impressed by the high caliber of students that come through its doors. Their eagerness to learn, ask questions, and challenge themselves is inspiring. It is evident that the institution has fostered a strong culture of excellence and I am honored to be a part of it. The support and resources provided to instructors are top-notch, enabling us to deliver the best possible education to our students.
      </>
    ),
  },
  {
    id: 4,
    name: "Jenny Wilson",
    img: "assets/img/icon/test-ava-03.png",
    title: "Content Writer",
    des: (
      <>
        As an instructor, I have had the pleasure of witnessing the growth and development of students who are truly passionate about their chosen field. It's always invigorating to see their creativity and problem-solving skills come to life as they tackle real-world projects. The institution's commitment to providing a comprehensive and cutting-edge curriculum ensures that our students are well-prepared for the demands of the industry. It is truly a joy to be part of their educational journey.
      </>
    ),
  },
];


// slider setting
const setting = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const TestimonialArea = () => {
  const sliderRef = useRef(null);

  return (
    <>
      <section
        className="testimonial-area bg-bottom pt-110 pb-90 wow fadeInUp"
        data-wow-duration="1s"
        data-wow-delay=".4s"
        style={{ backgroundImage: `url(/assets/img/bg/shape-bg-1.png)` }}
      >
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-6 col-lg-8 col-md-8 col-12">
              <div className="section-title mb-65">
                <h2 className="tp-section-title mb-20">
                  Our Expert Instructor
                </h2>
              </div>
            </div>
            <div className="col-xl-6 col-lg-4 col-md-4 col-6">
              <div className="tp-section-arrow d-flex justify-content-md-end mb-40">
                <button
                  type="button"
                  onClick={() => sliderRef?.current?.slickPrev()}
                  className="slick-prev slick-arrow"
                >
                  <i className="arrow_carrot-left"></i>
                </button>
                <button
                  type="button"
                  onClick={() => sliderRef?.current?.slickNext()}
                  className="slick-next slick-arrow"
                >
                  <i className="arrow_carrot-right"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="testimonial-active tp-slide-space">
            <Slider {...setting} ref={sliderRef}>
              {testimonial_data.map((item) => (
                <div key={item.id} className="tp-test-slide-item">
                  <div className="tp-testi p-relative mt-65">
                    <div className="tp-testi__avatar">
                      <img src={item.img} alt="testi-avatar" />
                    </div>
                    <div className="tp-testi__rating pb-5">
                      <ul className="d-flex align-items-center justify-content-end mr-5 mb-25">
                        <li>
                          <i className="fi fi-ss-star"></i>
                        </li>
                        <li>
                          <i className="fi fi-ss-star"></i>
                        </li>
                        <li>
                          <i className="fi fi-ss-star"></i>
                        </li>
                        <li>
                          <i className="fi fi-ss-star"></i>
                        </li>
                        <li>
                          <i className="fi fi-rs-star"></i>
                        </li>
                      </ul>
                    </div>
                    <div className="tp-testi__avainfo">
                      <p>{item.des}</p>
                      <h3 className="tp-testi__title">{item.name}</h3>
                      <i>{item.title}</i>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialArea;
