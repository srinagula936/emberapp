import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		sayHello: function(){
			alert('Hello!');
		},
		toggleBody: function(){
			this.toggleProperty('isShowingBody');
		},
		submitAction: function(){
			alert(this.get('name1'));
			alert(this.get('comment1'));
		}
	},
	title: 'My Blog Post',
	body: 'This is the body of My Blog Post',
	authors: ['William', 'Robert', 'Michelle'],
	comments: [
		{
			name: 'Mike',
			comment: 'THanks for great post'
		},
		{
			name: 'John',
			comment: 'THanks for great post john'
		},
		{
			name: 'Tod',
			comment: 'THanks for great post Tod'
		}
	]
});
