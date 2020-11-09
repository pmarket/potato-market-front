import React from 'react';
import Navigation from './Nav.js';
import { Link } from 'react-router-dom';
import List from './List.js'



/**
 * /potato-market-front/product 페이지
 * 여기에 글쓰기 button?? 거기 ant design 가져다 썼는디 왜안됐을까... :(
 */

const Board = () => {


    return (
        <div>
            <Navigation />

            <div className="grid-container">
                <tools>
                    <div>
                        <button><Link to="/write">글쓰기</Link></button>


                    </div>
                </tools>
                <main>


                    <List />

                </main>
            </div>
        </div>

    );
};

export default Board;
