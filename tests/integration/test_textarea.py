import json
from tests.integration.integration_test_case import IntegrationTestCase

with open('tests/fixtures/blns.json') as blns:
    NAUGHTY_STRINGS = json.load(blns)

class TestTextArea(IntegrationTestCase):


    def test_empty_submission(self):
        self.launchSurvey('test', 'textarea')
        self.post(action='save_continue')

        self.assertInPage('No answer provided')

        self.post(action=None)
        self.assertInUrl('thank-you')


    def test_too_many_characters(self):
        self.launchSurvey('test', 'textarea')
        self.post({'answer': 'This is longer than twenty characters'})

        self.assertInPage('Your answer has to be less than 20 characters')

    def test_acceptable_submission(self):
        self.launchSurvey('test', 'textarea')
        self.post({'answer': 'Less than 20 chars'})

        self.assertInPage('Less than 20 chars')

        self.post(action=None)
        self.assertInUrl('thank-you')

    def test_big_list_of_naughty_strings(self):
        self.launchSurvey('test', 'big_list_naughty_strings')

        answers = {}
        for i in range(0, len(NAUGHTY_STRINGS)):
            k = 'answer{}'.format(i)
            answers[k] = NAUGHTY_STRINGS[i]

        self.post(answers)
        self.assertInUrl('summary')
        self.assertEqual(200, self.last_response.status_code)