import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const questions = [
  {
    question: '¿Cuál es tu transporte más frecuente?',
    options: ['Autobús', 'Metro', 'Transportes Articulados', 'Taxi/Uber'],
  },
  {
    question: '¿Cuál es tu tipo de ruta más frecuente?',
    options: ['Urbana', 'Autopistas', 'Intercontonal'],
  },
  {
    question: '¿Qué horario es más conflictivo en tu día a día?',
    options: ['Mañana', 'Mediodía', 'Tarde', 'Noche'],
  },
  {
    question: '¿Cuántas veces al día utiliza el transporte público?',
    options: ['1-2', '3-5', 'Más de 5 veces'],
  },
];

export default function SurveyScreen({ setSurveyCompleted }) {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState(null);
  const navigation = useNavigation();

  const handleNext = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
      setSelected(null);
    } else {
      setSurveyCompleted(true);
      navigation.reset({
        index: 0,
        routes: [{ name: 'MainTabs' }],
      });
    }
  };

  const current = questions[step];
  const progress = (step + 1) / questions.length;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Responde las preguntas por favor</Text>
      <View style={styles.card}>
        <Text style={styles.question}>{current.question}</Text>
        {current.options.map((option, idx) => (
          <TouchableOpacity
            key={idx}
            style={[
              styles.option,
              selected === idx && styles.optionSelected,
            ]}
            onPress={() => setSelected(idx)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: selected !== null ? '#E65100' : '#ccc' },
          ]}
          onPress={handleNext}
          disabled={selected === null}
        >
          <Text style={styles.buttonText}>
            {step < questions.length - 1 ? 'Continuar' : 'Finalizar'}
          </Text>
        </TouchableOpacity>
        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBar, { width: `${progress * 100}%` }]} />
        </View>
      </View>
      <Text style={styles.version}>Versión 1.0.0</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00665A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 24,
    width: '90%',
    alignItems: 'center',
    elevation: 4,
    marginBottom: 30,
  },
  question: {
    color: '#E65100',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  option: {
    backgroundColor: '#757575',
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginBottom: 12,
    width: '100%',
    alignItems: 'center',
  },
  optionSelected: {
    backgroundColor: '#E65100',
  },
  optionText: {
    color: '#fff',
    fontSize: 15,
  },
  button: {
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginTop: 16,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  progressBarContainer: {
    height: 8,
    width: '100%',
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    marginTop: 24,
    marginBottom: 8,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#00C853',
    borderRadius: 4,
  },
  version: {
    color: '#fff',
    fontSize: 12,
    position: 'absolute',
    bottom: 16,
    alignSelf: 'center',
  },
});