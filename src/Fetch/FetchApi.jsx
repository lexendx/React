import React, { useEffect, useState } from "react";

const FetchApi = () => {
    // State to store fetched data
    const [usersData, setUsersData] = useState(null);
    // State to handle loading status
    const [isLoading, setIsLoading] = useState(true);
    // State to handle errors
    const [error, setError] = useState(null);

    useEffect(() => {
        // Async function to fetch data from the API
        const fetchData = async () => {
            try {
                const response = await fetch("https://api.github.com/users");

                if (!response.ok) {
                    throw new Error(`HTTP Error: ${response.status}`);
                }

                const data = await response.json();
                setUsersData(data);
            } catch (err) {
                // Handle and set error message
                setError(err.message);
            } finally {
                // Stop loading irrespective of success or error
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="p-8 font-sans bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 min-h-screen">
            <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">GitHub Users</h1>

            {isLoading && <p className="text-center text-lg text-blue-600 animate-pulse">Loading data, please wait...</p>}

            {error && <p className="text-center text-red-600 font-semibold">Error: {error}</p>}

            {!isLoading && !error && usersData && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {usersData.map((user) => (
                        <section
                            key={user.id}
                            className="bg-white border border-gray-200 shadow-md rounded-lg p-4 text-center transition-transform transform hover:scale-105 hover:shadow-lg"
                        >
                            <img
                                src={user.avatar_url}
                                alt={`${user.login}'s avatar`}
                                className="rounded-full w-32 h-32 mx-auto mb-4 border-4 border-blue-100"
                            />
                            <h2 className="text-lg font-medium text-gray-700">{user.login}</h2>
                            <a
                                href={`https://github.com/${user.login}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-2 inline-block text-sm text-blue-500 hover:underline"
                            >
                                View Profile
                            </a>
                        </section>
                    ))}
                </div>
            )}

            {!isLoading && !error && !usersData && (
                <p className="text-center text-gray-500">No data available.</p>
            )}
        </div>
    );
};

export default FetchApi;
