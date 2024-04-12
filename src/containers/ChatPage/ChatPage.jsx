import React, { useState } from 'react';
import axios from 'axios';
import { API_ENDPOINTS } from '../../components/Auth/apiConfig';


function ChatPage() {
  const [query, setQuery] = useState('');
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleQuerySubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);

    try {
      const response = await axios.post(`${API_ENDPOINTS.chat}/chat/`, { query });
      setResponses([...responses, { query, response: response.data.response }]);
      setQuery('');
    } catch (error) {
      console.error('Error:', error);
      setResponses([...responses, { query, response: 'Failed to get a response. Please try again.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleQuerySubmit}>
        <input 
          type="text" 
          value={query}
          onChange={handleQueryChange}
          placeholder="Ask something..."
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Ask'}
        </button>
      </form>
      <div>
        {responses.map((item, index) => (
          <div key={index}>
            <p><strong>You:</strong> {item.query}</p>
            <p><strong>Assistant:</strong> {item.response}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChatPage;
