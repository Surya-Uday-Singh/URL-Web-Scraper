const cheerio = require('cheerio');
const axios = require('axios');
const express = require('express');
const { response } = require('express');



let PORT = 8000

const app = express();
const url = 'https://www.npmjs.com/package/cheerio'

axios(url)
      .then(response =>{
        const html = response.data
        let $= cheerio.load(html)
        
        const arr =[]

        $('a',html).each(function(){
            
            const url1 = $(this).attr('href')
            
            arr.push({
               url1
            })
        })
        console.dir(arr, {'maxArrayLength': null});



               
      }).catch(err => console.log(err))

app.listen(PORT, () => console.log(`server running on PORT ${PORT}` ))