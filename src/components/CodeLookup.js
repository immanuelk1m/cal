import React, { useState } from 'react';

function CodeLookup() {
  const [id, setId] = useState('');
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/.netlify/functions/getCode');
      const result = await response.json();
      
      if (result.error) {
        throw new Error(result.error);
      }

      const user = result.data.find(user => user.id === id);
      if (user) {
        setCode(user.code);
        setError('');
      } else {
        setCode('');
        setError('해당 학번을 찾을 수 없습니다.');
      }
    } catch (err) {
      setError('데이터를 불러오는 중 오류가 발생했습니다.');
      setCode('');
    }
  };

  return (
    <div className="code-lookup">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="학번을 입력하세요"
            required
            maxLength="8"
            pattern="[0-9]{8}"
          />
          <button type="submit">조회</button>
        </div>
      </form>
      {code && (
        <div className="result">
          <div className="code-box">
            <span className="code-label">수강 코드</span>
            <span className="code-value">{code}</span>
          </div>
        </div>
      )}
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default CodeLookup; 