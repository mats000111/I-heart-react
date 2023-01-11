// import Heart from './Heart';
import CandyColoredHearth from "./CandyColoredHeart";
import { Component } from "react";

const messages = [
    'cool cud',
    'me my <3',
    'you are bear',
    'team bear',
    'time hug',
    'fang',
    'bog love',
    'me have love',
    'all hover',
    'sweat poo',
    'u hack',
    'stank love',
    'heart me',
    'wink bear',
    'bear bear',
    'be my bear',
    'yank o way',
    'mage love',
    'oy',
    'in a fan'
];

// const HeartsList = () => {
//     return (
//         <div className="hearts-container">
//             {messages.map((message, index) => (
//                 <CandyColoredHearth key={index} msg={message}/>
//             ))}
//         </div>
//     );
// };

class HeartsList extends Component {
    render () {
        return (
            <div className="hearts-container">
                {messages.map((message, index) => (
                    <CandyColoredHearth key={index} msg={message}/>
                ))}
            </div>
        );
    };
};

export default HeartsList;