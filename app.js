window.addEventListener("load", function () {
  let req = new XMLHttpRequest();
  req.open("GET", "https://fakestoreapi.com/products");
  req.send();
  req.onload = function () {
    let array = req.response;
    let parsedData = JSON.parse(array);

    for (let i = 0; i < array.length; i++) {
      let user = parsedData[i];
      // console.log(user);
      console.log(user.price);
      let lis = document.createElement("li");
      let innerhtml = `<li>
      <div class="product-details">
        <div style="padding: 10px;">
          <img
          src="${user.image}"
          alt=""
          width="100px"
          height="100px"
          
        />
        </div>
        <div class="left">
          <p><span>NAME : </span>${user.title}</p>
          <p><span>PRICE : </span>$${user.price}</p>
          <p>
            <span>DESCRIPTION : </span>${user.description}
          </p>
          <p><span>CATEGORY : </span>${user.category}</p>
          <hr />
        </div>
      </div>
    </li>`;

    let ul = document.querySelector('.ul')
    ul.appendChild(lis)
    lis.innerHTML = innerhtml


    }
  };
});
