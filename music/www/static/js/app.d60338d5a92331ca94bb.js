webpackJsonp([1],{NHnr:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("7+uW"),a=r("3EgV"),s=r.n(a),i=(r("QCv7"),r("Xxa5")),l=r.n(i),o=r("exGp"),c=r.n(o),u={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-system-bar",{attrs:{window:""}},[r("v-menu",{attrs:{"offset-y":"",transition:"slide-y-transition"}},[r("v-btn",{attrs:{slot:"activator",flat:"",small:"",right:""},slot:"activator"},[r("v-icon",[t._v("headset")]),t._v(" MENU\n    ")],1),t._v(" "),r("v-list",[r("v-list-tile",{on:{click:function(e){t.dialog=!0}}},[r("v-list-tile-title",[t._v("About")])],1),t._v(" "),r("v-dialog",{attrs:{"max-width":"300"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("v-card-title",[r("h2",[t._v("Vue Music Player")])]),t._v(" "),r("v-card-text",[t._v("Version 1.0.0")]),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{flat:""},on:{click:function(e){t.dialog=!1}}},[t._v("OK")])],1)],1)],1)],1)],1),t._v(" "),r("v-spacer"),t._v("\n  VUE MUSIC PLAYER\n  "),r("v-spacer"),t._v(" "),r("v-icon",[t._v("remove")]),t._v(" "),r("v-icon",[t._v("check_box_outline_blank")]),t._v(" "),r("v-icon",[t._v("close")])],1)},staticRenderFns:[]},p=r("VU/8")({data:function(){return{dialog:!1}}},u,!1,null,null,null).exports,v={props:{playlist:Array,selectedTrack:Object},methods:{selectTrack:function(t){this.$emit("selecttrack",t)},playTrack:function(t){this.$emit("playtrack",t)}}},h={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{class:{playlist:t.playlist},attrs:{height:"300"}},[r("v-list",t._l(t.playlist,function(e,n){return r("v-list-tile",{directives:[{name:"show",rawName:"v-show",value:e.display,expression:"track.display"}],key:e.title,class:[{selected:e===t.selectedTrack},{even:n%2==0}]},[r("v-list-tile-content",{on:{click:function(r){return t.selectTrack(e)},dblclick:function(e){return t.playTrack()}}},[r("v-list-tile-title",[t._v(t._s(t._f("numbers")(n))+" "+t._s(e.artist)+" - "+t._s(e.title))])],1),t._v(" "),r("v-spacer"),t._v("\n      "+t._s(t._f("minutes")(e.howl.duration()))+"\n    ")],1)}),1)],1)},staticRenderFns:[]};var f=r("VU/8")(v,h,!1,function(t){r("R7Ca")},"data-v-001fc5e5",null).exports,d={props:{loop:Boolean,shuffle:Boolean,progress:Number},data:function(){return{volume:.5,muted:!1}},computed:{trackProgress:function(){return 100*this.progress}},created:function(){Howler.volume(this.volume)},methods:{playTrack:function(t){this.$emit("playtrack",t)},pauseTrack:function(){this.$emit("pausetrack")},stopTrack:function(){this.$emit("stoptrack")},skipTrack:function(t){this.$emit("skiptrack",t)},updateVolume:function(t){Howler.volume(t)},toggleMute:function(){Howler.mute(!this.muted),this.muted=!this.muted},toggleLoop:function(){this.$emit("toggleloop",!this.loop)},toggleShuffle:function(){this.$emit("toggleshuffle",!this.shuffle)},updateSeek:function(t){var e=document.querySelector(".v-progress-linear__bar"),r=t.offsetX/e.clientWidth*100;this.$emit("updateseek",r)}}},k={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-toolbar",{staticClass:"pt-2",attrs:{flat:"",height:"40"}},[r("v-progress-linear",{attrs:{height:"40"},on:{click:function(e){return t.updateSeek(e)}},model:{value:t.trackProgress,callback:function(e){t.trackProgress=e},expression:"trackProgress"}})],1),t._v(" "),r("v-toolbar",{attrs:{flat:"",height:"40"}},[r("v-btn",{attrs:{flat:"",icon:""},on:{click:t.toggleMute}},[this.muted?t._e():[this.volume>=.5?r("v-icon",[t._v("volume_up")]):this.volume>0?r("v-icon",[t._v("volume_down")]):r("v-icon",[t._v("volume_mute")])],t._v(" "),r("v-icon",{directives:[{name:"show",rawName:"v-show",value:this.muted,expression:"this.muted"}]},[t._v("volume_off")])],2),t._v(" "),r("v-slider",{staticClass:"mt-4 mr-2",attrs:{max:"1",step:"0.1"},on:{input:function(e){return t.updateVolume(t.volume)}},model:{value:t.volume,callback:function(e){t.volume=e},expression:"volume"}}),t._v("\n    "+t._s(100*this.volume+"%")+"\n  ")],1),t._v(" "),r("v-toolbar",{attrs:{flat:"",height:"90"}},[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{outline:"",fab:"",small:"",color:"light-blue"},on:{click:function(e){return t.skipTrack("prev")}}},[r("v-icon",[t._v("skip_previous")])],1),t._v(" "),r("v-btn",{attrs:{outline:"",fab:"",small:"",color:"light-blue"},on:{click:t.stopTrack}},[r("v-icon",[t._v("stop")])],1),t._v(" "),r("v-btn",{attrs:{outline:"",fab:"",color:"light-blue"},on:{click:function(e){return t.playTrack()}}},[r("v-icon",{attrs:{large:""}},[t._v("play_arrow")])],1),t._v(" "),r("v-btn",{attrs:{outline:"",fab:"",small:"",color:"light-blue"},on:{click:t.pauseTrack}},[r("v-icon",[t._v("pause")])],1),t._v(" "),r("v-btn",{attrs:{outline:"",fab:"",small:"",color:"light-blue"},on:{click:function(e){return t.skipTrack("next")}}},[r("v-icon",[t._v("skip_next")])],1),t._v(" "),r("v-spacer")],1)],1)},staticRenderFns:[]},_=r("VU/8")(d,k,!1,null,null,null).exports,m={props:{trackInfo:Object}},g={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{height:"100"}},[r("v-card-title",[r("h2",[r("span",{directives:[{name:"show",rawName:"v-show",value:t.trackInfo.artist,expression:"trackInfo.artist"}]},[t._v(t._s(t.trackInfo.artist)+" - "+t._s(t.trackInfo.title))])]),t._v(" "),r("v-spacer"),t._v(" "),r("h3",[t._v(t._s(t._f("minutes")(t.trackInfo.seek))+"/"+t._s(t._f("minutes")(t.trackInfo.duration)))])],1)],1)},staticRenderFns:[]},y=r("VU/8")(m,g,!1,null,null,null).exports,b={props:{playlist:Array},data:function(){return{searchString:""}},methods:{searchPlaylist:function(){var t=this;this.playlist.forEach(function(e){t.searchString?e.title.toLowerCase().includes(t.searchString.toLowerCase())||e.artist.toLowerCase().includes(t.searchString.toLowerCase())?e.display=!0:e.display=!1:""!==t.searchString&&null!==t.searchString||(e.display=!0)})}}},T={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-toolbar",{attrs:{flat:""}},[r("v-text-field",{attrs:{clearable:"","prepend-icon":"search",placeholder:"Quick search",width:"100%"},on:{input:t.searchPlaylist},model:{value:t.searchString,callback:function(e){t.searchString=e},expression:"searchString"}})],1)},staticRenderFns:[]},w="http://192.168.0.104:3000/",x={components:{PlayerTitleBar:p,PlayerPlaylistPanel:f,PlayerControlsBars:_,PlayerInfoPanel:y,PlayerSearchBar:r("VU/8")(b,T,!1,null,null,null).exports},data:function(){return{playlist:[],selectedTrack:null,index:0,playing:!1,loop:!1,shuffle:!1,seek:0}},computed:{currentTrack:function(){return this.playlist[this.index]},progress:function(){return this.currentTrack?0===this.currentTrack.howl.duration()?0:this.seek/this.currentTrack.howl.duration():0},getTrackInfo:function(){return this.currentTrack?{artist:this.currentTrack.artist,title:this.currentTrack.title,seek:this.seek,duration:this.currentTrack.howl.duration()}:{}}},watch:{playing:function(t){var e=this;this.seek=this.currentTrack.howl.seek();var r=void 0;t?r=setInterval(function(){e.seek=e.currentTrack.howl.seek()},250):clearInterval(r)}},mounted:function(){var t=c()(l.a.mark(function t(){var e,r,n=this;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$http.get("/");case 3:e=t.sent,r=e.data,console.log(r),this.playlist=r.map(function(t){return{title:t.title,artist:t.artist,howl:new Howl({src:[""+w+t.title],format:"mp3",onend:function(){n.loop?n.play(n.index):n.skip("next")}}),display:!0}}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.error(t.t0);case 12:case"end":return t.stop()}},t,this,[[0,9]])}));return function(){return t.apply(this,arguments)}}(),methods:{selectTrack:function(t){this.selectedTrack=t},play:function(t){var e=this,r=this.playlist.findIndex(function(t){return t===e.selectedTrack});"number"==typeof t?t=t:this.selectedTrack?(this.selectedTrack!=this.currentTrack&&this.stop(),t=r):t=this.index;var n=this.playlist[t].howl;n.playing()||(n.play(),this.selectedTrack=this.playlist[t],this.playing=!0,this.index=t)},pause:function(){this.currentTrack.howl.pause(),this.playing=!1},stop:function(){this.currentTrack.howl.stop(),this.playing=!1},skip:function(t){var e=0,r=this.playlist.length-1;if(this.shuffle)for(e=Math.round(Math.random()*r);e===this.index;)e=Math.round(Math.random()*r);else"next"===t?(e=this.index+1)>=this.playlist.length&&(e=0):(e=this.index-1)<0&&(e=this.playlist.length-1);this.skipTo(e)},skipTo:function(t){this.currentTrack&&this.currentTrack.howl.stop(),this.play(t)},toggleLoop:function(t){this.loop=t},toggleShuffle:function(t){this.shuffle=t},setSeek:function(t){var e=this.currentTrack.howl;e.playing()&&e.seek(e.duration()/100*t)}}},S={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[r("v-content",{staticClass:"black"},[r("v-container",{staticClass:"ma-0 pa-0",attrs:{fluid:""}},[r("player-search-bar",{attrs:{playlist:t.playlist}}),t._v(" "),r("player-playlist-panel",{attrs:{playlist:t.playlist,selectedTrack:t.selectedTrack},on:{selecttrack:t.selectTrack,playtrack:t.play}}),t._v(" "),r("player-info-panel",{attrs:{trackInfo:t.getTrackInfo}}),t._v(" "),r("player-controls-bars",{attrs:{loop:t.loop,shuffle:t.shuffle,progress:t.progress},on:{playtrack:t.play,pausetrack:t.pause,stoptrack:t.stop,skiptrack:t.skip,toggleloop:t.toggleLoop,toggleshuffle:t.toggleShuffle,updateseek:t.setSeek}})],1)],1)],1)},staticRenderFns:[]},I=r("VU/8")(x,S,!1,null,null,null).exports,P=r("mtWM"),$=r.n(P),C=r("Rf8U"),V=r.n(C);r("k9Ku");n.default.use(s.a),n.default.use(V.a,$.a.create({baseURL:w})),n.default.filter("numbers",function(t){var e=t+1;return e<10?"0"+e+".":e+"."}),n.default.filter("minutes",function(t){if(!t||"number"!=typeof t)return"00:00";var e=parseInt(t/60),r=parseInt(t%60);return t=(e=e<10?"0"+e:e)+":"+(r=r<10?"0"+r:r)}),new n.default({el:"#app",render:function(t){return t(I)}})},QCv7:function(t,e){},R7Ca:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.d60338d5a92331ca94bb.js.map