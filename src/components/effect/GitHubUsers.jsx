import React, { useState, useEffect } from "react";
import "./GitHubUsers.css";

export const GitHubUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            async function fetchUsers() {
                try {
                    const response = await fetch("https://api.github.com/users");
                    const data = await response.json();
                    setUsers(data);
                } catch (error) {
                    console.error("Error fetching users:", error);
                } finally {
                    setLoading(false);
                }
            }
            fetchUsers();
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="users">
            <h2>GitHub Users</h2>
            <br />
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <img
                            src={user.avatar_url}
                            alt={user.login}
                            width={32}
                            style={{ verticalAlign: "middle" }}
                        />{" "}
                        <span>{user.login}</span>
                        <a
                            href={user.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="profile-btn"
                        >
                            Profile
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GitHubUsers;
