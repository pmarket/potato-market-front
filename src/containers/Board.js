import React from 'react';
import Navigation from './Nav.js';
import { Card } from 'antd';
import { Button } from 'antd';
import 'antd/dist/antd.css';


/**
 * /potato-market-front/product 페이지
 */
const { Meta } = Card;
const Board = () => {
    return (
        <div>
            <Navigation />

            <div className="grid-container">
                <tools>
                    <div className="site-button-ghost-wrapper">
                        <Button ghost>글쓰기</Button>

                    </div>
                </tools>
                <main>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="이쁜언니" description="이거슨메타" />
                    </Card>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                </main>
            </div>
        </div>

    );
};

export default Board;
