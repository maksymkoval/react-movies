(this["webpackJsonpreactwarriors-workshop"]=this["webpackJsonpreactwarriors-workshop"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),c=a(6),o=a.n(c),s=a(7),i=a(1),r=a(2),m=a(4),u=a(3),v=function(e){var t=e.sort_by,a=e.updateSortBy,l=function(e){return function(){return a(e)}},c=function(e){return"nav-link ".concat(t===e?"active":"")};return n.a.createElement("div",null,n.a.createElement("ul",{className:"tabs nav nav-pills"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("div",{className:c("popularity.desc"),onClick:l("popularity.desc")},"Popularity desc")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("div",{className:c("revenue.desc"),onClick:l("revenue.desc")},"Revenue desc")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("div",{className:c("vote_average.desc"),onClick:l("vote_average.desc")},"Vote Average desc"))))},d=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var l=arguments.length,n=new Array(l),c=0;c<l;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={willWatch:!1},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.data,l=t.deleteMovie,c=t.addMovieToWillWatch,o=t.deleteMovieFromWillWatch;return n.a.createElement("div",{className:"card"},n.a.createElement("img",{className:"card-img-top",src:"https://image.tmdb.org/t/p/w500".concat(a.backdrop_path||a.poster_path),alt:""}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h6",{className:"card-title"},a.title),n.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},n.a.createElement("p",{className:"mb-0"},"Rating: ",a.vote_average),this.state.willWatch?n.a.createElement("button",{type:"button",className:"btn btn-success",onClick:function(){e.setState({willWatch:!1}),o(a)}},"Will Watch"):n.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){e.setState({willWatch:!0}),c(a)}},"Will Watch")),n.a.createElement("button",{type:"button",onClick:function(){l(a)}},"Delete")))}}]),a}(n.a.Component),p=function(e){var t=e.pages,a=e.total_page;e.updatePage;return n.a.createElement("div",null,n.a.createElement("button",null,t),n.a.createElement("button",null,a),n.a.createElement("button",null,"next"),n.a.createElement("button",null,"prev"))},h=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).deleteMovie=function(t){console.log(t.id);var a=e.state.movies.filter((function(e){return e.id!==t.id}));console.log(a),e.setState({movies:a})},e.addMovieToWillWatch=function(t){var a=Object(s.a)(e.state.moviesWillWatch);a.push(t),e.setState({moviesWillWatch:a})},e.deleteMovieFromWillWatch=function(t){var a=e.state.moviesWillWatch.filter((function(e){return e.id!==t.id}));e.setState({moviesWillWatch:a})},e.updateSortBy=function(t){e.setState({sort_by:t})},e.state={movies:[],moviesWillWatch:[],sort_by:"popularity.desc",page:"",total_page:""},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"getMovies",value:function(){var e=this;fetch("".concat("https://api.themoviedb.org/3","/discover/movie?api_key=").concat("1cb065e41d335794cfb1ff6a261c76bd","&sort_by=").concat(this.state.sort_by,"&page=").concat(this.state.page)).then((function(e){return console.log(e),e.json()})).then((function(t){console.log(t),console.log(t.results),e.setState({movies:t.results,page:t.page,total_page:t.total_pages}),console.log(e.state)}))}},{key:"componentDidUpdate",value:function(e,t){console.log("didupdate"),console.log(e,t),console.log(this.props,this.state),t.sort_by!==this.state.sort_by&&this.getMovies()}},{key:"render",value:function(){var e=this;return console.log("render",this),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row mt-4"},n.a.createElement("div",{className:"col-9"},n.a.createElement("div",{className:"row mb-4"},n.a.createElement(v,{sort_by:this.state.sort_by,updateSortBy:this.updateSortBy})),n.a.createElement("div",{className:"row"},this.state.movies.map((function(t){return n.a.createElement("div",{className:"col-6 mb-4",key:t.id},n.a.createElement(d,{data:t,deleteMovie:e.deleteMovie,addMovieToWillWatch:e.addMovieToWillWatch,deleteMovieFromWillWatch:e.deleteMovieFromWillWatch}))})))),n.a.createElement("div",{className:"col-3"},n.a.createElement("h4",null,"Will Watch: ",this.state.moviesWillWatch.length," movies"),n.a.createElement("p",null,"pagination: ",this.state.page),n.a.createElement("ul",{className:"list-group"},this.state.moviesWillWatch.map((function(e){return n.a.createElement("li",{key:e.id,className:"list-group-item"},n.a.createElement("div",{className:"d-flex justify-content-between"},n.a.createElement("p",null,e.title),n.a.createElement("p",null,e.vote_average)))})))),n.a.createElement(p,{pages:this.state.page,total_page:this.state.total_page,updatePage:this.updatePage})))}}]),a}(n.a.Component);a(13),a(14);o.a.render(n.a.createElement(h,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.ca31ea23.chunk.js.map