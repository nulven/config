var skhttp={handle:function(t,e,n){var o,r,u,c,a,s=t.rurl,i=t.urlDecode,t=t.method;o=s,r=i,u=t,c=function(t){n(t)},a=500*Math.random()+500,setTimeout(function(){$.ajax({url:o,type:u,timeout:consts.httpTimeout,error:function(){callback()},beforeSend:function(t){r&&t.setRequestHeader("csrf-token",r)},success:c})},a)}};