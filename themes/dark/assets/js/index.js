(self.webpackChunkslim=self.webpackChunkslim||[]).push([[826],{3290:(o,n,e)=>{"use strict";var i=e(9755),t=e.n(i),d=(e(7915),e(4724),e(538)),w=e(7968),a=e.n(w),c=e(9010),l=e(9669),u=e.n(l),s=e(3279),g=e.n(s),r=e(8948),m=e(1083),f=e(7707),h=e(1468);window&&(window.globalVueShim=h.ZP,window.$=t(),window.jQuery=t(),window.Vue=d.default,window.Vuex=a(),window.ToggleButton=c.ToggleButton,window.axios=u(),window._={debounce:g()},window.store=r.Z,window.router=m.Z,window.apiRoute=f.fL,window.apiv1=f.ww,window.api=f.hi,window.MEDUSA={common:{},config:{general:{},layout:{}},home:{},addShows:{}},window.webRoot=f.rT,window.apiKey=f.q1,window.components=[]);const p={exec(o,n){const e=MEDUSA;n=void 0===n?"init":n,""!==o&&e[o]&&"function"==typeof e[o][n]&&e[o][n]()},init(){t()("[v-cloak]").removeAttr("v-cloak");const{body:o}=document,n=o.getAttribute("data-controller"),e=o.getAttribute("data-action");p.exec("common"),p.exec(n),p.exec(n,e),window.dispatchEvent(new Event("medusa-loaded"))}},{pathname:b}=window.location;if(!b.includes("/login")&&!b.includes("/apibuilder")){const o=o=>{const{general:n,layout:e}=o.detail;MEDUSA.config.general={...MEDUSA.config.general,...n};const i="dark"===e.themeName?"-dark":"";MEDUSA.config.layout={...MEDUSA.config.layout,...e,themeSpinner:i,loading:'<img src="images/loading16'+i+'.gif" height="16" width="16" />'},t()(document).ready(p.init)};window.addEventListener("medusa-config-loaded",o,{once:!0})}}},0,[[3290,216,886,125]]]);
//# sourceMappingURL=index.js.map