import React, { useState } from 'react';
import NewPostForm from './NewPostForm';
import jsonData from '../data.json';
  
function TableData() {
  const [postData, setPostData] = useState(jsonData);
  
  const tableRows = postData.map((info) => {
    return (
      <tr>
        <td>{info.id}</td>
        <td>{info.name}</td>
        <td>{info.city}</td>
      </tr>
    );
  });
  
  const addRows = (data) => {
    const totalPosts = postData.length;
    data.id = totalPosts + 1;
    const updatedPostData = [...postData];
    updatedPostData.push(data);
    setPostData(updatedPostData);
  };
  
  return (
    <div>
      <table className="table table-stripped">
        <thead>
          <tr>
            <th>ID Number</th>
            <th>Name</th>
            <th>Fun</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
      <NewPostForm func={addRows} />
    </div>
  );
}
  
export default TableData;