import { useEffect } from "react";
import { DeleteButton, FlexColumn, NoteCard } from "./Components/UI";
import { useGetNotesQuery } from "./redux/NoteApi"
import { useDeleteNoteMutation } from "./redux/NoteApi";

function App() {
 

  const { data: notes, isLoading, isSuccess, isError, error } = useGetNotesQuery()

  const [deleteNote, { data: deleteData, isLoading: deleteLoading, isSuccess: deleteSuccess, isError: deleteError, error: deleteErrorData }] = useDeleteNoteMutation()

  let content;

  if(isLoading) {
    content = <div>Loading...</div>
  }else if(isSuccess) {
    content = notes.map(item => (
      <NoteCard key={item._id}>
        <h2>{item.text}</h2>
        <DeleteButton onClick={()=> deleteHandler(item._id)}>Delete</DeleteButton>
      </NoteCard>
    ))
  }

  const deleteHandler = (id) => {
    deleteNote(id)
  }

  return (
    <>
      <FlexColumn className="mt-20">
        {content}
      </FlexColumn>
    </>
  )
}

export default App
