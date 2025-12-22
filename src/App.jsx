import React, { useState, useEffect, useRef } from 'react';
import {
  Plane, AlertTriangle, Users, Send, Phone, MessageSquare,
  CheckCircle, Clock, Zap, ChevronRight, Bell, Settings,
  Wifi, Battery, Signal, MoreVertical, Mic, Smile
} from 'lucide-react';

// ============================================
// CALLERS AI - ONE BRAIN DEMO
// Manager Console + User Conversation View
// ============================================

// Flight data
const flights = [
  { id: 'DL2847', route: 'ATL → JFK', time: '3:45 PM', status: 'delayed', passengers: 186, gate: 'B24' },
  { id: 'DL1092', route: 'ATL → LAX', time: '4:15 PM', status: 'on-time', passengers: 212, gate: 'A12' },
  { id: 'DL0445', route: 'ATL → ORD', time: '4:30 PM', status: 'on-time', passengers: 158, gate: 'C08' },
  { id: 'DL2231', route: 'ATL → SFO', time: '5:00 PM', status: 'cancelled', passengers: 194, gate: 'B31' },
];

// Conversation flow when AI is triggered
const conversationFlow = [
  {
    type: 'system',
    text: 'Delta AI connecting...',
    delay: 500
  },
  {
    type: 'ai',
    text: "Hi, this is Delta. I'm reaching out about your flight DL2847 to New York.",
    delay: 1200
  },
  {
    type: 'ai',
    text: "Due to weather conditions, your 3:45 PM departure has been delayed. I've already found alternative options for you.",
    delay: 2000
  },
  {
    type: 'user',
    text: "Oh no, how long is the delay?",
    delay: 1500
  },
  {
    type: 'ai',
    text: "The current estimate is 2 hours, but I can get you on an earlier connection. I found 3 options:",
    delay: 1800
  },
  {
    type: 'ai',
    text: "1. DL2891 departing 4:30 PM - arrives JFK 7:45 PM\n2. DL1847 departing 5:15 PM - arrives JFK 8:30 PM\n3. Keep current flight - new departure 5:45 PM",
    delay: 2200
  },
  {
    type: 'user',
    text: "The 4:30 one works! Can I keep my window seat?",
    delay: 1800
  },
  {
    type: 'ai',
    text: "Done. You're confirmed on DL2891, seat 12A - window seat as you prefer. Boarding starts at 4:00 PM, Gate B31.",
    delay: 1500
  },
  {
    type: 'ai',
    text: "I'm sending your new boarding pass to your phone now. Since this was our delay, I've also added 2,500 SkyMiles to your account.",
    delay: 2000
  },
  {
    type: 'user',
    text: "Wow that was fast. Thank you!",
    delay: 1200
  },
  {
    type: 'ai',
    text: "You're welcome! If anything changes, I'll reach out immediately. Have a great flight. ✈️",
    delay: 1500
  },
  {
    type: 'system',
    text: '✓ Passenger rebooked • Boarding pass sent • 2,500 miles credited',
    delay: 800
  },
];

// ============================================
// MANAGER CONSOLE (Left Side)
// ============================================
const ManagerConsole = ({ onTriggerAI, aiTriggered, stats }) => {
  const [selectedFlight, setSelectedFlight] = useState(null);

  const handleFlightClick = (flight) => {
    setSelectedFlight(flight);
  };

  const handleTriggerAI = () => {
    if (selectedFlight && !aiTriggered) {
      onTriggerAI(selectedFlight);
    }
  };

  return (
    <div className="console">
      {/* Header */}
      <div className="console-header">
        <div className="console-brand">
          <svg viewBox="0 0 100 100" width="24" height="24">
            <polygon points="50,10 90,90 10,90" fill="#E31837"/>
          </svg>
          <span>Delta Operations</span>
        </div>
        <div className="console-time">
          {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>

      {/* Stats Bar */}
      <div className="stats-bar">
        <div className="stat">
          <span className="stat-value">{stats.active}</span>
          <span className="stat-label">Active Flights</span>
        </div>
        <div className="stat">
          <span className="stat-value">{stats.delayed}</span>
          <span className="stat-label">Delayed</span>
        </div>
        <div className="stat">
          <span className="stat-value">{stats.aiHandling}</span>
          <span className="stat-label">AI Handling</span>
        </div>
        <div className="stat">
          <span className="stat-value">{stats.resolved}</span>
          <span className="stat-label">Resolved</span>
        </div>
      </div>

      {/* Flight List */}
      <div className="flight-section">
        <div className="section-header">
          <h2>Flight Status</h2>
          <span className="live-badge"><span className="live-dot"/>LIVE</span>
        </div>

        <div className="flight-list">
          {flights.map(flight => (
            <div
              key={flight.id}
              className={`flight-card ${selectedFlight?.id === flight.id ? 'selected' : ''} ${flight.status}`}
              onClick={() => handleFlightClick(flight)}
            >
              <div className="flight-main">
                <div className="flight-id">{flight.id}</div>
                <div className="flight-route">{flight.route}</div>
                <div className="flight-time">{flight.time}</div>
              </div>
              <div className="flight-meta">
                <span className={`status-badge ${flight.status}`}>
                  {flight.status === 'delayed' && <AlertTriangle size={12}/>}
                  {flight.status === 'on-time' && <CheckCircle size={12}/>}
                  {flight.status === 'cancelled' && <AlertTriangle size={12}/>}
                  {flight.status}
                </span>
                <span className="passenger-count">
                  <Users size={12}/> {flight.passengers}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Panel */}
      {selectedFlight && (
        <div className="action-panel">
          <div className="action-header">
            <h3>Flight {selectedFlight.id}</h3>
            <span className="passenger-total">{selectedFlight.passengers} passengers affected</span>
          </div>

          {!aiTriggered ? (
            <button
              className="trigger-btn"
              onClick={handleTriggerAI}
              disabled={selectedFlight.status === 'on-time'}
            >
              <Zap size={18}/>
              Trigger AI Assistance
            </button>
          ) : (
            <div className="ai-active">
              <div className="ai-status">
                <div className="pulse-ring"/>
                <span>AI Active</span>
              </div>
              <div className="ai-progress">
                <span>Contacting {selectedFlight.passengers} passengers...</span>
              </div>
            </div>
          )}

          {selectedFlight.status === 'on-time' && (
            <p className="action-note">AI assistance available for delayed/cancelled flights</p>
          )}
        </div>
      )}
    </div>
  );
};

// ============================================
// USER PHONE VIEW (Right Side)
// ============================================
const UserPhoneView = ({ messages, isTyping }) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="phone-container">
      <div className="phone">
        {/* Phone Status Bar */}
        <div className="phone-status-bar">
          <span className="phone-time">
            {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
          <div className="phone-icons">
            <Signal size={14}/>
            <Wifi size={14}/>
            <Battery size={14}/>
          </div>
        </div>

        {/* Chat Header */}
        <div className="chat-header">
          <div className="chat-avatar">
            <svg viewBox="0 0 100 100" width="32" height="32">
              <polygon points="50,10 90,90 10,90" fill="#E31837"/>
            </svg>
          </div>
          <div className="chat-info">
            <span className="chat-name">Delta AI</span>
            <span className="chat-status">
              {isTyping ? 'typing...' : 'Online'}
            </span>
          </div>
          <button className="chat-menu">
            <MoreVertical size={20}/>
          </button>
        </div>

        {/* Messages */}
        <div className="messages-container">
          {messages.length === 0 ? (
            <div className="empty-state">
              <Phone size={32}/>
              <p>Waiting for incoming call...</p>
              <span>AI will contact passenger when triggered</span>
            </div>
          ) : (
            <div className="messages">
              {messages.map((msg, i) => (
                <div key={i} className={`message ${msg.type}`}>
                  {msg.type === 'ai' && (
                    <div className="msg-avatar">
                      <svg viewBox="0 0 100 100" width="24" height="24">
                        <polygon points="50,10 90,90 10,90" fill="#E31837"/>
                      </svg>
                    </div>
                  )}
                  <div className="msg-content">
                    {msg.type === 'system' ? (
                      <div className="system-msg">{msg.text}</div>
                    ) : (
                      <>
                        <div className="msg-bubble">
                          {msg.text.split('\n').map((line, j) => (
                            <span key={j}>{line}<br/></span>
                          ))}
                        </div>
                        <span className="msg-time">
                          {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="message ai">
                  <div className="msg-avatar">
                    <svg viewBox="0 0 100 100" width="24" height="24">
                      <polygon points="50,10 90,90 10,90" fill="#E31837"/>
                    </svg>
                  </div>
                  <div className="msg-content">
                    <div className="typing-indicator">
                      <span></span><span></span><span></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef}/>
            </div>
          )}
        </div>

        {/* Input Bar */}
        <div className="input-bar">
          <button className="input-btn"><Smile size={20}/></button>
          <input type="text" placeholder="Message" disabled/>
          <button className="input-btn"><Mic size={20}/></button>
        </div>
      </div>

      <div className="phone-label">Passenger View</div>
    </div>
  );
};

// ============================================
// MAIN APP
// ============================================
export default function App() {
  const [aiTriggered, setAiTriggered] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [stats, setStats] = useState({
    active: 847,
    delayed: 23,
    aiHandling: 0,
    resolved: 1842
  });

  const triggerAIFlow = (flight) => {
    setAiTriggered(true);
    setStats(s => ({ ...s, aiHandling: flight.passengers }));

    let msgIndex = 0;

    const showNextMessage = () => {
      if (msgIndex >= conversationFlow.length) {
        setStats(s => ({
          ...s,
          aiHandling: 0,
          resolved: s.resolved + 186
        }));
        return;
      }

      const msg = conversationFlow[msgIndex];

      if (msg.type === 'ai') {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setMessages(m => [...m, { type: msg.type, text: msg.text }]);
          msgIndex++;
          setTimeout(showNextMessage, msg.delay);
        }, 1000);
      } else {
        setMessages(m => [...m, { type: msg.type, text: msg.text }]);
        msgIndex++;
        setTimeout(showNextMessage, msg.delay);
      }
    };

    setTimeout(showNextMessage, 800);
  };

  const resetDemo = () => {
    setAiTriggered(false);
    setMessages([]);
    setIsTyping(false);
    setStats(s => ({ ...s, aiHandling: 0 }));
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="app-header">
        <div className="header-brand">
          <div className="brand-icon">
            <Zap size={20}/>
          </div>
          <span>Callers AI</span>
          <span className="header-divider">×</span>
          <span>One Brain Demo</span>
        </div>
        <button className="reset-btn" onClick={resetDemo}>
          Reset Demo
        </button>
      </header>

      {/* Main Content - Split View */}
      <main className="split-view">
        <ManagerConsole
          onTriggerAI={triggerAIFlow}
          aiTriggered={aiTriggered}
          stats={stats}
        />
        <UserPhoneView
          messages={messages}
          isTyping={isTyping}
        />
      </main>

      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }

        .app {
          min-height: 100vh;
          background: #F5F3EF;
          font-family: 'Inter', -apple-system, sans-serif;
        }

        /* ===== HEADER ===== */
        .app-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 32px;
          background: #fff;
          border-bottom: 1px solid #E8E4DD;
        }

        .header-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 15px;
          font-weight: 600;
          color: #1a1a1a;
        }

        .brand-icon {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #E31837, #c41230);
          border-radius: 8px;
          color: #fff;
        }

        .header-divider {
          color: #ccc;
          font-weight: 400;
        }

        .reset-btn {
          padding: 8px 16px;
          background: #f5f5f5;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }

        .reset-btn:hover {
          background: #eee;
        }

        /* ===== SPLIT VIEW ===== */
        .split-view {
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 32px;
          padding: 32px;
          max-width: 1400px;
          margin: 0 auto;
        }

        /* ===== CONSOLE ===== */
        .console {
          background: #fff;
          border-radius: 16px;
          border: 1px solid #E8E4DD;
          overflow: hidden;
        }

        .console-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px;
          background: #1a1a1a;
          color: #fff;
        }

        .console-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 600;
          font-size: 14px;
        }

        .console-time {
          font-size: 13px;
          color: #888;
          font-variant-numeric: tabular-nums;
        }

        /* Stats */
        .stats-bar {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: #E8E4DD;
          border-bottom: 1px solid #E8E4DD;
        }

        .stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 16px;
          background: #FAFAF8;
        }

        .stat-value {
          font-size: 24px;
          font-weight: 700;
          color: #1a1a1a;
        }

        .stat-label {
          font-size: 11px;
          color: #888;
          margin-top: 4px;
        }

        /* Flight Section */
        .flight-section {
          padding: 20px;
        }

        .section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .section-header h2 {
          font-size: 14px;
          font-weight: 600;
        }

        .live-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 10px;
          font-weight: 700;
          color: #22c55e;
          padding: 4px 8px;
          background: rgba(34, 197, 94, 0.1);
          border-radius: 4px;
        }

        .live-dot {
          width: 6px;
          height: 6px;
          background: #22c55e;
          border-radius: 50%;
          animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        .flight-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .flight-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 16px;
          background: #FAFAF8;
          border: 1px solid #E8E4DD;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .flight-card:hover {
          border-color: #ccc;
        }

        .flight-card.selected {
          border-color: #E31837;
          background: rgba(227, 24, 55, 0.03);
        }

        .flight-main {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .flight-id {
          font-weight: 700;
          font-size: 14px;
          color: #1a1a1a;
        }

        .flight-route {
          font-size: 13px;
          color: #666;
        }

        .flight-time {
          font-size: 13px;
          color: #888;
          font-variant-numeric: tabular-nums;
        }

        .flight-meta {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .status-badge {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
        }

        .status-badge.on-time {
          background: rgba(34, 197, 94, 0.1);
          color: #22c55e;
        }

        .status-badge.delayed {
          background: rgba(234, 179, 8, 0.1);
          color: #ca8a04;
        }

        .status-badge.cancelled {
          background: rgba(239, 68, 68, 0.1);
          color: #dc2626;
        }

        .passenger-count {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 12px;
          color: #888;
        }

        /* Action Panel */
        .action-panel {
          margin-top: 20px;
          padding: 20px;
          background: #FAFAF8;
          border-top: 1px solid #E8E4DD;
        }

        .action-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .action-header h3 {
          font-size: 14px;
          font-weight: 600;
        }

        .passenger-total {
          font-size: 12px;
          color: #888;
        }

        .trigger-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          padding: 14px;
          background: linear-gradient(135deg, #E31837, #c41230);
          color: #fff;
          border: none;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .trigger-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(227, 24, 55, 0.3);
        }

        .trigger-btn:disabled {
          background: #ccc;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }

        .action-note {
          margin-top: 12px;
          font-size: 12px;
          color: #888;
          text-align: center;
        }

        .ai-active {
          text-align: center;
        }

        .ai-status {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-size: 14px;
          font-weight: 600;
          color: #22c55e;
          margin-bottom: 8px;
        }

        .pulse-ring {
          width: 12px;
          height: 12px;
          background: #22c55e;
          border-radius: 50%;
          animation: pulse-ring 1.5s infinite;
        }

        @keyframes pulse-ring {
          0% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.5); }
          100% { box-shadow: 0 0 0 12px rgba(34, 197, 94, 0); }
        }

        .ai-progress {
          font-size: 12px;
          color: #888;
        }

        /* ===== PHONE VIEW ===== */
        .phone-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .phone {
          width: 100%;
          max-width: 375px;
          height: 700px;
          background: #fff;
          border-radius: 32px;
          border: 8px solid #1a1a1a;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 20px 60px rgba(0,0,0,0.15);
        }

        .phone-status-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 20px;
          background: #fff;
        }

        .phone-time {
          font-size: 14px;
          font-weight: 600;
        }

        .phone-icons {
          display: flex;
          gap: 4px;
          color: #1a1a1a;
        }

        .chat-header {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-bottom: 1px solid #f0f0f0;
        }

        .chat-avatar {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f5f5f5;
          border-radius: 50%;
        }

        .chat-info {
          flex: 1;
        }

        .chat-name {
          display: block;
          font-weight: 600;
          font-size: 15px;
        }

        .chat-status {
          font-size: 12px;
          color: #22c55e;
        }

        .chat-menu {
          background: none;
          border: none;
          color: #888;
          cursor: pointer;
        }

        /* Messages */
        .messages-container {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
          background: #F5F3EF;
        }

        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          color: #888;
          text-align: center;
        }

        .empty-state p {
          font-size: 14px;
          margin-top: 12px;
        }

        .empty-state span {
          font-size: 12px;
          margin-top: 4px;
          color: #aaa;
        }

        .messages {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .message {
          display: flex;
          gap: 8px;
          max-width: 85%;
        }

        .message.user {
          align-self: flex-end;
          flex-direction: row-reverse;
        }

        .message.system {
          align-self: center;
          max-width: 100%;
        }

        .msg-avatar {
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .msg-content {
          display: flex;
          flex-direction: column;
        }

        .msg-bubble {
          padding: 10px 14px;
          border-radius: 16px;
          font-size: 14px;
          line-height: 1.4;
        }

        .message.ai .msg-bubble {
          background: #fff;
          color: #1a1a1a;
          border-bottom-left-radius: 4px;
        }

        .message.user .msg-bubble {
          background: #E31837;
          color: #fff;
          border-bottom-right-radius: 4px;
        }

        .msg-time {
          font-size: 10px;
          color: #888;
          margin-top: 4px;
          padding: 0 4px;
        }

        .message.user .msg-time {
          text-align: right;
        }

        .system-msg {
          font-size: 12px;
          color: #22c55e;
          background: rgba(34, 197, 94, 0.1);
          padding: 8px 12px;
          border-radius: 8px;
          text-align: center;
        }

        .typing-indicator {
          display: flex;
          gap: 4px;
          padding: 12px 14px;
          background: #fff;
          border-radius: 16px;
          border-bottom-left-radius: 4px;
        }

        .typing-indicator span {
          width: 8px;
          height: 8px;
          background: #ccc;
          border-radius: 50%;
          animation: typing 1.4s infinite;
        }

        .typing-indicator span:nth-child(2) {
          animation-delay: 0.2s;
        }

        .typing-indicator span:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes typing {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }

        /* Input Bar */
        .input-bar {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 16px;
          background: #fff;
          border-top: 1px solid #f0f0f0;
        }

        .input-btn {
          background: none;
          border: none;
          color: #888;
          cursor: pointer;
        }

        .input-bar input {
          flex: 1;
          padding: 10px 14px;
          border: 1px solid #e0e0e0;
          border-radius: 20px;
          font-size: 14px;
          outline: none;
        }

        .phone-label {
          margin-top: 16px;
          font-size: 12px;
          color: #888;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 900px) {
          .split-view {
            grid-template-columns: 1fr;
          }

          .phone-container {
            order: -1;
          }
        }
      `}</style>
    </div>
  );
}
