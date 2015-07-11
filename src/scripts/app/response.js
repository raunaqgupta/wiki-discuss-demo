define(['vendor/jquery', 'vendor/underscore-min', 'text!templates/response.tmpl'], function($, _, responseTmpl) {
  return {
    render: function(responses, topicNode) {
      var compiledResponseTmpl = _.template(responseTmpl);

      _.each(responses, function(response) {
        var responseNode = $(compiledResponseTmpl(response));
        $(topicNode).append(responseNode);
      });
    }
  }

});