import { useState } from "react";
import "../../index.css";

function Section1() {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        course: ""
    });

    const [formErrors, setFormErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        course: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name + ': ' + value);
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let errors = {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            course: "",
        };

        let isValid = true;

        const nameRegex = /^[a-zA-Z\s'-]+$/;
        if (!nameRegex.test(formData.firstName)) {
            errors.firstName = "Invalid first name";
            isValid = false;
        }

        if (!nameRegex.test(formData.lastName)) {
            errors.lastName = "Invalid last name";
            isValid = false;
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(formData.email)) {
            errors.email = "Invalid email address";
            isValid = false;
        }

        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(formData.phone)) {
            errors.phone = "Phone number must be 10 digits";
            isValid = false;
        }

        if (formData.course.trim() === "" || formData.course === "Choose Your Course") {
            errors.course = "Please select a course";
            isValid = false;
        }

        setFormErrors(errors);

        if (isValid) {
            alert("Form submitted successfully");
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                course: "",
            });
            setFormErrors({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                course: '',
            });
        }
    };

    return (
        <div className="bg-[#1A1D2F] text-white px-4 sm:px-8 py-8">
            <div className="max-w-[1200px] mx-auto w-full flex flex-col items-center md:flex-row md:justify-between md:items-start">
                <div className="mt-14 mr-5 p-4">
                    <h1 className="text-3xl font-semibold"><span className="trading">Trading</span> made simple</h1>
                    <p className="mt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, consequatur animi?</p>
                    <div className="p-2 listItem">
                        <ul>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, totam? and it is a simply dummy text
                            <li className="my-2"><span style={{ color: '#75B924' }}>&#10004;</span> Neque porro quismsm est</li>
                            <li className="my-2"><span style={{ color: '#75B924' }}>&#10004;</span> There are many variations of passages</li>
                            <li className="my-2"><span style={{ color: '#75B924' }}>&#10004;</span> PageMaker including versions of Lorem Ipsum</li>
                            <li className="my-2"><span style={{ color: '#75B924' }}>&#10004;</span> Lorem Ipsum is not simply random text</li>
                            <li className="my-2"><span style={{ color: '#75B924' }}>&#10004;</span> It is a long established fact that a reader</li>
                        </ul>
                    </div>
                    <h4 className="text-[21px] font-semibold">Courses <span className="trading">Fully Funded</span> by Lorem Ipsum and e-Careers</h4>
                </div>

                <div className="mt-10 md:mt-0">
                    <div className="bg-[#F3F5F9] ml-5 py-3 w-[400px] md:w-xs text-black formContainer">
                        <h3 className="text-center text-xl font-semibold"><span className="text-2xl text-[#24AD7A]">&#9733;</span> Trustpilot</h3>
                        <p className="text-center text-sm">
                            <span className="text-[#24AD7A]">&#9733;&#9733;&#9733;&#9733;&#9733;</span> TrustScore 4.8 | 8,458 reviews
                        </p>
                    </div>

                    <form id="enquiryForm" className="ml-5 p-4 text-black bg-white w-[400px] md:w-xs formContainer2" noValidate onSubmit={handleSubmit}>
                        <h4 className="text-center mb-2" style={{ "fontWeight": "500", "fontSize": "22px" }}>Speak to an advisor</h4>

                        <input
                            onChange={handleChange}
                            name="firstName"
                            value={formData.firstName}
                            className={`form-control ${formErrors.firstName ? 'is-invalid' : formData.firstName ? 'is-valid' : ''}`}
                            id="firstName"
                            type="text"
                            placeholder="First Name"
                            required
                        />
                        {formErrors.firstName && <p className="text-red-500 text-sm" style={{ marginTop: "-2px", marginBottom: "5px" }}>{formErrors.firstName}</p>}

                        <input
                            onChange={handleChange}
                            name="lastName"
                            value={formData.lastName}
                            className={`form-control ${formErrors.lastName ? 'is-invalid' : formData.lastName ? 'is-valid' : ''}`}
                            id="lastName"
                            type="text"
                            placeholder="Last Name"
                            required
                        />
                        {formErrors.lastName && <p className="text-red-500 text-sm" style={{ marginTop: "-2px", marginBottom: "5px" }}>{formErrors.lastName}</p>}

                        <input
                            onChange={handleChange}
                            name="email"
                            value={formData.email}
                            className={`form-control ${formErrors.email ? 'is-invalid' : formData.email ? 'is-valid' : ''}`}
                            type="email"
                            placeholder="Email Address"
                            required
                        />
                        {formErrors.email && <p className="text-red-500 text-sm" style={{ marginTop: "-2px", marginBottom: "5px" }}>{formErrors.email}</p>}

                        <input
                            onChange={handleChange}
                            name="phone"
                            value={formData.phone}
                            className={`form-control ${formErrors.phone ? 'is-invalid' : formData.phone ? 'is-valid' : ''}`}
                            id="phone"
                            type="tel"
                            placeholder="Phone Number"
                            required
                        />
                        {formErrors.phone && <p className="text-red-500 text-sm" style={{ marginTop: "-2px", marginBottom: "10px" }}>{formErrors.phone}</p>}

                        <select
                            onChange={handleChange}
                            name="course"
                            value={formData.course}
                            className={`form-control ${formErrors.course ? 'is-invalid' : formData.course ? 'is-valid' : ''}`}
                            id="course"
                            required
                        >
                            <option value="" style={{ color: 'grey' }}>Choose Your Course</option>
                            <option value="cs">Computer Science</option>
                            <option value="it">Information Technology</option>
                            <option value="et">Electronics</option>
                            <option value="math">Mathematics</option>
                        </select>
                        {formErrors.course && <p className="text-red-500 text-sm" style={{ marginTop: "1px", marginBottom: "5px" }}>{formErrors.course}</p>}

                        <div className="text-center my-3">
                            <button className="submitBtn" type="submit">Enquire Now</button>
                        </div>
                        <a className="text-blue-500 text-[14px] underline hover:text-blue-700 transition text-center block" href="">Learn more about how we use your data</a>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Section1;
