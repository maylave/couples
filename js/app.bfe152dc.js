(function(){"use strict";var e={6316:function(e,t,n){var l=n(3751),a=(n(1454),n(641)),o=n(33);const i={id:"app"},u={id:"current-date"},s={class:"nav-buttons"},r={class:"schedule",id:"schedule"},c={class:"index-div"},d={class:"index"},p=["onClick"],h={key:0,class:"details"};function v(e,t,n,v,f,k){return(0,a.uX)(),(0,a.CE)("div",i,[(0,a.Lk)("header",null,[(0,a.Lk)("div",null,[(0,a.Lk)("h2",null,(0,o.v_)(f.first_name)+" "+(0,o.v_)(f.last_name),1)])]),t[9]||(t[9]=(0,a.Lk)("div",{class:"wp-block-column is-layout-flow wp-block-column-is-layout-flow",style:{"flex-basis":"1%"}},[(0,a.Lk)("div",{class:"sidebar-parent-block"},[(0,a.Lk)("nav",{class:"sidebar",id:"sidebar"})])],-1)),(0,a.Lk)("main",null,[(0,a.Lk)("h1",null,[t[5]||(t[5]=(0,a.eW)("Расписание на ")),(0,a.Lk)("span",u,(0,o.v_)(f.currentDate),1)]),(0,a.bo)((0,a.Lk)("input",{type:"text",class:"group-input",id:"group","onUpdate:modelValue":t[0]||(t[0]=e=>f.group=e),placeholder:"Введите группу",value:"ИС-208"},null,512),[[l.Jo,f.group]]),(0,a.bo)((0,a.Lk)("input",{type:"date",class:"date-input",id:"date","onUpdate:modelValue":t[1]||(t[1]=e=>f.date=e),onChange:t[2]||(t[2]=(...e)=>k.fetchSchedule&&k.fetchSchedule(...e))},null,544),[[l.Jo,f.date]]),(0,a.Lk)("div",s,[(0,a.Lk)("button",{onClick:t[3]||(t[3]=e=>k.changeDate(-1))},"<="),(0,a.Lk)("button",{onClick:t[4]||(t[4]=e=>k.changeDate(1))},"=>")]),(0,a.Lk)("div",r,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(f.scheduleData,(e=>((0,a.uX)(),(0,a.CE)("div",{key:e.group_name,class:"group"},[(0,a.Lk)("h2",null,(0,o.v_)(e.group_name),1),((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.lessons,(e=>((0,a.uX)(),(0,a.CE)("div",{key:e.index,class:"lesson"},[(0,a.Lk)("div",c,[(0,a.Lk)("p",d,(0,o.v_)(e.index||"Н"),1)]),(0,a.Lk)("div",null,[(0,a.Lk)("strong",null,(0,o.v_)(e.subject_name||"Без названия"),1),t[6]||(t[6]=(0,a.Lk)("br",null,null,-1)),(0,a.eW)(" Аудитория: "+(0,o.v_)(e.cabinet||"Нет информации")+", Корпус: "+(0,o.v_)(e.building||"Нет информации"),1),t[7]||(t[7]=(0,a.Lk)("br",null,null,-1)),(0,a.eW)(" Преподаватель: "+(0,o.v_)(e.teachers.map((e=>e.name)).join(", ")||"Нет информации"),1),t[8]||(t[8]=(0,a.Lk)("br",null,null,-1)),(0,a.Lk)("button",{class:"details-button",onClick:t=>k.toggleDetails(e)},"Показать детали",8,p),e.showDetails?((0,a.uX)(),(0,a.CE)("div",h,[(0,a.Lk)("p",null,"Домашнее задание: "+(0,o.v_)(e.homework||"Нет информации"),1),(0,a.Lk)("p",null,"Оценка: "+(0,o.v_)(e.grade||"Нет информации"),1)])):(0,a.Q3)("",!0)])])))),128))])))),128))])])])}var f={name:"App",data(){return{first_name:"Имя",last_name:"Фамилия",date:(new Date).toISOString().split("T")[0],currentDate:(new Date).toISOString().split("T")[0].split("-").reverse().join("."),group:"ИС-208",scheduleData:[]}},methods:{toggleEditMode(){alert("Режим редактирования включен/выключен")},toggleSidebar(){const e=document.getElementById("sidebar");e.style.display="block"===e.style.display?"none":"block"},fetchSchedule(){fetch(`https://апи.пары.ркэ.рф/api/schedules/public?date=${this.date}&group=${this.group}`).then((e=>e.json())).then((e=>{this.scheduleData=e.schedules})).catch((e=>{console.error("Ошибка:",e)}))},toggleDetails(e){e.showDetails=!e.showDetails},changeDate(e){const t=new Date(this.date);t.setDate(t.getDate()+e),this.date=t.toISOString().split("T")[0],this.currentDate=this.date.split("-").reverse().join("."),this.fetchSchedule()}},mounted(){this.fetchSchedule()}},k=n(6262);const b=(0,k.A)(f,[["render",v]]);var g=b;(0,l.Ef)(g).mount("#app")}},t={};function n(l){var a=t[l];if(void 0!==a)return a.exports;var o=t[l]={exports:{}};return e[l].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,l,a,o){if(!l){var i=1/0;for(c=0;c<e.length;c++){l=e[c][0],a=e[c][1],o=e[c][2];for(var u=!0,s=0;s<l.length;s++)(!1&o||i>=o)&&Object.keys(n.O).every((function(e){return n.O[e](l[s])}))?l.splice(s--,1):(u=!1,o<i&&(i=o));if(u){e.splice(c--,1);var r=a();void 0!==r&&(t=r)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[l,a,o]}}(),function(){n.d=function(e,t){for(var l in t)n.o(t,l)&&!n.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,l){var a,o,i=l[0],u=l[1],s=l[2],r=0;if(i.some((function(t){return 0!==e[t]}))){for(a in u)n.o(u,a)&&(n.m[a]=u[a]);if(s)var c=s(n)}for(t&&t(l);r<i.length;r++)o=i[r],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(c)},l=self["webpackChunkvue_app"]=self["webpackChunkvue_app"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var l=n.O(void 0,[504],(function(){return n(6316)}));l=n.O(l)})();
//# sourceMappingURL=app.bfe152dc.js.map