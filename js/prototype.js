// Plex Labs Templating
function centerWindow(element) {
  var centerX = $(window).width()/2-element.width()/2;
  var centerY = $(window).height()/2-element.height()/2;
  element.css('left',centerX).css('top',centerY)
}
function spawnWindow(element,event) {
  centerWindow(element);
  element.addClass('visible');
  if (typeof event != 'undefined') { event.stopPropagation(); }
}

templateFunction = {};

template = {};

template.load = function (data,callback) {
  var templateAddress = '#templates ' + data['id'];
  $(templateAddress).clone().appendTo(data.parent);
  if (typeof callback == 'function') { callback(); }
}

//template.process({'element':$(this),'keys':[{'title':'Some title','subhead':'some more subhead'}]})

template.process = function (object,callback) {
  var el          = object['element'];
  var html        = object['template'];
  var subTemplate = html.find('[sub-template]');
  var subKeys      = object.keys[subTemplate.attr('obj')];
  var processedHtml;
  var fn           = html.attr('function');
  if (subTemplate.size() > 0 && typeof subKeys != 'undefined') {
    for (i=0;i<subKeys.length;i++) {
      subTemplateHTML = template.fill({'keys':subKeys[i],'template':subTemplate});
      subTemplate.before(subTemplateHTML);
    }
    subTemplate.hide();
  }
  var processedHtml = template.fill({'keys':object.keys,'template':object.template});
  return processedHtml;
  if (typeof callback == 'function') { callback(processedHtml); }
  
}

template.fill = function (object,callback) {
  var 
      el     = object['template'],
      str    = el.html(),
      keys   = object['keys'],
      output;
  output = str.replace(/{{\s*(.*?)}}/g,function(m,key){
    /* Check for ifs like this
    {{if\s*(.*?)endif}}/g
    */
    if (/^if /.test(key)) { 
      var test = key.replace(/^if /,'');
      if (!keys.hasOwnProperty(test) || !key[test]) { 
        str = str.split('{{' + key + '}}')[0] + str.split('{{' + key + '}}')[1].split('{{endif}}')[1];
      }
    }
    if (keys.hasOwnProperty(key)) { return keys[key]; }
    return '';
  });
  return output;
  if (typeof callback == 'function') { callback(); }
}

template.scan = function() {
  $('[template]').each(function(){
    var 
      templateRef  = $(this),
      templateSrc  = './templates/templates.html',
      templateName = '[template=' + templateRef.attr('template') + ']',
      templateData = $('<div></div>'),
      limit        = templateRef.attr('limit');
      
    function onload(finished,reference) {
      fn = reference.attr('onload');
      if (typeof fn != 'undefined') {
        var fnEach = fn.split(',');
        for (var i=0;i<fnEach.length;i++)
        templateFunction[fnEach[i].replace('()','')](finished);
      }
    }       

    if (templateRef.attr('obj')) { 
      var templateKeys = itemDB[templateRef.attr('obj')];
    }

    if (templateRef.attr('src') != 'undefined') { 
      var templateSrc = templateRef.attr('src');
    }

    templateData.load(templateSrc,function() {
      var templatePre  = templateData.find(templateName);
      if (typeof templateKeys != 'undefined') {
        for (var i=0;i<templateKeys.length;i++) {
          if (i < limit || typeof limit == 'undefined') { 
            templateDone = $(template.process({'template':templatePre,'keys':templateKeys[i],'element':templateRef},function() { onload(templatePre) }));
            templateRef.before(templateDone); 
            onload(templateDone,templateRef);
          }
        }
      }
      else { 
        templateDone = $(templatePre.html()); 
        templateRef.before(templateDone);
        onload(templateDone,templateRef);
      }
      templateRef.remove();
    });
  });
}
$(function(){
  template.scan();
});
/* Needs to be adapted */
/*var templateFile = './templates/items.html';
var templateData = $('<div></div>');
template.run = function (element,limit) {
  $('div[template]').each(function(n){
    var templateRef = $(this);
    var templateName = '[template="' + $(this).attr('template') + '"]';
    var templatePre  = templateData.find(templateName);
    var keys         = itemDB[$(this).attr('obj')];
    for (var i=0;i<keys.length;i++) {
      if (typeof limit != 'undefined') {
        if (i < limit) {
          template.process({'template':templatePre,'keys':keys[i],'element':templateRef});
        }
      }
      else {
        template.process({'template':templatePre,'keys':keys[i],'element':templateRef});
      }
    }
  });
  $('div[' + element + ']').remove();
}*/