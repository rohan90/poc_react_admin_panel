class Log {
  static info = (dump, ...object) => {
    console.log(dump, ...object);
  };
}
export default Log;
