/* eslint-disable */

import '../App.scss';
import { Link, Route, Switch } from "react-router-dom";
import { useEffect, useState} from 'react';
import axios from 'axios';

function WritePromoPost(props) {

    const [currentUser, setCurrentUser] = useState(props);

    return (
        <div className="writepost">
            <div className="writepost-box">
                <form action="/oauth2/redirect/pboard" method="post">
                    <div className="input-box">
                        <input type="text" className="title" placeholder='제목' name='title' />
                        <input type="text" className='name' name='name' value={props.currentUser.name} />
                        <hr />
                        <textarea name="content" cols="30" rows="20" className="content" placeholder='자유롭게 그룹 홍보글을 작성해보세요!'></textarea>
                    </div>
                    <div className="btn">
                        <button type='submit'>작성완료</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default WritePromoPost;