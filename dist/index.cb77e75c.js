function e(e){return e&&e.__esModule?e.default:e}var t,r,i,n=globalThis,a={},o={},s=n.parcelRequirec01b;null==s&&((s=function(e){if(e in a)return a[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return a[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},n.parcelRequirec01b=s),(0,s.register)("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>r,set:e=>r=e,enumerable:!0,configurable:!0});var r,i=new Map;r=function(e,t){for(var r=0;r<t.length-1;r+=2)i.set(t[r],{baseUrl:e,path:t[r+1]})}}),s("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["f9fpV","index.cb77e75c.js","eyyUD","icons.c14567a0.svg"]'));const c="https://forkify-api.herokuapp.com/api/v2/recipes/",l="5b0f13db-34ac-41da-941f-76dbebc41504",d=async function(e){try{let t=await Promise.race([fetch(e),new Promise((e,t)=>{setTimeout(()=>{t("Request Timout after 10 seconds")},1e4)})]),r=await t.json();if(!t.ok)throw Error(`${r.message} (${t.statusText})`);return r}catch(e){throw e}},u={searchedResults:{query:"",results:[],pageNo:1,resPerPage:9},bookmarks:[]},p=function(e){return{time:+e.cooking_time,img:e.image_url,source:e.source_url,title:e.title,publisher:e.publisher,servings:e.servings,ingredients:e.ingredients,...e.id&&{id:e.id}}};async function h(e){try{let t=`${c}${e}?key=${l}`,{recipe:r}=(await d(t)).data;u.recipe=p(r),u.bookmarks.some(t=>t.id===e)?u.recipe.isBookMarked=!0:u.recipe.isBookMarked=!1,console.log(u.recipe)}catch(e){throw e}}async function m(e){try{let t=`${c}?search=${e}&key=${l}`,{recipes:r}=(await d(t)).data;u.searchedResults.pageNo=1,u.searchedResults.results=r.map(e=>({img:e.image_url,title:e.title,publisher:e.publisher,id:e.id}))}catch(e){throw e}}const g=function(e=u.searchedResults.pageNo){return u.searchedResults.pageNo=e,u.searchedResults.results.slice((e-1)*9,9*e)},f=function(e){(1!==u.recipe.servings||"-"!==e)&&(u.recipe.ingredients.forEach(t=>{if(!t.quantity)return;let r=t.quantity/u.recipe.servings;"+"===e?t.quantity=(+t.quantity+r).toFixed(1):t.quantity=(+t.quantity-r).toFixed(1)}),"+"===e?u.recipe.servings+=1:u.recipe.servings-=1)},v=function(){localStorage.setItem("bookmarks",JSON.stringify(u.bookmarks))},b=function(){if(!u.recipe.id){u.bookmarks.unshift(u.recipe),v();return}u.recipe.isBookMarked=!u.recipe.isBookMarked;let e=window.location.hash.slice(1);if(!u.recipe.isBookMarked){for(let[t,r]of u.bookmarks.entries())e===r.id&&(u.bookmarks.splice(t,1),v());return}u.bookmarks.some(t=>e===t.id)||(u.bookmarks.unshift(u.recipe),v())},y=function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].replaceAll(" ","").split(",");if(3!==t.length)throw Error("Format for ingredient not correct. Please type defined format :)");let[r,i,n]=t;return{quantity:r?+r:null,unit:i,description:n}}),r={cooking_time:+e.time,image_url:e.img,source_url:e.source,title:e.title,publisher:e.publisher,servings:+e.servings,ingredients:t,isBookMarked:!0};u.recipe=p(r)}catch(e){throw e}};!function(){let e=localStorage.getItem("bookmarks");e&&(u.bookmarks=JSON.parse(e)),console.log(JSON.parse(e))}(),localStorage.removeItem("bookmarks");var k={};k=new URL("icons.c14567a0.svg",import.meta.url).toString(),(Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){var r,i,n=num.split(" ");if(n[0]&&(r=n[0]),n[1]&&(i=n[1]),r%1==0&&i&&i.match("/"))return new Fraction(r).add(new Fraction(i));if(!r||i)return;if("string"==typeof r&&r.match("/")){var a=r.split("/");this.numerator=a[0],this.denominator=a[1]}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,i=[];return 0!=e&&i.push(e),0!=t&&i.push((0===e?t:Math.abs(t))+"/"+r),i.length>0?i.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e instanceof Fraction?e=e.clone():e=new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e instanceof Fraction?e=e.clone():e=new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize(),e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=(t=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},r=function(e,t){if(!t)return Math.round(e);var r=Math.pow(10,t);return Math.round(e*r)/r},function(){if(t(this.denominator)){var e=r(this.denominator,9),i=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*i),this.numerator*=i}if(t(this.numerator)){var e=r(this.numerator,9),i=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*i),this.denominator*=i}var n=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=n,this.denominator/=n,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,t){var r=[],i=Fraction.primeFactors(e),n=Fraction.primeFactors(t);return(i.forEach(function(e){var t=n.indexOf(e);t>=0&&(r.push(e),n.splice(t,1))}),0===r.length)?1:function(){var e,t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),r=[],i=2;i*i<=t;)t%i==0?(r.push(i),t/=i):i++;return 1!=t&&r.push(t),r},i=Fraction;class _{render(e){this._data=e,this._clear(),this._parentElem.insertAdjacentHTML("afterbegin",this._buildMarkup())}renderSpinner(){this._clear();let t=`
                    <div class="spinner">
            <svg class="spinner--icon">
              <use href="${e(k)}#icon-loader"></use>
            </svg>
          </div>
          `;this._parentElem.insertAdjacentHTML("afterbegin",t)}_clear(){this._parentElem.innerHTML=""}handleError(t=this._errorMsg){this._clear();let r=`
    <div class="error-box">
            <svg class="error--icon">
              <use href="${e(k)}#icon-alert-triangle"></use>
            </svg>
            <p>${t}</p>
          </div>
    `;this._parentElem.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._buildMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),i=Array.from(this._parentElem.querySelectorAll("*"));r.forEach((e,t)=>{let r=i[t];!e.isEqualNode(r)&&e.firstChild?.nodeValue&&e.firstChild?.nodeValue.trim()!==""&&(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>{r.setAttribute(e.name,e.value)})})}}class E extends _{_data;_parentElem=document.querySelector(".recipe-detailed-info");_errorMsg="We could not find that recipe.Please try again \uD83D\uDE22\uD83D\uDE22";localStorageData;renderEventHandler(e){["hashchange","load"].forEach(t=>{window.addEventListener(t,e),"load"===t&&(this.localStorageData=localStorage.getItem("bookmark"))})}_buildMarkup(){return`<div class="recipe--overview">
    <figure>
      <img src=${this._data.img} alt="${this._data.title}" />
      <h1 class="recipe--title">
        <span>${this._data.title}</span>
      </h1>
    </figure>
    <div class="recipe--overview--options">
      <div class="cooking--time">
        <svg class="clock--icon">
          <use href="${e(k)}#icon-clock"></use>
        </svg>
        <span>${this._data.time}</span> Minutes
      </div>
      <div class="serving--selector">
        <svg class="user--icon">
          <use href="${e(k)}#icon-users"></use>
        </svg>
        <span>${this._data.servings}</span> servings
        <svg class="minus--icon ing-updater" data-icon-op="-">
          <use href="${e(k)}#icon-minus-circle"></use>
        </svg>
        <svg class="plus--icon ing-updater" data-icon-op="+">
          <use href="${e(k)}#icon-plus-circle"></use>
        </svg>
      </div>
      <div class="bookmark--icon--container">
        <svg class="bookmark--icon">
          <use href="${e(k)}#icon-bookmark${this._data.isBookMarked?"-fill":""}"></use>
        </svg>
      </div>
    </div>
    <div class="recipe-ingredient-list-container">
      <h4>RECIPE INGREDIENTS</h4>
      <ul class="ingredient--list">
       ${this._data.ingredients.reduce((t,r)=>{let n,a;return a=r.quantity?new i(r.quantity).toString():"",n=r.unit?r.unit:"",t+`<li class="ingredient--list--item">
                                <svg class="check--icon">
                                   <use href="${e(k)}#icon-check"></use>
                                </svg>
                                 <span>${a} ${n} ${r.description}</span>
                               </li>`},"")}
      </ul>
    </div>

    <div class="how-to-cook-section">
      <h4>HOW TO COOK</h4>
      <p>
        This recipe was carefully designed and tested by
       <span class="recipe-source-id">${this._data.publisher}</span>. Please
        check out directions at their website.
      </p>
      <a href="${this._data.source}">
        <button class="btn go-to-btn">
          DIRECTIONS
          <svg class="arrow--icon">
            <use href="${e(k)}#icon-arrow-right"></use>
          </svg>
        </button>
      </a>
    </div>
  </div>
</div>`}addHandlerIngredients(e){this._parentElem.addEventListener("click",function(t){let r=t.target.closest(".ing-updater");r&&e(r.dataset.iconOp)})}addHandlerBookmark(e){this._parentElem.addEventListener("click",function(t){t.target.closest(".bookmark--icon--container")&&e()})}}var w=new E;class F extends _{_parentElem=document.querySelector(".search");_clear(){this._parentElem.querySelector(".search-box").value=""}getQuery(){let e=this._parentElem.querySelector(".search-box").value;return this._clear(),e}addHandlerSearch(e){this._parentElem.addEventListener("submit",function(t){t.preventDefault(),e()})}}var $=new F;class S extends _{_parentElem=document.querySelector(".search--items");_errorMsg="No recipe found for your query. Try changing the query.";_buildMarkup(){return this._data.length?this._data.reduce((e,t)=>{let r=window.location.hash.slice(1);return e+`<a href="#${t.id}" class="preview--recipe">
      <div class="search---items---row ${r===t.id?"selected":""}">
      <div class="recipe-img-container">
      <img src="${t.img}" class="recipe-img" alt="${t.title} image" />
      </div>
      <div class="recipe---labels">
      <h3 class="recipe-id">${t.title}</h3>
      <h5 class="recipe-source-id">${t.publisher}</h5>
      </div>
      </div>
      </a>`},""):(this.handleError(this._errorMsg),"")}}var q=new S;class M extends _{_parentElem=document.querySelector(".pagination--section");_buildMarkup(){let t=Math.ceil(this._data.results.length/this._data.resPerPage),r=`<div class="page--no page--no--next" data-page-no="${this._data.pageNo+1}">
      <span>Page${this._data.pageNo+1}</span>
      <svg class="arrow--icon">
        <use href="${e(k)}#icon-arrow-right"></use>
      </svg>
    </div>`,i=`<div class="page--no page--no--prev" data-page-no="${this._data.pageNo-1}">
      <svg class="arrow--icon">
        <use href="${e(k)}#icon-arrow-left"></use>
      </svg>
      <span>Page${this._data.pageNo-1}</span>
    </div>`;return t>1&&1===this._data.pageNo?r:1===t?"":this._data.pageNo===t?i:i+r}addHandlerClick(e){this._parentElem.addEventListener("click",t=>{let r=t.target.closest(".page--no");r&&(e(+r.dataset.pageNo),document.querySelector(".main-container").scrollIntoView({behavior:"smooth"}))})}}var L=new M;class x extends _{_parentElem=document.querySelector(".bookmarks--section");constructor(){super(),this._addHandlerMouse()}_buildMarkup(){return 0===this._data.length?`<svg class="bookmark--icon ">
              <use href="${e(k)}#icon-alert-circle"></use>
            </svg>
            <p>
              No bookmarks yet. Find a nice recipe and bookmark it ;)
            </p>`:this._data.reduce((e,t)=>{let r=window.location.hash.slice(1);return e+`<a href="#${t.id}" class="preview--recipe">
      <div class="search---items---row ${r===t.id?"selected":""}">
      <div class="recipe-img-container">
      <img src="${t.img}" class="recipe-img" alt="${t.title} image" />
      </div>
      <div class="recipe---labels">
      <h3 class="recipe-id">${t.title}</h3>
      <h5 class="recipe-source-id">${t.publisher}</h5>
      </div>
      </div>
      </a>`},"")}addBookmarkLoader(e){window.addEventListener("load",e)}_addHandlerMouse(){["mouseenter","mouseleave"].forEach(e=>{"mouseleave"===e?(this._parentElem.addEventListener(e,function(){this.classList.add("hidden")}),document.querySelector(".add-bookmark").addEventListener(e,()=>{this._parentElem.classList.add("hidden")})):"mouseenter"===e&&(this._parentElem.addEventListener(e,function(){this.classList.remove("hidden")}),document.querySelector(".add-bookmark").addEventListener(e,()=>{this._parentElem.classList.remove("hidden")}))})}}var N=new x;class H extends _{_parentElem=document.querySelector(".recipe-adder-pop-up");_overlay=document.querySelector(".overlay");_recipeAdderPopUp=document.querySelector(".recipe-adder-pop-up");constructor(){super(),this._addEventHandlerClick()}closePopUp(){this._overlay.classList.add("hidden"),this._recipeAdderPopUp.classList.add("hidden"),this.render()}_addEventHandlerClick(){document.body.addEventListener("click",e=>{let t=e.target.closest(".add-recipe"),r=e.target.closest(".close-pop-up");(t||this._overlay||r)&&(t?(this._recipeAdderPopUp.classList.remove("hidden"),this._overlay.classList.remove("hidden")):(r||e.target===this._overlay)&&(this._recipeAdderPopUp.classList.add("hidden"),this._overlay.classList.add("hidden")))})}_buildMarkup(){return`<button class="close-pop-up">&times;</button>
      <form class="recipe-form">
        <div class="upload-column upload-column-1">
          <h6>RECIPE DATA</h6>
          <label for="title-recipe">Title</label>
          <input type="text" id="title-recipe" value="title" name="title" />
          <label for="url-recipe">URL</label>
          <input type="text" id="url-recipe" name="source" />
          <label for="image-url-recipe">Image url</label>
          <input type="text" id="image-url-recipe" name="img" />
          <label for="publisher-recipe">Publisher</label>
          <input type="text" id="publisher-recipe" name="publisher" />
          <label for="prep-time">PrepTime</label>
          <input type="number" id="prep-time" name="time" />
          <label for="serving-recipe">Servings</label>
          <input type="number" id="serving-recipe" name="servings" />
        </div>
        <div class="upload-column upload-column-2">
          <h6>INGREDIENTS</h6>
          <label for="ingredient-1-recipe">Ingredient 1</label>
          <input type="text" id="ingredient-1-recipe" name="ingredient-1" placeholder="Format: qty,unit,ingredient" value="1.5,kg,flour" />
          <label for="ingredient-2-recipe">Ingredient 2</label>
          <input type="text" id="ingredient-2-recipe" name="ingredient-2" placeholder="Format: qty,unit,ingredient" />
          <label for="ingredient-3-recipe">Ingredient 3</label>
          <input type="text" id="ingredient-3-recipe" name="ingredient-3" placeholder="Format: qty,unit,ingredient" />
          <label for="ingredient-4-recipe">Ingredient 4</label>
          <input type="text" id="ingredient-4-recipe" name="ingredient-4" placeholder="Format: qty,unit,ingredient" />
          <label for="ingredient-5-recipe">Ingredient 5</label>
          <input type="text" id="ingredient-5-recipe" name="ingredient-5" placeholder="Format: qty,unit,ingredient" />
          <label for="ingredient-6-recipe">Ingredient 6</label>
          <input type="text" id="ingredient-6-recipe" name="ingredient-6" placeholder="Format: qty,unit,ingredient" />
        </div>
        <button class="upload-recipe-btn">
          <svg class="upload--icon">
            <use href="${e(k)}#icon-upload-cloud"></use>
          </svg>
          <span>UPLOAD</span>
        </button>
      </form>`}handleForm(e){document.querySelector(".recipe-form").addEventListener("submit",function(t){t.preventDefault(),e(Object.fromEntries([...new FormData(this)]))})}}var I=new H;const P=async function(){let e=window.location.hash.slice(1);if(e)try{w.renderSpinner(),N.update(u.bookmarks),q.update(g()),await h(e),w.render(u.recipe),console.log(u.recipe)}catch(e){console.log(e),w.handleError()}},R=async function(){try{let e=$.getQuery();if(!e)return;q.renderSpinner(),await m(e),q.render(g()),L.render(u.searchedResults)}catch(e){console.log(e),q.handleError()}},A=function(){b(),w.update(u.recipe),N.render(u.bookmarks),console.log(u.bookmarks)};N.addBookmarkLoader(function(){N.render(u.bookmarks)}),w.renderEventHandler(P),$.addHandlerSearch(R),L.addHandlerClick(function(e){q.render(g(e)),L.render(u.searchedResults)}),w.addHandlerIngredients(function(e){f(e),w.update(u.recipe)}),w.addHandlerBookmark(A),I.handleForm(function(e){try{y(e),I.renderSpinner(),setTimeout(()=>{w.render(u.recipe),I.closePopUp(),A()},2500)}catch(e){I.handleError(e.message)}});
//# sourceMappingURL=index.cb77e75c.js.map
