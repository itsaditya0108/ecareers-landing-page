import logoImage from "../../assets/images/ec-logo.png"
function Header() {
    return (
        <>
            <nav className="bg-[#1A1D2F] px-2 sm:px-8 py-3 flex justify-between text-white">
                <img src={logoImage} alt="Logo" className="w-[120px] sm:w-[180px]" />
                <div className="mt-2">
                    <a className="sm:text-xl mr-3" href="tel:+919769998843">
                        +91-976 999 8843
                    </a>
                    <p>Mon-Fri | 9am-6pm</p>
                </div>
            </nav>
        </>
    )
}

export default Header
