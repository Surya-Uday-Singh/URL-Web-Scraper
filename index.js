const cheerio = require('cheerio');
const axios = require('axios');
const express = require('express');
const { response } = require('express');



let PORT = 8000

const app = express();
const urlmain = 'https://www.theguardian.com/international'

axios(urlmain)
      .then(response =>{
        const html = response.data
        let $= cheerio.load(html)
        
        const arr =[]

        $('a',html).each(function(){
            
            const url = $(this).attr('href')
            
            arr.push({
               url
            })
        })
        console.dir(arr, {'maxArrayLength': null});



               
      }).catch(err => console.log(err))

app.listen(PORT, () => console.log(`server running on PORT ${PORT}` ))
