import React, { useState, useEffect } from 'react';
import { Form, Button, Comment } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from "react-router-dom";

function PrivateComment({ value }) {
    const [toggle, setToggle] = useState(false);
    const [result, setResult] = useState("");
    const [item, setItem] = useState(value);
    const [error, setError] = useState("");
    const fun = (e) => {
        e.preventDefault();
        setToggle(!toggle);
    }
    let history = useHistory();
    const submitHandler = async (e) => {
        e.preventDefault();
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Shivam ${localStorage.getItem("authToken")}`,
            },
        };
        try {
            const { data } = await axios.post(`http://localhost:5000/api/private/comments/${item._id}`, { result }, config);
            console.log(data);
            setToggle(!toggle);
            window.location.reload(false);
        } catch (error) {
            console.log(error);
            setError("Error Occured");
        }
    }

    return (
        <Comment>
            <Comment.Content>
                <Comment.Author as='a'>{item.author.username}</Comment.Author>
                <Comment.Metadata>
                    <div>{item.created}</div>
                </Comment.Metadata>
                <Comment.Text>
                    <p>{item.text}</p>
                </Comment.Text>
                <Comment.Actions>
                    <Comment.Action onClick={fun}>Reply</Comment.Action>
                </Comment.Actions>
            </Comment.Content>
            {toggle ?
                <Form reply style={{marginLeft:"10%"}}>
                    <Form.TextArea onChange={(e) => setResult(e.target.value)} />
                    <Button onClick={submitHandler} content='Add Reply' labelPosition='left' icon='edit' primary />
                </Form>
                : <div></div>
            }
            {item.reply.length !== 0 ? item.reply.map((item, idx) => (
                <Comment.Group>
                    <Comment>
                        <Comment.Content>
                            {/* <Comment.Metadata>
                                <div>{item.created}</div>
                            </Comment.Metadata> */}
                            <Comment.Text>{item.text}</Comment.Text>
                        </Comment.Content>
                    </Comment>
                </Comment.Group>
            )) : <div></div>}

        </Comment>
    );
}

export default PrivateComment;