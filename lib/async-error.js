// 이 함수자체가 콜돼 거기에서 fn  =  asynchor

module.exports = function asyncErrorCatcher(fn) {
  if (!(fn instanceof Function)) {
    throw new Error('Must supply a function');
  }
 // 미들왜어 하나 리턴 그 결과를 하나의 밸류로 받고 프라이스가 에러나면 에러를 하나 넘겨주고 있어
  return (req, res, next) => {
    const promise = fn(req, res, next);
    if (!promise.catch) return;
    //에러나면 여기로 자동으로 가게끔 만들어 놓은거 
    promise.catch(err => next(err));
  };
};