/**
 * 传统HTML支持RPX工具
 *
 * 使用方法：
 * 1、引入
 * 2、在body之前执行
 *
 * 注意事项：
 * 1、简写的不认（比如border:#f3f3f3 1px solid是不识别的）
 * 2、写的时候要用px，不要用rpx
 * 3、不支持不同源的link
 * 4、只能执行一次，否则会算错
 * 5、不要试图往resize事件里放
 *
 * @author 杨若瑜
 */
 (function () {
  var isReady = false;
  var readyList = [];
  var timer;
  whenDocumentReady = function (fn) {
    if (isReady) fn.call(document);
    else
      readyList.push(function () {
        return fn.call(this);
      });
    return this;
  };
  var onDOMReady = function () {
    for (var i = 0; i < readyList.length; i++) {
      readyList[i].apply(document);
    }
    readyList = null;
  };
  var bindReady = function (evt) {
    if (isReady) return;
    isReady = true;
    onDOMReady.call(window);
    if (document.removeEventListener) {
      document.removeEventListener('DOMContentLoaded', bindReady, false);
    } else if (document.attachEvent) {
      document.detachEvent('onreadystatechange', bindReady);
      if (window == window.top) {
        clearInterval(timer);
        timer = null;
      }
    }
  };

  if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', bindReady, false);
  } else if (document.attachEvent) {
    document.attachEvent('onreadystatechange', function () {
      if (/loaded|complete/.test(document.readyState)) bindReady();
    });

    if (window == window.top) {
      timer = setInterval(function () {
        try {
          isReady || document.documentElement.doScroll('left');
        } catch (e) {
          return;
        }
        bindReady();
      }, 5);
    }
  }
})();

let rpx4html = () => {
  let globalWidth = document.documentElement.clientWidth;
  let perRpx = globalWidth / 750;
  for (let ssi in document.styleSheets) {
    let sheet = document.styleSheets[ssi];
    if (sheet.cssRules) {
      for (let cri in sheet.cssRules) {
        let rule = sheet.cssRules[cri];
        for (let si in rule.style) {
          let name = rule.style[si];
          let value = rule.style[name];
          if (value && value.indexOf('px') > -1 && value.search('^[0-9]+px$') > -1) {
            let num = new Number(value.match('[0-9]+')[0]);
            rule.style[name] = num * perRpx + 'px';
          }
        }
      }
    }
  }
};

whenDocumentReady(rpx4html);

