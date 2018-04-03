import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNames  : ['four wide  speaker column'],
  socialLinks : computed(function() {
    return this.get('speaker').getProperties('twitter', 'facebook', 'github', 'linkedin');
  })
});
