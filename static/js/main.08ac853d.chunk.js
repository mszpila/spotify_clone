(this["webpackJsonpspotify-clone-app"]=this["webpackJsonpspotify-clone-app"]||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(31),c=a.n(o),r=(a(78),a(3)),i=(a(79),a(80),"".concat("https://accounts.spotify.com/authorize","?client_id=").concat("227bcf1c0a174f888e12f43096773e43","&redirect_uri=").concat("http://localhost:3000/","&scope=").concat(["user-read-playback-state","user-read-currently-playing","user-modify-playback-state","user-top-read","user-read-recently-played","streaming","user-read-email","user-read-private","user-library-read","user-read-playback-position","user-library-modify"].join("%20"),'&response_type=token&show_dialog=true"'));var s=function(){return l.a.createElement("div",{className:"login"},l.a.createElement("img",{src:"https://prowly-uploads.s3.eu-west-1.amazonaws.com/uploads/1036/assets/56130/Spotify_Logo_CMYK_Green.png",alt:"spotify logo"}),l.a.createElement("a",{href:i},"LOGIN WITH SPOTIFY"))},u=a(50),d=a.n(u),m=(a(81),a(82),a(83),a(19));var v=function(e){var t=e.title,a=e.Icon,n=e.to;return l.a.createElement(m.b,{to:n,className:"sidebarOption"},a&&l.a.createElement(a,{className:"sidebarOption__icon"}),a?l.a.createElement("h4",null,t):l.a.createElement("p",null,t))},p=a(51),f=a.n(p),y=a(35),E=a.n(y),_=a(55),b=a.n(_),h=Object(n.createContext)(),k=function(e){var t=e.initialState,a=e.reducer,o=e.children;return l.a.createElement(h.Provider,{value:Object(n.useReducer)(a,t)},o)},g=function(){return Object(n.useContext)(h)};var S=function(){var e,t=g(),a=Object(r.a)(t,2),n=a[0].playlists;return a[1],l.a.createElement("div",{className:"sidebar"},l.a.createElement("img",{className:"sidebar__logo",src:"https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg",alt:""}),l.a.createElement(v,{Icon:f.a,title:"Home",to:"/"}),l.a.createElement(v,{Icon:E.a,title:"Search",to:"/search"}),l.a.createElement(v,{Icon:b.a,title:"Your Library",to:"/library"}),l.a.createElement("br",null),l.a.createElement("strong",{className:"sidebar__title"},"PLAYLISTS"),l.a.createElement("hr",null),l.a.createElement("div",{className:"sidebar__playlist"},null===n||void 0===n||null===(e=n.items)||void 0===e?void 0:e.map((function(e){return l.a.createElement(v,{title:e.name,to:"/playlist/".concat(e.id),id:e.id})}))))},T=(a(30),a(90),a(115)),O=a(56),j=a.n(O),N=a(57),A=a.n(N),C=a(58),w=a.n(C),L=a(7);var R=function(e){var t=e.spotifyApi,a=g(),n=Object(r.a)(a,2),o=n[0].user,c=n[1],i=Object(L.f)(),s=Object(L.g)().pathname;return l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"header__left"},l.a.createElement("div",{className:"header__left--arrows"},l.a.createElement(j.a,{onClick:function(){i.location.key&&i.goBack()}}),l.a.createElement(A.a,{onClick:function(){i.goForward()}})),l.a.createElement("div",null,l.a.createElement(m.b,{to:"/search",className:"header__left--search"},l.a.createElement(E.a,null),l.a.createElement("input",{placeholder:"Search",type:"text",onChange:function(e){t.search(e.target.value,["track","artist","album","playlist","show","episode"],{limit:7}).then((function(e){c({type:"SET_QUERY",payload:e})})).catch((function(e){return console.log("error in header ",e)}))},autoFocus:"/search"===s})))),l.a.createElement("div",{className:"header__right"},l.a.createElement(T.a,{src:null===o||void 0===o?void 0:o.images[0].url,alt:"avatar"}),l.a.createElement("h4",null,null===o||void 0===o?void 0:o.display_name),l.a.createElement(w.a,null)))},I=a(26),P=a.n(I),D=a(37),x=a.n(D),Y=a(21),M=a.n(Y),V=a(38),U=a.n(V),K=(a(91),a(20)),B=a.n(K),z=a(22),F=a.n(z),W=a(36),G=a.n(W);var q=function(e){var t,a,o=e.track,c=e.spotifyApi,i=e.index,s=e.isLocal,u=g(),d=Object(r.a)(u,2),m=d[0],v=m.playlist,p=m.player,f=m.playback,y=m.saved,E=m.library,_=d[1],b=function(e,t){var a,n;if(v)(null===f||void 0===f?void 0:f.context.uri)===(null===v||void 0===v?void 0:v.uri)&&(null===f||void 0===f||null===(a=f.track_window)||void 0===a||null===(n=a.current_track)||void 0===n?void 0:n.uri)===(null===o||void 0===o?void 0:o.uri)?p.togglePlay():c.play({context_uri:null===v||void 0===v?void 0:v.uri,offset:{uri:null===o||void 0===o?void 0:o.uri}});else if(E){var l,r;if((null===f||void 0===f||null===(l=f.track_window)||void 0===l||null===(r=l.current_track)||void 0===r?void 0:r.uri)===(null===o||void 0===o?void 0:o.uri))p.togglePlay();else{var i=E.items.map((function(e){return e.track.uri}));c.play({uris:i,offset:{uri:null===o||void 0===o?void 0:o.uri}})}}};Object(n.useEffect)((function(){var e;E&&null==(null===f||void 0===f||null===(e=f.track_window)||void 0===e?void 0:e.next_tracks)&&E.next&&c.getMySavedTracks({offset:E.offset+E.limit,limit:50}).then((function(e){_({type:"ADD_TO_LIBRARY",payload:e})})).then((function(){return E.items.map((function(e){return e.track.uri}))})).then((function(e){c.play({uris:e,offset:{uri:null===o||void 0===o?void 0:o.uri}})}))}));var h=function(){y[i]?c.removeFromMySavedTracks([null===o||void 0===o?void 0:o.id]).then((function(){return _({type:"SET_SINGLE_SAVED",payload:!1,index:i})})):c.addToMySavedTracks([null===o||void 0===o?void 0:o.id]).then((function(){return _({type:"SET_SINGLE_SAVED",payload:!0,index:i})}))};return l.a.createElement("div",{className:"songRow"},l.a.createElement("div",{className:"songRow__container"},l.a.createElement("img",{className:"songRow__cover",src:(null===o||void 0===o?void 0:o.is_local)?"https://image.flaticon.com/icons/png/512/121/121148.png":null===(t=o.album)||void 0===t||null===(a=t.images[0])||void 0===a?void 0:a.url,alt:"",onClick:s?null:b}),l.a.createElement("div",{className:"".concat(s?null:"songRow__overlay"," ").concat(s||(null===f||void 0===f?void 0:f.paused)||(null===f||void 0===f?void 0:f.track_window.current_track.id)!==(null===o||void 0===o?void 0:o.id)?null:"visible")},s?null:(null===f||void 0===f?void 0:f.track_window.current_track.id)===(null===o||void 0===o?void 0:o.id)?(null===f||void 0===f?void 0:f.paused)?l.a.createElement(B.a,{className:"songRow__overlayIcon",onClick:b}):l.a.createElement(F.a,{className:"songRow__overlayIcon",onClick:b}):l.a.createElement(B.a,{className:"songRow__overlayIcon",onClick:b}))),l.a.createElement("div",{className:"songRow__savedTrack"},s?l.a.createElement(M.a,{fontSize:"small",className:"hidden"}):y[i]?l.a.createElement(M.a,{fontSize:"small",onClick:h}):l.a.createElement(G.a,{fontSize:"small",onClick:h})),l.a.createElement("div",{className:"songRow__info"},l.a.createElement("h1",null,o.name),l.a.createElement("p",null,o.artists.map((function(e){return e.name})).join(", "),l.a.createElement("span",null,s?null:" \u2022 "),o.album.name)))},H=a(23),Q=a.n(H);var J=function(e){var t,a,o=e.spotifyApi,c=(e.library,Object(L.h)().id),i=g(),s=Object(r.a)(i,2),u=s[0],d=u.playlist,m=u.player,v=u.playback,p=u.tracks,f=s[1],y=Object(n.useState)(!0),E=Object(r.a)(y,2),_=E[0],b=E[1],h=function(e,t){(null===v||void 0===v?void 0:v.context.uri)===(null===d||void 0===d?void 0:d.uri)?m.togglePlay():o.play({context_uri:null===d||void 0===d?void 0:d.uri})},k=document.getElementsByClassName("body"),S=document.getElementsByClassName("header");Object(n.useEffect)((function(){return k[0].addEventListener("scroll",O),function(){k[0].removeEventListener("scroll",O)}})),Object(n.useEffect)((function(){return k[0].addEventListener("scroll",T),function(){k[0].removeEventListener("scroll",T)}}),[]);var T=function(){k[0].scrollTop>25?S[0].style.backgroundColor="#0a0a0a":k[0].scrollTop<25&&(S[0].style.backgroundColor="#636363")};function O(){k[0].scrollHeight-k[0].scrollTop===k[0].clientHeight&&null!==p.next&&o.getPlaylistTracks(null===d||void 0===d?void 0:d.id,{offset:p.offset+p.limit,limit:50}).then((function(e){return f({type:"ADD_TRACKS",payload:e}),e.items.map((function(e){return e.track.id}))})).then((function(e){return o.containsMySavedTracks(e)})).then((function(e){f({type:"ADD_SAVED",payload:e})})).catch((function(e){return console.log("err: ",e)}))}return Object(n.useEffect)((function(){f({type:"SET_LIBRARY",payload:null})}),[]),Object(n.useEffect)((function(){c&&(b(!0),o.getPlaylist(c,{limit:50}).then((function(e){return f({type:"SET_PLAYLIST",payload:e}),e})).then((function(e){return o.getPlaylistTracks(e.id,{limit:50})})).then((function(e){return f({type:"SET_TRACKS",payload:e}),e.items.map((function(e){return e.track.id}))})).then((function(e){return o.containsMySavedTracks(e).then((function(t){var a=0;return e.map((function(e){if(null===e)return e;var n=t[a];return a++,n}))}))})).then((function(e){f({type:"SET_SAVED",payload:e})})).then((function(){return b(!1)})).catch((function(e){return console.log("error body.js ",e)})))}),[c]),l.a.createElement("div",{className:"body"},l.a.createElement(R,{spotifyApi:o}),l.a.createElement(Q.a,{loading:_}),l.a.createElement("div",{className:"".concat(_?"hide":"body__info")},l.a.createElement("img",{src:null===d||void 0===d||null===(t=d.images[0])||void 0===t?void 0:t.url,alt:""}),l.a.createElement("div",{className:"body__infoText"},l.a.createElement("strong",null,"PLAYLIST"),l.a.createElement("h2",null,null===d||void 0===d?void 0:d.name),l.a.createElement("p",null,null===d||void 0===d?void 0:d.description))),l.a.createElement("div",{className:"".concat(_?"hide":"body__songs")},l.a.createElement("div",{className:"body__icons"},(null===v||void 0===v?void 0:v.context.uri)===(null===d||void 0===d?void 0:d.uri)?(null===v||void 0===v?void 0:v.paused)?l.a.createElement(P.a,{className:"body__play",onClick:h}):l.a.createElement(x.a,{className:"body__play",onClick:h}):l.a.createElement(P.a,{className:"body__play",onClick:h}),l.a.createElement(M.a,{className:"body__heart"}),l.a.createElement(U.a,{className:"body__more"})),null===p||void 0===p||null===(a=p.items)||void 0===a?void 0:a.map((function(e,t){return l.a.createElement(q,{spotifyApi:o,track:e.track,index:t,isLocal:e.is_local})}))))},X=a(17),Z=(a(96),a(61)),$=a.n(Z),ee=a(62),te=a.n(ee),ae=a(60),ne=a.n(ae),le=a(44),oe=a.n(le),ce=a(63),re=a.n(ce),ie=a(114),se=a(113),ue=a(64),de=a.n(ue),me=a(66),ve=a.n(me),pe=a(65),fe=a.n(pe),ye=a(67),Ee=a.n(ye),_e=a(68),be=a.n(_e);var he=function(e){var t=e.spotifyApi,a=g(),o=Object(r.a)(a,2),c=o[0],i=c.volume,s=c.player,u=c.playback,d=c.query,m=c.recentTracks,v=c.recommandations,p=c.featuredPlaylists,f=c.newReleases,y=c.categories,E=c.topTracks,_=o[1],b=Object(n.useState)(0),h=Object(r.a)(b,2),k=h[0],S=h[1],T=Object(n.useState)(!1),O=Object(r.a)(T,2),j=O[0],N=O[1],A=document.body,C=function(e){s&&e.target===A&&(32===e.keyCode?(e.preventDefault(),s.togglePlay()):77===e.keyCode?R(e):37===e.keyCode?Y(e,100*((null===u||void 0===u?void 0:u.position)-5e3)/(null===u||void 0===u?void 0:u.duration)):39===e.keyCode?Y(e,100*((null===u||void 0===u?void 0:u.position)+5e3)/(null===u||void 0===u?void 0:u.duration)):38===e.keyCode?(e.preventDefault(),I(e,i+10)):40===e.keyCode?(e.preventDefault(),I(e,i-10)):188===e.keyCode?P():190===e.keyCode?x():82===e.keyCode?L():83===e.keyCode&&w())};Object(n.useEffect)((function(){return A.addEventListener("keydown",C),function(){A.removeEventListener("keydown",C)}}));var w=function(){t.setShuffle(!(null===u||void 0===u?void 0:u.shuffle))},L=function(){switch(null===u||void 0===u?void 0:u.repeat_mode){case 0:t.setRepeat("context");break;case 1:t.setRepeat("track");break;case 2:t.setRepeat("off");break;default:return null===u||void 0===u?void 0:u.repeat_mode}},R=function(e){0===k?(s.setVolume(0),_({type:"SET_VOLUME",payload:0}),S(i)):(s.setVolume(k/100),_({type:"SET_VOLUME",payload:k}),S(0))},I=function(e,t){t>100?t=100:t<0&&(t=0),s.setVolume(t/100),_({type:"SET_VOLUME",payload:t})},P=function(){t.getMyCurrentPlaybackState().then((function(e){return e.progress_ms})).then((function(e){e>3e3?s.seek(0):s.previousTrack()}))},D=function(e,t){s.togglePlay()},x=function(){s.nextTrack()},Y=function(e,t){s.seek(t*(null===u||void 0===u?void 0:u.duration)/100)};Object(n.useEffect)((function(){var e=setInterval((function(){s&&!(null===u||void 0===u?void 0:u.paused)&&s.getCurrentState().then((function(e){_({type:"SET_CURRENT_PLAYBACK",payload:e})}))}),250);return(null===u||void 0===u?void 0:u.paused)&&clearInterval(e),function(){return clearInterval(e)}})),Object(n.useEffect)((function(){u&&t.containsMySavedTracks([null===u||void 0===u?void 0:u.track_window.current_track.id]).then((function(e){N.apply(void 0,Object(X.a)(e))})).catch((function(e){return console.log("error in footer ",e)}))}),[u]);var V=function(){var e,a,n,l;j?t.removeFromMySavedTracks([null===u||void 0===u||null===(e=u.track_window)||void 0===e||null===(a=e.current_track)||void 0===a?void 0:a.id]).then((function(){return N(!1)})):t.addToMySavedTracks([null===u||void 0===u||null===(n=u.track_window)||void 0===n||null===(l=n.current_track)||void 0===l?void 0:l.id]).then((function(){return N(!0)}))};return l.a.createElement("div",{className:"footer"},l.a.createElement("div",{className:"footer__left"},l.a.createElement("img",{className:"".concat(u?"footer__albumLogo":null),src:null===u||void 0===u?void 0:u.track_window.current_track.album.images[0].url,alt:""}),l.a.createElement("div",{className:"footer__songInfo"},l.a.createElement("h4",null,null===u||void 0===u?void 0:u.track_window.current_track.name),l.a.createElement("p",null,null===u||void 0===u?void 0:u.track_window.current_track.artists.map((function(e){return e.name})).join(", "))),l.a.createElement("div",{className:"footer__savedTrack"},u?j?l.a.createElement(M.a,{fontSize:"small",onClick:V}):l.a.createElement(G.a,{fontSize:"small",onClick:V}):l.a.createElement("div",null," "))),l.a.createElement("div",{className:"footer__center"},l.a.createElement("div",{className:"footer_buttons"},l.a.createElement(ne.a,{className:"footer__icon ".concat((null===u||void 0===u?void 0:u.shuffle)?"footer__green":""),onClick:w}),l.a.createElement($.a,{className:"footer__icon",onClick:P}),u?u.paused?l.a.createElement(B.a,{fontSize:"large",className:"footer__icon",onClick:D}):l.a.createElement(F.a,{fontSize:"large",className:"footer__icon",onClick:D}):l.a.createElement(B.a,{fontSize:"large",className:"footer__icon",onClick:D}),l.a.createElement(te.a,{className:"footer__icon",onClick:x}),u?(null===u||void 0===u?void 0:u.repeat_mode)<2?l.a.createElement(oe.a,{className:"footer__icon ".concat((null===u||void 0===u?void 0:u.repeat_mode)?"footer__green":""),onClick:L}):l.a.createElement(re.a,{className:"footer__icon footer__green",onClick:L}):l.a.createElement(oe.a,{className:"footer__icon",onClick:L})),l.a.createElement(ie.a,{value:100*(null===u||void 0===u?void 0:u.position)/(null===u||void 0===u?void 0:u.duration),onChange:Y,className:"footer__progress"})),l.a.createElement("div",{className:"footer__right"},l.a.createElement(se.a,{container:!0,spacing:2},l.a.createElement(se.a,{item:!0},l.a.createElement(de.a,{onClick:function(){console.log("wtf: ",s),console.log("playback: ",u),console.log("recent: ",m),console.log("recommendations: ",v),console.log("featured: ",p),console.log("releases: ",f),console.log("categories: ",y),console.log("top tracks: ",E),console.log("query: ",d)},className:"footer__icon"})),l.a.createElement(se.a,{item:!0},i>66?l.a.createElement(fe.a,{onClick:R,className:"footer__icon"}):i>33?l.a.createElement(ve.a,{onClick:R,className:"footer__icon"}):i>0?l.a.createElement(Ee.a,{onClick:R,className:"footer__icon"}):l.a.createElement(be.a,{onClick:R,className:"footer__icon"})),l.a.createElement(se.a,{item:!0,xs:!0},l.a.createElement(ie.a,{value:i,onChange:I})))))};var ke=function(e){var t,a=e.spotifyApi,o=g(),c=Object(r.a)(o,2),i=c[0],s=i.playlist,u=i.player,d=i.playback,m=i.library,v=i.user,p=c[1],f=Object(n.useState)(!0),y=Object(r.a)(f,2),E=y[0],_=y[1],b=document.getElementsByClassName("body"),h=document.getElementsByClassName("header");Object(n.useEffect)((function(){return b[0].addEventListener("scroll",k),function(){b[0].removeEventListener("scroll",k)}}));var k=function(){b[0].scrollTop>25?h[0].style.backgroundColor="#0a0a0a":b[0].scrollTop<25&&(h[0].style.backgroundColor="#636363")};function S(){b[0].scrollHeight-b[0].scrollTop===b[0].clientHeight&&null!==m.next&&a.getMySavedTracks({offset:m.offset+m.limit,limit:50}).then((function(e){return p({type:"ADD_TO_LIBRARY",payload:e}),e.items.map((function(e){return e.track.id}))})).then((function(e){return a.containsMySavedTracks(e)})).then((function(e){p({type:"ADD_SAVED",payload:e})})).catch((function(e){return console.log("err in library: ",e)}))}Object(n.useEffect)((function(){p({type:"SET_PLAYLIST",payload:null}),_(!0),a.getMySavedTracks({limit:50}).then((function(e){return p({type:"SET_LIBRARY",payload:e}),e})).then((function(e){return e.items.map((function(e){return e.track.id}))})).then((function(e){return a.containsMySavedTracks(e)})).then((function(e){p({type:"SET_SAVED",payload:e})})).then((function(){return null===m||void 0===m?void 0:m.items.map((function(e){return e.track.uri}))})).then((function(e){p({type:"SET_URIS",payload:e})})).then((function(){return _(!1)})).catch((function(e){return console.log("err in library: ",e)}))}),[]),Object(n.useEffect)((function(){return b[0].addEventListener("scroll",S),function(){b[0].removeEventListener("scroll",S)}}));var T=function(e,t){(null===d||void 0===d?void 0:d.context.uri)==="spotify:user:".concat(v.name,":collection")?u.togglePlay():a.play({context_uri:"spotify:collection"})};return l.a.createElement("div",{className:"body"},l.a.createElement(R,{spotifyApi:a}),l.a.createElement(Q.a,{loading:E}),l.a.createElement("div",{className:"".concat(E?"hide":"body__info")},l.a.createElement("img",{src:"https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png",alt:""}),l.a.createElement("div",{className:"body__infoText"},l.a.createElement("strong",null,"PLAYLIST"),l.a.createElement("h2",null,"Polubione utwory"),l.a.createElement("p",null))),l.a.createElement("div",{className:"".concat(E?"hide":"body__songs")},l.a.createElement("div",{className:"body__icons"},(null===d||void 0===d?void 0:d.context.uri)===(null===s||void 0===s?void 0:s.uri)?(null===d||void 0===d?void 0:d.paused)?l.a.createElement(P.a,{className:"body__play",onClick:T}):l.a.createElement(x.a,{className:"body__play",onClick:T}):l.a.createElement(P.a,{className:"body__play",onClick:T}),l.a.createElement(U.a,{className:"body__more"})),null===m||void 0===m||null===(t=m.items)||void 0===t?void 0:t.map((function(e){return l.a.createElement(q,{spotifyApi:a,track:e.track,index:1})}))))};a(97);var ge=function(e){var t,a,o,c,i,s=e.track,u=e.type,d=e.spotifyApi,m=g(),v=Object(r.a)(m,2),p=v[0],f=p.player,y=p.playback,E=(v[1],Object(n.useState)(!0)),_=Object(r.a)(E,2),b=_[0],h=_[1],k=function(e,t){var a,n;"album"===s.type||"artist"===s.type||"playlist"===s.type||"show"===s.type?(null===y||void 0===y?void 0:y.context.uri)===(null===s||void 0===s?void 0:s.uri)?f.togglePlay():d.play({context_uri:null===s||void 0===s?void 0:s.uri}):(null===y||void 0===y||null===(a=y.track_window)||void 0===a||null===(n=a.current_track)||void 0===n?void 0:n.uri)===(null===s||void 0===s?void 0:s.uri)?f.togglePlay():d.play({uris:[s.uri]})};return Object(n.useEffect)((function(){h(!0)}),[s.uri]),l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"".concat(b?"card__spinner":"hide")},l.a.createElement(Q.a,{loading:b})),l.a.createElement("div",{className:"".concat(b?"hide":"card__container")},l.a.createElement("img",{className:"card__cover",src:"track"===u?null===s||void 0===s||null===(t=s.album)||void 0===t||null===(a=t.images[0])||void 0===a?void 0:a.url:(null===s||void 0===s||null===(o=s.images[0])||void 0===o?void 0:o.url)||"https://teslamotorsclub.com/tmc/styles/xenith/xenforo/avatars/avatar_male_l.png",alt:"",onLoad:function(){h(!1)}}),l.a.createElement("div",{className:"card__overlay"},!(null===y||void 0===y?void 0:y.paused)&&(null===y||void 0===y?void 0:y.context.uri)===(null===s||void 0===s?void 0:s.uri)||!(null===y||void 0===y?void 0:y.paused)&&(null===y||void 0===y||null===(c=y.track_window)||void 0===c||null===(i=c.current_track)||void 0===i?void 0:i.uri)===(null===s||void 0===s?void 0:s.uri)?l.a.createElement(F.a,{className:"card__overlayIcon",onClick:k}):l.a.createElement(B.a,{className:"card__overlayIcon",onClick:k}))),l.a.createElement("div",{className:"".concat(b?"hide":"card__info")},l.a.createElement("h1",null,s.name),l.a.createElement("p",null,"Tracks"===u||"Albums"===u?s.artists.map((function(e){return e.name})).join(", "):null)))};a(98);var Se=function(e){var t=e.title,a=e.items,n=e.spotifyApi,o=g(),c=Object(r.a)(o,2),i=c[0];return i.query,i.playlist,i.player,i.playback,i.saved,i.tracks,c[1],l.a.createElement("div",{className:"cards"},l.a.createElement("h1",{className:"cards__title"},t),l.a.createElement("hr",null),l.a.createElement("div",{className:"cards__container"},null===a||void 0===a?void 0:a.map((function(e){return l.a.createElement(ge,{track:e,type:e.type,spotifyApi:n})}))))};a(49),a(99);var Te=function(e){var t=e.spotifyApi,a=g(),o=Object(r.a)(a,2),c=o[0],i=c.featuredPlaylists,s=c.newReleases,u=c.topTracks,d=o[1];return Object(n.useEffect)((function(){t.getMyTopTracks().then((function(e){d({type:"SET_TOP_TRACKS",payload:e})})).catch((function(e){return console.log("error: ",e)})),t.getMyRecentlyPlayedTracks().then((function(e){return d({type:"SET_RECENT_TRACKS",payload:e}),e})).then((function(e){var a=e.items[0].track.id;return console.log("ids ",a),t.getRecommendations([a])})).then((function(e){console.log("recommendations: ",e),d({type:"SET_RECOMMENDATIONS",payload:e})})).catch((function(e){return console.log("error: ",e)})),t.getFeaturedPlaylists().then((function(e){d({type:"SET_FEATURED_PLAYLISTS",payload:e})})).catch((function(e){return console.log("error: ",e)})),t.getNewReleases().then((function(e){return d({type:"SET_NEW_RELEASES",payload:e})})).catch((function(e){return console.log("error: ",e)})),t.getCategories().then((function(e){return d({type:"SET_CATEGORIES",payload:e})})).catch((function(e){return console.log("error: ",e)}))}),[]),l.a.createElement("div",{className:"body"},l.a.createElement("div",{className:"home__header"},l.a.createElement(R,{spotifyApi:t})),l.a.createElement("div",{className:"search__cards"},u?l.a.createElement(Se,{title:"Top tracks",items:null===u||void 0===u?void 0:u.items,spotifyApi:t}):null,i?l.a.createElement(Se,{title:"Featured playlists",items:null===i||void 0===i?void 0:i.playlists.items,spotifyApi:t}):null,s?l.a.createElement(Se,{title:"New releases",items:null===s||void 0===s?void 0:s.albums.items,spotifyApi:t}):null))};var Oe=function(e){var t,a,n,o,c,i,s,u,d,m,v,p,f=e.spotifyApi,y=g(),E=Object(r.a)(y,2),_=E[0].query;return E[1],l.a.createElement("div",{className:"body"},l.a.createElement("div",{className:"search__header"},l.a.createElement(R,{spotifyApi:f,className:"search__header"})),l.a.createElement("div",{className:"search__cards"},(null===_||void 0===_||null===(t=_.tracks)||void 0===t?void 0:t.items.length)?l.a.createElement(Se,{title:"Tracks",items:null===_||void 0===_||null===(a=_.tracks)||void 0===a?void 0:a.items,spotifyApi:f}):null,(null===_||void 0===_||null===(n=_.artists)||void 0===n?void 0:n.items.length)?l.a.createElement(Se,{title:"Artists",items:null===_||void 0===_||null===(o=_.artists)||void 0===o?void 0:o.items,spotifyApi:f}):null,(null===_||void 0===_||null===(c=_.albums)||void 0===c?void 0:c.items.length)?l.a.createElement(Se,{title:"Albums",items:null===_||void 0===_||null===(i=_.albums)||void 0===i?void 0:i.items,spotifyApi:f}):null,(null===_||void 0===_||null===(s=_.playlists)||void 0===s?void 0:s.items.length)?l.a.createElement(Se,{title:"Playlists",items:null===_||void 0===_||null===(u=_.playlists)||void 0===u?void 0:u.items,spotifyApi:f}):null,(null===_||void 0===_||null===(d=_.shows)||void 0===d?void 0:d.items.length)?l.a.createElement(Se,{title:"Shows",items:null===_||void 0===_||null===(m=_.shows)||void 0===m?void 0:m.items,spotifyApi:f}):null,(null===_||void 0===_||null===(v=_.episodes)||void 0===v?void 0:v.items.length)?l.a.createElement(Se,{title:"Episodes",items:null===_||void 0===_||null===(p=_.episodes)||void 0===p?void 0:p.items,spotifyApi:f}):null))};var je=function(e){var t=e.spotifyApi,a=g(),o=Object(r.a)(a,2),c=o[0],i=c.user,s=c.token,u=o[1];return Object(n.useEffect)((function(){var e=document.createElement("script");return e.src="https://sdk.scdn.co/spotify-player.js",e.async=!0,document.body.appendChild(e),function(){document.body.removeChild(e)}}),[]),Object(n.useEffect)((function(){t&&(window.onSpotifyWebPlaybackSDKReady=function(){var e=new window.Spotify.Player({name:"Localhost Player",getOAuthToken:function(e){e(s)}});e.addListener("initialization_error",(function(e){var t=e.message;console.error(t)})),e.addListener("authentication_error",(function(e){var t=e.message;console.error(t)})),e.addListener("account_error",(function(e){var t=e.message;console.error(t)})),e.addListener("playback_error",(function(e){var t=e.message;console.error(t)})),e.addListener("player_state_changed",(function(e){u({type:"SET_CURRENT_PLAYBACK",payload:e})})),e.addListener("ready",(function(a){a.device_id;t.getMyDevices().then((function(e){return e.devices.filter((function(e){return"Localhost Player"===e.name}))})).then((function(e){return t.transferMyPlayback([e[0].id],{play:"false"})})).then((function(){e.getVolume().then((function(e){u({type:"SET_VOLUME",payload:100*e})}))}))})),e.addListener("not_ready",(function(e){var t=e.device_id;console.log("Device ID has gone offline",t)})),e.connect().then((function(e){e&&console.log("The Web Playback SDK successfully connected to Spotify!")})),u({type:"SET_PLAYER",payload:e})},t.getMe().then((function(e){u({type:"SET_USER",payload:e})})),t.getUserPlaylists(null===i||void 0===i?void 0:i.id).then((function(e){u({type:"SET_PLAYLISTS",payload:e})})),t.getPlaylist("37i9dQZEVXcSGu8DAFFrX6").then((function(e){u({type:"SET_OVER_WEEKLY",payload:e})})),t.getUserPlaylists().then((function(e){var t=e.items.map((function(e){return e.id}));u({type:"SET_PLAYLISTS_ID",payload:t})})))}),[]),l.a.createElement("div",{className:"player"},l.a.createElement("div",{className:"player__body"},l.a.createElement(S,null),l.a.createElement(L.c,null,l.a.createElement(L.a,{path:"/search"},l.a.createElement(Oe,{spotifyApi:t})),l.a.createElement(L.a,{path:"/library"},l.a.createElement(ke,{spotifyApi:t})),l.a.createElement(L.a,{path:"/playlist/:id"},l.a.createElement(J,{spotifyApi:t})),l.a.createElement(L.a,{path:"/"},l.a.createElement(Te,{spotifyApi:t})))),l.a.createElement(he,{spotifyApi:t}))},Ne=new d.a;var Ae=function(){var e=g(),t=Object(r.a)(e,2),a=t[0].token,o=t[1];return Object(n.useEffect)((function(){var e=window.location.hash.substring(1).split("&").reduce((function(e,t){var a=t.split("=");return e[a[0]]=decodeURIComponent(a[1]),e}),{});window.location.hash="";var t=e.access_token;Ne.setAccessToken(t),o({type:"SET_TOKEN",payload:t})}),[]),l.a.createElement("div",{className:"App"},a?l.a.createElement(je,{spotifyApi:Ne}):l.a.createElement(s,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ce=a(2),we=function(e,t,a){switch(t.type){case"SET_USER":return Object(Ce.a)(Object(Ce.a)({},e),{},{user:t.payload});case"SET_TOKEN":return Object(Ce.a)(Object(Ce.a)({},e),{},{token:t.payload});case"SET_PLAYLISTS":return Object(Ce.a)(Object(Ce.a)({},e),{},{playlists:t.payload});case"SET_DISCOVER_WEEKLY":return Object(Ce.a)(Object(Ce.a)({},e),{},{discover_weekly:t.payload});case"SET_PLAYLISTS_ID":return Object(Ce.a)(Object(Ce.a)({},e),{},{ids:t.payload});case"SET_VOLUME":return Object(Ce.a)(Object(Ce.a)({},e),{},{volume:t.payload});case"SET_PLAYER":return Object(Ce.a)(Object(Ce.a)({},e),{},{player:t.payload});case"SET_CURRENT_PLAYBACK":return Object(Ce.a)(Object(Ce.a)({},e),{},{playback:t.payload});case"SET_DEVICE_ID":return Object(Ce.a)(Object(Ce.a)({},e),{},{deviceId:t.payload});case"SET_API":return Object(Ce.a)(Object(Ce.a)({},e),{},{spotifyApi:t.payload});case"SET_PLAYLIST":return Object(Ce.a)(Object(Ce.a)({},e),{},{playlist:t.payload});case"SET_LIBRARY":return Object(Ce.a)(Object(Ce.a)({},e),{},{library:t.payload});case"ADD_TO_LIBRARY":return Object(Ce.a)(Object(Ce.a)({},e),{},{library:{items:[].concat(Object(X.a)(e.library.items),Object(X.a)(t.payload.items)),href:t.payload.href,limit:t.payload.limit,next:t.payload.next,offset:t.payload.offset,previous:t.payload.previous,total:t.payload.total}});case"SET_SAVED":return Object(Ce.a)(Object(Ce.a)({},e),{},{saved:t.payload});case"ADD_SAVED":return Object(Ce.a)(Object(Ce.a)({},e),{},{saved:[].concat(Object(X.a)(e.saved),Object(X.a)(t.payload))});case"SET_TRACKS":return Object(Ce.a)(Object(Ce.a)({},e),{},{tracks:t.payload});case"ADD_TRACKS":return Object(Ce.a)(Object(Ce.a)({},e),{},{tracks:{items:[].concat(Object(X.a)(e.tracks.items),Object(X.a)(t.payload.items)),href:t.payload.href,limit:t.payload.limit,next:t.payload.next,offset:t.payload.offset,previous:t.payload.previous,total:t.payload.total}});case"SET_URIS":return Object(Ce.a)(Object(Ce.a)({},e),{},{uris:t.payload});case"SET_SINGLE_SAVED":return Object(Ce.a)(Object(Ce.a)({},e),{},{saved:[].concat(Object(X.a)(e.saved),[e.saved[t.index]=t.payload])});case"SET_QUERY":return Object(Ce.a)(Object(Ce.a)({},e),{},{query:t.payload});case"SET_RECENT_TRACKS":return Object(Ce.a)(Object(Ce.a)({},e),{},{recentTracks:t.payload});case"SET_RECOMMENDATIONS":return Object(Ce.a)(Object(Ce.a)({},e),{},{recommandations:t.payload});case"SET_FEATURED_PLAYLISTS":return Object(Ce.a)(Object(Ce.a)({},e),{},{featuredPlaylists:t.payload});case"SET_NEW_RELEASES":return Object(Ce.a)(Object(Ce.a)({},e),{},{newReleases:t.payload});case"SET_CATEGORIES":return Object(Ce.a)(Object(Ce.a)({},e),{},{categories:t.payload});case"SET_TOP_TRACKS":return Object(Ce.a)(Object(Ce.a)({},e),{},{topTracks:t.payload});default:return e}};c.a.render(l.a.createElement(m.a,null,l.a.createElement(l.a.StrictMode,null,l.a.createElement(k,{initialState:{user:null,playlists:[],playing:!1,item:null,ids:[],id:null,volume:100,player:null,playback:null,deviceId:null,spotifyApi:null,playlist:null,library:null,saved:[],tracks:[],uris:null,query:null,recentTracks:null,recommandations:null,featuredPlaylists:null,newReleases:null,categories:null,topTracks:null,token:null},reducer:we},l.a.createElement(Ae,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},30:function(e,t,a){},49:function(e,t,a){},73:function(e,t,a){e.exports=a(100)},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[73,1,2]]]);
//# sourceMappingURL=main.08ac853d.chunk.js.map