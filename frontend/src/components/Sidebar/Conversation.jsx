export default function Conversation() {
    return (
        <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
            <div className="avatar online">
                <div className="w-12 rounded-full bg-slate-500">
                    <img src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y" alt="user avatar" />
                </div>
            </div>
            <div className="flex flex-col flex-1">
                <div className="flex gap-3 justify-between">
                    <p className="font-bold text-gray-200"></p>
                    <span className="text-xl"></span>
                </div>
            </div>
            <div className="divider my-0 py-0 h-1" />
        </div>
    )
}