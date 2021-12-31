import React, { useState } from 'react';
import { Form, Button, Comment } from 'semantic-ui-react'

function PrivateComment({ item }) {

    const [toggle, setToggle] = useState(false);
   const fun=(e)=>{
       e.preventDefault();
       setToggle(!toggle);
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
            {item.reply.length !== 0 ? item.reply.map((item, idx) => (
                <Comment.Group>
                    <Comment>
                        <Comment.Content>
                            <Comment.Metadata>
                                <div>{item.created}</div>
                            </Comment.Metadata>
                            <Comment.Text>{item.text}</Comment.Text>
                        </Comment.Content>
                    </Comment>
                </Comment.Group>
            )) : <div></div>}
            {toggle ?
                <Form reply>
                    <Form.TextArea />
                    <Button content='Add Reply' labelPosition='left' icon='edit' primary />
                </Form>
                :<div></div>
            }
        </Comment>
    );
}

export default PrivateComment;