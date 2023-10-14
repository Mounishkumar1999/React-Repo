import React from "react";
import "./technology.css";
import "bootstrap/dist/css/bootstrap.css";

export function Technology() {
  return (
    <>
      <div className="p-5 technodiv" id="/technology">
        <h1 className="text-center fs-1">Learn 4.0 Technology</h1>
        <p className="text-center fs-4">
          Technology, the application of scientific knowledge to the practical
          aims of human life or, as it is sometimes phrased, to the change and
          manipulation of the human environment.
        </p>
        <div>
          <div className="d-flex row p-5 justify-content-center">
            <div className="d-flex row col-lg-5 datasci p-5 m-2 ">
              <h3>Data Scientist</h3>
              <p>
                Data scientists are a new breed of analytical data expert who
                have the technical skills to solve complex problems – and the
                curiosity to explore what problems need to be solved. They're
                part mathematician, part computer scientist and part
                trend-spotter.
              </p>
              <img src="https://interviewerpr.com/wp-content/uploads/2022/11/data-scientist-role.jpg"
                alt="loading" id="imgt" className="rounded-pill"/>
            </div>
            <div className="d-flex row col-lg-5 iotdev p-5 m-2">
              <h3>IOT Developer</h3>
              <p>
                The role of an IoT Developer/Engineer is a broad umbrella that
                brings to play multiple disciplines and skillsets. IoT
                Developers are professionals who can develop, manage, and
                monitor IoT devices and systems by combining three core
                components – data, technology, and research.
              </p>
              <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200911220341/7-Best-Languages-to-Learn-IoT-Development-in-2020.jpg"
                alt="loading" id="imgt" className="rounded-pill" />
            </div>
          </div>
          <div className="d-flex row p-5 justify-content-center">
            <div className="d-flex row col-lg-5 p-5 m-2 vrdp ">
              <h3>VR Developer</h3>
              <p>
                Virtual reality and augmented reality developers are the
                creative minds behind extended reality programs. The duties
                within the first few years in a position in either field
                typically include the designing, testing and developing of
                virtual or augmented reality software.
              </p>
              <img src="https://pbblogassets.s3.amazonaws.com/uploads/2022/08/31071130/Best-VR-Film.jpg"
                alt="loading" id="imgt" className="rounded-pill"/>
            </div>
            <div className="d-flex row col-lg-5 p-5 m-2 dtsci">
              <h3>Data Scientist</h3>
              <p>
                A machine learning (ML) developer is an expert on using data to
                training models. The models are then used to automate processes
                like image classification, speech recognition, and market
                forecasting.
              </p>
              <img src="https://businesstalentgroup.com/wp-content/uploads/2019/07/freelance-data-scientists-1024x563.jpg"
                alt="loading" id="imgt" className="rounded-pill"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}