define(['vendor/jquery', 'vendor/underscore-min', 'text!templates/topic.tmpl'], function($, _, topicTmpl) {
  return {
    render: function(topics) {
      var discussionList = $('#discussion-list');
      var compiledTopicTmpl = _.template(topicTmpl);

      _.each(topics, function(topic) {
        topic.responseCount = topic.responses.length;
        var topicNode = $(compiledTopicTmpl(topic));
        $(discussionList).append(topicNode);
      });
    }
  }

});