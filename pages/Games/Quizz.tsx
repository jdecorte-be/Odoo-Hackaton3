import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await fetch(
        'https://api.openquizzdb.org/?key=Z6A994G64D&choice=4&anec=1'
      );
      const data = await response.json();

      if (Array.isArray(data.results) && data.results.length > 0) {
        setShuffledQuestions(data.results);
      } else {
        console.error('No results or unexpected data structure:', data);
      }
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

    const handleAnswerButtonClick = (selectedAnswer) => {
        const currentQuestionData = shuffledQuestions[currentQuestion];
        const isCorrect = currentQuestionData.reponse_correcte === selectedAnswer;
        
        if (isCorrect) {
            setScore(score + 1);
        }
        
        if (currentQuestion === shuffledQuestions.length - 1 || score === 4) {
            setShowScore(true); // Show final score when all questions are answered or score reaches 4
            resetQuiz();
        } else {
            setCurrentQuestion(currentQuestion + 1); // Move to the next question if not the end
        }
        };
      

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    fetchQuestions();
  };

  const currentQuestionData = shuffledQuestions[currentQuestion];
  const i = 0;
  return (
    <View style={styles.container}>
        {showScore ? (
        <View style={styles.scoreContainer}>
            <Text style={styles.scoreText}>Your Score: {score} / {shuffledQuestions.length}</Text>
            {[...Array(5)].map((_, i) => (
            <TouchableOpacity key={i} style={styles.button} onPress={resetQuiz}>
                <Text style={styles.buttonText}>Restart Quiz</Text>
            </TouchableOpacity>
            ))}
            <Text>{"\n"}</Text>
            <Text style={styles.scoreText}>The answer: {currentQuestionData.reponse_correcte}</Text>
        </View>
      ) : (
        <View style={styles.quizContainer}>
          <Text style={styles.questionText}>
            {shuffledQuestions[currentQuestion]?.question}
          </Text>
          {shuffledQuestions[currentQuestion]?.autres_choix.map((choice, index) => (
            <TouchableOpacity
              key={index}
              style={styles.choiceButton}
              onPress={() => handleAnswerButtonClick(choice)}
            >
              <Text style={styles.choiceButtonText}>{choice}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5', // Light gray background
  },
  scoreContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  scoreText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333', // Dark text for contrast
  },
  quizContainer: {
    width: '80%', // Set width for quiz container
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionText: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  choiceButton: {
    backgroundColor: '#007AFF', // Primary color for choice buttons
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    width: '100%', // Full width within container
    alignItems: 'center',
  },
  choiceButtonText: {
    color: 'white',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#28A745', // Green color for restart button
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default QuizApp;
