angular.module('siteApp', [])
  .controller('MainCtrl', [function ($scope) {
    var self = this;
    self.name = 'Estevan';
    
    self.posts = [
      {title: 'Conheça o Brackets', content: '3 motivos pelos quais o Brackets É o melhor editor de código para web atualmente.', date: 1423616325833, url: 'post/conheca-brackets.html'}
    ];
  
  }]);