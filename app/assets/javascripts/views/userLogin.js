NewsReader.Views.UserLogin = Backbone.View.extend({
  template: JST['users/usersLogin'],
  tagName: 'form',
  events: {
    'submit' : 'submit'
  },

  submit: function(e){
    e.preventDefault();
    var attrs = $(e.target).serializeJSON();
    debugger
    this.model.save(attrs.user, {
      success: function(user){
        this.collection.set(user);
        var url = "#/feeds/";
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
  },

  render: function() {
    var content = this.template({user: this.model});
    this.$el.html(content);

    return this;
  }
})
