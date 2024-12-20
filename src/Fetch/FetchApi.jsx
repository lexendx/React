import React, { useEffect, useState } from 'react';

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
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h1 style={{ textAlign: "center", marginBottom: "20px" }}>GitHub Users</h1>

            {isLoading && <p>Loading data, please wait...</p>}

            {error && <p style={{ color: "red" }}>Error: {error}</p>}

            {!isLoading && !error && usersData && (
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                        gap: "20px",
                    }}
                >
                    {usersData.map((user) => (
                        <section
                            key={user.id}
                            style={{
                                border: "1px solid #ddd",
                                borderRadius: "8px",
                                padding: "10px",
                                textAlign: "center",
                            }}
                        >
                            <h2 style={{ fontSize: "18px", margin: "10px 0" }}>{user.login}</h2>
                            <img
                                src={user.avatar_url}
                                alt={`${user.login}'s avatar`}
                                style={{ borderRadius: "50%", width: "150px", height: "150px" }}
                            />
                        </section>
                    ))}
                </div>
            )}

            {!isLoading && !error && !usersData && <p>No data available.</p>}
        </div>
    );
};

export default FetchApi;
