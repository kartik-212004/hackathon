export default function Navbar() {
    return (
        <>
            <li className="flex flex-row  justify-center space-x-5 py-3 font-semibold text-white bg-black ">
                <ul>For Individuals</ul>
                <ul>For Businesses</ul>
                <ul>For Universities</ul>
                <ul>For Governments</ul>
                <ul>About Us</ul>
            </li>
            <div className="box bg-white flex flex-row justify-between px-8">
                <li className="flex items-center space-x-7 py-2  text-blue-800 flex-row text-2xl font-semibold ">
                    <ul>Coursera</ul>
                    <ul><button className="px-6 text-[15px] rounded border border-blue-500">Explore</button> </ul>
                    <ul><input className="rounded-3xl border-black border-[2px] py-2 placeholder:text-[18px] h-10 placeholder:font-extralight text-black placeholder:px-2" placeholder="what do you want to learn" type="text" /></ul>
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
            <div>
                Find the right course for you
            </div>
        </>
    )
}