var api={domainSearch:function(n,e){chrome.runtime.sendMessage({fn:"domainSearch",domain:n},function(n){e(n)})},saveCompany:function(n){chrome.runtime.sendMessage({fn:"saveCompany",company:n})},saveCompanyCL:function(n,e){chrome.runtime.sendMessage({fn:"saveCompanyCL",company:n},function(n){e(n)})},getCompany:function(n,e){chrome.runtime.sendMessage({fn:"getCompany",id:n},function(n){e(n)})},getDomain:function(n,e){chrome.runtime.sendMessage({fn:"getDomain",cn:n},function(n){e(n)})},getAccount:function(e,o){chrome.runtime.sendMessage({fn:"getAccount"},function(n){n?e(n):"function"==typeof o&&o()})},saveLeads:function(n,e,o,t,i,a){chrome.runtime.sendMessage({fn:"saveLeads",listId:n,listName:e,elog:o,leads:t},function(n){n?i(n):"function"==typeof a&&a()})},incrementCredit:function(){chrome.runtime.sendMessage({fn:"incrementCredit"})}};