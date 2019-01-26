define(require => {
    const subscriptions = {};

    const subscribe = (topic, callback) => {
        if (!subscriptions.hasOwnProperty(topic)) {
            subscriptions[topic] = [];
        }
        subscriptions[topic].push(callback);
    };

    const unsubscribe = (topic, callback) => {
        if (!topic) {
            return;
        } else if (callback) {
            subscriptions[topic] = subscriptions[topic]
                .filter(cb => cb !== callback);
        }
        if (subscriptions[topic].length === 0 || !callback) {
            delete subscriptions[topic];
        }
    }

    const publish = (topic, data) => {
        if (!subscriptions.hasOwnProperty(topic)) {
            return;
        }
        subscriptions[topic].forEach(callback => callback(data));
    };

    return {
        subscribe,
        unsubscribe,
        publish
    };
});
