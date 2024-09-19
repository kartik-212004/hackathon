import AboutUs from "./About";
import Login from "./login";
import { Link } from "react-router-dom";
export default function Navbar() {
    function one(e) {
        window.location.href = 'https://www.coursera.org/degrees/imba';
    }
    function two(e) {
        window.location.href = 'https://www.coursera.org/degrees/bachelor-of-science-computer-science-london';
    }
    function third(e) {
        window.location.href = 'https://www.coursera.org/degrees/emba-iitr';
    }
    function four(e) {
        window.location.href = 'https://www.coursera.org/degrees/ma-public-policy-jgu';
    }
    function five(e) {
        window.location.href = 'https://www.coursera.org/degrees/mba-master-business-administration-flores-lsu-online?';
    }
    function six(e) {
        window.location.href = 'https://www.coursera.org/degrees/master-of-applied-data-science-umich';
    }
    function seven(e) {
        window.location.href = 'https://www.coursera.org/degrees/bachelor-science-cybersecurity-technology-umgc';
    }
    function eight(e) {
        window.location.href = 'https://www.coursera.org/degrees/imba';
    }
    function degress() {
        window.location.href = "https://www.coursera.org/degrees"
    }
    return (
        <>
            <li className="flex flex-row  justify-center space-x-5 py-3 font-semibold text-white bg-black ">
                <ul>For Individuals</ul>
                <ul>For Businesses</ul>
                <ul>Home</ul>
                <ul>FAQ</ul>
                <Link to={'/aboutus'} ><ul >About Us</ul></Link>
            </li>
            <div className="box bg-white flex flex-row justify-between px-8">
                <li className="flex items-center space-x-7 py-2  text-blue-800 flex-row text-2xl font-semibold ">
                    <ul>Learnify</ul>
                    <ul><button className="px-6 text-[15px] rounded border border-blue-500">Explore</button> </ul>
                    <ul><input className="rounded-3xl border-black border-[2px] py-2 placeholder:text-[15px] px-3 font-light h-10 placeholder:font-extralight text-black placeholder:px-2" placeholder="What do you want to learn?" type="text" /></ul>
                </li>
                <li className="space-x-3 flex flex-row items-center">
                    <ul onClick={degress}>Online Degrees</ul>
                    <ul>Find your New Career</ul>
                    <Link to={'/login'}>  <ul className="text-blue-600"><button className="bg-blue-50 px-3 py-2 rounded-md border border-blue-600">Log In</button></ul></Link>
                </li>
            </div >
            <div className="w-full h-44 bg-[#002761] px-24 flex items-center text-white text-[40px] font-semibold ">
                Take your career to the next level with an online degree
            </div>
            <div className="px-80 py-3 text-2xl font-medium">
                <h1>Find the right degree for you</h1>
                <ul className="py-6 flex flex-row justify-center space-x-5">
                    <li>
                        <div onClick={one} className=" border hover:shadow-xl h-[350px] border-gray-300 w-80 rounded-md p-4 ">
                            <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/1Rp5a6TiZD2LO4n6MHsMtS/78e1f67bd7784a40ddae53db3389a054/IllinoisGies.jpg?auto=format%2Ccompress&dpr=1" alt="" />
                            <p className="text-gray-500 text-[16px]">University of Illinois Urbana-Champaign</p>
                            <p>Master of Business Administration (iMBA)</p>
                            <p className="text-[13px]">18 courses (72 credit hours) accredited by the
                                Association for Advancing Colleges and Schools of Business (AACSB)</p>
                        </div>
                    </li>
                    <li> <div onClick={two} className=" border hover:shadow-xl h-[350px] border-gray-300 w-80 rounded-md p-4">
                        <img className="" src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/2yj3zCXqTytZevxwT4h4xK/114973b81842684c450c6dfc67338276/London_Goldsmiths_logo_1000x200.png?auto=format%2Ccompress&dpr=1" alt="" />
                        <p className="text-gray-500 text-[16px]">University of London </p>
                        <p>BSc Computer Science</p>
                        <p className="text-[13px]">This 360-credit degree programme from the University of London blends strong foundational computing skills with emerging technology specialisms and case study material to help you apply your new skills to real-world contexts.</p>
                    </div></li>
                    <li> <div onClick={third} className="hover:shadow-xl h-[350px] border border-gray-300 w-80 rounded-md p-4">
                        <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/5FsJACbyl7bFW4DjI2cZDE/181c290b91b2f801fdf09cc3d9bae75a/IIT_Roorkee__3___1_.png?auto=format%2Ccompress&dpr=1" alt="" />
                        <p className="text-gray-500 text-[16px]">University of Illinois Urbana-Champaign</p>
                        <p>Master of Business Administration (iMBA)</p>
                        <p className="text-[13px]">18 courses (72 credit hours) accredited by the
                            Association for Advancing Colleges and Schools of Business (AACSB)</p>
                    </div></li>
                    <li> <div onClick={four} className="hover:shadow-xl h-[350px] border border-gray-300 w-80 rounded-md p-4">
                        <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/2Io1b5QQU4YcyVOuQTdjOO/e29485e582c8a543ca136e61d3ef78e8/OPJindal.jpg?auto=format%2Ccompress&dpr=1" alt="" />
                        <p className="text-gray-500 text-[16px]">O.P. Jindal Global University
                        </p>
                        <p>M.A. in Public Policy</p>
                        <p className="text-[13px]">#1 ranked private university in India (QS World University Rankings, 2021)</p>
                    </div></li>



                </ul>
                <ul className="py-6 flex flex-row justify-center space-x-5">
                    <li>
                        <div onClick={five} className=" border hover:shadow-xl h-[350px] border-gray-300 w-80 rounded-md p-4 ">
                            <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/3n5rkjzizbvwLbLBGcU6fQ/4082dbaab1e8b79b514e4badfd294303/LSU_Online_Continuing_Ed_Logo.jpg?auto=format%2Ccompress&dpr=1" alt="" />
                            <p className="text-gray-500 text-[16px]">Louisiana State University
                            </p>
                            <p>Flores Master of Business Administration</p>
                            <p className="text-[13px]">Application due October 7, 2024</p>
                        </div>
                    </li>
                    <li> <div onClick={six} className=" border hover:shadow-xl h-[350px] border-gray-300 w-80 rounded-md p-4">
                        <img className="" src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/7EM0x2VEDTvYABQqQXiIem/6ce5b3f131a225cbf1a6b0aa24af8df6/University_of_Michigan_Horizontal_Logo.png?auto=format%2Ccompress&dpr=1" alt="" />
                        <p className="text-gray-500 text-[16px]">University of Michigan

                        </p>
                        <p>Master of Applied Data Science</p>
                        <p className="text-[13px]">#1 Public Research University in the U.S. (QS World Rankings, 2022)</p>
                    </div></li>
                    <li> <div onClick={seven} className="hover:shadow-xl h-[350px] border border-gray-300 w-80 rounded-md p-4">
                        <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/4r5JpFHQvXgmWvMtRMXbeb/8179cc039f4c5a1e2bfda3007d34de0d/UMGC-Logo.png?auto=format%2Ccompress&dpr=1" alt="" />
                        <p className="text-gray-500 text-[16px]">University of Maryland Global Campus</p>
                        <p>Bachelor of Science in Cybersecurity Technology</p>
                        <p className="text-[13px]">Prepare for in-demand cybersecurity certifications as you take coursework that can help prepare you for industry-specific</p>

                    </div></li>
                    <li> <div onClick={eight} className=" border hover:shadow-xl h-[350px] border-gray-300 w-80 rounded-md p-4 ">
                        <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/1Rp5a6TiZD2LO4n6MHsMtS/78e1f67bd7784a40ddae53db3389a054/IllinoisGies.jpg?auto=format%2Ccompress&dpr=1" alt="" />
                        <p className="text-gray-500 text-[16px]">University of Illinois Urbana-Champaign</p>
                        <p>Master of Business Administration (iMBA)</p>
                        <p className="text-[13px]">In the online Bachelor of Science in Cybersecurity Technology at University of Maryland Global Campus</p>
                    </div></li>

                </ul>
            </div>
            <div className="px-80 py-20 text-2xl font-medium ">
                <p>Browse by program level</p>
            </div>
            <div className="px-80 text-2xl">
                <ul className="flex flex-row space-x-2  justify-center">
                    <li className="w-[400px] bg-[#e3eeff] h-max py-7 text-center rounded-lg p-2"><a data-click-key="program_hub.degree_main.click.product_variant_card" data-click-value="{&quot;href&quot;:&quot;https://www.coursera.org/degrees/masters&quot;,&quot;link&quot;:&quot;https://www.coursera.org/degrees/masters&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;program_hub&quot;,&quot;component&quot;:&quot;product_variant_card&quot;,&quot;page&quot;:&quot;degree_main&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;,&quot;title&quot;:&quot;Master's Degrees&quot;}" data-track="true" data-track-app="program_hub" data-track-page="degree_main" data-track-action="click" data-track-component="product_variant_card" data-track-href="https://www.coursera.org/degrees/masters" href="https://www.coursera.org/degrees/masters" to="https://www.coursera.org/degrees/masters" class="css-15m7gzp" data-test="ProductVariantCard"><h3 class="css-1r9s4xf">Master's Degrees</h3><div class="cds-170"><p class="css-w1sozz">
                    </p>
                    </div></a>
                    </li>
                    <li className="w-[400px] bg-[#e3eeff] h-max py-7 text-center rounded-lg p-2"><a data-click-key="program_hub.degree_main.click.product_variant_card" data-click-value="{&quot;href&quot;:&quot;https://www.coursera.org/degrees/masters&quot;,&quot;link&quot;:&quot;https://www.coursera.org/degrees/masters&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;program_hub&quot;,&quot;component&quot;:&quot;product_variant_card&quot;,&quot;page&quot;:&quot;degree_main&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;,&quot;title&quot;:&quot;Master's Degrees&quot;}" data-track="true" data-track-app="program_hub" data-track-page="degree_main" data-track-action="click" data-track-component="product_variant_card" data-track-href="https://www.coursera.org/degrees/masters" href="https://www.coursera.org/degrees/masters" to="https://www.coursera.org/degrees/masters" class="css-15m7gzp" data-test="ProductVariantCard"><h3 class="css-1r9s4xf">Master's Degrees</h3><div class="cds-170"><p class="css-w1sozz"></p>
                    </div>
                    </a>
                    </li>
                    <li className="w-[400px] bg-[#e3eeff] h-max py-7 text-center rounded-lg p-2"><a data-click-key="program_hub.degree_main.click.product_variant_card" data-click-value="{&quot;href&quot;:&quot;https://www.coursera.org/degrees/postgraduate-studies&quot;,&quot;link&quot;:&quot;https://www.coursera.org/degrees/postgraduate-studies&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;program_hub&quot;,&quot;component&quot;:&quot;product_variant_card&quot;,&quot;page&quot;:&quot;degree_main&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;,&quot;title&quot;:&quot;Postgraduate Programs&quot;}" data-track="true" data-track-app="program_hub" data-track-page="degree_main" data-track-action="click" data-track-component="product_variant_card" data-track-href="https://www.coursera.org/degrees/postgraduate-studies" href="https://www.coursera.org/degrees/postgraduate-studies" to="https://www.coursera.org/degrees/postgraduate-studies" class="css-15m7gzp" data-test="ProductVariantCard"><h3 class="css-1r9s4xf">Postgraduate Programs</h3><div class="cds-170"><p class="css-w1sozz"></p>
                    </div>
                    </a>
                    </li>

                </ul>
            </div>
            <div className="py-6">
                <ul className="flex flex-row justify-center space-x-5">
                    <li className="w-64 "><h1 className="text-2xl">Affordable tuition with flexible payment options</h1>
                        <p className="text-blue-600">Pursue your degree with affordable tuition, flexible payment options that let you pay as you go, and financial aid opportunities, including scholarships.</p></li>
                    <li><div onClick={seven} className="hover:shadow-xl h-[350px] border border-gray-300 w-80 rounded-md p-4">
                        <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/4r5JpFHQvXgmWvMtRMXbeb/8179cc039f4c5a1e2bfda3007d34de0d/UMGC-Logo.png?auto=format%2Ccompress&dpr=1" alt="" />
                        <p className="text-gray-500 text-[16px]">University of Maryland Global Campus</p>
                        <p>Bachelor of Science in Cybersecurity Technology</p>
                        <p className="text-[13px]">Prepare for in-demand cybersecurity certifications as you take coursework that can help prepare you for industry-specific</p>

                    </div></li>
                    <li> <div onClick={five} className=" border hover:shadow-xl h-[350px] border-gray-300 w-80 rounded-md p-4 ">
                        <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/3n5rkjzizbvwLbLBGcU6fQ/4082dbaab1e8b79b514e4badfd294303/LSU_Online_Continuing_Ed_Logo.jpg?auto=format%2Ccompress&dpr=1" alt="" />
                        <p className="text-gray-500 text-[16px]">Louisiana State University
                        </p>
                        <p>Flores Master of Business Administration</p>
                        <p className="text-[13px]">Application due October 7, 2024</p>
                    </div></li>
                    <Link className="text-2xl w-96 text-gray-600 border border-green-400 rounded-lg p-5" to={'/students'}>

                        Your feedback is essential in ensuring that future students have an even better experience. Thank you for helping us grow!
                        <img src="https://static.vecteezy.com/system/resources/previews/014/433/279/original/rate-your-experience-emoji-faces-feedback-concept-isolated-on-white-background-vector.jpg" alt="" /></Link>
                </ul>
            </div>
        </>
    )
}