(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[5],{418:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a(134),o=a(135),l=a(138),r=a(136),c=a(139),i=a(0),s=a.n(i),u=a(14),m=a(35),p=function(e){return{isAuth:e.auth.isAuth}},f=function(e){var t=function(t){function a(){return Object(n.a)(this,a),Object(l.a)(this,Object(r.a)(a).apply(this,arguments))}return Object(c.a)(a,t),Object(o.a)(a,[{key:"render",value:function(){return this.props.isAuth?s.a.createElement(e,this.props):s.a.createElement(m.a,{to:"/login"})}}]),a}(s.a.Component);return Object(u.b)(p)(t)}},426:function(e,t,a){e.exports={profileDesc:"ProfileInfo_profileDesc__5go6G",profileAvatar:"ProfileInfo_profileAvatar__4Raf9",avatarImage:"ProfileInfo_avatarImage__14ppm",uploadPhoto:"ProfileInfo_uploadPhoto__2hZ6K",editModeBtn:"ProfileInfo_editModeBtn__F_nnL",profileInfo:"ProfileInfo_profileInfo__1kdLq",profileInfoName:"ProfileInfo_profileInfoName__jnOEh"}},431:function(e,t,a){e.exports={MyPosts:"MyPosts_MyPosts__1o1s0",contentNewPosts:"MyPosts_contentNewPosts__lkcTq"}},432:function(e,t,a){e.exports={post:"Post_post__2msS2"}},438:function(e,t,a){e.exports={statusInput:"ProfileStatus_statusInput__2m2EC"}},439:function(e,t,a){e.exports=a.p+"static/media/noAvatar.c44864fc.jpg"},486:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(431),r=a.n(l),c=a(432),i=a.n(c),s=a(487),u=a(484),m=a(416),p=a(492),f=a(493),d=a(494),E=function(e){var t=[e.liked?o.a.createElement("span",{key:"comment-basic-like"},o.a.createElement(s.a,{title:"Like"},o.a.createElement(!0===e.liked?p.a:f.a,{onClick:function(){return e.toggleLikePost(e.id)}})),o.a.createElement("span",{className:"comment-action"},e.likeCount)):o.a.createElement("span",{key:' key="comment-basic-dislike"'},o.a.createElement(s.a,{title:"Dislike"},o.a.createElement(!1===e.liked||null===e.liked?f.a:d.a,{onClick:function(){return e.toggleLikePost(e.id)}})),o.a.createElement("span",{className:"comment-action"},e.likeCount)),o.a.createElement("span",{onClick:function(){return e.deletePost(e.id)}},"\u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u043e\u0441\u0442")];return o.a.createElement(u.a,{className:i.a.post,author:o.a.createElement("a",null,e.name),actions:t,avatar:o.a.createElement(m.a,{size:"large",shape:"circle",src:e.avatar?e.avatar:"https://www.kino-teatr.ru/movie/kadr/36398/pv_82319.jpg",alt:"Han Solo"}),content:o.a.createElement("p",null,e.message)})},b=a(197),v=a(198),h=a(62),P=a(137),g=a(417),k=Object(h.a)(250),O=Object(h.a)(60),_=Object(P.a)("textarea"),j=Object(P.a)("input"),y=Object(v.a)({form:"MyPosts"})((function(e){return o.a.createElement("form",{onSubmit:e.handleSubmit},o.a.createElement("div",null,o.a.createElement(b.a,{component:_,name:"postText",placeholder:"\u042d\u0442\u0430 \u0441\u0442\u0435\u043d\u0430 \u0436\u0434\u0435\u0442 \u0442\u0432\u043e\u0435\u0433\u043e \u043f\u043e\u0441\u0442\u0430!",validate:[h.b,k]})),o.a.createElement("div",null,o.a.createElement(b.a,{component:j,name:"name",placeholder:"\u0418\u043c\u044f..",validate:[h.b,O]})),o.a.createElement("div",null,o.a.createElement(g.a,{type:"primary",htmlType:"submit"},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c")))})),I=a(212),N=function(e){return o.a.createElement("div",{className:r.a.MyPosts},o.a.createElement("h2",null,"My posts"),o.a.createElement(y,{onSubmit:function(t){e.addPost(Object(I.a)(),t.postText,0,null,t.name)}}),o.a.createElement("div",{className:r.a.contentNewPosts},e.posts.map((function(t){return o.a.createElement(E,Object.assign({},t,{toggleLikePost:e.toggleLikePost,deletePost:e.deletePost,key:t.id}))}))))},S=a(140),w=a(14),x=Object(w.b)((function(e){return{posts:e.profilePage.posts}}),{addPost:S.a,deletePost:S.c,toggleLikePost:S.f})(N),M=a(430),A=a(426),C=a.n(A),F=a(144),L=a(438),D=a.n(L),J=function(e){var t=Object(n.useState)(!1),a=Object(M.a)(t,2),l=a[0],r=a[1],c=Object(n.useState)(e.status),i=Object(M.a)(c,2),s=i[0],u=i[1];Object(n.useEffect)((function(){u(e.status)}),[e.status]);return o.a.createElement("div",null,l?o.a.createElement("div",null,o.a.createElement("input",{className:D.a.statusInput,autoFocus:!0,onChange:function(e){u(e.currentTarget.value)},onBlur:function(){r(!1),e.updateStatus(s)},value:s})):o.a.createElement("div",null,o.a.createElement("span",{onClick:function(){r(!0)}},s||"----")))},T=function(e){var t=e.contactName,a=e.contactValue;return o.a.createElement("li",null,t,": ",a)},B=Object(h.a)(200),U=Object(P.a)("input"),z=Object(v.a)({form:"profileInfoForm"})((function(e){return o.a.createElement("form",{onSubmit:e.handleSubmit},o.a.createElement("div",{className:C.a.profileInfo},o.a.createElement("div",{className:C.a.profileInfoName},"\u041c\u043e\u0435 \u0438\u043c\u044f: ",o.a.createElement(b.a,{name:"fullName",placeholder:"\u0418\u043c\u044f",type:"text",component:U,validate:[B]})),o.a.createElement("div",null,"\u0418\u0449\u0443 \u0440\u0430\u0431\u043e\u0442\u0443: ",o.a.createElement(b.a,{name:"lookingForAJob",type:"checkbox",component:U,validate:[B]})," "),o.a.createElement("div",null,"\u041c\u043e\u0438 \u043d\u0430\u0432\u044b\u043a\u0438: ",o.a.createElement(b.a,{name:"lookingForAJobDescription",placeholder:"\u041c\u043e\u0438 \u043d\u0430\u0432\u044b\u043a\u0438",type:"text",component:U,validate:[B]})," "),o.a.createElement("div",null,"\u041e\u0431\u043e \u043c\u043d\u0435: ",o.a.createElement(b.a,{name:"aboutMe",placeholder:"\u041e\u0431\u043e \u043c\u043d\u0435",type:"text",component:U,validate:[B]})),o.a.createElement("ul",null,Object.keys(e.profile.contacts).map((function(e){return o.a.createElement(b.a,{name:"contacts."+e,key:e,placeholder:e,type:"text",component:U,validate:[B]})})))),o.a.createElement(g.a,{htmlType:"submit",className:C.a.editModeBtn},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443"),o.a.createElement("div",null,e.error?e.error:null))})),V=a(439),q=a.n(V),G=function(e){var t=Object(n.useState)(!1),a=Object(M.a)(t,2),l=a[0],r=a[1];if(!e.profile)return o.a.createElement(F.a,null);return o.a.createElement("div",{className:C.a.profileDesc},o.a.createElement("div",{className:C.a.profileAvatar},o.a.createElement("img",{src:e.profile.photos.large?e.profile.photos.large:q.a,className:C.a.avatarImage}),e.isOwner?o.a.createElement("div",null,o.a.createElement("input",{type:"file",id:"photoFile",onChange:function(t){t.target.files.length&&e.updatePhoto(t.target.files[0])},className:C.a.uploadPhoto}),o.a.createElement("label",{for:"photoFile"},"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440\u043a\u0443")):""),l?o.a.createElement(z,{initialValues:e.profile,onSubmit:function(t){e.updateProfile(t).then((function(){r(!1)}))},profile:e.profile}):o.a.createElement("div",{className:C.a.profileInfo},o.a.createElement("div",{className:C.a.profileInfoName},e.profile.fullName),o.a.createElement("div",{className:C.a.profileInfoStatus},o.a.createElement(J,{status:e.status,updateStatus:e.updateStatus})),o.a.createElement("div",null,"\u0418\u0449\u0443 \u0440\u0430\u0431\u043e\u0442\u0443: ",e.profile.lookingForAJob?"\u0414\u0430":"\u041d\u0435\u0442"," "),o.a.createElement("div",null,"\u041c\u043e\u0438 \u043d\u0430\u0432\u044b\u043a\u0438: ",e.profile.lookingForAJobDescription," "),o.a.createElement("div",null,"\u041e\u0431\u043e \u043c\u043d\u0435: ",e.profile.aboutMe),o.a.createElement("ul",null,Object.keys(e.profile.contacts).map((function(t){return o.a.createElement(T,{key:t,contactName:t,contactValue:e.profile.contacts[t]})})))),e.isOwner&&!l&&o.a.createElement(g.a,{className:C.a.editModeBtn,onClick:function(){return r(!0)}},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443"))},H=function(e){return o.a.createElement("div",null,o.a.createElement(G,{updatePhoto:e.updatePhoto,isOwner:e.owner,updateProfile:e.updateProfile,profile:e.profile,status:e.status,updateStatus:e.updateStatus}),o.a.createElement(x,null))},K=a(35),R=a(9),Z=a(418);t.default=Object(R.d)(Object(w.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId}}),{getUsersProfile:S.e,getStatus:S.d,updateStatus:S.i,updatePhoto:S.g,updateProfile:S.h}),K.g,Z.a)((function(e){var t=function(){var t=e.match.params.userId;t||(t=e.authorizedUserId),e.getUsersProfile(t),e.getStatus(t)};return Object(n.useEffect)((function(){t()}),[]),Object(n.useEffect)((function(){t()}),[e.match.params.userId]),o.a.createElement(H,Object.assign({},e,{updatePhoto:e.updatePhoto,owner:!e.match.params.userId,profile:e.profile,status:e.status,updateStatus:e.updateStatus,updateProfile:e.updateProfile}))}))}}]);
//# sourceMappingURL=5.4c8e63fc.chunk.js.map