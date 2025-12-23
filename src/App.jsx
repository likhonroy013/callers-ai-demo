import React, { useState, useEffect, useRef } from 'react';
import {
  Plane, AlertTriangle, Users, Send, Phone, MessageSquare,
  CheckCircle, Clock, Zap, ChevronRight, Bell, Settings,
  Wifi, Battery, Signal, MoreVertical, Mic, Smile, X,
  MessageCircle, PhoneCall, Edit3, Sparkles
} from 'lucide-react';

// ============================================
// CALLERS AI - ONE BRAIN DEMO
// Manager Console + User Conversation View
// With Channel Selection (WhatsApp, Call, SMS)
// ============================================

// Flight data
const flights = [
  { id: 'DL2847', route: 'ATL → JFK', time: '3:45 PM', status: 'delayed', passengers: 186, gate: 'B24', passenger: { name: 'Sarah Mitchell', seat: '12A' } },
  { id: 'DL1092', route: 'ATL → LAX', time: '4:15 PM', status: 'on-time', passengers: 212, gate: 'A12', passenger: { name: 'James Wilson', seat: '8C' } },
  { id: 'DL0445', route: 'ATL → ORD', time: '4:30 PM', status: 'on-time', passengers: 158, gate: 'C08', passenger: { name: 'Emily Chen', seat: '15F' } },
  { id: 'DL2231', route: 'ATL → SFO', time: '5:00 PM', status: 'cancelled', passengers: 194, gate: 'B31', passenger: { name: 'Michael Brooks', seat: '22A' } },
];

// Empathetic conversation flows for each channel
const conversationFlows = {
  whatsapp: (flight, passenger, customMsg) => [
    { type: 'system', text: 'WhatsApp Business connecting...', delay: 400 },
    { type: 'ai', text: `Hi ${passenger.name.split(' ')[0]}! 👋 This is Delta reaching out personally.`, delay: 1000 },
    { type: 'ai', text: customMsg || `I know travel disruptions are stressful, and I'm really sorry to let you know that your flight ${flight.id} to ${flight.route.split(' → ')[1]} has been ${flight.status}. I want to help make this right for you.`, delay: 2200 },
    { type: 'user', text: "Oh no, I have an important meeting tomorrow!", delay: 1800 },
    { type: 'ai', text: "I completely understand how important this is to you. Let me personally find the best options to get you there. Give me just a moment... 💙", delay: 1500 },
    { type: 'ai', text: `Great news! I found some excellent alternatives:\n\n✈️ Option 1: ${flight.id.slice(0,2)}2891 at 4:30 PM → Arrives 7:45 PM\n✈️ Option 2: ${flight.id.slice(0,2)}1847 at 5:15 PM → Arrives 8:30 PM\n✈️ Option 3: Stay on current flight, now departing 5:45 PM\n\nWhich works best for your schedule?`, delay: 2500 },
    { type: 'user', text: "The 4:30 one please! Can I keep my window seat?", delay: 1600 },
    { type: 'ai', text: `Absolutely! I've got you covered. ✅\n\nYou're all set on ${flight.id.slice(0,2)}2891:\n• Seat ${passenger.seat} (window) - just like you prefer\n• Boarding at 4:00 PM\n• Gate B31\n\nSending your new boarding pass now!`, delay: 2000 },
    { type: 'ai', text: "Also, as a thank you for your patience and flexibility, I've added 2,500 bonus SkyMiles to your account. You deserve it! 🌟", delay: 1800 },
    { type: 'user', text: "Wow, that was so easy! Thank you so much!", delay: 1200 },
    { type: 'ai', text: "You're so welcome! It's my pleasure to help. If anything changes, I'll reach out immediately. Have a wonderful flight, and thank you for flying Delta! ✈️💙", delay: 1500 },
    { type: 'system', text: '✓ Rebooked • Boarding pass sent • 2,500 miles added • Customer delighted', delay: 800 },
  ],

  call: (flight, passenger, customMsg) => [
    { type: 'system', text: '📞 Initiating call...', delay: 400 },
    { type: 'system', text: '🔔 Ringing...', delay: 1200 },
    { type: 'ai', text: `"Hello, may I speak with ${passenger.name}? ... Hi! This is Delta calling, and my name is Alex from our Customer Care team."`, delay: 2000 },
    { type: 'user', text: `"Yes, this is ${passenger.name.split(' ')[0]}. Is everything okay with my flight?"`, delay: 1500 },
    { type: 'ai', text: customMsg ? `"${customMsg}"` : `"I'm calling because I wanted to reach you personally about your flight ${flight.id}. I know how frustrating disruptions can be, especially when you have plans. Your flight has been ${flight.status}, and I'm here to take care of you."`, delay: 2500 },
    { type: 'user', text: '"Oh no... I really need to get there. What can we do?"', delay: 1800 },
    { type: 'ai', text: '"I hear you, and I want you to know I\'m going to do everything I can to get you where you need to be. Let me pull up the best options for you right now... Okay, I found three great alternatives."', delay: 2200 },
    { type: 'ai', text: `"Your first option is flight ${flight.id.slice(0,2)}2891 leaving at 4:30 PM - you'd arrive at 7:45 PM. Second, there's ${flight.id.slice(0,2)}1847 at 5:15 PM arriving 8:30 PM. Or if you prefer, you can stay on your current flight which will now depart at 5:45 PM. What sounds best to you?"`, delay: 3000 },
    { type: 'user', text: '"The 4:30 would be perfect! And I really need my window seat..."', delay: 1600 },
    { type: 'ai', text: `"Say no more - I'm booking that for you right now with seat ${passenger.seat}, your window seat. ... Done! You're all set. Boarding begins at 4:00 PM at Gate B31."`, delay: 2000 },
    { type: 'ai', text: '"And you know what? Because this inconvenience wasn\'t your fault, I\'m adding 2,500 SkyMiles to your account as my way of saying thank you for being such an understanding customer."', delay: 2200 },
    { type: 'user', text: '"That\'s so kind of you! Thank you for calling me."', delay: 1200 },
    { type: 'ai', text: '"It was my pleasure! Your new boarding pass is being sent to your phone right now. Is there anything else I can help you with today? ... Wonderful. Thank you for flying Delta, have a safe and pleasant journey!"', delay: 2000 },
    { type: 'system', text: '📞 Call ended • Duration: 3:42 • Resolution: Complete • CSAT: ⭐⭐⭐⭐⭐', delay: 800 },
  ],

  sms: (flight, passenger, customMsg) => [
    { type: 'system', text: 'SMS sending...', delay: 300 },
    { type: 'ai', text: `Delta Flight Update: Hi ${passenger.name.split(' ')[0]}, your flight ${flight.id} has been ${flight.status}. We're here to help - reply YES to speak with an agent now, or tap: delta.com/rebook/${flight.id}`, delay: 1200 },
    { type: 'user', text: 'YES', delay: 2000 },
    { type: 'ai', text: customMsg || `Thanks for responding! I'm your Delta assistant. I know this isn't the news you wanted. Let me find you the best alternatives right away.`, delay: 1500 },
    { type: 'ai', text: `Found 3 options for you:\n\n1️⃣ 4:30 PM → 7:45 PM arrival\n2️⃣ 5:15 PM → 8:30 PM arrival  \n3️⃣ Current flight, new time 5:45 PM\n\nReply 1, 2, or 3`, delay: 2200 },
    { type: 'user', text: '1', delay: 1000 },
    { type: 'ai', text: `Perfect choice! ✓ CONFIRMED:\n\n✈️ Flight ${flight.id.slice(0,2)}2891\n🪑 Seat ${passenger.seat} (window)\n🚪 Gate B31\n⏰ Boards 4:00 PM\n\nBoarding pass incoming!`, delay: 1800 },
    { type: 'ai', text: `BONUS: 2,500 SkyMiles added to your account. Thanks for your patience! 💙\n\nReply HELP anytime. Safe travels!`, delay: 1500 },
    { type: 'user', text: 'Thank you!!', delay: 1200 },
    { type: 'ai', text: "You're welcome! We appreciate you flying Delta. ✈️", delay: 1000 },
    { type: 'system', text: '✓ SMS Resolution Complete • 8 messages • Customer satisfied', delay: 600 },
  ],
};

// Channel icons component
const ChannelIcon = ({ channel, size = 20 }) => {
  switch (channel) {
    case 'whatsapp':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      );
    case 'call':
      return <PhoneCall size={size} />;
    case 'sms':
      return <MessageSquare size={size} />;
    default:
      return null;
  }
};

// ============================================
// CHANNEL SELECTION MODAL
// ============================================
const ChannelSelector = ({ flight, onSelect, onClose, customMessage, setCustomMessage }) => {
  const channels = [
    { id: 'whatsapp', name: 'WhatsApp', desc: 'Rich messaging with media', color: '#25D366' },
    { id: 'call', name: 'Voice Call', desc: 'Personal phone conversation', color: '#E31837' },
    { id: 'sms', name: 'SMS', desc: 'Quick text updates', color: '#3B82F6' },
  ];

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <div>
            <h3>AI Outreach for {flight.id}</h3>
            <p>{flight.passengers} passengers affected</p>
          </div>
          <button className="close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="channel-grid">
          {channels.map(channel => (
            <button
              key={channel.id}
              className="channel-btn"
              style={{ '--channel-color': channel.color }}
              onClick={() => onSelect(channel.id)}
            >
              <div className="channel-icon" style={{ background: channel.color }}>
                <ChannelIcon channel={channel.id} size={24} />
              </div>
              <span className="channel-name">{channel.name}</span>
              <span className="channel-desc">{channel.desc}</span>
            </button>
          ))}
        </div>

        <div className="custom-message">
          <label>
            <Edit3 size={14} />
            Custom AI Message (Optional)
          </label>
          <textarea
            value={customMessage}
            onChange={(e) => setCustomMessage(e.target.value)}
            placeholder={`e.g., "We sincerely apologize for the ${flight.status} flight. Let me personally help you find the best alternative..."`}
            rows={3}
          />
        </div>

        <div className="modal-footer">
          <div className="ai-badge">
            <Sparkles size={14} />
            AI will adapt tone based on channel
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================
// MANAGER CONSOLE (Left Side)
// ============================================
const ManagerConsole = ({ onTriggerAI, aiTriggered, stats, selectedChannel }) => {
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [showChannelSelector, setShowChannelSelector] = useState(false);
  const [customMessage, setCustomMessage] = useState('');

  const handleFlightClick = (flight) => {
    setSelectedFlight(flight);
  };

  const handleTriggerClick = () => {
    if (selectedFlight && !aiTriggered) {
      setShowChannelSelector(true);
    }
  };

  const handleChannelSelect = (channel) => {
    setShowChannelSelector(false);
    onTriggerAI(selectedFlight, channel, customMessage);
    setCustomMessage('');
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
              onClick={handleTriggerClick}
              disabled={selectedFlight.status === 'on-time'}
            >
              <Zap size={18}/>
              Trigger AI Assistance
            </button>
          ) : (
            <div className="ai-active">
              <div className="ai-status">
                <div className="pulse-ring"/>
                <span>AI Active via {selectedChannel}</span>
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

      {/* Channel Selector Modal */}
      {showChannelSelector && (
        <ChannelSelector
          flight={selectedFlight}
          onSelect={handleChannelSelect}
          onClose={() => setShowChannelSelector(false)}
          customMessage={customMessage}
          setCustomMessage={setCustomMessage}
        />
      )}
    </div>
  );
};

// ============================================
// USER PHONE VIEW (Right Side)
// ============================================
const UserPhoneView = ({ messages, isTyping, channel }) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const getChannelHeader = () => {
    switch (channel) {
      case 'whatsapp':
        return { name: 'Delta Airlines', status: isTyping ? 'typing...' : 'online', color: '#25D366' };
      case 'call':
        return { name: 'Delta Customer Care', status: isTyping ? 'Speaking...' : 'On Call', color: '#E31837' };
      case 'sms':
        return { name: 'Delta (89377)', status: isTyping ? 'typing...' : 'SMS', color: '#3B82F6' };
      default:
        return { name: 'Delta AI', status: 'Waiting...', color: '#E31837' };
    }
  };

  const headerInfo = getChannelHeader();

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
        <div className="chat-header" style={{ borderBottomColor: channel ? headerInfo.color + '30' : '#f0f0f0' }}>
          <div className="chat-avatar" style={{ background: channel ? headerInfo.color + '15' : '#f5f5f5' }}>
            {channel ? (
              <div style={{ color: headerInfo.color }}>
                <ChannelIcon channel={channel} size={22} />
              </div>
            ) : (
              <svg viewBox="0 0 100 100" width="32" height="32">
                <polygon points="50,10 90,90 10,90" fill="#E31837"/>
              </svg>
            )}
          </div>
          <div className="chat-info">
            <span className="chat-name">{headerInfo.name}</span>
            <span className="chat-status" style={{ color: headerInfo.color }}>
              {headerInfo.status}
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
              <p>Waiting for AI outreach...</p>
              <span>Select a flight & channel to start</span>
            </div>
          ) : (
            <div className="messages">
              {messages.map((msg, i) => (
                <div key={i} className={`message ${msg.type}`}>
                  {msg.type === 'ai' && (
                    <div className="msg-avatar" style={{ background: channel === 'whatsapp' ? '#25D36615' : channel === 'call' ? '#E3183715' : '#3B82F615' }}>
                      <div style={{ color: channel === 'whatsapp' ? '#25D366' : channel === 'call' ? '#E31837' : '#3B82F6' }}>
                        <ChannelIcon channel={channel} size={16} />
                      </div>
                    </div>
                  )}
                  <div className="msg-content">
                    {msg.type === 'system' ? (
                      <div className="system-msg">{msg.text}</div>
                    ) : (
                      <>
                        <div className={`msg-bubble ${channel}`}>
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
                  <div className="msg-avatar" style={{ background: channel === 'whatsapp' ? '#25D36615' : channel === 'call' ? '#E3183715' : '#3B82F615' }}>
                    <div style={{ color: channel === 'whatsapp' ? '#25D366' : channel === 'call' ? '#E31837' : '#3B82F6' }}>
                      <ChannelIcon channel={channel} size={16} />
                    </div>
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
        <div className="input-bar" style={{ borderTopColor: channel ? headerInfo.color + '20' : '#f0f0f0' }}>
          <button className="input-btn"><Smile size={20}/></button>
          <input type="text" placeholder={channel === 'call' ? 'Voice call in progress...' : 'Message'} disabled/>
          <button className="input-btn">{channel === 'call' ? <PhoneCall size={20}/> : <Mic size={20}/>}</button>
        </div>
      </div>

      <div className="phone-label">
        {channel ? `${channel.charAt(0).toUpperCase() + channel.slice(1)} • ` : ''}Passenger View
      </div>
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
  const [selectedChannel, setSelectedChannel] = useState(null);
  const [stats, setStats] = useState({
    active: 847,
    delayed: 23,
    aiHandling: 0,
    resolved: 1842
  });

  const triggerAIFlow = (flight, channel, customMessage) => {
    setAiTriggered(true);
    setSelectedChannel(channel);
    setStats(s => ({ ...s, aiHandling: flight.passengers }));

    const flow = conversationFlows[channel](flight, flight.passenger, customMessage);
    let msgIndex = 0;

    const showNextMessage = () => {
      if (msgIndex >= flow.length) {
        setStats(s => ({
          ...s,
          aiHandling: 0,
          resolved: s.resolved + flight.passengers
        }));
        return;
      }

      const msg = flow[msgIndex];

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

    setTimeout(showNextMessage, 600);
  };

  const resetDemo = () => {
    setAiTriggered(false);
    setMessages([]);
    setIsTyping(false);
    setSelectedChannel(null);
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
          selectedChannel={selectedChannel}
        />
        <UserPhoneView
          messages={messages}
          isTyping={isTyping}
          channel={selectedChannel}
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
          text-transform: capitalize;
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

        /* ===== MODAL ===== */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          animation: fadeIn 0.2s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal {
          background: #fff;
          border-radius: 16px;
          width: 90%;
          max-width: 480px;
          overflow: hidden;
          animation: slideUp 0.3s ease;
        }

        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .modal-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          padding: 20px;
          border-bottom: 1px solid #E8E4DD;
        }

        .modal-header h3 {
          font-size: 16px;
          font-weight: 600;
        }

        .modal-header p {
          font-size: 13px;
          color: #888;
          margin-top: 4px;
        }

        .close-btn {
          background: none;
          border: none;
          color: #888;
          cursor: pointer;
          padding: 4px;
        }

        .close-btn:hover {
          color: #1a1a1a;
        }

        .channel-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          padding: 20px;
        }

        .channel-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px 12px;
          background: #FAFAF8;
          border: 2px solid #E8E4DD;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .channel-btn:hover {
          border-color: var(--channel-color);
          background: #fff;
          transform: translateY(-2px);
        }

        .channel-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          color: #fff;
          margin-bottom: 12px;
        }

        .channel-name {
          font-size: 13px;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 4px;
        }

        .channel-desc {
          font-size: 11px;
          color: #888;
          text-align: center;
        }

        .custom-message {
          padding: 0 20px 20px;
        }

        .custom-message label {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 600;
          color: #666;
          margin-bottom: 8px;
        }

        .custom-message textarea {
          width: 100%;
          padding: 12px;
          border: 1px solid #E8E4DD;
          border-radius: 8px;
          font-family: inherit;
          font-size: 13px;
          resize: none;
          outline: none;
        }

        .custom-message textarea:focus {
          border-color: #E31837;
        }

        .custom-message textarea::placeholder {
          color: #aaa;
        }

        .modal-footer {
          padding: 16px 20px;
          background: #FAFAF8;
          border-top: 1px solid #E8E4DD;
        }

        .ai-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
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
          border-bottom: 2px solid #f0f0f0;
          transition: border-color 0.3s;
        }

        .chat-avatar {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f5f5f5;
          border-radius: 50%;
          transition: background 0.3s;
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
          transition: color 0.3s;
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

        .message.ai .msg-bubble.whatsapp {
          border-left: 3px solid #25D366;
        }

        .message.ai .msg-bubble.call {
          border-left: 3px solid #E31837;
          font-style: italic;
        }

        .message.ai .msg-bubble.sms {
          border-left: 3px solid #3B82F6;
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
          border-top: 2px solid #f0f0f0;
          transition: border-color 0.3s;
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

          .channel-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
