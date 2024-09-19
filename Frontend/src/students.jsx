import React, { useState } from 'react';

const StudentInteraction = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [rating, setRating] = useState(0);
    const [studentRating, setStudentRating] = useState([]);

    // Handle sending a message
    const handleSendMessage = () => {
        if (newMessage) {
            setMessages([...messages, { message: newMessage, rating }]);
            setNewMessage('');
            setRating(0); // Reset rating after submission
        }
    };

    // Handle rating the course
    const handleRating = (rate) => {
        setRating(rate);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
                <h1 className="text-3xl font-bold text-center mb-6">Course Interaction & Rating</h1>

                {/* Interaction Section */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Interact with Students</h2>
                    <textarea
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md mb-4"
                        rows="3"
                        placeholder="Write a comment..."
                    ></textarea>

                    {/* Rating Section */}
                    <div className="flex items-center mb-4">
                        <span className="text-lg font-semibold mr-4">Rate the Course:</span>
                        {[1, 2, 3, 4, 5].map((num) => (
                            <button
                                key={num}
                                onClick={() => handleRating(num)}
                                className={`text-xl mr-2 ${rating >= num ? 'text-yellow-500' : 'text-gray-400'
                                    }`}
                            >
                                ★
                            </button>
                        ))}
                    </div>

                    {/* Submit Button */}
                    <button
                        onClick={handleSendMessage}
                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                    >
                        Send Message
                    </button>
                </section>

                {/* Display Messages and Ratings */}
                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Student Feedback</h2>
                    {messages.length === 0 ? (
                        <p className="text-gray-600">No messages yet. Be the first to interact!</p>
                    ) : (
                        <ul className="space-y-4">
                            {messages.map((msg, index) => (
                                <li key={index} className="p-4 border border-gray-300 rounded-lg">
                                    <p className="text-gray-700">{msg.message}</p>
                                    <div className="mt-2">
                                        {Array.from({ length: 5 }, (_, i) => (
                                            <span
                                                key={i}
                                                className={`text-lg ${i < msg.rating ? 'text-yellow-500' : 'text-gray-400'}`}
                                            >
                                                ★
                                            </span>
                                        ))}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </section>
            </div>
        </div>
    );
};

export default StudentInteraction;
