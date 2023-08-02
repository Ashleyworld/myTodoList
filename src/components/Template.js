import React from "react";

import {styled} from "styled-components";

const TemplatBlock = styled.div`
    // 화면크기
    width : 720px;
    height : 820px;

    position : relative; /* 추후 박스 하단에 추가 버튼을 위치 시키기 */
    background : white;

    margin : 0 auto; /* 페이지 중앙에 나타나도록 설정 */
    `
function Template(){
    return <TemplatBlock>상속 받을 값</TemplatBlock>;



}

export default Template;