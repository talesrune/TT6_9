import { useEffect , useState } from 'react';
import React from 'react'
import axios from 'axios';

const C_Wallet = () => {

  const [wallet_id, setWalletId] = useState('')
  const [cWallets, setCWallets] = useState(//[])
     [
      {
        "sgd":"453"
      },
      {
        "nzd":"123"
      }
      // {
      //   "id": 1,
      //   "wallet_id": 1,
      //   "currency": "SGD",
      //   "sgd":423,
      //   "amount": 4294.50
      // },
      // {
      //   "id": 2,
      //   "wallet_id": 1,
      //   "currency": "CAD",
      //   "amount": 5687.65
      // },
      // {
      //   "id": 3,
      //   "wallet_id": 1,
      //   "currency": "CNH",
      //   "amount": 6063.14
      // }
    ])

    const get_cwallets = async() => {

      let fake_str = "[('sgd', '423'), ('usd', '123')]"

      let temp_json = fake_str.replaceAll('(', '{').replaceAll(")","}").replaceAll(",",":").replaceAll(": {",", {").replaceAll("'","\"")
        let fin_json = JSON.parse(temp_json)
       //  JSON.stringify(temp,null,2);
       

        console.log(fin_json[0])

        let fin2 = []

        let entry


        for (let [key, value] of fin_json.entries()){
            //console.log(value)
            
            let entries = Object.entries(value)

            let data = entries.map( ([key2, val] = entry) => {
              //fin2[key] = value;
              let temp = {}
              temp[key2] = val;
              
              fin2.push(temp)
              return `Currency: ${key2} , Value: ${val}`;
              
            });
            console.log(data)
        }
        console.log(fin2)
        console.log('hi')
        console.log(cWallets)
        //setCWallets(fin2)
        console.log('done')
        console.log(cWallets)

 /*     axios({
        method: 'get', //you can set what request you want to be
        url: 'http://35.91.201.214/get_wallet?send_to_server=' + '1'
      
      }).then(resp => {
  
        console.log(resp.data["read-from-server"])
        let temp = resp.data["read-from-server"]//JSON.stringify(resp.data["read-from-server"])
        //temp = '('
        let temp_json = temp.replaceAll('(', '{').replaceAll(")","}").replaceAll(",",":").replaceAll(": {",", {").replaceAll("'","\"")
        let fin_json = JSON.parse(temp_json)
       //  JSON.stringify(temp,null,2);
       

        console.log(fin_json[0])

        let fin2 = []

        let entry

        for (let [key, value] of fin_json.entries()){
            //console.log(value)
            
            let entries = Object.entries(value)
            let data = entries.map( ([key, val] = entry) => {
              fin2[key] = value;
              return `Currency: ${key} , Value: ${val}`;
              
            });
            console.log(data)
        }
        //setCWallets(fin2)
        //setCWallets(temp_json)

        //console.log(temp_json[0][0])
        //
        //console.log(myJsonString)
        //setCWallets(myJsonString)
      //   if (resp.data.status === 'ok') {
      //     // setUsername(resp.data.username)
      //     // setEmail(resp.data.email)
      //     console.log('token is working')
      //     //getBooks(resp.data.email)
      //   } else {
      //     alert(resp.data.error)
      //   }
      // })
      
      
    }).catch(function (error) {
        console.log(error);
      });*/
  }


  useEffect(()=>{
    get_cwallets()
  }, []) //this [] makes it runs first render only

  let entry2
  return (
    <div className="wallet-container">
        <div className="c_wallets">
            {/* {cWallets &&  cWallets.map( ([key2, val] = entry2)=>(
                <div className='wallet-details' >
                <h3><strong>ID: </strong>{entry2}</h3>
                </div>
            ))} */}
            {
            cWallets && Object.entries(cWallets).map(([key2,value]) =>( 
                <div className='wallet-details' key={key2}>
                  {Object.entries(value).map(([key3,value2]) => (
                    <div key={key3}>{key3} {value2}
                  </div>
                  
                  ))}

                {/* <h3><strong>ID: </strong>{cWallet.id}</h3>
                <p><strong>Wallet ID:</strong> {cWallet.wallet_id}</p>
                <p><strong>Currency:</strong> {cWallet.currency}</p>
                <p><strong>Amount:</strong> {cWallet.amount}</p> */}
                </div>
            ))}
        </div>
        <label>user:</label>
        <select id = "temp" onChange = {null}>
        <option>1</option>  
        <option>2</option>  
        <option>3</option>  
        <option>4</option>  
        </select>  
        <button onClick={null}>delete</button>
    </div>
  )
}

export default C_Wallet