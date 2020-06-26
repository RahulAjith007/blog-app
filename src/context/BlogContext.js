import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer'

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'get_blogposts':
      return action.payload
    case 'delete_blogposts':
  return state.filter((blogpost) => blogpost.id !== action.payload) 
    case 'edit_blogposts':
      return state.map((blogpost) =>{
        if(blogpost.id === action.payload.id){
          return action.payload
        }else{
          return blogpost.id
        }
      })
 
        default:
        return state;
        }
}

const getBlogPosts = dispatch => {
  return async () => {
    const response = await jsonServer.get('/blogposts')
    dispatch({type: 'get_blogposts', payload:response.data})
  }
}

const addBlogPosts = dispatch => {
   return async (title,content,callback) => {
      await jsonServer.post('/blogposts' ,{title,content})
         if(callback){
           callback(); 
         }   
      };
 };


 const deleteBlogPosts = dispatch => {
   return async id => {
    await jsonServer.delete(`/blogposts/${id}`)
     dispatch({type:'delete_blogposts',payload:id})
   };
 };
   

 const editBlogPosts = dispatch => {
  return async (id, title, content,callback) => {
    await jsonServer.put(`/blogposts/${id}` ,{title, content})
       dispatch({type:'edit_blogposts',payload:{id, title, content}
      }); 
      if(callback){
        callback(); 
      }  
     };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPosts, deleteBlogPosts, editBlogPosts, getBlogPosts },
  []
);



