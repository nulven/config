function showkeyboard(){var e;$("#virtualkeyboard").is(":visible")?($("#virtualkeyboard").slideUp(100),$("#loginDialog")&&$("#loginDialog").removeClass("keyboard")):($("#virtualkeyboard").slideDown(100),$("#loginDialog")&&$("#loginDialog").addClass("keyboard")),$("#email")?""==$("#email").val()?$("#email").select():$("#password").select():""==$("#loginDialogEmail").val()?$("#loginDialogEmail").select():$("#loginDialogPassword").select()}$(function(){var e=window.SimpleKeyboard.default,a,n=!1,i=new e({onChange:function(e){return onChange(e)},onKeyPress:function(e){return l(e)},physicalKeyboardHighlight:!0});onInputFocus=function(e){a="#".concat(e.target.id),i.setOptions({inputName:e.target.id})};var o=document.querySelectorAll("input"),t;for(t=0;t<o.length;t++)o[t].addEventListener("focus",onInputFocus);function l(e){var o=a||"input";i.setInput(document.querySelector(o).value),n&&(n=!1,u()),"{shift}"===e&&(n=!n),"{shift}"!==e&&"{lock}"!==e||u()}function u(){var e,o="default"===i.options.layoutName?"shift":"default";i.setOptions({layoutName:o})}onChange=function(e){var o=a||"input";document.querySelector(o).value=e}});