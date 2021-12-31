import { useState, useEffect } from "react";
import axios from "axios";
// import "./PrivateScreen.css";
import PrivateComments from './PrivateComments'

const PrivateScreen = () => {
    const [error, setError] = useState("");
    const [privateData, setPrivateData] = useState("");
    const [comments, setComments] = useState();
    useEffect(() => {
        const fetchPrivateDate = async () => {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Shivam ${localStorage.getItem("authToken")}`,
                },
            };
            try {
                const { data } = await axios.get("http://localhost:5000/api/private/comments", config);
                // console.log(data);
                setComments(data);
            } catch (error) {
                localStorage.removeItem("authToken");
                setError("You are not authorized please login");
            }
        };

        fetchPrivateDate();
    }, []);

    console.log(comments)
    return error ? (
        <span>{error}</span>
    ) : (
        <div>
            {comments ? (
                <PrivateComments data={comments} />
            ) :
                (<span>No comments {comments}</span>)
            }
        </div>

        // <div>{privateData}</div>
    );
};

export default PrivateScreen;