import question from '../data/question'

exports.getAnswer = (res) => {
    res.send(question)
}

exports.URL = "/"