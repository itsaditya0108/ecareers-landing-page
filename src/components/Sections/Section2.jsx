import image1 from "../../assets/images/manStandWithPhone.jpeg"
import image2 from "../../assets/images/laptopPicture.jpg"
import image3 from "../../assets/images/womenWithFile.jpg"

function Section2() {
    return (
        <>
            <div>
                <h2 className="text-center text-2xl my-5 pt-5" style={{ "fontWeight": "600" }}>Who is this programme suitable for?</h2>
                <div className="flex flex-col lg:flex-row justify-center items-center lg:p-5 w-full">
                    <div className="flex flex-col justify-center items-center px-4">
                        <img className="image" src={image1} alt="Man Stand With Phone" width="360" height="280" />
                        <div className="my-5">
                            <h2 className="text-center mb-3" style={{ "color": "#75B924", "fontWeight": "600" }}>New to investing?</h2>
                            <p className="text-center" style={{ "fontWeight": "500" }}>Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Perspiciatis velit atque if you consider yourself to be a novice in
                                the world</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center px-4">
                        <img className="image" src={image2} alt="Man Stand With Phone" width="360" height="280" />
                        <div className="my-5">
                            <h2 className="text-center mb-3" style={{ "color": "#75B924", "fontWeight": "600" }}>Looking to invest
                                your future, through</h2>
                            <p className="text-center" style={{ "fontWeight": "500" }}>Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Perspiciatis velit atque if you consider yourself to be a novice in
                                the world</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center px-4">
                        <img className="image" src={image3} alt="Man Stand With Phone" width="360" height="280" />
                        <div className="my-5">
                            <h2 className="text-center mb-3" style={{ "color": "#75B924", "fontWeight": "600" }}>Got an BSE Account
                                but never trade?</h2>
                            <p className="text-center" style={{ "fontWeight": "500" }}>Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Perspiciatis velit atque if you consider yourself to be a novice in
                                the world</p>
                        </div>
                    </div>
                </div>
                <div className="mt-4 mb-10 flex justify-center w-full">
                    <button className="btnDesign hover:bg-blue-400 transition">
                        Get Started
                    </button>
                </div>

            </div >
        </>
    )
}

export default Section2
