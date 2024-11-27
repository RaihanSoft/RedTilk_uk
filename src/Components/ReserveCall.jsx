

const ReserveCall = () => {
    return (
        <div className="min-h-screen bg-[#200000] flex items-center justify-center px-6">
            <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-6 text-white">
                {/* Left Section */}
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold">Got a project in mind?</h2>
                    <h1 className="text-4xl font-extrabold">Reserve a Call</h1>
                    <ul className="space-y-3">
                        <li>✅ An in-depth session to understand your needs</li>
                        <li>✅ Learn which plan is right for your team</li>
                        <li>✅ Get onboarding help</li>
                    </ul>
                    <p className="mt-8">
                        Technical support or some query?{' '}
                        <a href="#" className="text-red-500 hover:underline">
                            Contact support &rarr;
                        </a>
                    </p>
                </div>

                {/* Right Section (Form) */}
                <div className="bg-[#3B0000] p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4">Tell us about yourself.</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Full Name</label>
                            <input
                                type="text"
                                className="input input-bordered w-full bg-[#200000] text-white"
                                placeholder="Enter your full name"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Work Email</label>
                            <input
                                type="email"
                                className="input input-bordered w-full bg-[#200000] text-white"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Company Size</label>
                            <select className="select select-bordered w-full bg-[#200000] text-white">
                                <option value="1-20">1-20</option>
                                <option value="21-50">21-50</option>
                                <option value="51-100">51-100</option>
                                <option value="100+">100+</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">How Can We Help?</label>
                            <textarea
                                className="textarea textarea-bordered w-full bg-[#200000] text-white"
                                rows="4"
                                placeholder="Enter your message"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="btn bg-red-600 hover:bg-red-700 text-white w-full"
                        >
                            Send message
                        </button>
                    </form>

                    <p className="text-sm mt-4">
                        You can also email us at{' '}
                        <a href="mailto:Apac@Redlit.Team" className="text-red-500 hover:underline">
                            Apac@Redlit.Team
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ReserveCall;
