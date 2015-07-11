define(['vendor/jquery', 'vendor/underscore-min', 'vendor/moment.min', 'text!templates/response.tmpl'],
  function($, _, moment, responseTmpl) {

  function showReplyNode() {
    $(this).parents('.response').find('.input').toggleClass('show');
  }

  function saveReply() {
    alert('TODO');
  }
  
  return {
    render: function(responses, topicNode) {
      var compiledResponseTmpl = _.template(responseTmpl);

      _.each(responses, function(response, index, list) {
        response.age = moment().subtract(response.age, 'seconds').fromNow();
        var responseNode = $(compiledResponseTmpl(response));
        
        $(responseNode).css('margin-left', response.depth*23);

        var prDepth = index > 0 ? list[index-1].depth : 0;
        if(index > 0 && response.depth < prDepth) {
          $(responseNode).css('margin-top', 15);
        }

        $(responseNode).find('.reply-button').on('click', showReplyNode);
        $(responseNode).find('.cancel').on('click', showReplyNode);
        $(responseNode).find('.submit').on('click', saveReply);

        $(topicNode).append(responseNode);
      });
    }
  }

});