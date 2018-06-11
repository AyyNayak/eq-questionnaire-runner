const helpers = require('../../../helpers');

describe('Feature: Use of Titles in Repeating blocks', function() {
  var HouseholdCompositionPage = require('../../../pages/features/conditional_question_title/repeating_blocks/household-composition.page');
  var WhoIsAnsweringPage = require('../../../pages/features/conditional_question_title/repeating_blocks/who-is-answering-block.page');
  var Page1 = require('../../../pages/features/conditional_question_title/repeating_blocks/repeating-block-1.page');
  var Page3 = require('../../../pages/features/conditional_question_title/repeating_blocks/repeating-block-3.page');

  beforeEach(function() {
      return helpers.openQuestionnaire('test_titles_within_repeating_blocks.json');
  });

  describe('Given I start the survey with a repeating block', function() {
    it('When I enter an  names I should see those names in the title of a subsequent questions', function() {
      return browser
        .setValue(HouseholdCompositionPage.answer(),'FirstPerson')
        .click(HouseholdCompositionPage.addPerson())
        .setValue(HouseholdCompositionPage.answer('_1'),'SecondPerson')
        .click(HouseholdCompositionPage.submit())
        .getText(WhoIsAnsweringPage.questionText()).should.eventually.contain('Who is FirstPerson answering on behalf of?')
        .click(WhoIsAnsweringPage.chad())
        .click(WhoIsAnsweringPage.submit())
        .getText(Page1.answerLabel()).should.eventually.contain('What is their age difference to chad?')
        .setValue(Page1.answer(),'1')
        .click(Page1.submit())
        .getText(Page3.questionText()).should.eventually.contain('Please confirm FirstPerson’s age difference to Chad is 1')
        .click(Page3.yes())
        .click(Page3.submit())
        .getText(WhoIsAnsweringPage.questionText()).should.eventually.contain('Who is SecondPerson answering on behalf of?')
        .click(WhoIsAnsweringPage.kelly())
        .click(WhoIsAnsweringPage.submit())
        .getText(Page1.answerLabel()).should.eventually.contain('What is their age difference to kelly?')
        .setValue(Page1.answer(),'5')
        .click(Page1.submit())
        .getText(Page3.questionText()).should.eventually.contain('Please confirm SecondPerson’s age difference to Kelly is 5')
        .click(Page3.yes())
        .click(Page3.submit());
    });
  });
});
