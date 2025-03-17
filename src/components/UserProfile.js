import React, { useState, useEffect } from 'react';
import netlifyIdentity from 'netlify-identity-widget';

function UserProfile() {
  const [userData, setUserData] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // 로그인 시 실행
    netlifyIdentity.on('login', (user) => {
      setCurrentUser(user);
      fetchUserData(user.email);
    });

    // 로그아웃 시 실행
    netlifyIdentity.on('logout', () => {
      setCurrentUser(null);
      setUserData(null);
    });

    // 페이지 로드 시 현재 사용자 확인
    const user = netlifyIdentity.currentUser();
    if (user) {
      setCurrentUser(user);
      fetchUserData(user.email);
    }
  }, []);

  const fetchUserData = async (email) => {
    try {
      const response = await fetch('/.netlify/functions/getUserData');
      const data = await response.json();
      const matchedUser = data.find((d) => d.email === email);
      setUserData(matchedUser);
    } catch (error) {
      console.error('사용자 데이터를 가져오는 데 실패했습니다:', error);
    }
  };

  return (
    <div>
      {currentUser ? (
        userData ? (
          <p>안녕하세요, {userData.name}님! 역할: {userData.role}</p>
        ) : (
          <p>사용자 정보를 불러오는 중...</p>
        )
      ) : (
        <p>로그인해주세요.</p>
      )}
    </div>
  );
}

export default UserProfile;