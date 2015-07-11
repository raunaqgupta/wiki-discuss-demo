define(['vendor/jquery', 'vendor/underscore-min', 'app/response', 'text!templates/topic.tmpl'],
  function($, _, response, topicTmpl) {
  
  return {
    render: function(topics) {
      var discussionList = $('#discussion-list');
      var compiledTopicTmpl = _.template(topicTmpl);

      _.each(topics, function(topic) {
        topic.responseCount = topic.responses.length;
        var topicNode = $(compiledTopicTmpl(topic));

        // add responses
        response.render(topic.responses, topicNode);

        $(discussionList).append(topicNode);
      });
    }
  }

});