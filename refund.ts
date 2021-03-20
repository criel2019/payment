import {RestClient} from "@bootpay/server-rest-client"
import request from "request";

var options = {
  'method': 'POST',
  'url': 'https://api.bootpay.co.kr/cancel',
  'headers': {
    'Authorization': 'ad43d811521cdd7017da35e6dfee45ccd25de7ecffbae14621b9722aa82546c6',
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






RestClient.setConfig(
    "604ec053d8c1bd002bf4c3bb",
	"8fJ2AmXFW9K5ZvuTJV70IToKh6ZrIZZ0L/Z7258fllk="
);

RestClient.getAccessToken().then(function (token) {
	if (token.status === 200) {
        RestClient.cancel({
            receiptId: "605185e30d681b0037bff88c",
            price: 3000,
            name: "박진혁",
            reason: "for fun"
        }).then(function (response) {
			// 결제 취소가 완료되었다면
			if (response.status === 200) {
				// TODO: 결제 취소에 관련된 로직을 수행하시면 됩니다.
                console.log('refunded');
			}
		});
	}
});