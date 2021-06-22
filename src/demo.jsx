/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import { useEffect, useState } from 'react';

function Demo() {
    const [data, setData] = useState([])
    useEffect(async () => {
        const list = await axios({
            url: 'http://13.58.164.122/app/admin/cashback/list',
            method: 'GET',
            headers: { "Authorization": "Bearer $2a$10$hU4G8z5njYUouuO0.Mn8p.v1CGoUj1dunXqswtSZng3NxasBT92Ve" }
        })
        setData(list.data.rows)
    })
    
    return (
      <div className="App">
        {data.map(item => 
            <div>
                <p>Cashback: {item.cashback}</p>
                <p>user_id: {item.user_id}</p>
                <p>shop_id: {item.shop_id}</p>
                <p>_id: {item._id}</p>
            </div>
        )}
      </div>
    );
}

export { Demo }