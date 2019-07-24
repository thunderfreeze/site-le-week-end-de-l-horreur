import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    pastAnswers: [],
    correctAnswers: []
  },
  getters: {
    score: state => state.correctAnswers.length,
    pastAnswers: state => state.pastAnswers,
    correctAnswers: state => state.correctAnswers
  },
  mutations: {
    pastAnswer(state, answerNumber) {
      state.pastAnswers.push(answerNumber);
    },
    correctAnswer(state, answerNumber) {
      state.correctAnswers.push(answerNumber);
    }
  },
  actions: {
    correctAnswer({ commit, state }, answerNumber) {
      answerNumber = parseInt(answerNumber);

      if (!state.pastAnswers.includes(answerNumber)) {
        commit("pastAnswer", answerNumber);
        commit("correctAnswer", answerNumber);
      }
    },
    wrongAnswer({ commit, state }, answerNumber) {
      answerNumber = parseInt(answerNumber);

      if (!state.pastAnswers.includes(answerNumber)) {
        commit("pastAnswer", answerNumber);
      }
    }
  }
});

export default store;
