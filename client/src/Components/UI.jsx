import tw from 'tailwind-styled-components'

export const FlexColumn = tw.div`
    flex
    flex-col
    items-center
    w-full
`

export const NoteCard = tw.div`
    flex
    items-center
    justify-between
    p-2
    w-11/12
    max-w-[500px]
    bg-gray-200
    rounded-md
    hover:bg-gray-100
    transition
    duration-300
    my-1
`

export const DeleteButton = tw.button`
    bg-red-500
    hover:bg-red-600
    transition
    duration-300
    text-white
    p-2
    rounded-md
`