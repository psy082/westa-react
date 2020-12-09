const validation = (() => {
  let conditions = [];

  return class {
    static min(minLength) {
      conditions.push((v) => v.length >= minLength);
      return this;
    }

    static max(maxLength) {
      conditions.push((v) => v.length <= maxLength);
      return this;
    }

    static contains(word) {
      conditions.push((v) => v.includes(word));
      return this;
    }

    static done() {
      let result = [...conditions];
      conditions = [];
      return result;
    }

    static validate(config, properties) {
      let result = true;
      console.log(properties);
      for (const [property, value] of Object.entries(properties)) {
        for (const f of config[property]) {
          result = result && f(value);
        }
      }
      return result;
    }
  };
})();

export default validation;
