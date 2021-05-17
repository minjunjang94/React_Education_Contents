import React from 'react';
import style from './Box2.module.css';
import cn from 'classnames';

//cn 함수의 인수로 객체를 사용하면 조건부로 클래스명 입력 가능

function Box({ size }) {
    const isBig = size === 'big';
    const label = isBig ? '큰 박스' : '작은 박스';
    return (
        <div
            className = {cn(style.box, { [style.big]: isBig, [style.small]: !isBig})}
        >
            {label}
        </div>
    );
}
export default Box;