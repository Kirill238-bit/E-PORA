import React from "react";

const feature_content = [
  {
    id: 1,
    icon: "fi fi-rr-paper-plane",
    title: "Online Courses",
    des: "Upgrade your skills from the comfort of your own home with our extensive range of online courses. Whether you're looking to delve into a new subject or enhance your existing knowledge, our courses offer the convenience and flexibility to learn at your own pace. Explore our wide selection of courses today and embark on a journey of continuous learning.",
  },
  {
    id: 2,
    icon: "fi fi-rr-user",
    title: "Expert Trainer",
    des: "Learn from industry experts and gain valuable insights into your chosen field with our expert trainers. Our trainers have years of experience and are passionate about sharing their knowledge and expertise with aspiring learners like you. With their guidance, you'll be equipped with the necessary skills and expertise to excel in your chosen industry.",
  },

  {
    id: 3,
    icon: "fi fi-rr-document",
    title: "Get Certificate",
    des: "Validate your skills and showcase your achievements with our certificates. Upon successful completion of your course, you'll receive a certificate that serves as a testament to your dedication and commitment to personal and professional growth. With our certificates, you'll stand out from the crowd and open doors to new opportunities.",
  },
  {
    id: 4,
    icon: "fi fi-rr-calendar",
    title: "Life Time Access",
    des: "Enjoy lifetime access to our courses and never stop learning. With lifetime access, you can revisit course materials, refresh your knowledge, and stay up-to-date with the latest industry trends. Whether you need a refresher or want to explore new topics, our lifetime access ensures you have the flexibility and convenience to continue your learning journey at any time.",
  },
];



const FeatureArea = () => {
  return (
    <>
      <section
        className="tp-feature-area grey-bg pt-115 pb-90 pl-205 pr-205 bg-bottom"
        style={{ backgroundImage: `url(/assets/img/bg/shape-bg-1.png)` }}
      >
        <div className="container-fluid">
          <div className="row text-center">
            <div className="col-lg-12">
              <div className="section-title mb-60">
                <span className="tp-sub-title mb-20">What We Offer</span>
                <h2 className="tp-section-title">For Your Future Learning.</h2>
              </div>
            </div>
          </div>
          <div className="tp-feature-cn">
            <div className="row">
              {feature_content.map((item) => (
                <div key={item.id} className="col-xl-3 col-lg-6 col-md-6">
                  <div
                    className="tpfea mb-30 wow fadeInUp"
                    data-wow-duration=".8s"
                    data-wow-delay=".6s"
                  >
                    <div className="tpfea__icon mb-25">
                      <i className={item.icon}></i>
                    </div>
                    <div className="tpfea__text">
                      <h5 className="tpfea__title mb-20">{item.title}</h5>
                      <p>
                        {item.des}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureArea;
