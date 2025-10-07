import image1 from "../../assets/images/topsecret.jpg"
import image2 from "../../assets/images/monitoring.jpg"
import image3 from "../../assets/images/webinars.jpg"
import image4 from "../../assets/images/bselogo.png"
import image5 from "../../assets/images/workshop.jpg"
import image6 from "../../assets/images/e-learning.jpg"
import { useState } from "react"

function Section3() {

    const [blurred, setBlured] = useState({
        box1: "",
        box2: "",
        box3: "",
        box5: "",
        box6: "",
    })

    const toggleBlur = (box) => {
        setBlured((prevState) => ({
            ...prevState,
            [box]: !prevState[box]
        }))
    }
    return (
        <>
            <div className="bg-gray-200 py-10 px-10">
                <div className="py-5 md:px-20">
                    <h3 className="mb-5 text-center text-2xl" style={{ "font-weight": "600" }}>About the programme</h3>
                    <p className="aboutPara">BSE and e-Careers have developed an exclusive programme, which provides you
                        with the knowledge
                        required and an easy to navigate social trading platform.</p>
                    <p className="aboutPara">This programme educates everyday investors to navigate the financial
                        markets,
                        by providing
                        education
                        and mentoring from our seasoned experts. This is achieved through a combination of online
                        training,
                        as well as the opportunity to meet our experts and benefit from their invaluable knowledge and
                        experience.</p>
                    <p className="aboutPara mb-5">The programme consists of five distinct elements:</p>
                </div>

                <div className="grid-container md:px-20">
                    <div className="box"
                        onClick={() => toggleBlur("box1")}
                        style={{ gridArea: 'box-1' }}
                    >
                        <div className={`box-content ${blurred.box1 ? "blur" : ""}`}>
                            <div className="flex flex-wrap justify-center items-center">
                                <img src={image1} alt="SomeImage" className="" style={{ width: '200px' }} />
                                <h4 className="m-4 aboutSecHeading">Exclusive Access Event</h4>
                            </div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto numquam necessitatibus praesentium veritatis cupiditate, accusamus quidem quo, assumenda sint libero ab placeat nam veniam ea?</p>
                        </div>
                        <div className="single-text" id="singleText">
                            On hold due to government guidelines
                        </div>

                    </div>
                    <div className="box" onClick={() => toggleBlur("box2")} style={{ gridArea: 'box-2' }}>
                        <div className={`box-content ${blurred.box2 ? "blur" : ""}`}>
                            <div className="flex flex-row justify-center flex-wrap items-center">
                                <img src={image2} alt="SomeImage" className="" style={{ width: '160px' }} />
                                <h4 className="m-4 aboutSecHeading">Mentoring</h4>
                            </div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto numquam necessitatibus praesentium veritatis cupiditate, accusamus quidem quo, assumenda sint libero ab placeat nam veniam ea?</p>
                        </div>
                        <div className="single-text" id="singleText">On hold due to government guidelines</div>
                    </div>
                    <div className="box" onClick={() => toggleBlur("box3")} style={{ gridArea: 'box-3' }}>
                        <div className={`box-content ${blurred.box3 ? "blur" : ""}`}>
                            <div className="flex flex-row flex-wrap justify-center items-center">
                                <img src={image3} alt="SomeImage" className="" style={{ width: '160px' }} />
                                <h4 className="m-4 aboutSecHeading">Webinars</h4>
                            </div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto numquam necessitatibus praesentium veritatis cupiditate, accusamus quidem quo, assumenda sint libero ab placeat nam veniam ea?</p>
                        </div>
                        <div className="single-text" id="singleText">On hold due to government guidelines</div>
                    </div>
                    <div className="box box-4" style={{ gridArea: 'box-4', width: '140px' }}>
                        <img src={image4} alt="BSE Logo" className=" mt-2" />
                    </div>
                    <div className="box" onClick={() => toggleBlur("box5")} style={{ gridArea: 'box-5' }}>
                        <div className={`box-content ${blurred.box5 ? "blur" : ""}`}>
                            <div className="flex flex-row flex-wrap justify-center items-center">
                                <img src={image5} alt="SomeImage" className="" style={{ width: '180px' }} />
                                <h4 className="m-4 aboutSecHeading">1-2-1 Workshop</h4>
                            </div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto numquam necessitatibus praesentium veritatis cupiditate, accusamus quidem quo, assumenda sint libero ab placeat nam veniam ea? Lorem ipsum dolor sit amet consectetur adipisicing elit eritatis cupiditate, accusamus quidem quo, assumenda sint libero ab placeat nam veniam ea?</p>
                        </div>
                        <div className="single-text" id="singleText">On hold due to government guidelines</div>
                    </div>
                    <div className="box" onClick={() => toggleBlur("box6")} style={{ gridArea: 'box-6' }}>
                        <div className={`box-content ${blurred.box6 ? "blur" : ""}`}>
                            <div className="flex flex-col xl:flex-row justify-center items-center">
                                <img src={image6} alt="SomeImage" className="" style={{ width: '240px' }} />
                                <div className="md:ms-4 mt-3 md:mt-0">
                                    <h4 className="aboutSecHeading text-center mb-4 ">elearning</h4>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto numquam necessitatibus praesentium veritatis cupiditate</p>
                                </div>
                            </div>
                        </div>
                        <div className="single-text" id="singleText">On hold due to government guidelines</div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Section3
