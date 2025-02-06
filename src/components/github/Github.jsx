import React, { useEffect, useState } from "react";

const Github = () => {
  const [githubData, setGithubData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetching the GitHub data from the GitHub API
    fetch("https://api.github.com/users/jabongg")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data from GitHub");
        }
        return response.json();
      })
      .then((data) => {
        setGithubData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // If loading, show loading message
  if (loading) {
    return <div>Loading...</div>;
  }

  // If there is an error, show the error message
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="github-profile">
      <div className="profile-image">
        <img src={githubData.avatar_url} alt="GitHub Avatar" width={150} />
      </div>
      <div className="profile-details">
        <h1>{githubData.name}</h1>
        <p><strong>Username:</strong> {githubData.login}</p>
        <p><strong>Bio:</strong> {githubData.bio || "No bio available"}</p>
        <p><strong>Location:</strong> {githubData.location || "Not provided"}</p>
        <p><strong>Public Repositories:</strong> {githubData.public_repos}</p>
        <p><strong>Followers:</strong> {githubData.followers}</p>
        <p><strong>Following:</strong> {githubData.following}</p>
        <p><strong>GitHub URL:</strong> <a href={githubData.html_url} target="_blank" rel="noopener noreferrer">{githubData.html_url}</a></p>
      </div>
    </div>
  );
};

export default Github;
