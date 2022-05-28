const createFooter =() =>{
let footer = document.querySelector('footer');

footer.innerHTML=`
<div class="footer-content">
<img src="img/newlogoklassic.png" class="logo" alt="">
<div class="footer-ul-container">
  <ul class="category">
    <li class="category-title">men</li>
    <li><a href="#" class="footer-link">t-shirts</a></li>
    <li><a href="#" class="footer-link">sweatshirts</a></li>
    <li><a href="#" class="footer-link">shirts</a></li>
    <li><a href="#" class="footer-link">jeans</a></li>
    <li><a href="#" class="footer-link">trousers</a></li>
    <li><a href="#" class="footer-link">shoes</a></li>
    <li><a href="#" class="footer-link">casuals</a></li>
    <li><a href="#" class="footer-link">sports</a></li>
    <li><a href="#" class="footer-link">watches</a></li>
  </ul>
  <ul class="category">
    <li class="category-title">women</li>
    <li><a href="#" class="footer-link">t-shirts</a></li>
    <li><a href="#" class="footer-link">sweatshirts</a></li>
    <li><a href="#" class="footer-link">shirts</a></li>
    <li><a href="#" class="footer-link">jeans</a></li>
    <li><a href="#" class="footer-link">trousers</a></li>
    <li><a href="#" class="footer-link">shoes</a></li>
    <li><a href="#" class="footer-link">casuals</a></li>
    <li><a href="#" class="footer-link">sports</a></li>
    <li><a href="#" class="footer-link">watches</a></li>
  </ul>
</div>


</div> 
<p class="footer-title">about company</p>
<p class="info">klassic wears and clothings is a leading nigerian fashion brand founded in 2016 as a peer to peer buying and selling cloth business between the founder and his friends.</p>
<p class="info">support emails - help@klassicwears.com, customersupport@klassicwears.com </p>
<p class="info">telephone - +2348165838701</p>
<div class="footer-social-container">
  <div> 
    <a href="#" class="social-link">terms & services</a>
    <a href="#" class="social-link">privacy page</a>
  </div>
  <div> 
    <a href="#" class="social-link">instagram</a>
    <a href="#" class="social-link">facebook</a>
    <a href="#" class="social-link">twitter</a>
  </div>
</div>
<p class="footer-credit">klassicwears, best online store in  Nigeria.</p>`;
}

createFooter();