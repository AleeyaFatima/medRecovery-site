import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, User, Check, ShieldAlert } from 'lucide-react';

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
  const messagesEndRef = useRef(null);

  const options = [
    { label: '🔍 Free Billing Audit', action: 'audit' },
    { label: '💼 EHR & Integrations', action: 'ehr' },
    { label: '💡 Pricing & Fees', action: 'pricing' },
    { label: '📞 Talk to Specialist', action: 'contact' }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

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
            <div className="quick-options-title">Select a query to ask Diana:</div>
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
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%);
          border: none;
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 10px 30px rgba(110, 63, 165, 0.4);
          position: relative;
          transition: transform var(--transition-fast);
        }
        .chat-trigger-bubble:hover {
          transform: scale(1.08);
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
        
        .chat-window {
          width: 340px;
          height: 480px;
          background: rgba(15, 12, 28, 0.9);
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          animation: slideUpChat 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        .light .chat-window {
          background: rgba(255, 255, 255, 0.95);
          border-color: rgba(0, 0, 0, 0.08);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
        }
        @keyframes slideUpChat {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .chat-header {
          padding: 16px;
          background: rgba(255, 255, 255, 0.03);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .light .chat-header {
          background: rgba(0, 0, 0, 0.02);
          border-color: rgba(0, 0, 0, 0.05);
        }
        .agent-info {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .avatar-box {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(192, 132, 252, 0.2);
          color: var(--color-accent);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .agent-meta {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .agent-name {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.2;
        }
        .agent-status {
          font-size: 0.7rem;
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
          padding: 16px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .chat-message {
          display: flex;
          flex-direction: column;
          max-width: 80%;
        }
        .msg-agent {
          align-self: flex-start;
          align-items: flex-start;
        }
        .msg-user {
          align-self: flex-end;
          align-items: flex-end;
        }
        .message-bubble {
          padding: 10px 14px;
          border-radius: 14px;
          font-size: 0.82rem;
          line-height: 1.4;
          text-align: left;
        }
        .msg-agent .message-bubble {
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-primary);
          border-top-left-radius: 2px;
        }
        .light .msg-agent .message-bubble {
          background: rgba(0, 0, 0, 0.04);
        }
        .msg-user .message-bubble {
          background: var(--color-accent);
          color: #FFFFFF;
          border-top-right-radius: 2px;
        }
        .message-time {
          font-size: 0.65rem;
          color: var(--text-muted);
          margin-top: 4px;
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
        
        .chat-footer {
          padding: 16px;
          background: rgba(255, 255, 255, 0.02);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .light .chat-footer {
          background: rgba(0, 0, 0, 0.01);
          border-color: rgba(0, 0, 0, 0.05);
        }
        .quick-options-title {
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--text-secondary);
          text-align: left;
          margin-bottom: 2px;
        }
        .chat-options-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }
        .chat-option-btn {
          background: rgba(192, 132, 252, 0.1);
          border: 1px solid rgba(192, 132, 252, 0.2);
          color: var(--text-primary);
          padding: 8px 10px;
          border-radius: 8px;
          font-size: 0.75rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: left;
        }
        .chat-option-btn:hover:not(:disabled) {
          background: var(--color-accent);
          color: #FFFFFF;
          border-color: var(--color-accent);
        }
        .chat-option-btn:disabled {
          opacity: 0.5;
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
            width: 290px;
            height: 420px;
          }
          .chat-options-grid {
            grid-template-columns: 1fr;
            gap: 6px;
          }
        }
      `}</style>
    </div>
  );
}
