var api={handle:function(e,s,t){var c=e.fn,n=this;c&&("domainSearch"==c&&n.domainSearch(e.domain,function(e,s,c){e&&e.leads?t({leads:e.leads,count:s.count,industry:s.industry,name:s.name,logo:s.logo,city:s.city,country:s.country,area:s.geo_area}):t(c?{leads:[],quota:!0}:{leads:[]})}),"getAccount"==c&&n.getAccount(function(e){t(e)}),"getCompany"==c&&n.getCompany(e.id,function(e){t(e)}),"getDomain"==c&&n.getDomain(e.cn,function(e){t(e)}),"saveCompany"==c&&n.saveCompany(e.company),"saveCompanyCL"==c&&n.saveCompany(e.company,function(e){t(e)},function(){t()}),"saveLeads"==c&&n.saveLeads(e.listId,e.listName,e.elog,e.leads,function(e){t(e)},function(){t()}),"incrementCredit"==c&&n.incrementCredit())},domainSearch:function(t,o){chrome.storage.sync.get("accessKey",function(n){var s,c,e;n&&n.accessKey&&""!==n.accessKey?(s=n.accessKey,c=function(c){var e,s,t;c&&c.suggestions&&0<c.suggestions.length?(e=c.suggestions[0].lid,s=n.accessKey,t=function(e,s){o(e,c.suggestions[0],s)},e=consts.baseLWHUrl+"domain/search?cid="+e+"&ctx=ext",$.ajax({url:e,type:"GET",timeout:consts.httpTimeout,error:function(e){t(!1,403==e.status)},beforeSend:function(e){e.setRequestHeader("X-Access-Key",s)},success:t})):o()},e=consts.baseLWHUrl+"domain/suggest?kw="+t,$.ajax({url:e,type:"GET",timeout:consts.httpTimeout,error:function(){c(!1,!0)},beforeSend:function(e){e.setRequestHeader("X-Access-Key",s)},success:function(e){c(e)}})):o()})},getCompany:function(e,c){var t;chrome.storage.sync.get("accessKey",function(s){s&&s.accessKey&&""!==s.accessKey?(t=consts.baseAPIUrl+consts.findCompanyAPIUrl+"?id="+e,$.ajax({url:t,type:"GET",timeout:consts.httpTimeout,error:function(){c()},beforeSend:function(e){e.setRequestHeader("X-Access-Key",s.accessKey)},success:c})):c()})},getDomain:function(e,c){var t;chrome.storage.sync.get("accessKey",function(s){s&&s.accessKey&&""!==s.accessKey?(t=consts.baseAPIUrl+consts.findDomainAPIUrl+"?cn="+encodeURIComponent(e||""),$.ajax({url:t,type:"GET",timeout:consts.httpTimeout,error:function(){c()},beforeSend:function(e){e.setRequestHeader("X-Access-Key",s.accessKey)},success:c})):c()})},getAccount:function(c){var e;chrome.storage.sync.get("accessKey",function(s){s&&s.accessKey&&""!==s.accessKey?(e=consts.accountAPIUrl,$.ajax({url:e,type:"GET",timeout:consts.httpTimeout,error:function(){c()},beforeSend:function(e){e.setRequestHeader("X-Access-Key",s.accessKey)},success:function(e){c(e)}})):c()})},saveLeads:function(e,s,c,t,n,o){var a=consts.loadLeadsAPIUrl.replace(":listId",e),i={listName:s,leads:t};c&&(i.elog=c),chrome.storage.sync.get("accessKey",function(s){s&&s.accessKey&&""!==s.accessKey?$.ajax({url:a,type:"POST",timeout:consts.httpTimeout,contentType:"application/json",data:JSON.stringify(i),error:o,beforeSend:function(e){e.setRequestHeader("X-Access-Key",s.accessKey)},success:n}):o()})},incrementCredit:function(){var e=consts.incrementAPIUrl;chrome.storage.sync.get("accessKey",function(s){s&&s.accessKey&&""!==s.accessKey&&$.ajax({url:e,type:"GET",timeout:consts.httpTimeout,contentType:"application/json",beforeSend:function(e){e.setRequestHeader("X-Access-Key",s.accessKey)}})})}};