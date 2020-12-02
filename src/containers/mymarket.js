<html>
<head>
<meta http=equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Table Element</title>
<style type="text/css">
    .hidden {
        display {
            display : none;
        }
        .popuLayer {
            position : absolute;
            left: 100px;
            top: 100px;
            width: 300px;
            padding: 5px;
            border: 5px solid gray;
            background-color : #EEE;
        }
        table {
            background-color: #DDD;
            border: 1px solid black;
            border-collapse: collapse;
        }
        table th,table td {
            border: 4px solid #666666;
            padding: 4px;
        }
    </style>
    <script type="text/javascript" src="10-4.js"></script>
    </head>
    <body>
        <h1>장바구니 <button type="button" onclick="pageCtrl.loadData();">
            데이터 로드</button></h1>
        <table>
            <thead>
                <tr>
                    <th>품명</th><th>가격(원)</th>
                    <th>기능</th>
                </tr>
            </thead>
            <tbody></tbody>
            <tfoot>
                <tr><td></td><td></td><td></td></tr>
            <tr>
                <td>합계</td>
                <td><span id="priceSum"></span></td>
                <td><button type="button" onclick="pageCtrl.getSum();">
                    합계 보기</button></td>
            </tr>
            <tr>
                <td><input type="text" name="productName" /></td>
                <td><input type="number" name="productPrice"  /></td>
                <td><button type="button" onclick="pageCtrl.addData(); ">
                    추가하기</button></td>
            </tr>
            </tfoot>
        </table>
    </body>
    </html>