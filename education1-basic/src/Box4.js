//npm install styled-components 패키지 설치
//동적 스타일이 적용되지 않은 코드
import React from 'react';
import styled from 'styled-components';

const BoxCommon = styled.div`
    height: 50px;
    background-color: #aaaaaa;
`;

const BoxBig = styled(BoxCommon)`
    width: 200px;
`;

const BoxSmall = styled(BoxCommon)`
    width: 100px;
`;

function Box({ size }) {
    if (size === 'big') {
        return <BoxBig>큰 박스</BoxBig>;
    }
    else {
        return <BoxSmall>작은 박스</BoxSmall>;
    }
}
export default Box;