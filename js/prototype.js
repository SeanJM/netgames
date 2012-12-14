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
template = {};

template.load = function (data,callback) {
  var templateAddress = '#templates ' + data['id'];
  $(templateAddress).clone().appendTo(data.parent);
  if (typeof callback == 'function') { callback(); }
}

//template.process({'element':$(this),'keys':[{'title':'Some title','subhead':'some more subhead'}]})

template.processOLD = function (object,callback) {
  var str = object['id'].html(),
      arr = object['keys'];
  for (var i=0;i<arr.length;i++) {
    str.replace(/{{\s*(.*?)}}/g,function(m,key){
      if (/^if /.test(key)) { 
        var test = key.replace(/^if /,'');
        if (!arr[i].hasOwnProperty(test) || !arr[i][test]) { 
          str = str.split('{{' + key + '}}')[0] + str.split('{{' + key + '}}')[1].split('{{endif}}')[1];
        }
      }
    });
    object['id'].html(str.replace(/{{\s*(.*?)}}/g,function(m,key){
      if (arr[i].hasOwnProperty(key)) { return arr[i][key]; }
      return '';
    }));
  }
  if (typeof callback == 'function') { callback(); }
}
template.process = function (object,callback) {
  var el          = object['element'];
  var html        = object['template'];
  var subTemplate = html.find('[sub-template]');
  var subKeys      = object.keys[subTemplate.attr('obj')];
  var processedHtml;
  if (subTemplate.size() > 0 && typeof subKeys != 'undefined') {
    for (i=0;i<subKeys.length;i++) {
      subTemplateHTML = template.fill({'keys':subKeys[i],'template':subTemplate});
      subTemplate.before(subTemplateHTML);
      console.log('subTemplate');
    }
    subTemplate.remove();
  }
  var processedHtml = template.fill({'keys':object.keys,'template':object.template});
  el.before(processedHtml);
  if (typeof callback == 'function') { callback(); }
}
template.fill = function (object,callback) {
  var 
      el     = object['template'],
      str    = el.html(),
      keys   = object['keys'],
      output;
  output = str.replace(/{{\s*(.*?)}}/g,function(m,key){
    if (/^if /.test(key)) { 
      var test = key.replace(/^if /,'');
      if (!arr[i].hasOwnProperty(test) || !arr[i][test]) { 
        str = str.split('{{' + key + '}}')[0] + str.split('{{' + key + '}}')[1].split('{{endif}}')[1];
      }
    }
  });
  output = str.replace(/{{\s*(.*?)}}/g,function(m,key){
    if (keys.hasOwnProperty(key)) { return keys[key]; }
    return '';
  });
  console.log(object.keys);
  return output;
  if (typeof callback == 'function') { callback(); }
}