
const AboutUs = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl w-full">
                <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Problem Statement</h2>
                    <p className="text-gray-600 text-lg">
                        Online Learning Platform: Develop a web-based platform for online courses that includes interactive learning tools, real-time collaboration, and progress tracking.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Meet Our Team</h2>
                    <ul className="space-y-4">
                        <li className="text-lg text-gray-700">
                            <strong>Kartik Bhatt</strong> - Team Leader, BTech 2nd Year
                        </li>
                        <li className="text-lg text-gray-700">
                            <strong>Sanjeev</strong> - Section B, First Year
                        </li>
                        <li className="text-lg text-gray-700">
                            <strong>Tushar</strong> - Section B, First Year
                        </li>
                        <li className="text-lg text-gray-700">
                            <strong>Supriya</strong> - Section B, First Year
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default AboutUs;
