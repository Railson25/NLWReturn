import { CloseButton } from "../CloseButton";

import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg'
import thoughtImageUrl from '../../assets/thought.svg'
import { useState } from "react";
import { FeedBackTypeStep } from "./Steps/FeedBackTypeStep";
import { FeedBackContentStep } from "./Steps/FeedbackContentStep";

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto' 
        }
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lâmpada' 
        }
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de um balão de pensamento' 
        }
    }
}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

<<<<<<< HEAD
    function handleRestartFeedback() {
        setFeedbackType(null)
    }
=======
>>>>>>> 83b2fd89bdd3ff5c160f0bab20b493221cc6d55b

    return(
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            

            {!feedbackType ? (
                <FeedBackTypeStep onFeedbackTypeChanged={setFeedbackType} />
            ) : (
<<<<<<< HEAD
                <FeedBackContentStep  
                    feedbackType={feedbackType} 
                    onFeedbackRestartRequested={handleRestartFeedback}
                />
=======
                <FeedBackContentStep />
>>>>>>> 83b2fd89bdd3ff5c160f0bab20b493221cc6d55b
            )}

            <footer className="text-xl text-neutral-400">
            Feito com ♥ por <a className="underline underline-offset-4" href="https://github.com/Railson25">Railson Santiago</a>
            </footer>    
        </div>
    )
}