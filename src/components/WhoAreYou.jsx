import React from 'react';

import Overview from './Overview';
import Question from './Question';
import TopBar from './who-are-you/TopBar';
import BottomBar from './who-are-you/BottomBar';

import {
  isOverview,
  isQuestion,
  isNextButtonDisabled,
} from '../utils';

import { FeedContainer } from '../styles/feed';

// TODO: Too many props

export default function WhoAreYou({
  test, images, selectedAnswer,
  handleClickOption, handleClickNavigation, handleClickSubmit,
}) {
  const {
    id, previousId, nextId, type, content,
  } = test;

  const handleClickAnswer = (answerId) => handleClickOption({
    questionId: id,
    answerId,
  });

  const handleClickBack = () => handleClickNavigation(previousId);

  const handleClickNext = nextId === null
    ? (() => handleClickSubmit())
    : (() => handleClickNavigation(nextId));

  return (
    <FeedContainer>
      <TopBar />
      {
        isOverview(type) && (
          <Overview
            content={content}
            images={images}
          />
        )
      }
      {
        isQuestion(type) && (
          <Question
            content={content}
            images={images}
            selectedAnswer={selectedAnswer}
            handleClickAnswer={handleClickAnswer}
          />
        )
      }
      <BottomBar
        type={type}
        id={id}
        previousId={previousId}
        disabled={isNextButtonDisabled(selectedAnswer, type)}
        handleClickBack={handleClickBack}
        handleClickNext={handleClickNext}
      />
    </FeedContainer>
  );
}
