(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(21)},16:function(e,t,a){},20:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(3),r=a.n(o),c=(a(16),a(1)),i=a.n(c),u=a(4),m=a(5),p=a(6),v=a(8),E=a(7),s=a(9),R=(a(19),a(20),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(v.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(l)))).state={result:null,z:null},a.getResult=Object(u.a)(i.a.mark(function e(){var t,n,l,o;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a.para1!==a.para2){e.next=4;break}a.setState({result:a.miktar}),e.next=15;break;case 4:return"https://api.exchangeratesapi.io/latest?base=",e.next=7,fetch("".concat("https://api.exchangeratesapi.io/latest?base=").concat(a.para1));case 7:return t=e.sent,e.next=10,t.json();case 10:n=e.sent,console.log(n),l=n.rates[a.para2],o=a.miktar*l,a.setState({result:o});case 15:a.setState({z:" is equal to "});case 16:case"end":return e.stop()}},e)})),a.v=function(e){e.preventDefault(),a.miktar=document.getElementById("miktar").value,a.para1=document.getElementById("para1").value,a.para2=document.getElementById("para2").value,a.getResult()},a}return Object(s.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{id:"\xe7er\xe7eve"},l.a.createElement("div",{className:"i\xe7erik_react"},l.a.createElement("div",{className:"container",id:"s"},l.a.createElement("h3",null,"Currency Converter"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{id:"render"},l.a.createElement("input",{type:"number",placeholder:"Miktar",id:"miktar"}),l.a.createElement("select",{className:"custom-select",id:"para1"},l.a.createElement("option",{value:"USD"},"USD"),l.a.createElement("option",{value:"EUR"},"EUR"),l.a.createElement("option",{value:"JPY"},"JPY"),l.a.createElement("option",{value:"BGN"},"BGN"),l.a.createElement("option",{value:"CZK"},"CZK"),l.a.createElement("option",{value:"DKK"},"DKK"),l.a.createElement("option",{value:"GBP"},"GBP"),l.a.createElement("option",{value:"HUF"},"HUF"),l.a.createElement("option",{value:"PLN"},"PLN"),l.a.createElement("option",{value:"RON"},"RON"),l.a.createElement("option",{value:"SEK"},"SEK"),l.a.createElement("option",{value:"CHF"},"CHF"),l.a.createElement("option",{value:"ISK"},"ISK"),l.a.createElement("option",{value:"NOK"},"NOK"),l.a.createElement("option",{value:"HRK"},"HRK"),l.a.createElement("option",{value:"RUB"},"RUB"),l.a.createElement("option",{value:"TRY"},"TRY"),l.a.createElement("option",{value:"AUD"},"AUD"),l.a.createElement("option",{value:"BRL"},"BRL"),l.a.createElement("option",{value:"CAD"},"CAD"),l.a.createElement("option",{value:"CNY"},"CNY"),l.a.createElement("option",{value:"HKD"},"HKD"),l.a.createElement("option",{value:"IDR"},"IDR"),l.a.createElement("option",{value:"ILS"},"ILS"),l.a.createElement("option",{value:"INR"},"INR"),l.a.createElement("option",{value:"KRW"},"KRW"),l.a.createElement("option",{value:"MXN"},"MXN"),l.a.createElement("option",{value:"MYR"},"MYR"),l.a.createElement("option",{value:"NZD"},"NZD"),l.a.createElement("option",{value:"PHP"},"PHP"),l.a.createElement("option",{value:"SGD"},"SGD"),l.a.createElement("option",{value:"THB"},"THB"),l.a.createElement("option",{value:"ZAR"},"ZAR")),l.a.createElement("select",{className:"custom-select",id:"para2"},l.a.createElement("option",{value:"USD"},"USD"),l.a.createElement("option",{value:"EUR"},"EUR"),l.a.createElement("option",{value:"JPY"},"JPY"),l.a.createElement("option",{value:"BGN"},"BGN"),l.a.createElement("option",{value:"CZK"},"CZK"),l.a.createElement("option",{value:"DKK"},"DKK"),l.a.createElement("option",{value:"GBP"},"GBP"),l.a.createElement("option",{value:"HUF"},"HUF"),l.a.createElement("option",{value:"PLN"},"PLN"),l.a.createElement("option",{value:"RON"},"RON"),l.a.createElement("option",{value:"SEK"},"SEK"),l.a.createElement("option",{value:"CHF"},"CHF"),l.a.createElement("option",{value:"ISK"},"ISK"),l.a.createElement("option",{value:"NOK"},"NOK"),l.a.createElement("option",{value:"HRK"},"HRK"),l.a.createElement("option",{value:"RUB"},"RUB"),l.a.createElement("option",{value:"TRY"},"TRY"),l.a.createElement("option",{value:"AUD"},"AUD"),l.a.createElement("option",{value:"BRL"},"BRL"),l.a.createElement("option",{value:"CAD"},"CAD"),l.a.createElement("option",{value:"CNY"},"CNY"),l.a.createElement("option",{value:"HKD"},"HKD"),l.a.createElement("option",{value:"IDR"},"IDR"),l.a.createElement("option",{value:"ILS"},"ILS"),l.a.createElement("option",{value:"INR"},"INR"),l.a.createElement("option",{value:"KRW"},"KRW"),l.a.createElement("option",{value:"MXN"},"MXN"),l.a.createElement("option",{value:"MYR"},"MYR"),l.a.createElement("option",{value:"NZD"},"NZD"),l.a.createElement("option",{value:"PHP"},"PHP"),l.a.createElement("option",{value:"SGD"},"SGD"),l.a.createElement("option",{value:"THB"},"THB"),l.a.createElement("option",{value:"ZAR"},"ZAR")),l.a.createElement("button",{onClick:this.v},"result")),l.a.createElement("div",{id:"sonuc"},this.miktar," ",this.para1,this.state.z,this.state.result," ",this.para2))))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.368c4053.chunk.js.map