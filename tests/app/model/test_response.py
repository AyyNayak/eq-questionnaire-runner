from app.model.response import Response
import unittest
import json


class ResponseModelTest(unittest.TestCase):
    def test_basics(self):
        response = Response()

        response.id = 'some-id'
        response.label = 'my response object'
        response.guidance = 'fill this in'
        response.type = 'some-type'
        response.code = 'code'
        response.container = None

        self.assertEquals(response.id, 'some-id')
        self.assertEquals(response.label, 'my response object')
        self.assertEquals(response.guidance, 'fill this in')
        self.assertEquals(response.type, 'some-type')
        self.assertEquals(response.code, 'code')
        self.assertIsNone(response.container)

    def test_to_json(self):
        response = Response()

        response.id = 'some-id'
        response.label = 'my response object'
        response.guidance = 'fill this in'
        response.type = 'some-type'
        response.code = 'code'
        response.messages['message1'] = "Message One"
        response.messages['message2'] = "Message Two"

        # convert the dict to json, then into an dict again
        json_str = json.dumps(response.to_json())
        json_obj = json.loads(json_str)

        # import pdb
        # pdb.set_trace()

        self.assertEquals(json_obj['id'], response.id)
        self.assertEquals(json_obj['label'], response.label)
        self.assertEquals(json_obj['guidance'], response.guidance)
        self.assertEquals(json_obj['type'], response.type)
        self.assertEquals(json_obj['q_code'], response.code)
        self.assertIn("messages", json_obj['validation'])
        self.assertEquals(len(json_obj['validation']['messages']), 2)

    def test_equivalence(self):
        response1 = Response()

        response1.id = 'some-id'
        response1.label = 'my response object'
        response1.guidance = 'fill this in'
        response1.type = 'some-type'
        response1.code = 'code'
        response1.messages['message1'] = "Message One"
        response1.messages['message2'] = "Message Two"

        response2 = Response()

        response2.id = 'some-id'
        response2.label = 'my response object'
        response2.guidance = 'fill this in'
        response2.type = 'some-type'
        response2.code = 'code'
        response2.messages['message1'] = "Message One"
        response2.messages['message2'] = "Message Two"

        self.assertEquals(response1, response2)
