
import  request  from 'request'

var options = {
  'method': 'GET',
  'url': 'https://api.bootpay.co.kr/receipt/604f0f200d681b0037bfa4f7',
  'headers': {
    'Authorization': '0b596ff870777efa09b5dd311bae079fe53441221b40bba9158eb00c84423625',
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  form: {
    'data': 'fixed'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
