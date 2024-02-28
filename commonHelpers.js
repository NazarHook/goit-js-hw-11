import{i as l,S as f}from"./assets/vendor-d9f1e717.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const d="42555164-0de9ae952fe9eb05e418ffbde";function m(t){const o=`https://pixabay.com/api/?key=${d}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(o).then(r=>{if(!r.ok)throw new Error("Network response was not ok");return r.json()}).then(r=>(r.hits.length===0&&l.show({message:"No images found",position:"topRight",color:"red"}),r.hits))}function h(t,o){const r=document.querySelector(o);r.innerHTML="",t.forEach(i=>{const e=p(i);r.insertAdjacentHTML("beforeend",e)})}function p(t){return`
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
  `}const a=document.querySelector(".loader"),c=document.querySelector(".form"),g=document.querySelector(".search-input"),u=".gallery";c.addEventListener("submit",t=>{t.preventDefault();const o=g.value.trim();if(o.length<3){l.error({message:"Search query must be at least 3 characters long",position:"topRight"});return}if(o===""){l.show({message:"Please write what you want to search",position:"topRight",color:"red"});return}a.style.display="inline-block",m(o).then(r=>{h(r,u),new f(".gallery a",{captionsData:"alt",captionDelay:250}).refresh(),u.innerHTML=""}).catch(()=>{}).finally(()=>{a.style.display="none",c.reset()})});
//# sourceMappingURL=commonHelpers.js.map
