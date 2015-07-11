define(['vendor/jquery', 'vendor/underscore-min', 'vendor/moment.min', 'app/response', 'text!templates/topic.tmpl'],
  function($, _, moment, response, topicTmpl) {

  function attachHandlers() {
    $('.topic>.header').on('click', function(event) {
      $(this).parent().toggleClass('collapsed');
    });
  }
  
  return {
    render: function(topics) {
      var discussionList = $('#discussion-list');
      var compiledTopicTmpl = _.template(topicTmpl);

      _.each(topics, function(topic) {
        topic.responseCount = topic.responses.length - 1;
        topic.topicAuthor = topic.responses[0].author;
        topic.age = moment().subtract(topic.responses[0].age, 'seconds').fromNow();
        topic.description = topic.responses[0].posttext;

        var topicNode = $(compiledTopicTmpl(topic));

        // add responses
        response.render(_.rest(topic.responses), $(topicNode).find('.content'));

        $(discussionList).append(topicNode);
      });

      attachHandlers();
    }
  }

});