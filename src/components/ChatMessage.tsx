import { useChat } from "@/contexts/ChatContext";
import { useUser } from "@/contexts/UserContext";

export const ChatMessage = () => {
    const chatCtx = useChat();
    const userCtx = useUser();

    return (
        <div className="flex flex-col gap-1">
            {chatCtx?.chat.map(item => (
                <div 
                    key={item.id}
                    className={`border border-white/20 rounded-md p-2 text-sm max-w-full
                        ${item.user === userCtx?.user ? 
                            'self-end bg-white/10 text-right' :
                            'self-start bg-white/5 text-left'
                        }
                    `}
                >
                    <div className="font-bold">{item.user}</div>
                    <p className="break-all">{item.text}</p>
                </div>
            ))}
        </div>
    );
}