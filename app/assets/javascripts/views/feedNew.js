NewsReader.Views.FeedNew = Backbone.View.extend({
  template: JST['feeds/feedNew'],
  events:{
    "submit": "submit"
  },

  tagName: 'form',

  render: function(){
    var content = this.template({feed: this.model});
    this.$el.html(content);

    return this;
  },

  submit: function(e){
    e.preventDefault();
    var attrs = $(e.target).serializeJSON();
    debugger
    this.model.save(attrs.feed, {
      success: function(feed){
        this.collection.add(feed);
        var url = "#/feeds/" + feed.id;
        Backbone.history.navigate(url, {trigger: true});
      }.bind(this),
      error: function(model, response){
        $('.errors').empty();
        response.responseJSON.forEach(function (el) {
          var $li = $('<li></li>');
          $li.text(el);
          $('.errors').append($li);
        }.bind(this))
      }.bind(this)
    });
  }
});
