NewsReader.Views.FeedShow = Backbone.View.extend({
  template: JST["feeds/feedShow"],
  events: {
    'click .refresh' : 'refresh'
  },

  initialize: function (options) {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function(){
    var content = this.template({ model: this.model });
    this.$el.html(content);

    return this;
  },

  refresh: function() {
    this.model.fetch();
  }
})
