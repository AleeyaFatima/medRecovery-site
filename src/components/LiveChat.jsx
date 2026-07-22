import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, User, ShieldAlert } from 'lucide-react';
import Logo from './Logo';

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
    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: option.label,
      time: 'Just now'
    };
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

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
      {/* Crisp-Inspired Chat Window */}
      {isOpen && (
        <div className="chat-window card">
          
          {/* Solid Dark Slate Header */}
          <div className="chat-header">
            <span className="messages-badge">Messages</span>
            <div className="agent-info">
              <div className="avatar-box">
                {/* Embedded dynamic logo wings inside the avatar box */}
                <Logo className="avatar-logo-svg" style={{ width: '22px', height: 'auto', fill: '#FFFFFF' }} />
              </div>
              <div className="agent-meta">
                <span className="agent-name">Diana Ward</span>
                <span className="agent-status"><span className="online-dot" /> Online</span>
              </div>
            </div>
          </div>

          {/* Crisp style solid light grey body */}
          <div className="chat-messages-container">
            <div className="chat-date-separator">Wednesday, 22 July</div>
            {messages.map((msg) => (
              <div key={msg.id} className={`chat-message ${msg.sender === 'agent' ? 'msg-agent' : 'msg-user'}`}>
                {msg.sender === 'agent' && (
                  <div className="message-avatar">
                    <User size={12} />
                  </div>
                )}
                <div className="message-bubble-wrapper">
                  <div className="message-bubble">{msg.text}</div>
                  <span className="message-time">{msg.time}</span>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="chat-message msg-agent">
                <div className="message-avatar">
                  <User size={12} />
                </div>
                <div className="message-bubble-wrapper">
                  <div className="message-bubble typing-bubble">
                    <span className="dot" />
                    <span className="dot" />
                    <span className="dot" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Floating White Footer Card */}
          <div className="chat-footer-wrapper">
            <div className="quick-options-title">Select a query or write custom message:</div>
            
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

            <div className="chat-footer-card">
              <form onSubmit={handleCustomSubmit} className={`chat-input-form ${isFocused ? 'expanded' : ''}`}>
                <textarea
                  value={customText}
                  onChange={(e) => setCustomText(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  onKeyDown={handleKeyDown}
                  placeholder="Write a message..."
                  className="chat-textarea"
                  rows={isFocused ? 3 : 1}
                />
                <button 
                  type="submit" 
                  className="send-msg-btn" 
                  aria-label="Send message" 
                  disabled={isTyping || !customText.trim()}
                >
                  <Send size={14} />
                </button>
              </form>
            </div>

            <div className="chat-compliance-notice">
              <ShieldAlert size={10} />
              <span>HIPAA Compliant & Secure Channel</span>
            </div>
          </div>
        </div>
      )}

      {/* Floating Trigger/Close Bubble */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className={`chat-trigger-bubble ${isOpen ? 'open-state' : ''}`} 
        aria-label={isOpen ? "Close support chat" : "Open support chat"}
      >
        {isOpen ? <X size={22} /> : <MessageSquare size={24} />}
        {!isOpen && <span className="online-badge" />}
      </button>

      <style>{`
        .live-chat-widget {
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 9999;
          font-family: var(--font-sans);
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }
        
        /* Floating launcher button in bottom corner */
        .chat-trigger-bubble {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%);
          border: none;
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 12px 35px rgba(110, 63, 165, 0.35);
          transition: all var(--transition-fast);
          z-index: 10;
        }
        .chat-trigger-bubble:hover {
          transform: scale(1.05);
        }
        /* Rotates and shifts to dark charcoal slate when open, matching Crisp */
        .chat-trigger-bubble.open-state {
          background: #1E2229 !important;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
          transform: rotate(90deg);
        }
        .chat-trigger-bubble.open-state:hover {
          transform: rotate(90deg) scale(1.05);
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
        
        /* Crisp-inspired floating window */
        .chat-window {
          position: absolute;
          bottom: 84px; /* Floats 24px above launcher button */
          right: 0;
          width: 360px;
          height: 520px;
          background: #E6E9EC; /* Solid light grey Crisp body */
          border: none !important;
          border-radius: 16px;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.18);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          animation: slideUpChat 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        
        .dark .chat-window {
          background: #1A1D24; /* Dark charcoal slate */
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.4);
        }
        
        @keyframes slideUpChat {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        /* Solid Dark Slate Header */
        .chat-header {
          padding: 16px 20px;
          background: #1E2229;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          position: relative;
        }
        .messages-badge {
          background: #FFFFFF;
          color: #1E2229;
          font-weight: 700;
          font-size: 0.7rem;
          padding: 4px 12px;
          border-radius: 20px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .agent-info {
          display: flex;
          align-items: center;
          gap: 10px;
          width: 100%;
        }
        .avatar-box {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .avatar-logo-svg path {
          fill: #FFFFFF !important;
        }
        
        .agent-meta {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .agent-name {
          font-size: 0.85rem;
          font-weight: 700;
          color: #FFFFFF;
          line-height: 1.2;
        }
        .agent-status {
          font-size: 0.7rem;
          color: #10B981;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .online-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #10B981;
          display: inline-block;
        }
        
        .chat-messages-container {
          flex: 1;
          padding: 16px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        
        .chat-date-separator {
          font-size: 0.7rem;
          color: var(--text-muted);
          font-weight: 600;
          text-align: center;
          margin: 4px 0;
        }
        
        .chat-message {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          max-width: 85%;
        }
        .msg-agent {
          align-self: flex-start;
        }
        .msg-user {
          align-self: flex-end;
          flex-direction: row-reverse;
        }
        
        .message-avatar {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: var(--color-primary);
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }
        
        .message-bubble-wrapper {
          display: flex;
          flex-direction: column;
        }
        .msg-agent .message-bubble-wrapper {
          align-items: flex-start;
        }
        .msg-user .message-bubble-wrapper {
          align-items: flex-end;
        }
        
        /* Crisp style bubble pointer tail */
        .message-bubble {
          padding: 10px 14px;
          border-radius: 12px;
          font-size: 0.82rem;
          line-height: 1.4;
          text-align: left;
          box-shadow: 0 2px 5px rgba(0,0,0,0.03);
        }
        .msg-agent .message-bubble {
          background: #FFFFFF;
          color: #2C3E50;
          border-top-left-radius: 2px;
        }
        .dark .msg-agent .message-bubble {
          background: #222630;
          color: #ECEFF1;
        }
        
        .msg-user .message-bubble {
          background: var(--color-primary);
          color: #FFFFFF;
          border-top-right-radius: 2px;
        }
        .message-time {
          font-size: 0.65rem;
          color: var(--text-muted);
          margin-top: 3px;
        }
        
        .typing-bubble {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 10px 16px;
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
        
        .chat-footer-wrapper {
          padding: 0 12px 12px 12px;
          background: transparent;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .quick-options-title {
          font-size: 0.72rem;
          font-weight: 600;
          color: var(--text-secondary);
          text-align: left;
          padding: 0 4px;
        }
        
        .chat-options-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
          padding: 0 4px;
        }
        .chat-option-btn {
          background: #FFFFFF;
          border: none !important;
          color: var(--color-primary);
          padding: 5px 10px;
          border-radius: 20px;
          font-size: 0.72rem;
          font-weight: 600;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0,0,0,0.02);
          transition: all 0.2s ease;
        }
        .dark .chat-option-btn {
          background: #222630;
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
        
        /* Floating footer card input box matching Crisp */
        .chat-footer-card {
          background: #FFFFFF;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.04);
          overflow: hidden;
        }
        .dark .chat-footer-card {
          background: #222630;
        }
        
        .chat-input-form {
          display: flex;
          align-items: flex-end;
          gap: 6px;
          padding: 8px 12px;
          background: transparent;
          transition: all 0.25s ease-in-out;
        }
        .chat-input-form.expanded {
          box-shadow: inset 0 0 0 1px rgba(110, 63, 165, 0.15);
        }
        
        .chat-textarea {
          flex: 1;
          background: transparent;
          border: none !important;
          outline: none !important;
          resize: none;
          font-family: inherit;
          font-size: 0.8rem;
          color: var(--text-primary);
          padding: 4px 0;
          min-height: 20px;
          max-height: 80px;
          line-height: 1.35;
          transition: height 0.2s ease-in-out;
        }
        .chat-textarea::placeholder {
          color: var(--text-muted);
        }
        
        .send-msg-btn {
          background: var(--color-primary);
          color: #FFFFFF;
          border: none;
          border-radius: 50%;
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 0.2s ease, opacity 0.2s ease;
          flex-shrink: 0;
        }
        .send-msg-btn:hover:not(:disabled) {
          transform: scale(1.05);
        }
        .send-msg-btn:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
        
        .chat-compliance-notice {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-size: 0.62rem;
          color: var(--text-muted);
        }
        
        @media (max-width: 480px) {
          .chat-window {
            width: 310px;
            height: 460px;
            bottom: 74px;
          }
          .chat-option-btn {
            font-size: 0.68rem;
            padding: 4px 8px;
          }
        }
      `}</style>
    </div>
  );
}
