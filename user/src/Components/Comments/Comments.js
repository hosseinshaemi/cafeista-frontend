import React from "react";
import "./Comments.css";
import CommentCard from "./CommentCard";

const data =[
    {
        name: 'مهسا',
        rate: 2,
        context: 'بسیار عالی '
    
    },
    {
        name: 'نگار',
        rate: 4,
        context: 'بسیار عالی  '
    
    },
    {
        name: 'نگار',
        rate: 4,
        context:  'بسیار عالی  '
    
    },
    {
        name: 'نگار',
        rate: 4,
        context:  'بسیار عالی  '
    
    },
    {
        name: 'نگار',
        rate: 4,
        context:  'بسیار عالی  '
    
    },
    {
        name: 'نگار',
        rate: 4,
        context:  'بسیار عالی  '
    
    },
    {
        name: 'نگار',
        rate: 4,
        context:  'بسیار عالی  '
    
    },
    


]
const Comments = ({ comments }) => {
  return (
    <div className="comment-list">
        {data.map(item => <CommentCard info={item}/>)}
       {comments && comments.length > 0 && (
        comments.map(item => <CommentCard info={item}/>)
      )}
    </div>
  );
};
export default Comments;
