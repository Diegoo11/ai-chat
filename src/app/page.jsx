'use client';

import { Divider, Textarea } from '@nextui-org/react';
import { useChat } from 'ai/react';

export const runtime = 'edge';

export default function Home() {
  const {
    messages, input, handleInputChange, handleSubmit,
  } = useChat({
    api: '/api/chat',
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-start px-5 py-10 w-full max-w-5xl gap-4">
      <div className="grid gap-10 w-full flex-1">
        <div className="w-full border-solid border-2 border-[#e4e4e7] rounded-xl p-5">
          <h2 className="text-center uppercase font-bold text-lg">Fist AI</h2>
          <Divider className="my-2" />
          <ul className="flex flex-col gap-8">
            {messages.map((m, index) => (
              <li key={index}>
                <span className="text-lg font-bold">
                  {m.role === 'user' ? 'User: ' : 'AI: '}
                </span>
                <span className="ml-2">
                  {console.log(m.content)}
                  {m.content.split('\n').map((line, index2) => (
                    <p key={index2} className="break-words">
                      {line}
                    </p>
                  ))}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="w-full flex justify-center items-center gap-4">
        <Textarea
          onChange={handleInputChange}
          value={input}
          variant="bordered"
          labelPlacement="outside"
          placeholder="Enter your promt"
          className="w-full max-w-5xl"
        />
        <button
          type="submit"
          className="w-10 h-10 rounded-md text-3xl text-center flex justify-center items-center"
          onClick={handleSubmit}
        >
          ⬆️
        </button>
      </form>
    </main>
  );
}
