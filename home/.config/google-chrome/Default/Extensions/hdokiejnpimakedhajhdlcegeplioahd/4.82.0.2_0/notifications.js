Notifications=function(){var i=null,t=null,s=function(e,t,i){var s;if(t){var n=e.find(".message");if(s=n.text(),"string"==typeof t?""!=s?n.text(s+"   "+Strings.translateString(t)):n.text(Strings.translateString(t)):t instanceof Array&&(n.empty(),n.append(t)),i&&i.text&&i.callback&&"function"==typeof i.callback){var a=s+"   "+Strings.translateString(t)+'<span class="message-retry-button">'+i.text+"</span>",o;n.html(a),e.find(".title").text("");var l=n.find(".message-retry-button"),r=function(){i.callback(),l.off("click",r),n.empty(),c()};l.on("click",r)}e.css("top",0)}},n=function(e,t){s(i,e,t)},e,a=function(e,t){var i;t.css("top",-t.outerHeight()),t.find(".message").empty(),e&&(e.stopPropagation(),e.preventDefault())},c=function(e){a(e,i)},o=function(e){a(e,_alertNotification)},l=function(e){a(e,t)},r=null,g=function(e){s(t,e),clearTimeout(r),r=setTimeout(function(){l()},3e3)},d=function(e){var t=["notification"].concat(LPTools.getOption(e,"additionalClasses",[])),i=LPTools.createElement("div",{class:t.join(" "),id:e.id,role:"alert","aria-atomic":"true"}),s="undefined"!=typeof dialogs&&void 0!==dialogs.baseURL?dialogs.baseURL:"",n=LPTools.createElement("div","messageCell");n.appendChild(LPTools.createElement("img",{src:s+e.img})),n.appendChild(LPTools.createElement("span","title",e.title)),n.appendChild(LPTools.createElement("span","message")),i.appendChild(n);var a=LPTools.createElement("div",{class:"close midToneHover",title:Strings.translateString("Close")});return a.appendChild(LPTools.createElement("img",{src:s+e.closeImg})),LPPlatform.addEventListener(a,"click",e.closeHandler),i.appendChild(a),document.body.appendChild(i),$(i)},p;return{displayErrorMessage:n,displaySuccessMessage:g,displayAlertMessage:function(e,t){s(_alertNotification,e,t)},closeAlertMessage:o,initialize:function(e){i=d($.extend(e,{id:"errorMessage",img:"images/vault_4.0/Error.png",title:Strings.translateString("ERROR")+": ",closeImg:"images/vault_4.0/Error_Close.png",closeHandler:c})),_alertNotification=d($.extend(e,{id:"alertMessage",img:"images/vault_4.0/Error.png",closeImg:"images/vault_4.0/Error_Close.png",closeHandler:o})),t=d($.extend(e,{id:"successMessage",img:"images/vault_4.0/Success.png",title:Strings.translateString("SUCCESS")+"! ",closeImg:"images/vault_4.0/Success_Close_v2.png",closeHandler:l})),Topics.get(Topics.ERROR).subscribe(function(e){n(e)}),Topics.get(Topics.SUCCESS).subscribe(function(e){g(e)}),Topics.get(Topics.REQUEST_START).subscribe(function(){c()}),Topics.get(Topics.DIALOG_CLOSE).subscribe(function(){c()})}}}();