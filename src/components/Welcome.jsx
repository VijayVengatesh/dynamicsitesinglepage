import React, { useState } from "react";
import "../css/Welcome.css";
import "swiper/css/bundle";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button, Carousel } from "react-bootstrap";

export const Welcome = () => {
  const [heading, setHeading] = useState("Welcome to Fuson");
  const [paragraph, setParagraph] = useState("skhbgksbgkdk");

  const [slidesContent, setSlidesContent] = useState([
    { title: "Title 1", subtitle: "Subtitle 1", description: "Description 1" },
    { title: "Title 2", subtitle: "Subtitle 2", description: "Description 2" },
    { title: "Title 3", subtitle: "Subtitle 3", description: "Description 3" },
  ]);

  const [editMode, setEditMode] = useState(false);
  const [tempContent, setTempContent] = useState([...slidesContent]);
  const [tempHeading, setTempHeading] = useState(heading);
  const [tempParagraph, setTempParagraph] = useState(paragraph);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    setSlidesContent(tempContent);
    setHeading(tempHeading);
    setParagraph(tempParagraph);
    setEditMode(false);
    console.log("slideContent",slidesContent)
  };

  const handleSlideChange = (index, field, value) => {
    const updatedContent = [...tempContent];
    updatedContent[index][field] = value;
    setTempContent(updatedContent);
  };

  return (
    <>
      {/* welcome top start */}
      <div className="row mt-5">
        <div className="col-12">
          {editMode ? (
            <input
              type="text"
              value={tempHeading}
              onChange={(e) => setTempHeading(e.target.value)}
              style={{ fontWeight: "700", width: "100%" }}
            />
          ) : (
            <h1 className="fw-lighter text-center" style={{ fontWeight: "700" }}>
              {heading}
            </h1>
          )}
        </div>
        <div className="col-12 d-flex justify-content-center mt-2">
          <div
            style={{
              width: "500px",
              height: "auto",
              color: "#777",
              fontSize: "14px",
            }}
            className="text-start"
          >
            {editMode ? (
              <textarea
                value={tempParagraph}
                onChange={(e) => setTempParagraph(e.target.value)}
                style={{ width: "100%" }}
              />
            ) : (
              <p className="text-center fs-5">{paragraph}</p>
            )}
          </div>
        </div>
      </div>
      {/* welcome top end */}

      {/* Welcome body */}
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        pagination={{ dynamicBullets: true, clickable: true }}
        modules={[Pagination]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {slidesContent.map((slide, index) => (
          <SwiperSlide key={index} className="d-flex justify-content-center pb-4 p-5">
            <div className="card w-100 m-2" style={{ height: "200px" }}>
              {editMode ? (
                <input
                  type="text"
                  value={slide.title}
                  onChange={(e) => handleSlideChange(index, "title", e.target.value)}
                />
              ) : (
                <span>{slide.title}</span>
              )}
              {editMode ? (
                <input
                  type="text"
                  value={slide.subtitle}
                  onChange={(e) => handleSlideChange(index, "subtitle", e.target.value)}
                />
              ) : (
                <p className="fw-bold fs-5">{slide.subtitle}</p>
              )}
              {editMode ? (
                <input
                  type="text"
                  value={slide.description}
                  onChange={(e) => handleSlideChange(index, "description", e.target.value)}
                />
              ) : (
                <p>{slide.description}</p>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="d-flex justify-content-center mt-3">
        {editMode ? (
          <button onClick={handleSave}>Save Changes</button>
        ) : (
          <button onClick={handleEdit}>Edit Welcome Content</button>
        )}
      </div>
      {/* Welcome body end */}
    </>
  );
};
