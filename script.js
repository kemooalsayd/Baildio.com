let copyr = document.getElementById("copyright");
const d = new Date();
let year = d.getFullYear();

copyr.innerHTML = `
© ${year} Copyright saved: 
<!-- Github -->
<a
  class="btn text-white btn-floating fs-3 m-1"
  style="background-color: #333333;"
  href="https://github.com/kemooalsayd" 
  target="_blank"
  role="button"
  ><i class="fab fa-github"></i
></a>
`;

setTimeout(() => {
  alert("يا عمر يا وحش يالي مش مصدقني");
}, 1000);
