// 몽구스를 받아서 그 스키마를 받아서 정의함
var mongoose = require('mongoose'),
    mongoosePaginate = require('mongoose-paginate'),
    Schema = mongoose.Schema;

var schema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  title: {type: String, trim: true, required: true},
  content: {type: String, trim: true, required: true},
  contest_period: {type: String, trim: true, required: true},
  test_object: {type: String, trim: true, required: true},
  staff: {type: String, trim: true, required: true},
  tel: {type: String, trim: true, required: true},
  tags: [String],
  numLikes: {type: Number, default: 0},
  numAnswers: {type: Number, default: 0},
  numReads: {type: Number, default: 0},
  createdAt: {type: Date, default: Date.now},
}, {
  toJSON: { virtuals: true},
  toObject: {virtuals: true}
});
schema.plugin(mongoosePaginate);
// 이걸로 questions 라는 몽고디비가 생김
var Question = mongoose.model('Question', schema);

module.exports = Question;
