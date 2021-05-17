import Reaat from 'react';
import './Button1.css';

function Button({ size }) {
    if (size === 'big') {
        return <button className = "button big">큰 버튼</button>;
    } 
    else {
        return <button className = "button small">작은 버튼</button>;
    }
}
export default Button;


// Use "classnames" 페키지 => npm install classnames
// classnames 패키지를 추가하여 리펙토링
//import Reaat from 'react';
//import './Button1.css';
//import cn from 'classnames';
//
//function Button({ size }) {
//    if (size === 'big') {
//        return <button className = {cn(style.button, style.big)}>큰 버튼</button>;
//    } 
//    else {
//        return <button className = {cn(style.button, style.small)}>작은 버튼</button>;
//    }
//}
//export default Button;