import{i as c}from"./assets/vendor-a450523d.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const a="42555164-0de9ae952fe9eb05e418ffbde";function l(t){const i=`https://pixabay.com/api/?key=${a}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(i).then(o=>{if(!o.ok)throw new Error("Network response was not ok");return o.json()}).then(o=>{if(o.hits.length===0)throw new Error("No images found");return o.hits})}function u(t,i){const o=document.querySelector(i);o.innerHTML="",t.forEach(e=>{const r=f(e);o.insertAdjacentHTML("beforeend",r)}),new SimpleLightbox(".gallery a",{captionsData:"alt",captionPosition:"bottom"}).refresh()}function f(t){return`
    <div class="card" data-large-image="${t.largeImageURL}">
      <a href="${t.largeImageURL}">
        <img src="${t.webformatURL}" class="card-img" alt="${t.tags}">
      </a>
      <ul class="img-info">
        <li class="img-info-item">Likes: ${t.likes}</li>
        <li class="img-info-item">Views: ${t.views}</li>
        <li class="img-info-item">Comments: ${t.comments}</li>
        <li class="img-info-item">Downloads: ${t.downloads}</li>
      </ul>
    </div>
  `}const d=document.querySelector(".form"),m=document.querySelector(".search-input"),h=".gallery";d.addEventListener("submit",t=>{t.preventDefault();const i=m.value.trim();if(i===""){c.show({message:"Please write what you want to search",position:"topRight",color:"red"});return}l(i).then(o=>u(o,h)).catch(()=>{c.info({message:"No images found",position:"topRight"})})});
//# sourceMappingURL=commonHelpers.js.map
