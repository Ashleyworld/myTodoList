import React from 'react';
import styled from 'styled-components';
import { useState } from '../Context';

const HeaderBlock = styled.div`

    h1 {
        margin : 0;
        color : grey;
        color: #343a40;
    }

    .day {
        margin-top : 4px;
        color : lightgrey;
        font-size: 21px;
    }
    padding-top: 48px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px;
    border-bottom: 1px solid #e9ecef;
  `;
  
  const TasksLeft = styled.div`
    color: #c92052;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  `;

function Header() {
    const today = new Date();   // 오늘 날짜
    
    const dateString = today.toLocaleString('ko-KR', {
        // 날짜 값을 받을 때는 int를 사용하지 않고 numeric long numeric을 사용
        year : 'numeric',
        month : 'long', 
        day : 'numeric'

    });

    const dayName = today.toLocaleString('ko-KR', { weekday: 'long' });    
    const todos = useState();
    const undoneTasks = todos.filter(todo => !todo.done);

    return(
        <HeaderBlock>
            <h1>{dateString}</h1>
            <div className="day">{dayName}</div>
            <TasksLeft>할 일 {undoneTasks.length}개 남음</TasksLeft>
        </HeaderBlock> 
    );

}
export default Header;