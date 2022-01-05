import { useState, useEffect } from "react";
import axios from "axios";
import { Box } from "@mui/system";
import PrivateComments from './PrivateComments'
import { Link } from "react-router-dom";


const PrivateScreen = () => {
    const [error, setError] = useState("");
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
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 0, width: '25ch' },
                marginLeft: "15%",
                marginRight: "15%",
                border: '1px solid grey',
                paddingTop: "5%",
                marginTop: "5%",
                borderRadius: "7px",
                boxShadow: "5px 10px #08308E",
                paddingBottom: "5%"
            }}
            noValidate
            autoComplete="off"
            textAlign="center"
        >
            {error}
            <br></br>
            <div style={{ paddingTop: "2%"}}>
                <Link style={{ paddingTop: "7%", color: 'black', textDecoration: 'none' }} to={`/login`}>Login</Link>
            </div>

        </Box>
    ) : (
        <div style={{marginTop:"5%",marginLeft:"25%"}}>
            {comments ? (
                <PrivateComments data={comments} />
            ) :
                (<span>No comments {comments}</span>)
            }
        </div>
    );
};

export default PrivateScreen;