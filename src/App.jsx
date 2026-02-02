
import React, { useState, useEffect, useRef } from 'react';
import { Send, User, Bot, Sparkles, MapPin, Briefcase, Code } from 'lucide-react';
import { getBotResponse } from './utils/brain';
import './index.css';

function App() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Ciao! 👋 Sono l'assistente virtuale di Alessandro Calabrò. Sono qui per raccontarti quanto sia bravo (e un po' nerd). Chiedimi pure!", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  /* New context state */
  const [context, setContext] = useState({});

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { id: Date.now(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate thinking delay
    setTimeout(() => {
      // Pass the current context and update it with the new returned context
      const { text: botReplyText, context: newContext } = getBotResponse(userMessage.text, context);

      setContext(newContext); // Update state

      const botMessage = { id: Date.now() + 1, text: botReplyText, sender: 'bot' };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Slightly faster response
  };

  const QuickOne = ({ text, icon: Icon }) => (
    <button
      onClick={() => setInput(text)}
      className="flex items-center gap-2 px-3 py-1.5 bg-slate-700/50 hover:bg-slate-700 border border-slate-600 rounded-full text-xs text-slate-300 transition-colors"
    >
      <Icon size={12} />
      {text}
    </button>
  );

  return (
    <div className="main-wrapper">
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>

      <div className="chat-container">
        {/* Header */}
        <div className="chat-header">
          <div className="avatar">
            <span style={{ fontSize: '24px' }}>🧑‍💻</span>
          </div>
          <div className="header-info">
            <h1>Alessandro Calabrò</h1>
            <p>SAP BTP & Frontend Dev</p>
          </div>
        </div>

        {/* Messages */}
        <div className="messages-area">
          {messages.map((msg) => (
            <div key={msg.id} className={`message ${msg.sender}`}>
              <div dangerouslySetInnerHTML={{ __html: msg.text.replace(/\n/g, '<br/>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
            </div>
          ))}

          {isTyping && (
            <div className="typing-indicator">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggestions (Quick Actions) */}
        <div className="quick-actions">
          <button onClick={() => setInput("Chi sei?")} className="quick-btn">Chi sei?</button>
          <button onClick={() => setInput("Esperienza lavorativa")} className="quick-btn">Lavoro</button>
          <button onClick={() => setInput("Quali skill hai?")} className="quick-btn">Skills</button>
          <button onClick={() => setInput("Hobby e passioni")} className="quick-btn">Personal</button>
          <button onClick={() => setInput("Contatti")} className="quick-btn">Contatti</button>
        </div>

        {/* Input */}
        <form className="input-area" onSubmit={handleSend}>
          <input
            type="text"
            className="input-field"
            placeholder="Chiedimi di Alessandro..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" className="send-btn" disabled={!input.trim() || isTyping}>
            <Send size={20} />
          </button>
        </form>
      </div>
    </div>
  );
}



export default App;
