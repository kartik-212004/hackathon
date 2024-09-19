
export default function Navbar() {
    return (
        <>
            <li className="flex flex-row  justify-center space-x-5 py-3 font-semibold text-white bg-black ">
                <ul>For Individuals</ul>
                <ul>For Businesses</ul>
                <ul>Home</ul>
                <ul>FAQ</ul>
                <ul>About Us</ul>
            </li>
            <div className="box bg-white flex flex-row justify-between px-8">
                <li className="flex items-center space-x-7 py-2  text-blue-800 flex-row text-2xl font-semibold ">
                    <ul>Learnify</ul>
                    <ul><button className="px-6 text-[15px] rounded border border-blue-500">Explore</button> </ul>
                    <ul><input className="rounded-3xl border-black border-[2px] py-2 placeholder:text-[15px] px-3 font-light h-10 placeholder:font-extralight text-black placeholder:px-2" placeholder="What do you want to learn?" type="text" /></ul>
                </li>
                <li className="space-x-3 flex flex-row items-center">
                    <ul>Online Degrees</ul>
                    <ul>Find your New Career</ul>
                    <ul className="text-blue-600"><button className="bg-blue-50 px-3 py-2 rounded-md border border-blue-600">Log In</button></ul>
                </li>
            </div>
            <div className="w-full h-44 bg-[#002761] px-24 flex items-center text-white text-[40px] font-semibold ">
                Take your career to the next level with an online degree
            </div>
            <div className="px-80 py-3 text-2xl font-medium">
                <h1>Find the right degree for you</h1>
                <ul className="py-6 flex flex-row justify-center space-x-5">
                    <li>
                        <div className=" border hover:shadow-xl h-[350px] border-gray-300 w-80 rounded-md p-4 ">
                            <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/1Rp5a6TiZD2LO4n6MHsMtS/78e1f67bd7784a40ddae53db3389a054/IllinoisGies.jpg?auto=format%2Ccompress&dpr=1" alt="" />
                            <p className="text-gray-500 text-[16px]">University of Illinois Urbana-Champaign</p>
                            <p>Master of Business Administration (iMBA)</p>
                            <p className="text-[13px]">18 courses (72 credit hours) accredited by the
                                Association for Advancing Colleges and Schools of Business (AACSB)</p>
                        </div>
                    </li>
                    <li> <div className=" border hover:shadow-xl h-[350px] border-gray-300 w-80 rounded-md p-4">
                        <img className="" src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/2yj3zCXqTytZevxwT4h4xK/114973b81842684c450c6dfc67338276/London_Goldsmiths_logo_1000x200.png?auto=format%2Ccompress&dpr=1" alt="" />
                        <p className="text-gray-500 text-[16px]">University of London </p>
                        <p>BSc Computer Science</p>
                        <p className="text-[13px]">This 360-credit degree programme from the University of London blends strong foundational computing skills with emerging technology specialisms and case study material to help you apply your new skills to real-world contexts.</p>
                    </div></li>
                    <li> <div className="hover:shadow-xl h-[350px] border border-gray-300 w-80 rounded-md p-4">
                        <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/5FsJACbyl7bFW4DjI2cZDE/181c290b91b2f801fdf09cc3d9bae75a/IIT_Roorkee__3___1_.png?auto=format%2Ccompress&dpr=1" alt="" />
                        <p className="text-gray-500 text-[16px]">University of Illinois Urbana-Champaign</p>
                        <p>Master of Business Administration (iMBA)</p>
                        <p className="text-[13px]">18 courses (72 credit hours) accredited by the
                            Association for Advancing Colleges and Schools of Business (AACSB)</p>
                    </div></li>
                    <li> <div className="hover:shadow-xl h-[350px] border border-gray-300 w-80 rounded-md p-4">
                        <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/2Io1b5QQU4YcyVOuQTdjOO/e29485e582c8a543ca136e61d3ef78e8/OPJindal.jpg?auto=format%2Ccompress&dpr=1" alt="" />
                        <p className="text-gray-500 text-[16px]">O.P. Jindal Global University
                        </p>
                        <p>M.A. in Public Policy</p>
                        <p className="text-[13px]">#1 ranked private university in India (QS World University Rankings, 2021)</p>
                    </div></li>



                </ul>
                <ul className="py-6 flex flex-row justify-center space-x-5">
                    <li>
                        <div className=" border hover:shadow-xl h-[350px] border-gray-300 w-80 rounded-md p-4 ">
                            <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/3n5rkjzizbvwLbLBGcU6fQ/4082dbaab1e8b79b514e4badfd294303/LSU_Online_Continuing_Ed_Logo.jpg?auto=format%2Ccompress&dpr=1" alt="" />
                            <p className="text-gray-500 text-[16px]">Louisiana State University
                            </p>
                            <p>Flores Master of Business Administration</p>
                            <p className="text-[13px]">Application due October 7, 2024</p>
                        </div>
                    </li>
                    <li> <div className=" border hover:shadow-xl h-[350px] border-gray-300 w-80 rounded-md p-4">
                        <img className="" src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/7EM0x2VEDTvYABQqQXiIem/6ce5b3f131a225cbf1a6b0aa24af8df6/University_of_Michigan_Horizontal_Logo.png?auto=format%2Ccompress&dpr=1" alt="" />
                        <p className="text-gray-500 text-[16px]">University of Michigan

                        </p>
                        <p>Master of Applied Data Science</p>
                        <p className="text-[13px]">#1 Public Research University in the U.S. (QS World Rankings, 2022)</p>
                    </div></li>
                    <li> <div className="hover:shadow-xl h-[350px] border border-gray-300 w-80 rounded-md p-4">
                        <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/5FsJACbyl7bFW4DjI2cZDE/181c290b91b2f801fdf09cc3d9bae75a/IIT_Roorkee__3___1_.png?auto=format%2Ccompress&dpr=1" alt="" />
                        <p className="text-gray-500 text-[16px]">University of Illinois Urbana-Champaign</p>
                        <p>Master of Business Administration (iMBA)</p>
                        <p className="text-[13px]">18 courses (72 credit hours) accredited by the
                            Association for Advancing Colleges and Schools of Business (AACSB)</p>
                    </div></li>
                    <li> <div className="hover:shadow-xl h-[350px] border border-gray-300 w-80 rounded-md p-4">
                        <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/2Io1b5QQU4YcyVOuQTdjOO/e29485e582c8a543ca136e61d3ef78e8/OPJindal.jpg?auto=format%2Ccompress&dpr=1" alt="" />
                        <p className="text-gray-500 text-[16px]">O.P. Jindal Global University
                        </p>
                        <p>M.A. in Public Policy</p>
                        <p className="text-[13px]">#1 ranked private university in India (QS World University Rankings, 2021)</p>
                    </div></li>

                </ul>
            </div>
        </>
    )
}