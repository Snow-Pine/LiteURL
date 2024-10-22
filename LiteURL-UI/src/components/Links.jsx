import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@material-tailwind/react";

const Links = () => {
  const [inUrl, setInUrl] = useState("");
  const [urls, setUrls] = useState([]);

  const handleInputChange = (e) => {
    setInUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      inUrl: inUrl,
    };

    axios
      .post("http://localhost:8080/createUrl", requestBody)
      .then((response) => {
        console.log(response.data);
        fetchUrls();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const fetchUrls = () => {
    axios
      .get("http://localhost:8080/getAllUrl")
      .then((response) => {
        setUrls(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchUrls();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit} className="mt-4">
        <div>
          <label htmlFor="inUrl">
            <h2>Enter Long Url</h2>
          </label>
          <input
            type="text"
            id="inUrl"
            value={inUrl}
            placeholder="Enter Long Url"
            onChange={handleInputChange}
          />
        </div>
        <Button type="submit">
          Create Short URL
        </Button>
      </form>

      <table>
        <thead>
          <tr>
            <th scope="col">Long URL</th>
            <th scope="col">Short URL</th>
          </tr>
        </thead>
        <tbody>
          {urls.map((url) => (
            <tr key={url.id}>
              <td>{url.inputurl}</td>
              <td>
                <a href={`http://localhost:8080/${url.outputurl.replace("liteurl.com/", "")}`} target="_blank" rel="noopener noreferrer">
                  {url.outputurl}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Links;