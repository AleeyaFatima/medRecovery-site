import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, User, ShieldAlert } from 'lucide-react';

export default function LiveChat({ setCurrentPage }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'agent',
      text: 'Hello! I am Diana, your MedRecovery billing advisor. How can I help optimize your practice collections today?',
      time: 'Just now'
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [customText, setCustomText] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const messagesEndRef = useRef(null);

  const options = [
    { label: '🔍 Free Billing Audit', action: 'audit' },
    { label: '💼 EHR & Integrations', action: 'ehr' },
    { label: '💡 Pricing & Fees', action: 'pricing' },
    { label: '📞 Talk to Specialist', action: 'contact' }
  ];

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      const container = messagesEndRef.current.parentNode;
      if (container) {
        container.scrollTop = container.scrollHeight;
      }
    }
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isTyping, isOpen]);

  const handleOptionClick = (option) => {
    // Add user message
    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: option.label,
      time: 'Just now'
    };
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      let replyText = '';
      if (option.action === 'audit') {
        replyText = 'Excellent! A baseline billing audit is the fastest way to locate revenue leakage. I am redirecting you to our Consultation page where you can upload details safely.';
        setTimeout(() => {
          setIsOpen(false);
          if (setCurrentPage) setCurrentPage('contact');
        }, 3000);
      } else if (option.action === 'ehr') {
        replyText = 'We integrate directly with Epic, Athenahealth, eClinicalWorks, NextGen, and most major EHR/EMR networks using secure HL7 protocols. No manual entry required!';
      } else if (option.action === 'pricing') {
        replyText = 'We operate entirely on a contingency model (usually 4% - 6% of recovered funds). If we do not collect or optimize, you pay zero fees. No startup overhead!';
      } else if (option.action === 'contact') {
        replyText = 'Redirecting you to our contact page to request a callback from our Houston operations director.';
        setTimeout(() => {
          setIsOpen(false);
          if (setCurrentPage) setCurrentPage('contact');
        }, 2000);
      }

      const agentMsg = {
        id: Date.now() + 1,
        sender: 'agent',
        text: replyText,
        time: 'Just now'
      };
      setIsTyping(false);
      setMessages(prev => [...prev, agentMsg]);
    }, 1200);
  };

  const handleCustomSubmit = (e) => {
    e?.preventDefault();
    if (!customText.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: customText,
      time: 'Just now'
    };
    setMessages(prev => [...prev, userMsg]);
    const typedText = customText;
    setCustomText('');
    setIsTyping(true);

    // Simulate agent response
    setTimeout(() => {
      let replyText = `Thanks for asking. Regarding your query ("${typedText}"), our certified coding and collections specialists are reviewing this right now. Please tell us your email or phone number below so we can get back to you with a comprehensive analysis!`;
      const agentMsg = {
        id: Date.now() + 1,
        sender: 'agent',
        text: replyText,
        time: 'Just now'
      };
      setIsTyping(false);
      setMessages(prev => [...prev, agentMsg]);
    }, 1500);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleCustomSubmit(e);
    }
  };

  return (
    <div className="live-chat-widget">
      {/* Floating Trigger Bubble */}
      {!isOpen && (
        <button onClick={() => setIsOpen(true)} className="chat-trigger-bubble" aria-label="Open support chat">
          <MessageSquare size={24} />
          <span className="online-badge" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window card">
          <div className="chat-header">
            <div className="agent-info">
              <div className="avatar-box">
                <User size={16} />
              </div>
              <div className="agent-meta">
                <span className="agent-name">Diana Ward</span>
                <span className="agent-status">Operations Director</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="close-chat-btn" aria-label="Close support chat">
              <X size={18} />
            </button>
          </div>

          <div className="chat-messages-container">
            {messages.map((msg) => (
              <div key={msg.id} className={`chat-message ${msg.sender === 'agent' ? 'msg-agent' : 'msg-user'}`}>
                <div className="message-bubble">{msg.text}</div>
                <span className="message-time">{msg.time}</span>
              </div>
            ))}
            {isTyping && (
              <div className="chat-message msg-agent">
                <div className="message-bubble typing-bubble">
                  <span className="dot" />
                  <span className="dot" />
                  <span className="dot" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-footer">
            <div className="quick-options-title">Select a query or write custom message:</div>
            
            {/* Soft, borderless options grid */}
            <div className="chat-options-grid">
              {options.map((opt, idx) => (
                <button 
                  key={idx} 
                  onClick={() => handleOptionClick(opt)}
                  className="chat-option-btn"
                  disabled={isTyping}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            {/* Custom expanded typing space */}
            <form onSubmit={handleCustomSubmit} className={`chat-input-form ${isFocused ? 'expanded' : ''}`}>
              <textarea
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onKeyDown={handleKeyDown}
                placeholder="Ask Diana a question..."
                className="chat-textarea"
                rows={isFocused ? 3 : 1}
              />
              <button 
                type="submit" 
                className="send-msg-btn" 
                aria-label="Send message" 
                disabled={isTyping || !customText.trim()}
              >
                <Send size={15} />
              </button>
            </form>

            <div className="chat-compliance-notice">
              <ShieldAlert size={10} />
              <span>HIPAA Compliant & Secure Channel</span>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .live-chat-widget {
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 9999;
          font-family: var(--font-sans);
        }
        .chat-trigger-bubble {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%);
          border: none;
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 12px 35px rgba(110, 63, 165, 0.35);
          position: relative;
          transition: transform var(--transition-fast);
        }
        .chat-trigger-bubble:hover {
          transform: scale(1.06);
        }
        .online-badge {
          position: absolute;
          top: 2px;
          right: 2px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: #10B981;
          border: 2px solid var(--bg-surface);
        }
        
        /* Larger Chat Box (Roomy & Clean) */
        .chat-window {
          width: 380px;
          height: 560px;
          background: rgba(14, 10, 26, 0.95);
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          border: none !important; /* Removed hard borders */
          border-radius: 24px;
          box-shadow: 0 30px 70px rgba(0, 0, 0, 0.45);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          animation: slideUpChat 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          transition: height 0.25s ease-in-out;
        }
        
        .light .chat-window {
          background: #FFFFFF;
          box-shadow: 0 30px 70px rgba(110, 63, 165, 0.12);
        }
        
        @keyframes slideUpChat {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .chat-header {
          padding: 18px 20px;
          background: rgba(255, 255, 255, 0.02);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .light .chat-header {
          background: rgba(110, 63, 165, 0.03);
        }
        
        .agent-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .avatar-box {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(192, 132, 252, 0.15);
          color: var(--color-accent);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .light .avatar-box {
          background: rgba(110, 63, 165, 0.08);
          color: var(--color-primary);
        }
        
        .agent-meta {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .agent-name {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.2;
        }
        .agent-status {
          font-size: 0.72rem;
          color: var(--text-muted);
        }
        .close-chat-btn {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          transition: color 0.2s ease;
        }
        .close-chat-btn:hover {
          color: #EF4444;
        }
        
        .chat-messages-container {
          flex: 1;
          padding: 20px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .chat-message {
          display: flex;
          flex-direction: column;
          max-width: 82%;
        }
        .msg-agent {
          align-self: flex-start;
          align-items: flex-start;
        }
        .msg-user {
          align-self: flex-end;
          align-items: flex-end;
        }
        
        /* Modern Message Bubbles */
        .message-bubble {
          padding: 12px 16px;
          border-radius: 16px;
          font-size: 0.85rem;
          line-height: 1.45;
          text-align: left;
        }
        .msg-agent .message-bubble {
          background: rgba(255, 255, 255, 0.06);
          color: var(--text-primary);
          border-top-left-radius: 4px;
        }
        .light .msg-agent .message-bubble {
          background: rgba(110, 63, 165, 0.05);
        }
        .msg-user .message-bubble {
          background: var(--color-primary);
          color: #FFFFFF;
          border-top-right-radius: 4px;
        }
        .light .msg-user .message-bubble {
          background: var(--color-primary);
        }
        .message-time {
          font-size: 0.68rem;
          color: var(--text-muted);
          margin-top: 4px;
        }
        
        .typing-bubble {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 12px 18px;
        }
        .typing-bubble .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--text-secondary);
          animation: bounceDot 1.4s infinite ease-in-out both;
        }
        .typing-bubble .dot:nth-child(1) { animation-delay: -0.32s; }
        .typing-bubble .dot:nth-child(2) { animation-delay: -0.16s; }
        @keyframes bounceDot {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1); }
        }
        
        .chat-footer {
          padding: 16px 20px;
          background: rgba(255, 255, 255, 0.01);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .light .chat-footer {
          background: rgba(110, 63, 165, 0.01);
        }
        
        .quick-options-title {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-secondary);
          text-align: left;
          margin-bottom: 2px;
        }
        
        /* Borderless pill options */
        .chat-options-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 4px;
        }
        .chat-option-btn {
          background: rgba(255, 255, 255, 0.05);
          border: none !important;
          color: var(--text-primary);
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .light .chat-option-btn {
          background: rgba(110, 63, 165, 0.05);
          color: var(--color-primary);
        }
        .chat-option-btn:hover:not(:disabled) {
          background: var(--color-primary);
          color: #FFFFFF;
        }
        .chat-option-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }
        
        /* Dynamic Expanding Custom Question Space */
        .chat-input-form {
          display: flex;
          align-items: flex-end;
          gap: 8px;
          background: rgba(255, 255, 255, 0.04);
          padding: 8px 12px;
          border-radius: 14px;
          transition: all 0.25s ease-in-out;
        }
        .light .chat-input-form {
          background: rgba(110, 63, 165, 0.04);
        }
        .chat-input-form.expanded {
          background: rgba(255, 255, 255, 0.06);
          box-shadow: 0 0 0 2px rgba(192, 132, 252, 0.25);
        }
        .light .chat-input-form.expanded {
          background: #FFFFFF;
          box-shadow: 0 0 0 2px rgba(110, 63, 165, 0.15), 0 4px 15px rgba(0, 0, 0, 0.03);
        }
        
        .chat-textarea {
          flex: 1;
          background: transparent;
          border: none !important;
          outline: none !important;
          resize: none;
          font-family: inherit;
          font-size: 0.82rem;
          color: var(--text-primary);
          padding: 4px 0;
          min-height: 24px;
          max-height: 120px;
          line-height: 1.4;
          transition: height 0.25s ease-in-out;
        }
        .chat-textarea::placeholder {
          color: var(--text-muted);
        }
        
        .send-msg-btn {
          background: var(--color-primary);
          color: #FFFFFF;
          border: none;
          border-radius: 50%;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 0.2s ease, opacity 0.2s ease;
          flex-shrink: 0;
        }
        .send-msg-btn:hover:not(:disabled) {
          transform: scale(1.06);
        }
        .send-msg-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }
        
        .chat-compliance-notice {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-size: 0.65rem;
          color: var(--text-muted);
          margin-top: 4px;
        }
        
        @media (max-width: 480px) {
          .live-chat-widget {
            bottom: 20px;
            right: 20px;
          }
          .chat-window {
            width: 320px;
            height: 480px;
          }
          .chat-options-grid {
            gap: 4px;
          }
          .chat-option-btn {
            font-size: 0.7rem;
            padding: 5px 10px;
          }
        }
      `}</style>
    </div>
  );
}
