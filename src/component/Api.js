import React, { useEffect, useState } from 'react'

export const Api = () => {

    const [repos, setRepos] = useState([{}])

    useEffect(() => {
        async function fetchApi() {
            const api = await fetch('https://api.github.com/users/khatrisuneel96/repos')
            const data = await api.json()
            setRepos(data)
        }

        fetchApi()
    }, [])
    return (
        <div>
            <h1>My All Reposteries!</h1>
            <ul>
                {repos.map((data, index) => {
                    return (
                        <li key={index}>{data.name}</li>
                    )

                })}
            </ul>

        </div>
    )
}
