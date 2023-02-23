import React, {useState} from 'react';


function AddPost(props) {
      const [data, setData] = useState({
            body:""
        })
      function submit(e){
            e.preventDefault();
            props.updatePosts([...props.currentPosts, data])
            console.log(data)
      }
      
      function handle(e){
            const newData={...data}
            newData[e.target.id] = e.target.value
            setData(newData)
            console.log(newData)
      }

      return (
            <div>
                  <form onSubmit={(e)=> submit(e)}>
                        <input onChange={(e)=> handle(e)} id='body' value={data.body} placeholder='Post Here...' type='text'></input>
                        <button> Post </button>
                  </form>
            </div>
      )
}

export default AddPost