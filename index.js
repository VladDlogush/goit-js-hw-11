import{a as c,S as u,i as a}from"./assets/vendor-BGqwtSVv.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();const m="56498737-33d961619fd960a0fb32ba01a",d="https://pixabay.com/api/";function f(e){return c.get(d,{params:{key:m,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const p=new u(".gallery a",{captionsData:"alt",captionDelay:250});function g({webformatURL:e,largeImageURL:r,tags:i,likes:s,views:t,comments:o,downloads:n}){return`
    <li class="gallery-item">
      <a class="gallery-link" href="${r}">
        <img class="gallery-image" src="${e}" alt="${i}" />
      </a>
      <div class="info-box">
        <div class="info-item">
          <b>Likes</b>
          <span>${s}</span>
        </div>
        <div class="info-item">
          <b>Views</b>
          <span>${t}</span>
        </div>
        <div class="info-item">
          <b>Comments</b>
          <span>${o}</span>
        </div>
        <div class="info-item">
          <b>Downloads</b>
          <span>${n}</span>
        </div>
      </div>
    </li>
  `}function h(e){const r=document.querySelector("#gallery");if(!r)return;const i=e.map(g).join("");r.innerHTML=i,p.refresh()}function y(){const e=document.querySelector("#gallery");e&&(e.innerHTML="")}function F(){const e=document.querySelector("#loader");e&&e.classList.add("is-active")}function b(){const e=document.querySelector("#loader");e&&e.classList.remove("is-active")}const l=document.querySelector(".form"),v=l.querySelector('input[name="search-text"]');l.addEventListener("submit",L);function L(e){e.preventDefault();const r=v.value.trim();if(r===""){a.warning({title:"Caution",message:"Please enter a search query.",position:"topRight"});return}y(),F(),f(r).then(i=>{if(!i||!i.hits||i.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF5350",messageColor:"#FFFFFF",iconColor:"#FFFFFF",closeColor:"#FFFFFF",maxWidth:432});return}h(i.hits),l.reset()}).catch(()=>{a.error({title:"Error",message:"Something went wrong while fetching images. Please try again!",position:"topRight"})}).finally(()=>{b()})}
//# sourceMappingURL=index.js.map
