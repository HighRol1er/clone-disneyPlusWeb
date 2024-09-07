# Header 수정 
1.   
<!--
useEffect(() => {
  auth.onAuthStateChanged(async (user) => { 
    if(user) {
      setUser(user);
      navigate('/home');
    }
  });
},[userName]); 
-->
이렇게 작성한 코드를 아래와 같이 변경 

<!--
useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged(async (user) => { 
    if(user) {
      setUser(user);
      navigate('/home');
    }
  });

  return () => unsubscribe(); 
}, []);  
-->
auth.onAuthStateChanged는 이미 사용자의 인증상태를 감지하기 때문에 굳이 userName을 의존성 배열에 넣을 필요가 없다. 
userName이 바뀌지 않더라도 인증 상태가 변경될 때 이 이벤트가 자동으로 감지된다. 

의존성 배열에 userName을 넣으면 다음과 같은 문제가 발생한다. 
1. 재실행 
2. 무한루프 : setUser(user)가 userName을 업데이트하고, 그로 인해 userName이 변경되면 useEffect가 다시 실행되며, 이로 인해 의도치 않게 무한 루프에 빠질 수 있다. 

*** 따라서 의존성 배열에서 userName을 제거하고, clean up 함수를 사용해 컴포넌트가 마운트, 언마운트될 때만 이용해서 상태를 추적할 수 있다.
