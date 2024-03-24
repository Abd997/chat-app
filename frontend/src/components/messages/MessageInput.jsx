import SendIcon from "react-feather/dist/icons/send"

export default function MessageInput() {
    const noConversationSelected = true

    if (noConversationSelected) 
        return <NoChatSelected />
    
    return (
        <form className="px-4 my-3 ">
            <div className="w-full relative">
                <input
                    type="text"
                    className="border text-sm rounded-lg block w-full p-3 bg-gray-700 border-gray-600 text-white"
                    placeholder="Send a message"
                />
                <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3">
                    <SendIcon />
                </button>
            </div>
        </form>
    )
}

const NoChatSelected = () => {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
                <p>No message</p>
            </div>
        </div>
    )
}