import React from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import PrivateComment from './PrivateComment'
const PrivateComments = ({ data }) => {
    // console.log(data);
    return (
        <Comment.Group>
            <Header as='h3' dividing>
                Comments
            </Header>
            {
                data ? data.data.map((item, idx) => (
                    <PrivateComment item={item}/>
                )) : <span>No Comments</span>
            }
        </Comment.Group>
    )
}
export default PrivateComments
