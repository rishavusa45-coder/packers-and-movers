function sendQuote(e){
  e.preventDefault();
  const name=document.getElementById("name").value;
  const phone=document.getElementById("phone").value;
  const from=document.getElementById("from").value;
  const to=document.getElementById("to").value;
  const service=document.getElementById("service").value;
  const msg=`Hello, I need a quote.%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AFrom: ${encodeURIComponent(from)}%0ATo: ${encodeURIComponent(to)}%0AService: ${encodeURIComponent(service)}`;
  window.open(`https://wa.me/919876543210?text=${msg}`,"_blank");
}