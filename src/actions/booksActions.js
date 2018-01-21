// POST A BOOK
export function postBooks(book){
   return{
      type: "POST_BOOK",
      payload: book
   }
}


// DELETE A BOOK

export function deleteBooks(id){
   return{
      type: "DELETE_POST",
      payload: id
   }
}

// UPDATE A BOOK

export function updateBooks(book){
   return {
      type: "UPDATE_POST",
      payload: book
   }
}