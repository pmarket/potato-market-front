import React from 'react';
import Navigation from './Nav.js';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import List from './List.js'



/**
 * /potato-market-front/product 페이지
 */

const Board = () => {


    return (
        <div>
            <Navigation />

            <div className="grid-container">
                <tools>
                    <div className="site-button-ghost-wrapper">
                        <Button ghost><Link to="/write">글쓰기</Link></Button>

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
