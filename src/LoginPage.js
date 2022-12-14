import React from 'react'

function LoginPage() {
    return (
        <div className="h-screen flex bg-green-100">
            <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
                <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
                    Login to your account
                </h1>

                <form>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                            id="email"
                            placeholder="Your Email"
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                            id="password"
                            placeholder="Your Password"
                        />
                    </div>
                    <div className="flex justify-center items-center mt-6">
                        <button className="bg-green-900 py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage
