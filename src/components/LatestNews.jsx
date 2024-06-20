import React, { useState } from "react";

export const LatestNews = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [images, setImages] = useState({
    img1: "",
    img2: "",
    img3: "",
    img4: "",
    img5: "",
    img6: "",
  });
  const [content, setContents] = useState([
    {
      content1: "this is simla",
      content2: "this is simla  is best place for touris placess",
    },
    {
      content1: "The State of Library Travel",
      content2: "this is super content for Travel for the integer fellow",
    },
    {
      content1: "The Best Natural Pradise",
      content2: "Ship into integrate prototype for the intger fellow",
    },
  ]);
  function saveChanegs() {
    setIsEdit(false);
    console.log(content);
  }
  function editChanges() {
    setIsEdit(true);
  }
  function imagesChange(field, value) {
    setImages((pre) => ({ ...pre, [field]: value }));
  }
  function contentChange(index,field,value){
    const updatedContent=[...content];
    updatedContent[index][field]=value
    setContents(updatedContent)
  }

  return (
    <>
      <div className="container-fluid">
        <h1 className="fw-lighter text-center">Latest news from Blog</h1>
        <p
          className="text-center mt-2 "
          style={{ fontSize: "16px", color: "#777" }}
        >
          See Whats people Are Sharing Their Thoughts
        </p>
        <div className="news-wrapper p-5">
          <div className="row">
            <div className="col-6 d-flex flex-column p-2 ">
              {isEdit ? (
                <input
                  type="file"
                  onChange={(e) => imagesChange("img1", e.target.files[0])}
                />
              ) : (
                <div>
                  <img
                    src={
                      images.img1 !== "" ? URL.createObjectURL(images.img1) : ""
                    }
                    width="100%"
                    height="300px"
                    alt=""
                  />
                </div>
              )}

              <div
                className="d-flex justify-content-between"
                style={{ width: "100%" }}
              >
                <div className="d-flex justify-content-between mt-5">
                  <div className="mt-5">
                    {isEdit ? (
                      <input
                        type="text"
                        value={content[0].content1}
                        onChange={(e) => {
                          contentChange(0, "content1", e.target.value);
                        }}
                      />
                    ) : (
                      <p className="fs-4">
                        <span style={{ color: "orange" }}>this is simla </span>
                      </p>
                    )}
                    <br />
                    {isEdit ? (
                      <input
                        type="text"
                        value={content[0].content2}
                        onChange={(e) => {
                          contentChange(0, "content2", e.target.value);
                        }}
                      />
                    ) : (
                      <p className="fs-5">
                        this is simala is a best place for touries place
                      </p>
                    )}
                  </div>
                  {isEdit ? (
                    <input
                      type="file"
                      onChange={(e) => {
                        imagesChange("img2", e.target.files[0]);
                      }}
                    />
                  ) : (
                    <img
                      src={
                        images.img2 !== ""
                          ? URL.createObjectURL(images.img2)
                          : ""
                      }
                      width="60%"
                      alt=""
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="col-3 d-flex align-content-between flex-wrap p-2 ">
              <div>
                <div>
                  {isEdit ? (
                    <input
                      type="file"
                      onChange={(e) => {
                        imagesChange("img3", e.target.files[0]);
                      }}
                    />
                  ) : (
                    <img
                      src={
                        images.img3 !== ""
                          ? URL.createObjectURL(images.img3)
                          : ""
                      }
                      alt=""
                      width="100%"
                      height="200px"
                    />
                  )}
                </div>
                <div>
                  {isEdit ? (
                    <input
                      type="text"
                      value={content[1].content1}
                      onChange={(e) => {
                        contentChange(1, "content1", e.target.value);
                      }}
                    />
                  ) : (
                    <p className="fs-5">
                      <span style={{ color: "orange" }}>
                        The State of Library Travel
                      </span>
                    </p>
                  )}
                  {isEdit ? (
                    <input
                      type="text"
                      value={content[1].content2}
                      onChange={(e) => {
                        contentChange(1, "content2", e.target.value);
                      }}
                    />
                  ) : (
                    <p>
                      quvantity ship it user story grok space team waterfall is
                      so 2000 and late quvanties vs.
                    </p>
                  )}
                </div>
              </div>

              {isEdit ? (
                <input
                  type="file"
                  onChange={(e) => {
                    imagesChange("img4", e.target.files[0]);
                  }}
                />
              ) : (
                <img
                  src={
                    images.img4 !== "" ? URL.createObjectURL(images.img4) : ""
                  }
                  className="mb-5"
                  width="100%"
                  alt=""
                />
              )}
            </div>
            <div className="col-3 d-flex align-content-between flex-wrap p-2 ">
              {isEdit ? (
                <input
                  type="file"
                  onChange={(e) => {
                    imagesChange("img5", e.target.files[0]);
                  }}
                />
              ) : (
                <img
                  src={
                    images.img5 !== "" ? URL.createObjectURL(images.img5) : ""
                  }
                  width="100%"
                  height={"250px"}
                  alt=""
                />
              )}

              <div className="mt-5">
                {isEdit ? (
                  <input
                    type="file"
                    onChange={(e) => {
                      imagesChange("img6", e.target.files[0]);
                    }}
                  />
                ) : (
                  <img
                    src={
                      images.img5 !== "" ? URL.createObjectURL(images.img5) : ""
                    }
                    width="100%"
                    alt=""
                  />
                )}
                <div>
                  {isEdit ? (
                    <input
                      type="text"
                      value={content[2].content1}
                      onChange={(e) => {
                        contentChange(2, "content1", e.target.value);
                      }}
                    />
                  ) : (
                    <p className="fs-5">
                      <span style={{ color: "orange" }}>
                        The Best Natural Paradise
                      </span>
                      -Simla
                    </p>
                  )}
                  {isEdit ? (
                    <input type="text" value={content[2].content2} onChange={(e)=>{contentChange(2,"content2",e.target.value)}} />
                  ) : (
                    <p>
                      Ship into integrate prototype fund human integrated big
                      data coonverrance
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div
            className="row pb-3"
            style={{ borderBottom: "1px solid reba(0,0,0,0.1" }}
          >
            <div className="col-12 text-center">
              <button
                className="button ps-3 pe-3 pt-1 pb-1 rounded-pill"
                style={{ backgroundColor: "orange", border: "none" }}
              >
                <p className="text-light">keep Reading</p>
              </button>
            </div>
          </div>
        </div>

        {/* edit button */}
        <div className="text-center">
          {isEdit ? (
            <button onClick={saveChanegs}>Save News Blog</button>
          ) : (
            <button onClick={editChanges}>Edit News Blog</button>
          )}
        </div>
      </div>
    </>
  );
};
