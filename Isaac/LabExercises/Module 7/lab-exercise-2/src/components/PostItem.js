import { useParams } from "react-router-dom"

function PostItem() {
      const { id } = useParams()
      return (
          <div className="PostItem">
              <h1>PostItem</h1>
              <p>{id}</p>
          
          </div>
      )
  }
  
  export default PostItem