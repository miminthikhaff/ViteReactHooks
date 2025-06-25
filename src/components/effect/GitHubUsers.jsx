import React, { useState, useEffect } from "react";
import "./GitHubUsers.css";

export const GitHubUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch("https://api.github.com/users");
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        }
        fetchUsers();
    }, []);

    return (
        <div className="users">
            <h2>GitHub Users</h2>
            <br/>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <img
                            src={user.avatar_url}
                            alt={user.login}
                            width={32}
                            style={{ verticalAlign: "middle" }}
                        />{" "}
                        <p>{user.login}</p>
                        <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="profile-btn">
                            Profile
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GitHubUsers;
