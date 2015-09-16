var events = require('events');
var eventEmitter = new events.EventEmitter();

 var listner1 = function listner1() {
    console.log('监听器 listner1 执行。');
    }
    var listner2 = function listner2() {
      console.log('监听器 listner2 执行。');
      }
      eventEmitter.addListener('connection', listner1);
      eventEmitter.on('connection', listner2);
      var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
      console.log(eventListeners + " 监听器监听连接事件。");
      eventEmitter.emit('connection');
      eventEmitter.removeListener('connection', listner1);
      console.log("listner1 不再受监听。");
      eventEmitter.emit('connection');
      eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
      console.log(eventListeners + " 监听器监听连接事件。");

      console.log("程序执行完毕。");
