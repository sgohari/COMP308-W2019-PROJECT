import { TestBed } from '@angular/core/testing';

import { SurveyQuestionsService } from './survey-questions.service';

describe('SurveyQuestionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SurveyQuestionsService = TestBed.get(SurveyQuestionsService);
    expect(service).toBeTruthy();
  });
});
