import React from 'react';
import { useState } from 'react';
import { Button, Comment, Form, Header } from 'semantic-ui-react';
import PrivateComment from './PrivateComment';
import axios from 'axios';
const PrivateComments = ({ data }) => {
    const [toggle, setToggle] = useState(false);
    const [comment, setComment] = useState("");
    const submitHandler = async (e) => {
        e.preventDefault();
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Shivam ${localStorage.getItem("authToken")}`,
            },
        };
        try {
            const { data } = await axios.post("http://localhost:5000/api/private/comments", { comment }, config);
            console.log(data);
            window.location.reload(false);
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <Comment.Group>
            <Header as='h3' dividing>
                Comments
            </Header>
            {
                data ? data.data.map((item, idx) => (
                    <PrivateComment value={item} />
                )) : <span>No Comments</span>
            }
            <Form reply>
                <Form.TextArea onChange={(e) => setComment(e.target.value)} />
                <Button onClick={submitHandler} content='Add Comment' labelPosition='left' icon='edit' primary />
            </Form>
        </Comment.Group>

    )
}
export default PrivateComments
