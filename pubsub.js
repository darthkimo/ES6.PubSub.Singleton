/**
 * PubSub (publish/subscribe) Singleton Class
 */
class PubSub {
  /**
   * PubSub initialization.
   */
  constructor() {
    /**
     * Storage for topics_ that can be broadcast or listened to
     * @private
     * @type {Object}
     */
    this.topics_ = {};
  }

  /**
   *  Subscribe to events of interest with a specific topic name and
   *  a callback function, to be executed when the topic/event is observed
   * @public
   * @param {string} topic
   * @param {function} callback
   * @return {Symbol} token
   */
  subscribe(topic, callback) {
    if (!this.topics_[topic]) {
      this.topics_[topic] = [];
    }
    // eslint-disable-next-line no-plusplus
    const token = Symbol('id');
    this.topics_[topic].push({
      token: token,
      callback: callback,
    });
    return token;
  }

  /**
   * Publish or broadcast events of interest with a specific topic name
   * and arguments such as the data to pass along
   * @public
   * @param {string} topic
   * @param {*} [args]
   * @return {PubSub|boolean}
   */
  publish(topic, args) {
    if (!this.topics_[topic]) {
      return false;
    }
    const subscribers = this.topics_[topic];
    let len = subscribers ? subscribers.length : 0;
    // eslint-disable-next-line no-plusplus
    while (len--) {
      subscribers[len].callback(topic, args);
    }
    return this;
  }

  /**
   * Unsubscribe from a specific topic, based on a tokenized reference
   * to the subscription
   * @public
   * @param {string} token
   * @return {PubSub|string}
   */
  unsubscribe(token) {
    for (const topic in this.topics_) {
      if (this.topics_[topic]) {
        this.topics_[topic].forEach((topic, i) => {
          if (topic.token === token) {
            this.topics_[topic].splice(i, 1);
            return token;
          }
        });
      }
    }
    return this;
  }

  /**
   * Get current subscribed topics list
   * @public
   * @return {Object}
   */
  getTopics() {
    return this.topics_;
  }
}

export default new PubSub;
