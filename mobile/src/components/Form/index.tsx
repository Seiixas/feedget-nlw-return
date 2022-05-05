import React, { useState } from 'react';
import {
  View,
  TextInput,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';
import { ArrowLeft } from 'phosphor-react-native';
import { captureScreen } from 'react-native-view-shot';

import * as FileSystem from 'expo-file-system';

import { styles } from './styles';
import { theme } from '../../theme';
import { ScreenshotButton } from '../ScreenshotButton';
import { Button } from '../Button';

import { feedbackTypes } from '../../utils/feedbackTypes';

import { FeedbackType } from '../Widget';
import { api } from '../../libs/api';

interface Props {
  feedbackType: FeedbackType;
  onFeedbackCanceled: () => void;
  onFeedbackSent: () => void;
}

export function Form({ feedbackType, onFeedbackCanceled, onFeedbackSent }: Props) {
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);
  const [screenshot, setScreenshot] = useState<string | null>(null); 
  const [comment, setComment] = useState<string>('');
 
  const feedbackTypeInfo = feedbackTypes[feedbackType];

  function handleScreenshot() {
    captureScreen({
      format: 'jpg',
      quality: 0.1
    })
    .then(uri => setScreenshot(uri))
    .catch(error => console.error(error))
  }

  function handleRemoveScreenshot() {
    setScreenshot(null);
  }

  async function handleSubmitFeedback() {
    if (isSendingFeedback) {
      return;
    }

    setIsSendingFeedback(true);
    const screenshotBase64 = screenshot && await FileSystem.readAsStringAsync(screenshot, { encoding: 'base64' });

    try {
      await api.post('/feedbacks', {
        type: feedbackType,
        screenshot: `data:image/png;base64, ${screenshotBase64}`,
        comment
      });

      onFeedbackSent();
    } catch(err) {
      console.log(err);
      setIsSendingFeedback(false);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onFeedbackCanceled}>
          <ArrowLeft 
            size={24}
            weight="bold"
            color={theme.colors.text_secondary} />
        </TouchableOpacity>

        <View style={styles.titleContainer}>

          <Image
            source={feedbackTypeInfo.image}
            style={styles.image} />

          <Text style={styles.titleText}>
            {feedbackTypeInfo.title}
          </Text>
          
        </View>

      </View>

      <TextInput
        autoCorrect={false}
        multiline
        style={styles.input}
        onChangeText={setComment}
        placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com mais detalhes o que está acontecendo"
        placeholderTextColor={theme.colors.text_secondary} />

      <View style={styles.footer}>
        <ScreenshotButton 
          onTakeShot={handleScreenshot}
          onRemoveShot={handleRemoveScreenshot}
          screenshot={screenshot} />
        <Button 
          isLoading={isSendingFeedback}
          onPress={handleSubmitFeedback} />
      </View>
    </View>
  );
}