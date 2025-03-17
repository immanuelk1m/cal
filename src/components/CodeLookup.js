import React, { useState } from 'react';

function CodeLookup() {
  const [id, setId] = useState('');
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/data/user.csv');
      const text = await response.text();
      const lines = text.split('\n');
      const headers = lines[0].split('\t');
      const data = lines.slice(1).map(line => {
        const [id, code] = line.split('\t');
        return { id, code };
      });
      
      const user = data.find(user => user.id === id);
      if (user) {
        setCode(user.code);
        setError('');
      } else {
        setCode('');
        setError('해당 ID를 찾을 수 없습니다.');
      }
    } catch (err) {
      setError('데이터를 불러오는 중 오류가 발생했습니다.');
      setCode('');
    }
  };

  return (
    <div className="code-lookup">
      <h2>코드 조회</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="ID를 입력하세요"
          required
        />
        <button type="submit">조회</button>
      </form>
      {code && (
        <div className="result">
          <h3>조회 결과</h3>
          <p>코드: {code}</p>
        </div>
      )}
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default CodeLookup; 