import React, { useEffect, useState } from 'react';

const FetchApi = () => {
    const [dbData, setDbData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const resp = await fetch("https://api.github.com/users");
                const data = await resp.json();
                console.log(data);
                setDbData(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, []);

    console.log(dbData);

    return (
        <div>
            <h1>FetchApi</h1>
            {dbData?.map((ele) => (
                <section key={ele.id}>
                    <h1>{ele.login}</h1>
                    <img src={ele.avatar_url} alt={`${ele.login}'s avatar`} height={200} width={200} />
                </section>
            ))}
        </div>
    );
};

export default FetchApi;
